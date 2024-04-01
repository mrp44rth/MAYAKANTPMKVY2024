// Sample data (you can replace this with your actual data)
let i=1;
const data = [
 [i++, "Ankit Gautam", "79649442", "./8th batch/Ankit Gautam_79649442/1.bmp", "./8th batch/Ankit Gautam_79649442/2.bmp", "./8th batch/Ankit Gautam_79649442/3.bmp", "./8th batch/Ankit Gautam_79649442/4.bmp", "./8th batch/Ankit Gautam_79649442/5.bmp"],
  [i++, "Gokul Prajapati", "3708120", "./8th batch/Gokul Prajapati_3708120/1.bmp", "./8th batch/Gokul Prajapati_3708120/2.bmp", "./8th batch/Gokul Prajapati_3708120/3.bmp", "./8th batch/Gokul Prajapati_3708120/4.bmp", "./8th batch/Gokul Prajapati_3708120/5.bmp"],
  [i++, "Khushaboo Yadav", "90259835", "./8th batch/Khushaboo Yadav_90259835/1.bmp", "./8th batch/Khushaboo Yadav_90259835/2.bmp", "./8th batch/Khushaboo Yadav_90259835/3.bmp", "./8th batch/Khushaboo Yadav_90259835/4.bmp", "./8th batch/Khushaboo Yadav_90259835/5.bmp"],
  [i++, "Krishna Kumar", "64409131", "./8th batch/Krishna Kumar_64409131/1.bmp", "./8th batch/Krishna Kumar_64409131/2.bmp", "./8th batch/Krishna Kumar_64409131/3.bmp", "./8th batch/Krishna Kumar_64409131/4.bmp", "./8th batch/Krishna Kumar_64409131/5.bmp"],
  [i++, "Neetu Yadav", "94851188", "./8th batch/Neetu Yadav_94851188/1.bmp", "./8th batch/Neetu Yadav_94851188/2.bmp", "./8th batch/Neetu Yadav_94851188/3.bmp", "./8th batch/Neetu Yadav_94851188/4.bmp", "./8th batch/Neetu Yadav_94851188/5.bmp"],
  [i++, "Nikesh Yadav", "9033612", "./8th batch/Nikesh Yadav_9033612/1.bmp", "./8th batch/Nikesh Yadav_9033612/2.bmp", "./8th batch/Nikesh Yadav_9033612/3.bmp", "./8th batch/Nikesh Yadav_9033612/4.bmp", "./8th batch/Nikesh Yadav_9033612/5.bmp"],
  [i++, "Nisha", "38551672", "./8th batch/Nisha_38551672/1.bmp", "./8th batch/Nisha_38551672/2.bmp", "./8th batch/Nisha_38551672/3.bmp", "./8th batch/Nisha_38551672/4.bmp", "./8th batch/Nisha_38551672/5.bmp"],
  [i++, "Pooja", "88945561", "./8th batch/Pooja_88945561/1.bmp", "./8th batch/Pooja_88945561/2.bmp", "./8th batch/Pooja_88945561/3.bmp", "./8th batch/Pooja_88945561/4.bmp", "./8th batch/Pooja_88945561/5.bmp"],
  [i++, "Pradum Bind", "91284109", "./8th batch/Pradum Bind_91284109/1.bmp", "./8th batch/Pradum Bind_91284109/2.bmp", "./8th batch/Pradum Bind_91284109/3.bmp", "./8th batch/Pradum Bind_91284109/4.bmp", "./8th batch/Pradum Bind_91284109/5.bmp"],
  [i++, "Prince Rajbhar", "47366259", "./8th batch/Prince Rajbhar_47366259/1.bmp", "./8th batch/Prince Rajbhar_47366259/2.bmp", "./8th batch/Prince Rajbhar_47366259/3.bmp", "./8th batch/Prince Rajbhar_47366259/4.bmp", "./8th batch/Prince Rajbhar_47366259/5.bmp"],
  [i++, "Ritesh Raj", "44311113", "./8th batch/Ritesh Raj_44311113/1.bmp", "./8th batch/Ritesh Raj_44311113/2.bmp", "./8th batch/Ritesh Raj_44311113/3.bmp", "./8th batch/Ritesh Raj_44311113/4.bmp", "./8th batch/Ritesh Raj_44311113/5.bmp"],
  [i++, "Ruma Yadav", "56256538", "./8th batch/Ruma Yadav_56256538/1.bmp", "./8th batch/Ruma Yadav_56256538/2.bmp", "./8th batch/Ruma Yadav_56256538/3.bmp", "./8th batch/Ruma Yadav_56256538/4.bmp", "./8th batch/Ruma Yadav_56256538/5.bmp"],
  [i++, "Sachin Kumar", "45378429", "./8th batch/Sachin Kumar_45378429/1.bmp", "./8th batch/Sachin Kumar_45378429/2.bmp", "./8th batch/Sachin Kumar_45378429/3.bmp", "./8th batch/Sachin Kumar_45378429/4.bmp", "./8th batch/Sachin Kumar_45378429/5.bmp"],
  [i++, "Sahil Kumar", "20349277", "./8th batch/Sahil Kumar_20349277/1.bmp", "./8th batch/Sahil Kumar_20349277/2.bmp", "./8th batch/Sahil Kumar_20349277/3.bmp", "./8th batch/Sahil Kumar_20349277/4.bmp", "./8th batch/Sahil Kumar_20349277/5.bmp"],
  [i++, "Sahul Yadav", "65282939", "./8th batch/Sahul Yadav_65282939/1.bmp", "./8th batch/Sahul Yadav_65282939/2.bmp", "./8th batch/Sahul Yadav_65282939/3.bmp", "./8th batch/Sahul Yadav_65282939/4.bmp", "./8th batch/Sahul Yadav_65282939/5.bmp"],
  [i++, "Sanjana Rajbhar", "65863655", "./8th batch/Sanjana Rajbhar_65863655/1.bmp", "./8th batch/Sanjana Rajbhar_65863655/2.bmp", "./8th batch/Sanjana Rajbhar_65863655/3.bmp", "./8th batch/Sanjana Rajbhar_65863655/4.bmp", "./8th batch/Sanjana Rajbhar_65863655/5.bmp"],
  [i++, "SHANI GAUTAM", "32476856", "./8th batch/SHANI GAUTAM_32476856/1.bmp", "./8th batch/SHANI GAUTAM_32476856/2.bmp", "./8th batch/SHANI GAUTAM_32476856/3.bmp", "./8th batch/SHANI GAUTAM_32476856/4.bmp", "./8th batch/SHANI GAUTAM_32476856/5.bmp"],
  [i++, "Suman Yadav", "30939812", "./8th batch/Suman Yadav_30939812/1.bmp", "./8th batch/Suman Yadav_30939812/2.bmp", "./8th batch/Suman Yadav_30939812/3.bmp", "./8th batch/Suman Yadav_30939812/4.bmp", "./8th batch/Suman Yadav_30939812/5.bmp"],
  [i++, "Vikas Rajbhar", "18525064", "./8th batch/Vikas Rajbhar_18525064/1.bmp", "./8th batch/Vikas Rajbhar_18525064/2.bmp", "./8th batch/Vikas Rajbhar_18525064/3.bmp", "./8th batch/Vikas Rajbhar_18525064/4.bmp", "./8th batch/Vikas Rajbhar_18525064/5.bmp"],
[i++, "Akash Yadav", "39567518", "./8th batch/Akash Yadav_39567518/1.bmp", "./8th batch/Akash Yadav_39567518/2.bmp", "./8th batch/Akash Yadav_39567518/3.bmp", "./8th batch/Akash Yadav_39567518/4.bmp", "./8th batch/Akash Yadav_39567518/5.bmp"],
  [i++, "Anamika", "27563652", "./8th batch/Anamika_27563652/1.bmp", "./8th batch/Anamika_27563652/2.bmp", "./8th batch/Anamika_27563652/3.bmp", "./8th batch/Anamika_27563652/4.bmp", "./8th batch/Anamika_27563652/5.bmp"],
  [i++, "Anshika", "78774885", "./8th batch/Anshika_78774885/1.bmp", "./8th batch/Anshika_78774885/2.bmp", "./8th batch/Anshika_78774885/3.bmp", "./8th batch/Anshika_78774885/4.bmp", "./8th batch/Anshika_78774885/5.bmp"],
  [i++, "Km Karishma", "62335272", "./8th batch/Km Karishma_62335272/1.bmp", "./8th batch/Km Karishma_62335272/2.bmp", "./8th batch/Km Karishma_62335272/3.bmp", "./8th batch/Km Karishma_62335272/4.bmp", "./8th batch/Km Karishma_62335272/5.bmp"],
  [i++, "Mohammad Tarif", "95289359", "./8th batch/Mohammad Tarif_95289359/1.bmp", "./8th batch/Mohammad Tarif_95289359/2.bmp", "./8th batch/Mohammad Tarif_95289359/3.bmp", "./8th batch/Mohammad Tarif_95289359/4.bmp", "./8th batch/Mohammad Tarif_95289359/5.bmp"],
  [i++, "Punit Pal", "60856921", "./8th batch/Punit Pal_60856921/1.bmp", "./8th batch/Punit Pal_60856921/2.bmp", "./8th batch/Punit Pal_60856921/3.bmp", "./8th batch/Punit Pal_60856921/4.bmp", "./8th batch/Punit Pal_60856921/5.bmp"],
  [i++, "Sahil Gupta", "17661200", "./8th batch/Sahil Gupta_17661200/1.bmp", "./8th batch/Sahil Gupta_17661200/2.bmp", "./8th batch/Sahil Gupta_17661200/3.bmp", "./8th batch/Sahil Gupta_17661200/4.bmp", "./8th batch/Sahil Gupta_17661200/5.bmp"],
  [i++, "Saniya Bano", "56485613", "./8th batch/Saniya Bano_56485613/1.bmp", "./8th batch/Saniya Bano_56485613/2.bmp", "./8th batch/Saniya Bano_56485613/3.bmp", "./8th batch/Saniya Bano_56485613/4.bmp", "./8th batch/Saniya Bano_56485613/5.bmp"],
  [i++, "Shani Yadav", "68116107", "./8th batch/Shani Yadav_68116107/1.bmp", "./8th batch/Shani Yadav_68116107/2.bmp", "./8th batch/Shani Yadav_68116107/3.bmp", "./8th batch/Shani Yadav_68116107/4.bmp", "./8th batch/Shani Yadav_68116107/5.bmp"],
  [i++, "Vishal", "81076288", "./8th batch/Vishal_81076288/1.bmp", "./8th batch/Vishal_81076288/2.bmp", "./8th batch/Vishal_81076288/3.bmp", "./8th batch/Vishal_81076288/4.bmp", "./8th batch/Vishal_81076288/5.bmp"],
  [i++, "Vishal Yadav", "4219920", "./8th batch/Vishal Yadav_4219920/1.bmp", "./8th batch/Vishal Yadav_4219920/2.bmp", "./8th batch/Vishal Yadav_4219920/3.bmp", "./8th batch/Vishal Yadav_4219920/4.bmp", "./8th batch/Vishal Yadav_4219920/5.bmp"],



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
