import "bootstrap";

import { init_menu } from "./js/menu";
import { init_carousel } from "./js/carousel";
import { init_video } from "./js/video";

function init() {
  init_menu();
  init_carousel();
  init_video();
}
init();

window.addEventListener("load", function() {});
