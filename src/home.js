import restaurantImage from "./restaurant.jpg";

export function homeComponent() {
  // Add the image to our existing div.
  const elementHome = document.createElement("div");

  elementHome.setAttribute("id", "homeId");
  const imageHome = new Image();
  imageHome.src = restaurantImage; // Add the image to our existing div.

  elementHome.appendChild(imageHome);
  return elementHome;
}

export function photoHomeAttribute() {
  const attributes = document.createElement("div");
  attributes.setAttribute("id", "attributesId");
  attributes.classList.add("attributesImages");

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

  attributes.appendChild(photo1Attribute);
  photo1Attribute.appendChild(photo1link);
  photo1Attribute.appendChild(spanAttribute);
  photo1Attribute.appendChild(photo1link_website);
  return attributes;
}
