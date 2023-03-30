// For Sales

let tableDetailsInfo = [
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
    tableDetailsInfo = tableDetailsInfo.filter((item) => item.id !== id);
    displayTable(); // call a function to display the updated table
}

function displayTable() {
    const tableBody = document.getElementById("table-details");
    tableBody.innerHTML = "";
    tableDetailsInfo.forEach((data) => {
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

displayTable();

// For Details
