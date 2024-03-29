// Sample data (you can replace this with your actual data)
let i = 1;
const data = [
 // add data here
[i++, "Krishna Kant Yadav", "70533231", "./trainer/KrishnaKantYadav_70533231/1.bmp", "./trainer/KrishnaKantYadav_70533231/2.bmp", "./trainer/KrishnaKantYadav_70533231/3.bmp", "./trainer/KrishnaKantYadav_70533231/4.bmp", "./trainer/KrishnaKantYadav_70533231/5.bmp"],
[i++, "Rahul Kumar Yadav", "15326358", "./trainer/RahulKumarYadav_15326358/1.bmp", "./trainer/RahulKumarYadav_15326358/2.bmp", "./trainer/RahulKumarYadav_15326358/3.bmp", "./trainer/RahulKumarYadav_15326358/4.bmp", "./trainer/RahulKumarYadav_15326358/5.bmp"],
[i++, "Rohit Yadav", "63339443", "./trainer/RohitYadav_63339443/1.bmp", "./trainer/RohitYadav_63339443/2.bmp", "./trainer/RohitYadav_63339443/3.bmp", "./trainer/RohitYadav_63339443/4.bmp", "./trainer/RohitYadav_63339443/5.bmp"],
[i++, "Anand Yadav", "80664609", "./trainer/AnandYadav_80664609/1.bmp", "./trainer/AnandYadav_80664609/2.bmp", "./trainer/AnandYadav_80664609/3.bmp", "./trainer/AnandYadav_80664609/4.bmp", "./trainer/AnandYadav_80664609/5.bmp"],

         // 1-30 are done....
// adding more rows..

];


let currentSortColumn = -1; // Initially, no column is sorted
let isAscending = true; // Initially, sorting is in ascending order

document.addEventListener('DOMContentLoaded', function () {
    renderTable(data);
    
    const searchInput = document.getElementById('search');
    searchInput.addEventListener('input', function () {
        const searchTerm = this.value.toLowerCase();
        const filteredData = data.filter(row => row.some(cell => cell.toString().toLowerCase().includes(searchTerm)));
        renderTable(filteredData);
    });
});

function renderTable(data) {
    const tableBody = document.getElementById('tableBody');
    tableBody.innerHTML = '';

    data.forEach(row => {
        const tr = document.createElement('tr');

        row.forEach((cell, index) => {
            const td = document.createElement('td');

            if (index >= 3 && index <= 7) {
                const img = document.createElement('img');
                img.src = cell;
                img.alt = `Finger ${index - 1}`;
                img.style.width = '100px'; // Set width to auto for actual size
                img.style.height = '100px'; // Set height to auto for actual size
                img.style.transform = 'scaleX(-1)'; // Mirror horizontally
                img.style.filter = 'invert(100%)'; // Color invert
                td.appendChild(img);
            } else {
                td.textContent = cell;
            }

            tr.appendChild(td);
        });

        tableBody.appendChild(tr);
    });

    updateTotalCount(data.length);
}

function updateTotalCount(count) {
    const totalCountElement = document.getElementById('totalCount');
    totalCountElement.textContent = `Total Count: ${count}`;
}

function sortTable(columnIndex) {
    if (currentSortColumn === columnIndex) {
        // If the same column is clicked again, reverse the sorting order
        isAscending = !isAscending;
    } else {
        // If a new column is clicked, set the sorting order to ascending
        isAscending = true;
        currentSortColumn = columnIndex;
    }

    data.sort((a, b) => {
        const valueA = a[currentSortColumn];
        const valueB = b[currentSortColumn];

        // Customize the comparison logic based on the data type (string, number, etc.)
        return isAscending ? valueA.localeCompare(valueB) : valueB.localeCompare(valueA);
    });

    renderTable(data);
}
