export default function aboutComponent() {
  const elementAbout = document.createElement("div");
  elementAbout.setAttribute("id", "aboutId");
  const titleAbout = document.createElement("h2");
  titleAbout.innerText = "About";
  elementAbout.appendChild(titleAbout);
  return elementAbout;
}
