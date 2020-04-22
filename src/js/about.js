import "../css/about.css";
import Flickity from "flickity";

let slider = document.querySelector(".slider");

new Flickity(slider, {
  // cellAlign: "left",
  groupCells: true,
  initialIndex: 3,
});
