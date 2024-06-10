const mysql = require("mysql");
const conn = mysql.createPool({
  host: "localhost",
  user: "root", // Gunakan "user" alih-alih "username"
  database: "DB_PARIWISATA",
  password: "",
});

conn.getConnection((err, connection) => {
  if (err) {
    console.error("Kesalahan saat menghubungkan ke database:", err);
    return;
  }
  console.log("Terhubung ke database!");

  // Jalankan query sederhana untuk memeriksa koneksi
  connection.query("SELECT 1 + 1 AS solution", (err, results, fields) => {
    if (err) {
      console.error("Kesalahan saat menjalankan query:", err);
    } else {
      console.log("Hasil query:", results[0].solution); // Harusnya hasilnya 2
    }

    // Lepaskan koneksi kembali ke pool setelah selesai
    connection.release();

    // Jika ada kesalahan, hentikan proses (opsional)
    if (err) {
      process.exit(1);
    }
  });
});
