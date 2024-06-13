import kota from "../views/pages/kota";
import paketWisata from "../views/pages/paket-wisata";
import tentangKita from "../views/pages/tentang-kita";
import login from "../views/pages/login";
import home from "../views/pages/home";
import jambi from "../views/pages/jambi";
import lombok from "../views/pages/lombok";
import banyumas from "../views/pages/banyumas";
import detail from "../views/pages/detail-wisata";
import signup from "../views/pages/signup";
import detailKuliner from "../views/pages/detail-kuliner";

const routes = {
  "/": home,
  "/home": home,
  "/kota": kota,
  "/paket-wisata": paketWisata,
  "/tentang-kita": tentangKita,
  "/login": login,
  "/jambi": jambi,
  "/lombok": lombok,
  "/banyumas": banyumas,
  "/detail/:id": detail,
  "/detailKuliner/:id": detailKuliner, // Perhatikan penulisan '/detailKuliner/:id'
  "/signup": signup,
};

export default routes;
