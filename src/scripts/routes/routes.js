import kota from "../views/pages/kota";
import paketWisata from "../views/pages/paket-wisata";
import tentangKita from "../views/pages/tentang-kita";
import pembayaran from "../views/pages/pembayaran";
import home from "../views/pages/home";
import jambi from "../views/pages/jambi";
import lombok from "../views/pages/lombok";
import banyumas from "../views/pages/banyumas";
import detail from "../views/pages/detail-wisata";
import signup from "../views/pages/signup";
import kuliner from "../views/pages/detail-kuliner";
import event from "../views/pages/detail-event";
import admin from "../views/pages/admin/index";
import event_admin from "../views/pages/admin/event";
import kuliner_admin from "../views/pages/admin/kuliner";

const routes = {
  "/": home,
  "/home": home,
  "/kota": kota,
  "/paket-wisata": paketWisata,
  "/tentang-kita": tentangKita,
  "/pembayaran": pembayaran,
  "/jambi": jambi,
  "/lombok": lombok,
  "/banyumas": banyumas,
  "/detail/:id": detail,
  "/kuliner/:id": kuliner,
  "/event/:id": event,
  "/signup": signup,
  "/admin": admin,
  "/event_admin": event_admin,
  "/kuliner_admin": kuliner_admin,
};

export default routes;
