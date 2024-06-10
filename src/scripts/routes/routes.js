import kota from "../views/pages/kota";
import paketWisata from "../views/pages/paket-wisata";
import tentangKita from "../views/pages/tentang-kita";
import login from "../views/pages/login";
import home from "../views/pages/home";
import jambi from "../views/pages/jambi";
import lombok from "../views/pages/lombok";
import banyumas from "../views/pages/banyumas";
import detail from "../views/pages/detail";
import signup from "../views/pages/signup";

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
  "/detail": detail,
  "/signup": signup,
};

export default routes;
