const Hapi = require("@hapi/hapi");
const Joi = require("joi");
const inert = require("@hapi/inert");
const path = require("path");
const fs = require("fs");
const sequelize = require("./db");
const destinations = require("./models/destinasi");
const events = require("./models/event");
const kuliners = require("./models/kuliner");

const init = async () => {
  const server = Hapi.server({
    port: 3000,
    host: "localhost",
    routes: {
      cors: true, // Set to true to enable CORS for all routes
    },
  });

  // Register Inert plugin
  await server.register(inert);

  // Sinkronisasi database
  await sequelize.sync();

  // Route to serve static files from the uploads directory
  server.route({
    method: "GET",
    path: "/public/{param*}",
    handler: {
      directory: {
        path: path.join(__dirname, "public"),
        redirectToSlash: true,
        index: false,
      },
    },
  });

  // ================================ + Destinasi + ===============================//
  // CREATE destinasi
  server.route({
    method: "POST",
    path: "/destinations",
    options: {
      payload: {
        output: "stream",
        parse: true,
        allow: "multipart/form-data",
        multipart: true,
        maxBytes: 50 * 5000 * 5000,
      },
      validate: {
        payload: Joi.object({
          name: Joi.string().required(),
          description: Joi.string().required(),
          location: Joi.string().required(),
          rating: Joi.number().required(),
          price: Joi.number().required(),
          image_url: Joi.any().meta({ swaggerType: "file" }).optional(),
        }),
        failAction: (request, h, err) => {
          return err;
        },
      },
    },
    handler: async (request, h) => {
      const { name, description, location, rating, price } = request.payload;
      const image = request.payload.image_url;

      let imageUrl = null;

      if (image) {
        const filename = `${Date.now()}-${image.hapi.filename}`;
        const uploadPath = path.join(__dirname, "public", filename);

        try {
          await fs.promises.mkdir(path.join(__dirname, "public"), {
            recursive: true,
          }); // Buat direktori "public" secara rekursif jika belum ada
          const fileStream = fs.createWriteStream(uploadPath); // Gunakan fs.createWriteStream tanpa .promises

          await new Promise((resolve, reject) => {
            image.pipe(fileStream);
            image.on("end", resolve);
            image.on("error", reject);
          });

          imageUrl = `http://localhost:3000/public/${filename}`;
        } catch (error) {
          console.error("Error saving image:", error);
          return h.response("Internal server error").code(500);
        }
      }

      try {
        const destination = await destinations.create({
          // Gunakan destinations.create
          name,
          description,
          location,
          rating,
          price,
          image_url: imageUrl,
        });
        return h.response(destination).code(201);
      } catch (error) {
        console.error("Error creating destination:", error);
        return h.response("Internal server error").code(500);
      }
    },
  });

  // untuk Get All destinasi
  server.route({
    method: "GET",
    path: "/destinations",
    handler: async (request, h) => {
      try {
        const destinasi = await destinations.findAll();
        return destinasi;
      } catch (err) {
        console.error("Error fetching destinations:", err);
        return h.response("Internal server error").code(500);
      }
    },
  });

  // untuk Get by ID destinasi
  server.route({
    method: "GET",
    path: "/destinations/{id}",
    handler: async (request, h) => {
      const { id } = request.params;
      try {
        const destinasi = await destinations.findByPk(id);
        if (!destinasi) {
          return h.response({ error: "Destination not found" }).code(404);
        }
        return destinasi;
      } catch (error) {
        console.error("Error fetching destination:", error);
        return h.response("Internal server error").code(500);
      }
    },
  });

  // UPDATE destinasi
  server.route({
    method: "PUT",
    path: "/destinations/{id}",
    options: {
      validate: {
        payload: Joi.object({
          name: Joi.string().required(),
          description: Joi.string().required(),
          location: Joi.string().required(),
          rating: Joi.number().required(),
          price: Joi.number().required(),
          image_url: Joi.string().optional(),
        }),
        failAction: (request, h, err) => {
          return err;
        },
      },
    },
    handler: async (request, h) => {
      const { id } = request.params;
      const { name, description, location, rating, price, image_url } =
        request.payload;
      try {
        let destinasi = await destinations.findByPk(id);
        if (!destinasi) {
          return h.response({ error: "Destination not found" }).code(404);
        }
        destinasi.name = name;
        destinasi.description = description;
        destinasi.location = location;
        destinasi.rating = rating;
        destinasi.price = price;
        destinasi.image_url = image_url ? image_url : destinasi.image_url;

        await destinasi.save();
        return destinasi;
      } catch (error) {
        console.error("Error updating destination:", error);
        return h.response("Internal server error").code(500);
      }
    },
  });

  // DELETE destinasi
  server.route({
    method: "DELETE",
    path: "/destinations/{id}",
    handler: async (request, h) => {
      const { id } = request.params;
      try {
        const destinasi = await destinations.findByPk(id);
        if (!destinasi) {
          return h.response({ error: "Destination not found" }).code(404);
        }
        await destinasi.destroy();
        return { message: "Destination deleted" };
      } catch (error) {
        console.error("Error deleting destination:", error);
        return h.response("Internal server error").code(500);
      }
    },
  });
  await server.start();
  console.log("Server running on %s", server.info.uri);
};

process.on("unhandledRejection", (err) => {
  console.error("Unhandled rejection:", err);
  process.exit(1);
});

init();
