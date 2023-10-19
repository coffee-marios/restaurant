export default function menuComponent() {
  const elementMenu = document.createElement("div");
  elementMenu.setAttribute("id", "divTitleMenu");
  const titleMenu = document.createElement("h2");
  titleMenu.setAttribute("class", "titleH2");
  titleMenu.innerText = "MENU";
  const divMenu = document.createElement("div");

  // WINGS

  const tableMenuWings = document.createElement("table");
  const trTop = document.createElement("tr");
  const thWings = document.createElement("th");
  thWings.innerText = "Wings";

  const trWing1 = document.createElement("tr");
  const trWing2 = document.createElement("tr");
  const trWing3 = document.createElement("tr");
  const trWing4 = document.createElement("tr");

  const tdWing1 = document.createElement("td");
  const tdWing2 = document.createElement("td");
  const tdWing3 = document.createElement("td");
  const tdWing4 = document.createElement("td");

  tdWing1.innerText = "Bone-In Wings";
  tdWing2.innerText = "Boneless Wings";
  tdWing3.innerText = "Safari Bone-In Wings";
  tdWing4.innerText = "Safari Boneless Wings";

  // Append
  elementMenu.appendChild(titleMenu);
  elementMenu.appendChild(divMenu);
  divMenu.appendChild(tableMenuWings);

  // WINGS
  tableMenuWings.appendChild(trTop);
  trTop.appendChild(thWings);

  tableMenuWings.appendChild(trWing1);
  tableMenuWings.appendChild(trWing2);
  tableMenuWings.appendChild(trWing3);
  tableMenuWings.appendChild(trWing4);

  trWing1.appendChild(tdWing1);
  trWing2.appendChild(tdWing2);
  trWing3.appendChild(tdWing3);
  trWing4.appendChild(tdWing4);

  // CHICKEN
  const tableMenuChicken = document.createElement("table");
  divMenu.appendChild(tableMenuChicken);
  const trTopChicken = document.createElement("tr");
  const thChicken = document.createElement("th");
  thChicken.innerText = "Chicken";

  const trChicken1 = document.createElement("tr");
  const trChicken2 = document.createElement("tr");
  const trChicken3 = document.createElement("tr");
  const trChicken4 = document.createElement("tr");

  const tdChicken1 = document.createElement("td");
  const tdChicken2 = document.createElement("td");
  const tdChicken3 = document.createElement("td");
  const tdChicken4 = document.createElement("td");

  tdChicken1.innerText = "Arkansas Hot Chicken";
  tdChicken2.innerText = "Berkley's Spicy Chicken";
  tdChicken3.innerText = "Crispy Chicken";
  tdChicken4.innerText = "Hot Night Chicken";

  // CHICKEN - append

  tableMenuChicken.appendChild(trTopChicken);
  trTopChicken.appendChild(thChicken);

  tableMenuChicken.appendChild(trChicken1);
  tableMenuChicken.appendChild(trChicken2);
  tableMenuChicken.appendChild(trChicken3);
  tableMenuChicken.appendChild(trChicken4);

  trChicken1.appendChild(tdChicken1);
  trChicken2.appendChild(tdChicken2);
  trChicken3.appendChild(tdChicken3);
  trChicken4.appendChild(tdChicken4);

  // STEAK
  const tableMenuSteak = document.createElement("table");
  divMenu.appendChild(tableMenuSteak);
  const trTopSteak = document.createElement("tr");
  const thSteak = document.createElement("th");
  thSteak.innerText = "Steak";

  const trSteak1 = document.createElement("tr");
  const trSteak2 = document.createElement("tr");
  const trSteak3 = document.createElement("tr");
  const trSteak4 = document.createElement("tr");

  const tdSteak1 = document.createElement("td");
  const tdSteak2 = document.createElement("td");
  const tdSteak3 = document.createElement("td");
  const tdSteak4 = document.createElement("td");

  tdSteak1.innerText = "Arkansas Hot Steak";
  tdSteak2.innerText = "Berkley's Spicy Steak";
  tdSteak3.innerText = "Crispy Steak";
  tdSteak4.innerText = "Hot Night Steak";

  // STEAK - append

  tableMenuSteak.appendChild(trTopSteak);
  trTopSteak.appendChild(thSteak);

  tableMenuSteak.appendChild(trSteak1);
  tableMenuSteak.appendChild(trSteak2);
  tableMenuSteak.appendChild(trSteak3);
  tableMenuSteak.appendChild(trSteak4);

  trSteak1.appendChild(tdSteak1);
  trSteak2.appendChild(tdSteak2);
  trSteak3.appendChild(tdSteak3);
  trSteak4.appendChild(tdSteak4);

  return elementMenu;
}
