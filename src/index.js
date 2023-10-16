import "./style.css";
//import restaurantImage from "./restaurant.jpg";
import aboutInsert from "./about.js";
import contactInsert from "./contact.js";
import { homeComponent, photoHomeAttribute } from "./home.js";

const homeContent = homeComponent();
const homeAttribute = photoHomeAttribute();
const aboutContent = aboutInsert();
const contactContent = contactInsert();

const content = document.createElement("div");
const divNav = document.createElement("nav");

const divNavButtons = document.createElement("div");
const buttonHome = document.createElement("button");
const buttonAbout = document.createElement("button");
const buttonContact = document.createElement("button");

buttonHome.innerHTML = "HOME";
buttonHome.setAttribute("id", "homePage");
buttonAbout.innerHTML = "ABOUT";
buttonAbout.setAttribute("id", "aboutPage");
buttonContact.innerHTML = "CONTACT";
buttonContact.setAttribute("id", "contactPage");

const divTitleHome = document.createElement("div");
divTitleHome.classList.add("titleHome");

const titleHome = document.createElement("h2");
titleHome.innerHTML = "NAME OF THE RESTAURANT";

document.body.appendChild(content);
content.appendChild(divNav);
divNav.appendChild(divNavButtons);

divNavButtons.appendChild(buttonHome);
divNavButtons.appendChild(buttonAbout);
divNavButtons.appendChild(buttonContact);

content.appendChild(divTitleHome);
divTitleHome.appendChild(titleHome);

content.appendChild(homeContent);
content.appendChild(homeAttribute);

content.appendChild(aboutContent);
content.appendChild(contactContent);

// get id
const homeDivId = document.getElementById("homeId");
const homeAttributeId = document.getElementById("attributesId");
const aboutDivId = document.getElementById("aboutId");
const contactDivId = document.getElementById("contactId");

aboutDivId.style.display = "none";
contactDivId.style.display = "none";

function modifyPageHome() {
  homeDivId.style.display = "block";
  contactDivId.style.display = "none";
  homeAttributeId.style.display = "block";
  aboutDivId.style.display = "none";
}

function modifyPageAbout() {
  homeDivId.style.display = "none";
  contactDivId.style.display = "none";
  homeAttributeId.style.display = "none";
  aboutDivId.style.display = "block";
}

function modifyPageContact() {
  console.log(aboutContent);
  homeDivId.style.display = "none";
  aboutDivId.style.display = "none";
  homeAttributeId.style.display = "none";
  contactDivId.style.display = "block";
}

const homeButton = document.getElementById("homePage");
homeButton.addEventListener("click", modifyPageHome);

const aboutButton = document.getElementById("aboutPage");
aboutButton.addEventListener("click", modifyPageAbout);

const contactButton = document.getElementById("contactPage");
contactButton.addEventListener("click", modifyPageContact);
