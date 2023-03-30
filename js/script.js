// For Sales

let tableSalesInfo = [
    {
        id: 1,
        name: "ZIPPER METAL #3.4 (4.5)Y C/E A/S H-TYPE NAL NF MYGD",
        style: "TWS499936",
        length: 7.0,
        color: "Electroplated",
    },
    {
        id: 2,
        name: "ZIPPER METAL #3.4 (4.5)Y C/E A/S H-TYPE NAL NF MYGD",
        style: "TWS499936",
        length: 10.0,
        color: "Electroplated",
    },
    {
        id: 3,
        name: "ZIPPER METAL #3.4 (4.5)Y C/E A/S H-TYPE NAL NF MYGD",
        style: "TWS500649",
        length: 6.0,
        color: "Electroplated",
    },
    {
        id: 4,
        name: "ZIPPER METAL #3.4 (4.5)Y C/E A/S H-TYPE NAL NF MYGD",
        style: "TWS500649",
        length: 13.0,
        color: "Electroplated",
    },
    {
        id: 5,
        name: "ZIPPER METAL #3.4 (4.5)Y C/E A/S H-TYPE NAL NF MYGD",
        style: "TWS500713",
        length: 8.0,
        color: "Electroplated",
    },
    {
        id: 6,
        name: "ZIPPER METAL #3.4 (4.5)Y C/E A/S H-TYPE NAL NF MYGD",
        style: "TWS500713",
        length: 7.0,
        color: "Electroplated",
    },
    {
        id: 7,
        name: "ZIPPER METAL #3.4 (4.5)Y C/E A/S H-TYPE NAL NF MYGD",
        style: "TWS500565",
        length: 12.0,
        color: "Electroplated",
    },
];

function deleteItems(id) {
    console.log(id);
    tableSalesInfo = tableSalesInfo.filter((item) => item.id !== id);
    if (tableSalesInfo.length === 0) {
        document.getElementById("table-sales-details").classList.add("d-none");
    } else {
        document
            .getElementById("table-sales-details")
            .classList.remove("d-none");
    }

    displayTable(); // call a function to display the updated table
}

function displayTable() {
    const tableBody = document
        .getElementById("table-sales-details")
        .querySelector("tbody");
    tableBody.innerHTML = "";
    tableSalesInfo.forEach((data) => {
        const row = document.createElement("tr");
        row.innerHTML = `
      <td>${data.name}</td>
      <td>${data.style}</td>
      <td>${data.length} CM</td>
      <td>${data.color}</td>
      <td><button class="border-0" onclick="deleteItems(${data.id})"><i class="fa-solid fa-xmark" style="color: #d91212;"></i></button></td>
    `;
        tableBody.appendChild(row);
    });
}

// For Details

// ------------- TAB-1 ----------------

// ------------- TAB-2 ----------------
let tableDetailsInfoTab2 = [
    {
        id: 1,
        BOE_No: "BE01302023",
        BOE_Date: "02/01/2023",
        Customer_Date: "05/03/2023",
        Negotiation_Date: "10/03/2023",
        Maturity_Date: "23/11/2023",
    },
    {
        id: 2,
        BOE_No: "BE01402023",
        BOE_Date: "04/02/2023",
        Customer_Date: "04/05/2023",
        Negotiation_Date: "10/05/2023",
        Maturity_Date: "22/10/2023",
    },
    {
        id: 3,
        BOE_No: "BE01202024",
        BOE_Date: "12/03/2024",
        Customer_Date: "23/04/2024",
        Negotiation_Date: "25/04/2024",
        Maturity_Date: "30/6/2024",
    },
];

function deleteItemsTab2(id) {
    tableDetailsInfoTab2 = tableDetailsInfoTab2.filter(
        (item) => item.id !== id
    );
    if (tableDetailsInfoTab2.length === 0) {
        document
            .getElementById("table-export-details2")
            .classList.add("d-none");
    } else {
        document
            .getElementById("table-export-details2")
            .classList.remove("d-none");
    }

    displayTableTab2(); // call a function to display the updated table
}

function displayTableTab2() {
    const tableBody = document
        .getElementById("table-export-details2")
        .querySelector("tbody");
    tableBody.innerHTML = "";
    tableDetailsInfoTab2.forEach((data) => {
        const row = document.createElement("tr");
        row.innerHTML = `
    <td>${data.BOE_No}</td>
    <td>${data.BOE_Date}</td>
    <td>${data.Customer_Date} CM</td>
    <td>${data.Negotiation_Date}</td>
    <td>${data.Maturity_Date}</td>
    <td><button class="border-0" onclick="deleteItemsTab2(${data.id})"><i class="fa-solid fa-pen-to-square"></i></button></td>
    <td><button class="border-0" onclick="deleteItemsTab2(${data.id})"><i class="fa-solid fa-xmark" style="color: #d91212;"></i></button></td>
  `;
        tableBody.appendChild(row);
    });
}
