// ----------------//
// For Sales       //
// ----------------//

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

// ----------------//
// For Details     //
//-----------------//

// TAB-1
let tableDetailsInfoTab1 = [
    {
        id: 1,
        LC_PI_No: "LP02222023",
        UD_EXP_No: "BGMEADHK004AMDNO/001",
        UP_No: "12212304440",
    },
    {
        id: 2,
        LC_PI_No: "LP01602023",
        UD_EXP_No: "BGMEADHK004AMDNO/001",
        UP_No: "1221130440",
    },
];

function deleteItemsTab1(id) {
    tableDetailsInfoTab1 = tableDetailsInfoTab1.filter(
        (item) => item.id !== id
    );
    if (tableDetailsInfoTab1.length === 0) {
        document
            .getElementById("table-export-details1")
            .classList.add("d-none");
    } else {
        document
            .getElementById("table-export-details1")
            .classList.remove("d-none");
    }

    displayTableTab1(); // call a function to display the updated table
}

function displayTableTab1() {
    const tableBody = document
        .getElementById("table-export-details1")
        .querySelector("tbody");
    tableBody.innerHTML = "";
    tableDetailsInfoTab1.forEach((data) => {
        const row = document.createElement("tr");
        row.innerHTML = `
          <td>${data.LC_PI_No}</td>
          <td>${data.UD_EXP_No}</td>
          <td>${data.UP_No}</td>
          <td><button class="border-0" data-bs-toggle="modal" data-bs-target="#exampleModal1"><i class="fa-solid fa-pen-to-square"></i></button></td>
          <td><button class="border-0" onclick="deleteItemsTab1(${data.id})"><i class="fa-solid fa-xmark" style="color: #d91212;"></i></button></td>
        `;
        tableBody.appendChild(row);
    });
}

// TAB-2
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
    <td><button class="border-0" data-bs-toggle="modal" data-bs-target="#exampleModal2"><i class="fa-solid fa-pen-to-square"></i></button></td>
    <td><button class="border-0" onclick="deleteItemsTab2(${data.id})"><i class="fa-solid fa-xmark" style="color: #d91212;"></i></button></td>
  `;
        tableBody.appendChild(row);
    });
}

// TAB-3
let tableDetailsInfoTab3 = [
    {
        id: 1,
        Order_No: "OD02342023",
        Adjusted_Value: "4887.36",
    },
    {
        id: 2,
        Order_No: "OD03562023",
        Adjusted_Value: "1326.85",
    },
];

function deleteItemsTab3(id) {
    tableDetailsInfoTab3 = tableDetailsInfoTab3.filter(
        (item) => item.id !== id
    );
    if (tableDetailsInfoTab3.length === 0) {
        document
            .getElementById("table-export-details3")
            .classList.add("d-none");
    } else {
        document
            .getElementById("table-export-details3")
            .classList.remove("d-none");
    }

    displayTableTab3(); // call a function to display the updated table
}

function displayTableTab3() {
    const tableBody = document
        .getElementById("table-export-details3")
        .querySelector("tbody");
    tableBody.innerHTML = "";
    tableDetailsInfoTab3.forEach((data) => {
        const row = document.createElement("tr");
        row.innerHTML = `
        <td>${data.Order_No}</td>
        <td>${data.Adjusted_Value}</td>
        <td><button class="border-0"><i class="fa-solid fa-square-check" style="color: #a1a1a1;"></i></button></td>
        <td><button class="border-0"><i class="fa-solid fa-square-check" style="color: #a1a1a1;"></i></button></td>
        <td><button class="border-0" data-bs-toggle="modal" data-bs-target="#exampleModal3"><i class="fa-solid fa-eye"></i></button></td>
        <td><button class="border-0" onclick="deleteItemsTab3(${data.id})"><i class="fa-solid fa-xmark" style="color: #d91212;"></i></button></td>
      `;
        tableBody.appendChild(row);
    });
}
