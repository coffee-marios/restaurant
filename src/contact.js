export default function contactComponent() {
  const elementContact = document.createElement("div");
  elementContact.setAttribute("id", "contactId");
  const titleContact = document.createElement("h2");
  titleContact.innerText = "Contact";
  elementContact.appendChild(titleContact);
  return elementContact;
}
