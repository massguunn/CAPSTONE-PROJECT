const lombok = {
  async render() {
    try {
      const responseDestinations = await fetch(
        "http://localhost:3000/destinations"
      );
      const destinations = await responseDestinations.json();

      const responseEvents = await fetch("http://localhost:3000/events");
      const events = await responseEvents.json();

      const responseKuliners = await fetch("http://localhost:3000/kuliners");
      const kuliners = await responseKuliners.json();

      return `
        <h1 class="kota">Lombok</h1>
        <p>Temukan Destinasi Impian Anda</p>

        <h2 class="title">Wisata</h2>
        <div class="wisata">
          <div class="container-wisata">
            ${destinations
              .map(
                (destination) => `
              <div class="image-wisata">
                <a href="#/detail/${destination.id}">
                  <img src="${
                    destination.image_url || "./default-image.jpg"
                  }" alt="${destination.name}" />
                </a>
                <h3>${destination.name}</h3>
                <p>${destination.description}</p>
                <div class="rating">Rating: ${destination.rating}</div>
              </div>
            `
              )
              .join("")}
          </div>
        </div>

        <h2 class="title">Kuliner</h2>
        <div class="wisata">
          <div class="container-wisata">
            ${kuliners
              .map(
                (kuliner) => `
              <div class="image-wisata">
               <a href="#/detailKuliner/${kuliner.id}">
                  <img src="${kuliner.image || "./default-image.jpg"}" alt="${
                  kuliner.name
                }" />
                </a>
                <h3>${kuliner.name}</h3>
                <p>${kuliner.description}</p>
                <div class="rating">Rating: ${kuliner.rating}</div>
              </div>
            `
              )
              .join("")}
          </div>
        </div>

        <h2 class="title">Event</h2>
        <div class="wisata">
          <div class="container-wisata">
            ${events
              .map(
                (event) => `
              <div class="image-wisata">
                <img src="${event.image || "./default-image.jpg"}" alt="${
                  event.name
                }" />
                <h3>${event.title}</h3>
                <p>${event.description}</p>
                <div class="price">RP. ${event.price}</div>
              </div>
            `
              )
              .join("")}
          </div>
        </div>
      `;
    } catch (error) {
      console.error("Error fetching data:", error);
      return `
        <h1 class="kota">Lombok</h1>
        <p>Temukan Destinasi Impian Anda</p>
        <p>Error loading data. Please try again later.</p>
      `;
    }
  },

  async afterRender() {
    // Implementasi logika setelah render
    console.log("Rendering Lombok page completed.");
  },
};

export default lombok;
