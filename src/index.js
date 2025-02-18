import "./styles.css";
import buildHome from "./home"
import buildMenu from "./menu"
import buildAbout from "./about"

const home = document.querySelector('#home');
const menu = document.querySelector('#menu');
const about = document.querySelector('#about');

buildHome();

home.addEventListener('click', buildHome);
menu.addEventListener('click', buildMenu);
about.addEventListener('click', buildAbout);