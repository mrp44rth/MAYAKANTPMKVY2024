// Sample data (you can replace this with your actual data)
let i = 1;
const data = [
 // add data here
[i++, "Abhay Raj Gautam", "82277432", "./First Batch/AbhayRajGautam 82277432/1.bmp", "./First Batch/AbhayRajGautam 82277432/2.bmp", "./First Batch/AbhayRajGautam 82277432/3.bmp", "./First Batch/AbhayRajGautam 82277432/4.bmp", "./First Batch/AbhayRajGautam 82277432/5.bmp"],
[i++, "Ajad Gautam", "69392870", "./First Batch/AjadGautam 69392870/1.bmp", "./First Batch/AjadGautam 69392870/ajad gautam s_o premchand (5).bmp", "./First Batch/AjadGautam 69392870/ajad gautam s_o premchand (4).bmp", "./First Batch/AjadGautam 69392870/ajad gautam s_o premchand (2).bmp", "./First Batch/AjadGautam 69392870/ajad gautam s_o premchand (10).bmp"],
[i++, "Akanksha Gupta", "48004332", "./First Batch/AkankshaGupta 48004332/1.bmp", "./First Batch/AkankshaGupta 48004332/2.bmp", "./First Batch/AkankshaGupta 48004332/3.bmp", "./First Batch/AkankshaGupta 48004332/4.bmp", "./First Batch/AkankshaGupta 48004332/5.bmp"],
[i++, "Akash Yadav", "59566878", "./First Batch/AkashYadav 59566878/1.bmp", "./First Batch/AkashYadav 59566878/2.bmp", "./First Batch/AkashYadav 59566878/3.bmp", "./First Batch/AkashYadav 59566878/4.bmp", "./First Batch/AkashYadav 59566878/5.bmp"],
[i++, "Alka Rai", "79047287", "./First Batch/AlkaRai 79047287/1.bmp", "./First Batch/AlkaRai 79047287/2.bmp", "./First Batch/AlkaRai 79047287/3.bmp", "./First Batch/AlkaRai 79047287/4.bmp", "./First Batch/AlkaRai 79047287/5.bmp"],
[i++, "Anamika", "59457793", "./First Batch/Anamika 59457793/1.bmp", "./First Batch/Anamika 59457793/2.bmp", "./First Batch/Anamika 59457793/3.bmp", "./First Batch/Anamika 59457793/4.bmp", "./First Batch/Anamika 59457793/5.bmp"],
[i++, "Ankush Yadav", "9400009", "./First Batch/AnkushYadav 9400009/1.bmp", "./First Batch/AnkushYadav 9400009/2.bmp", "./First Batch/AnkushYadav 9400009/3.bmp", "./First Batch/AnkushYadav 9400009/4.bmp", "./First Batch/AnkushYadav 9400009/5.bmp"],
[i++, "Anuj Kumar", "95426209", "./First Batch/AnujKumar 95426209/1.bmp", "./First Batch/AnujKumar 95426209/2.bmp", "./First Batch/AnujKumar 95426209/3.bmp", "./First Batch/AnujKumar 95426209/4.bmp", "./First Batch/AnujKumar 95426209/5.bmp"],
[i++, "Anujkumar Mithailal Jaiswar", "74995211", "./First Batch/AnujkumarMithailalJaiswar 74995211/1.bmp", "./First Batch/AnujkumarMithailalJaiswar 74995211/2.bmp", "./First Batch/AnujkumarMithailalJaiswar 74995211/3.bmp", "./First Batch/AnujkumarMithailalJaiswar 74995211/4.bmp", "./First Batch/AnujkumarMithailalJaiswar 74995211/5.bmp"],
[i++, "Arati Rajbhar", "67522208", "./First Batch/AratiRajbhar 67522208/1.bmp", "./First Batch/AratiRajbhar 67522208/2.bmp", "./First Batch/AratiRajbhar 67522208/3.bmp", "./First Batch/AratiRajbhar 67522208/4.bmp", "./First Batch/AratiRajbhar 67522208/5.bmp"],
[i++, "Archana", "67459647", "./First Batch/Archana 67459647/1.bmp", "./First Batch/Archana 67459647/2.bmp", "./First Batch/Archana 67459647/3.bmp", "./First Batch/Archana 67459647/4.bmp", "./First Batch/Archana 67459647/5.bmp"],
[i++, "Arun Kumar", "41777592", "./First Batch/ArunKumar 41777592/1.bmp", "./First Batch/ArunKumar 41777592/2.bmp", "./First Batch/ArunKumar 41777592/3.bmp", "./First Batch/ArunKumar 41777592/4.bmp", "./First Batch/ArunKumar 41777592/5.bmp"],
[i++, "Ashish Yadav", "24581601", "./First Batch/AshishYadav 24581601/1.bmp", "./First Batch/AshishYadav 24581601/2.bmp", "./First Batch/AshishYadav 24581601/3.bmp", "./First Batch/AshishYadav 24581601/4.bmp", "./First Batch/AshishYadav 24581601/5.bmp"],
[i++, "Avanish Yadav", "29864683", "./First Batch/AvanishYadav 29864683/1.bmp", "./First Batch/AvanishYadav 29864683/2.bmp", "./First Batch/AvanishYadav 29864683/3.bmp", "./First Batch/AvanishYadav 29864683/4.bmp", "./First Batch/AvanishYadav 29864683/5.bmp"],
[i++, "Chanda Rajbhar", "75496667", "./First Batch/ChandaRajbhar 75496667/1.bmp", "./First Batch/ChandaRajbhar 75496667/2.bmp", "./First Batch/ChandaRajbhar 75496667/3.bmp", "./First Batch/ChandaRajbhar 75496667/4.bmp", "./First Batch/ChandaRajbhar 75496667/5.bmp"],
[i++, "Chandan Yadav", "53352503", "./First Batch/ChandanYadav 53352503/1.bmp", "./First Batch/ChandanYadav 53352503/2.bmp", "./First Batch/ChandanYadav 53352503/3.bmp", "./First Batch/ChandanYadav 53352503/4.bmp", "./First Batch/ChandanYadav 53352503/5.bmp"],
[i++, "Deepak Kumar Yadav", "80525949", "./First Batch/DeepakKumarYadav 80525949/1.bmp", "./First Batch/DeepakKumarYadav 80525949/2.bmp", "./First Batch/DeepakKumarYadav 80525949/3.bmp", "./First Batch/DeepakKumarYadav 80525949/4.bmp", "./First Batch/DeepakKumarYadav 80525949/5.bmp"],
[i++, "Dilip Gautam", "28706705", "./First Batch/DilipGautam 28706705/1.bmp", "./First Batch/DilipGautam 28706705/2.bmp", "./First Batch/DilipGautam 28706705/3.bmp", "./First Batch/DilipGautam 28706705/4.bmp", "./First Batch/DilipGautam 28706705/5.bmp"],
[i++, "Gudeeya Yadav", "10510726", "./First Batch/GudeeyaYadav 10510726/1.bmp", "./First Batch/GudeeyaYadav 10510726/2.bmp", "./First Batch/GudeeyaYadav 10510726/3.bmp", "./First Batch/GudeeyaYadav 10510726/4.bmp", "./First Batch/GudeeyaYadav 10510726/5.bmp"],
[i++, "Gyanchand Srivastav", "59646679", "./First Batch/GyanchandSrivastav 59646679/1.bmp", "./First Batch/GyanchandSrivastav 59646679/2.bmp", "./First Batch/GyanchandSrivastav 59646679/3.bmp", "./First Batch/GyanchandSrivastav 59646679/4.bmp", "./First Batch/GyanchandSrivastav 59646679/5.bmp"],
[i++, "Jyoti Yadav", "73395538", "./First Batch/JyotiYadav 73395538/1.bmp", "./First Batch/JyotiYadav 73395538/2.bmp", "./First Batch/JyotiYadav 73395538/3.bmp", "./First Batch/JyotiYadav 73395538/4.bmp", "./First Batch/JyotiYadav 73395538/5.bmp"],
[i++, "Priya", "28395728", "./First Batch/Priya 28395728/1.bmp", "./First Batch/Priya 28395728/2.bmp", "./First Batch/Priya 28395728/3.bmp", "./First Batch/Priya 28395728/4.bmp", "./First Batch/Priya 28395728/5.bmp"],
[i++, "Priya Yadav", "73174743", "./First Batch/PriyaYadav 73174743/1.bmp", "./First Batch/PriyaYadav 73174743/2.bmp", "./First Batch/PriyaYadav 73174743/3.bmp", "./First Batch/PriyaYadav 73174743/4.bmp", "./First Batch/PriyaYadav 73174743/5.bmp"],
[i++, "Priyanka Prajapati", "19280827", "./First Batch/PriyankaPrajapati 19280827/1.bmp", "./First Batch/PriyankaPrajapati 19280827/2.bmp", "./First Batch/PriyankaPrajapati 19280827/3.bmp", "./First Batch/PriyankaPrajapati 19280827/4.bmp", "./First Batch/PriyankaPrajapati 19280827/5.bmp"],
[i++, "Priyanka Yadav", "11531468", "./First Batch/PriyankaYadav 11531468/1.bmp", "./First Batch/PriyankaYadav 11531468/2.bmp", "./First Batch/PriyankaYadav 11531468/3.bmp", "./First Batch/PriyankaYadav 11531468/4.bmp", "./First Batch/PriyankaYadav 11531468/5.bmp"],
[i++, "Priyanshi Yadav", "23125653", "./First Batch/PriyanshiYadav 23125653/1.bmp", "./First Batch/PriyanshiYadav 23125653/2.bmp", "./First Batch/PriyanshiYadav 23125653/3.bmp", "./First Batch/PriyanshiYadav 23125653/4.bmp", "./First Batch/PriyanshiYadav 23125653/5.bmp"],
[i++, "Raginee", "53696940", "./First Batch/Raginee 53696940/1.bmp", "./First Batch/Raginee 53696940/2.bmp", "./First Batch/Raginee 53696940/3.bmp", "./First Batch/Raginee 53696940/4.bmp", "./First Batch/Raginee 53696940/5.bmp"],
[i++, "Raj Pathak", "83216520", "./First Batch/RajPathak 83216520/1.bmp", "./First Batch/RajPathak 83216520/2.bmp", "./First Batch/RajPathak 83216520/3.bmp", "./First Batch/RajPathak 83216520/4.bmp", "./First Batch/RajPathak 83216520/5.bmp"],
[i++, "Ram Ji Tiwari", "64641486", "./First Batch/RamJiTiwari 64641486/1.bmp", "./First Batch/RamJiTiwari 64641486/2.bmp", "./First Batch/RamJiTiwari 64641486/3.bmp", "./First Batch/RamJiTiwari 64641486/4.bmp", "./First Batch/RamJiTiwari 64641486/5.bmp"],
[i++, "Rashmi Bharti", "71072541", "./First Batch/RashmiBharti 71072541/1.bmp", "./First Batch/RashmiBharti 71072541/2.bmp", "./First Batch/RashmiBharti 71072541/3.bmp", "./First Batch/RashmiBharti 71072541/4.bmp", "./First Batch/RashmiBharti 71072541/5.bmp"],


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
