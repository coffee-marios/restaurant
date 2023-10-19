export default function contactComponent() {
  const elementContact = document.createElement("div");
  elementContact.setAttribute("id", "divTitleContact");
  const titleContact = document.createElement("h2");
  titleContact.setAttribute("class", "titleH2");
  titleContact.innerText = "CONTACT";

  //
  const divContactPhoneAddress = document.createElement("div");
  divContactPhoneAddress.setAttribute("class", "divContactPhoneAddress");

  // Contact Information Phone
  const divContactPhone = document.createElement("div");
  divContactPhone.setAttribute("class", "divContact");

  const divContactLabelPhone = document.createElement("div");
  const paragraphLabelPhone = document.createElement("p");
  paragraphLabelPhone.innerText = "PHONE";
  const divContactPhoneNumber = document.createElement("div");
  const paragraphPhoneNumber = document.createElement("p");
  paragraphPhoneNumber.innerText = "+397 22312208";

  elementContact.appendChild(titleContact);
  elementContact.appendChild(divContactPhoneAddress);

  divContactPhoneAddress.appendChild(divContactPhone);
  divContactPhone.appendChild(divContactLabelPhone);
  divContactLabelPhone.appendChild(paragraphLabelPhone);
  divContactPhone.appendChild(divContactPhoneNumber);
  divContactPhone.appendChild(paragraphPhoneNumber);

  ///
  // Contact Information Address
  const divContactAddress = document.createElement("div");
  const divContactLabelAddress = document.createElement("div");
  const paragraphLabelAddress = document.createElement("p");
  paragraphLabelAddress.innerText = "ADDRESS";
  const divContactAddressString = document.createElement("div");
  const paragraphAddress = document.createElement("p");
  paragraphAddress.innerText = "Melisa 13, Sahara 2035";

  divContactPhoneAddress.appendChild(divContactAddress);
  divContactAddress.appendChild(divContactLabelAddress);
  divContactLabelAddress.appendChild(paragraphLabelAddress);
  divContactAddress.appendChild(divContactAddressString);
  divContactAddressString.appendChild(paragraphAddress);

  return elementContact;
}
