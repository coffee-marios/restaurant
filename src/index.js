import "./style.css";

const content = document.createElement("div");
const divNav = document.createElement("nav");
const buttonHome = document.createElement("button");
const buttonAbout = document.createElement("button");
const buttonContact = document.createElement("button");

buttonHome.innerHTML = "HOME";
buttonAbout.innerHTML = "ABOUT";
buttonContact.innerHTML = "CONTACT";

const titleHome = document.createElement("h1");
titleHome.innerHTML = "NAME OF THE RESTAURANT";

const imageDiv = document.createElement("div");
const imageHome = document.createElement("img");
imageHome.src = "restaurant.jpg";
imageHome.alt = "Restaurant";

const attributes = document.createElement("div");
const photo1Attribute = document.createElement("p");
photo1Attribute.innerHTML = "Photo by ";
const photo1link = document.createElement("a");

photo1link.setAttribute(
  "href",
  "https://unsplash.com/@_k8_?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
);
photo1link.innerHTML = "K8";
photo1link.setAttribute("target", "_blank");

const spanAttribute = document.createElement("span");
spanAttribute.innerHTML = " on ";

const photo1link_website = document.createElement("a");
photo1link_website.setAttribute(
  "href",
  "https://unsplash.com/photos/sWEpcc0Rm0U?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
);
photo1link_website.innerHTML = "Unsplash";
photo1link_website.setAttribute("target", "_blank");

document.body.appendChild(content);
content.appendChild(divNav);

divNav.appendChild(buttonHome);
divNav.appendChild(buttonAbout);
divNav.appendChild(buttonContact);

content.appendChild(titleHome);
content.appendChild(imageDiv);
imageDiv.appendChild(imageHome);

imageDiv.appendChild(attributes);
attributes.appendChild(photo1Attribute);
photo1Attribute.appendChild(photo1link);
photo1Attribute.appendChild(spanAttribute);
photo1Attribute.appendChild(photo1link_website);
