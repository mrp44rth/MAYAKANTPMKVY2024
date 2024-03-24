// Sample data (you can replace this with your actual data)
let i = 1;
const data = [
 // add data here

  [i++, "Aditya Maurya", "2235824", "./7th batch/Aditya Maurya_2235824/1.bmp", "./7th batch/Aditya Maurya_2235824/2.bmp", "./7th batch/Aditya Maurya_2235824/3.bmp", "./7th batch/Aditya Maurya_2235824/4.bmp", "./7th batch/Aditya Maurya_2235824/5.bmp"],
  [i++, "Anish", "25882965", "./7th batch/Anish_25882965/1.bmp", "./7th batch/Anish_25882965/2.bmp", "./7th batch/Anish_25882965/3.bmp", "./7th batch/Anish_25882965/4.bmp", "./7th batch/Anish_25882965/5.bmp"],
  [i++, "Ankit", "46164058", "./7th batch/Ankit_46164058/1.bmp", "./7th batch/Ankit_46164058/2.bmp", "./7th batch/Ankit_46164058/3.bmp", "./7th batch/Ankit_46164058/4.bmp", "./7th batch/Ankit_46164058/5.bmp"],
  [i++, "Ankita", "92725739", "./7th batch/Ankita_92725739/1.bmp", "./7th batch/Ankita_92725739/2.bmp", "./7th batch/Ankita_92725739/3.bmp", "./7th batch/Ankita_92725739/4.bmp", "./7th batch/Ankita_92725739/5.bmp"],
  [i++, "Isma Bano", "28642080", "./7th batch/Isma Bano_28642080/1.bmp", "./7th batch/Isma Bano_28642080/2.bmp", "./7th batch/Isma Bano_28642080/3.bmp", "./7th batch/Isma Bano_28642080/4.bmp", "./7th batch/Isma Bano_28642080/5.bmp"],
  [i++, "KIRAN D_O AMLA PRASAD", "", "./7th batch/KIRAN D_O AMLA PRASAD/1.bmp", "./7th batch/KIRAN D_O AMLA PRASAD/2.bmp", "./7th batch/KIRAN D_O AMLA PRASAD/3.bmp", "./7th batch/KIRAN D_O AMLA PRASAD/4.bmp", "./7th batch/KIRAN D_O AMLA PRASAD/5.bmp"],
  [i++, "Pooja Gautam", "48342991", "./7th batch/Pooja Gautam_48342991/1.bmp", "./7th batch/Pooja Gautam_48342991/2.bmp", "./7th batch/Pooja Gautam_48342991/3.bmp", "./7th batch/Pooja Gautam_48342991/4.bmp", "./7th batch/Pooja Gautam_48342991/5.bmp"],
  [i++, "Praveen Kumar", "27400151", "./7th batch/Praveen Kumar_27400151/1.bmp", "./7th batch/Praveen Kumar_27400151/2.bmp", "./7th batch/Praveen Kumar_27400151/3.bmp", "./7th batch/Praveen Kumar_27400151/4.bmp", "./7th batch/Praveen Kumar_27400151/5.bmp"],
  [i++, "Rishikesh Prajapati", "82035840", "./7th batch/Rishikesh Prajapati_82035840/1.bmp", "./7th batch/Rishikesh Prajapati_82035840/2.bmp", "./7th batch/Rishikesh Prajapati_82035840/3.bmp", "./7th batch/Rishikesh Prajapati_82035840/4.bmp", "./7th batch/Rishikesh Prajapati_82035840/5.bmp"],
  [i++, "Roshan Yadav", "25874780", "./7th batch/Roshan Yadav_25874780/1.bmp", "./7th batch/Roshan Yadav_25874780/2.bmp", "./7th batch/Roshan Yadav_25874780/3.bmp", "./7th batch/Roshan Yadav_25874780/4.bmp", "./7th batch/Roshan Yadav_25874780/5.bmp"],
  [i++, "SAHIL RAJBHAR S_O RAKESH RAJBHAR", "", "./7th batch/SAHIL RAJBHAR S_O RAKESH RAJBHAR/1.bmp", "./7th batch/SAHIL RAJBHAR S_O RAKESH RAJBHAR/2.bmp", "./7th batch/SAHIL RAJBHAR S_O RAKESH RAJBHAR/3.bmp", "./7th batch/SAHIL RAJBHAR S_O RAKESH RAJBHAR/4.bmp", "./7th batch/SAHIL RAJBHAR S_O RAKESH RAJBHAR/5.bmp"],
  [i++, "Santosh Yadav", "26571333", "./7th batch/Santosh Yadav_26571333/1.bmp", "./7th batch/Santosh Yadav_26571333/2.bmp", "./7th batch/Santosh Yadav_26571333/3.bmp", "./7th batch/Santosh Yadav_26571333/4.bmp", "./7th batch/Santosh Yadav_26571333/5.bmp"],
  [i++, "SHRAWAN S_O MITHAILAL", "", "./7th batch/SHRAWAN S_O MITHAILAL/1.bmp", "./7th batch/SHRAWAN S_O MITHAILAL/2.bmp", "./7th batch/SHRAWAN S_O MITHAILAL/3.bmp", "./7th batch/SHRAWAN S_O MITHAILAL/4.bmp", "./7th batch/SHRAWAN S_O MITHAILAL/5.bmp"],
  [i++, "Umakant Yadav", "7484397", "./7th batch/Umakant Yadav_7484397/1.bmp", "./7th batch/Umakant Yadav_7484397/2.bmp", "./7th batch/Umakant Yadav_7484397/3.bmp", "./7th batch/Umakant Yadav_7484397/4.bmp", "./7th batch/Umakant Yadav_7484397/5.bmp"],
  [i++, "Vikas Gautam", "31989532", "./7th batch/Vikas Gautam_31989532/1.bmp", "./7th batch/Vikas Gautam_31989532/2.bmp", "./7th batch/Vikas Gautam_31989532/3.bmp", "./7th batch/Vikas Gautam_31989532/4.bmp", "./7th batch/Vikas Gautam_31989532/5.bmp"],

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
