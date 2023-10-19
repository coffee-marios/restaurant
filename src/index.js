import "./style.css";
//import restaurantImage from "./restaurant.jpg";
import menuInsert from "./menu.js";
import contactInsert from "./contact.js";
import { homeComponent, photoHomeAttribute } from "./home.js";

const homeContent = homeComponent();
const homeAttribute = photoHomeAttribute();
const menuContent = menuInsert();
const contactContent = contactInsert();

const content = document.createElement("div");
const divNav = document.createElement("nav");

const divNavButtons = document.createElement("div");
const buttonHome = document.createElement("button");
const buttonmenu = document.createElement("button");
const buttonContact = document.createElement("button");

buttonHome.innerHTML = "HOME";
buttonHome.setAttribute("id", "homePage");
buttonmenu.innerText = "MENU";
buttonmenu.setAttribute("id", "menuPage");
buttonContact.innerHTML = "CONTACT";
buttonContact.setAttribute("id", "contactPage");

const divTitleHome = document.createElement("div");
divTitleHome.setAttribute("id", "titleHome");

const titleHome = document.createElement("h2");
titleHome.innerHTML = "JAVASCRIPT RESTAURANT";

document.body.appendChild(content);
content.appendChild(divNav);
divNav.appendChild(divNavButtons);

divNavButtons.appendChild(buttonHome);
divNavButtons.appendChild(buttonmenu);
divNavButtons.appendChild(buttonContact);

content.appendChild(divTitleHome);
divTitleHome.appendChild(titleHome);

content.appendChild(homeContent);
content.appendChild(homeAttribute);

content.appendChild(menuContent);
content.appendChild(contactContent);

// get id
const homeDivId = document.getElementById("homeId");
const homeAttributeId = document.getElementById("attributesId");
const menuDivId = document.getElementById("divTitleMenu");
const contactDivId = document.getElementById("divTitleContact");

menuDivId.style.display = "none";
contactDivId.style.display = "none";

function modifyPageHome() {
  homeDivId.style.display = "block";
  contactDivId.style.display = "none";
  homeAttributeId.style.display = "block";
  titleHome.style.display = "block";

  menuDivId.style.display = "none";
}

function modifyPagemenu() {
  homeDivId.style.display = "none";
  contactDivId.style.display = "none";
  homeAttributeId.style.display = "none";
  titleHome.style.display = "none";

  menuDivId.style.display = "block";
}

function modifyPageContact() {
  console.log(menuContent);
  homeDivId.style.display = "none";
  menuDivId.style.display = "none";
  homeAttributeId.style.display = "none";
  titleHome.style.display = "none";
  contactDivId.style.display = "block";
}

const homeButton = document.getElementById("homePage");
homeButton.addEventListener("click", modifyPageHome);

const menuButton = document.getElementById("menuPage");
menuButton.addEventListener("click", modifyPagemenu);

const contactButton = document.getElementById("contactPage");
contactButton.addEventListener("click", modifyPageContact);
