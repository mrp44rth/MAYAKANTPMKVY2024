// Sample data (you can replace this with your actual data)
let i = 1;
const data = [
 // add data here
[i++, "Saurabh Gautam", "30367123", "./Fourth Batch/SaurabhGautam_30367123/1.bmp", "./Fourth Batch/SaurabhGautam_30367123/2.bmp", "./Fourth Batch/SaurabhGautam_30367123/3.bmp", "./Fourth Batch/SaurabhGautam_30367123/4.bmp", "./Fourth Batch/SaurabhGautam_30367123/5.bmp"],
[i++, "Shubham Yadav", "95945171", "./Fourth Batch/ShubhamYadav_95945171/1.bmp", "./Fourth Batch/ShubhamYadav_95945171/2.bmp", "./Fourth Batch/ShubhamYadav_95945171/3.bmp", "./Fourth Batch/ShubhamYadav_95945171/4.bmp", "./Fourth Batch/ShubhamYadav_95945171/5.bmp"],
[i++, "Shilpa Sharma", "02890127", "./Fourth Batch/ShilpaSharma_02890127/1.bmp", "./Fourth Batch/ShilpaSharma_02890127/2.bmp", "./Fourth Batch/ShilpaSharma_02890127/3.bmp", "./Fourth Batch/ShilpaSharma_02890127/4.bmp", "./Fourth Batch/ShilpaSharma_02890127/5.bmp"],
[i++, "Vishal Gautam", "24466358", "./Fourth Batch/VishalGautam_24466358/1.bmp", "./Fourth Batch/VishalGautam_24466358/2.bmp", "./Fourth Batch/VishalGautam_24466358/3.bmp", "./Fourth Batch/VishalGautam_24466358/4.bmp", "./Fourth Batch/VishalGautam_24466358/5.bmp"],
[i++, "Gudiya Rai", "32219957", "./Fourth Batch/Gudiyarai_32219957/1.bmp", "./Fourth Batch/Gudiyarai_32219957/2.bmp", "./Fourth Batch/Gudiyarai_32219957/3.bmp", "./Fourth Batch/Gudiyarai_32219957/4.bmp", "./Fourth Batch/Gudiyarai_32219957/5.bmp"],
[i++, "Rakhi Prajapati", "41921506", "./Fourth Batch/RakhiPrajapati_41921506/1.bmp", "./Fourth Batch/RakhiPrajapati_41921506/2.bmp", "./Fourth Batch/RakhiPrajapati_41921506/3.bmp", "./Fourth Batch/RakhiPrajapati_41921506/4.bmp", "./Fourth Batch/RakhiPrajapati_41921506/5.bmp"],
[i++, "Rishabh", "87440693", "./Fourth Batch/Rishabh_87440693/1.bmp", "./Fourth Batch/Rishabh_87440693/2.bmp", "./Fourth Batch/Rishabh_87440693/3.bmp", "./Fourth Batch/Rishabh_87440693/4.bmp", "./Fourth Batch/Rishabh_87440693/5.bmp"],
[i++, "Saurabh Yadav", "17533834", "./Fourth Batch/SaurabhYadav_17533834/1.bmp", "./Fourth Batch/SaurabhYadav_17533834/2.bmp", "./Fourth Batch/SaurabhYadav_17533834/3.bmp", "./Fourth Batch/SaurabhYadav_17533834/4.bmp", "./Fourth Batch/SaurabhYadav_17533834/5.bmp"],
[i++, "Shradha Rai", "81903726", "./Fourth Batch/ShradhaRai_81903726/1.bmp", "./Fourth Batch/ShradhaRai_81903726/2.bmp", "./Fourth Batch/ShradhaRai_81903726/3.bmp", "./Fourth Batch/ShradhaRai_81903726/4.bmp", "./Fourth Batch/ShradhaRai_81903726/5.bmp"],
[i++, "Joolee Chaurasiya", "39913053", "./Fourth Batch/JooleeChaurasiya_39913053/1.bmp", "./Fourth Batch/JooleeChaurasiya_39913053/2.bmp", "./Fourth Batch/JooleeChaurasiya_39913053/3.bmp", "./Fourth Batch/JooleeChaurasiya_39913053/4.bmp", "./Fourth Batch/JooleeChaurasiya_39913053/5.bmp"],
[i++, "Bandana Bharti", "77888626", "./Fourth Batch/BandanaBharti_77888626/1.bmp", "./Fourth Batch/BandanaBharti_77888626/2.bmp", "./Fourth Batch/BandanaBharti_77888626/3.bmp", "./Fourth Batch/BandanaBharti_77888626/4.bmp", "./Fourth Batch/BandanaBharti_77888626/5.bmp"],
[i++, "Karina", "24377402", "./Fourth Batch/Karina_24377402/1.bmp", "./Fourth Batch/Karina_24377402/2.bmp", "./Fourth Batch/Karina_24377402/3.bmp", "./Fourth Batch/Karina_24377402/4.bmp", "./Fourth Batch/Karina_24377402/5.bmp"],
[i++, "Deepak", "61980101", "./Fourth Batch/Deepak_61980101/1.bmp", "./Fourth Batch/Deepak_61980101/2.bmp", "./Fourth Batch/Deepak_61980101/3.bmp", "./Fourth Batch/Deepak_61980101/4.bmp", "./Fourth Batch/Deepak_61980101/5.bmp"],
[i++, "Suraj Rajbhar", "66362573", "./Fourth Batch/SurajRajbhar_66362573/1.bmp", "./Fourth Batch/SurajRajbhar_66362573/2.bmp", "./Fourth Batch/SurajRajbhar_66362573/3.bmp", "./Fourth Batch/SurajRajbhar_66362573/4.bmp", "./Fourth Batch/SurajRajbhar_66362573/5.bmp"],
[i++, "Aryan Yadav", "67752335", "./Fourth Batch/AryanYadav_67752335/1.bmp", "./Fourth Batch/AryanYadav_67752335/2.bmp", "./Fourth Batch/AryanYadav_67752335/3.bmp", "./Fourth Batch/AryanYadav_67752335/4.bmp", "./Fourth Batch/AryanYadav_67752335/5.bmp"],
[i++, "Lakshmi Rajbhar", "58220510", "./Fourth Batch/LakshmiRajbhar_58220510/1.bmp", "./Fourth Batch/LakshmiRajbhar_58220510/2.bmp", "./Fourth Batch/LakshmiRajbhar_58220510/3.bmp", "./Fourth Batch/LakshmiRajbhar_58220510/4.bmp", "./Fourth Batch/LakshmiRajbhar_58220510/5.bmp"],
[i++, "Priya Sharma", "34375276", "./Fourth Batch/PriyaSharma_34375276/1.bmp", "./Fourth Batch/PriyaSharma_34375276/2.bmp", "./Fourth Batch/PriyaSharma_34375276/3.bmp", "./Fourth Batch/PriyaSharma_34375276/4.bmp", "./Fourth Batch/PriyaSharma_34375276/5.bmp"],
[i++, "Raj Kumar", "69809124", "./Fourth Batch/RajKumar_69809124/1.bmp", "./Fourth Batch/RajKumar_69809124/2.bmp", "./Fourth Batch/RajKumar_69809124/3.bmp", "./Fourth Batch/RajKumar_69809124/4.bmp", "./Fourth Batch/RajKumar_69809124/5.bmp"],
[i++, "Ravi Yadav", "82894775", "./Fourth Batch/RaviYadav_82894775/1.bmp", "./Fourth Batch/RaviYadav_82894775/2.bmp", "./Fourth Batch/RaviYadav_82894775/3.bmp", "./Fourth Batch/RaviYadav_82894775/4.bmp", "./Fourth Batch/RaviYadav_82894775/5.bmp"],
[i++, "Shivam Yadav", "46302745", "./Fourth Batch/ShivamYadav_46302745/1.bmp", "./Fourth Batch/ShivamYadav_46302745/2.bmp", "./Fourth Batch/ShivamYadav_46302745/3.bmp", "./Fourth Batch/ShivamYadav_46302745/4.bmp", "./Fourth Batch/ShivamYadav_46302745/5.bmp"],
[i++, "Ratna Prajapati", "49846167", "./Fourth Batch/RATNA_49846167/1.bmp", "./Fourth Batch/RATNA_49846167/2.bmp", "./Fourth Batch/RATNA_49846167/3.bmp", "./Fourth Batch/RATNA_49846167/4.bmp", "./Fourth Batch/RATNA_49846167/5.bmp"],
[i++, "Sonee Yadav", " 53624685", "./Fourth Batch/SoneeYadav_53624685/1.bmp", "./Fourth Batch/SoneeYadav_53624685/2.bmp", "./Fourth Batch/SoneeYadav_53624685/3.bmp", "./Fourth Batch/SoneeYadav_53624685/4.bmp", "./Fourth Batch/SoneeYadav_53624685/5.bmp"],
[i++, "Sabnam", " 88623702", "./Fourth Batch/Sabnam_ 88623702/1.bmp", "./Fourth Batch/Sabnam_ 88623702/2.bmp", "./Fourth Batch/Sabnam_ 88623702/3.bmp", "./Fourth Batch/Sabnam_ 88623702/4.bmp", "./Fourth Batch/Sabnam_ 88623702/5.bmp"],
[i++, "Priya Yadav", "09692132", "./Fourth Batch/PriyaYadav_09692132/1.bmp", "./Fourth Batch/PriyaYadav_09692132/2.bmp", "./Fourth Batch/PriyaYadav_09692132/3.bmp", "./Fourth Batch/PriyaYadav_09692132/4.bmp", "./Fourth Batch/PriyaYadav_09692132/5.bmp"],
[i++, "Anuradha Rai", "93538250", "./Fourth Batch/AnuradhaRai_93538250/1.bmp", "./Fourth Batch/AnuradhaRai_93538250/2.bmp", "./Fourth Batch/AnuradhaRai_93538250/3.bmp", "./Fourth Batch/AnuradhaRai_93538250/4.bmp", "./Fourth Batch/AnuradhaRai_93538250/5.bmp"],
[i++, "Shubham Kumar", "13760930", "./Fourth Batch/ShubhamKumar_13760930/1.bmp", "./Fourth Batch/ShubhamKumar_13760930/2.bmp", "./Fourth Batch/ShubhamKumar_13760930/3.bmp", "./Fourth Batch/ShubhamKumar_13760930/4.bmp", "./Fourth Batch/ShubhamKumar_13760930/5.bmp"],
[i++, "Atul Yadav", "67593393", "./Fourth Batch/AtulYadav_67593393/1.bmp", "./Fourth Batch/AtulYadav_67593393/2.bmp", "./Fourth Batch/AtulYadav_67593393/3.bmp", "./Fourth Batch/AtulYadav_67593393/4.bmp", "./Fourth Batch/AtulYadav_67593393/5.bmp"],
[i++, "Pankaj Yadav", "54548283", "./Fourth Batch/Pankaj Yadav_54548283/1.bmp", "./Fourth Batch/Pankaj Yadav_54548283/2.bmp", "./Fourth Batch/Pankaj Yadav_54548283/3.bmp", "./Fourth Batch/Pankaj Yadav_54548283/4.bmp", "./Fourth Batch/Pankaj Yadav_54548283/5.bmp"],
  [i++, "Raj Chauhan", "58786227", "./Fourth Batch/Raj Chauhan_58786227/1.bmp", "./Fourth Batch/Raj Chauhan_58786227/2.bmp", "./Fourth Batch/Raj Chauhan_58786227/3.bmp", "./Fourth Batch/Raj Chauhan_58786227/4.bmp", "./Fourth Batch/Raj Chauhan_58786227/5.bmp"],
  [i++, "Saurabh Prajapati", "32342839", "./Fourth Batch/Saurabh Prajapati_32342839/1.bmp", "./Fourth Batch/Saurabh Prajapati_32342839/2.bmp", "./Fourth Batch/Saurabh Prajapati_32342839/3.bmp", "./Fourth Batch/Saurabh Prajapati_32342839/4.bmp", "./Fourth Batch/Saurabh Prajapati_32342839/5.bmp"],
[i++, "Gudiyarai", "32219957", "./Fourth Batch/Gudiyarai_32219957/1.bmp", "./Fourth Batch/Gudiyarai_32219957/2.bmp", "./Fourth Batch/Gudiyarai_32219957/3.bmp", "./Fourth Batch/Gudiyarai_32219957/4.bmp", "./Fourth Batch/Gudiyarai_32219957/5.bmp"],
  [i++, "RAKHIPRAJAPATI", "41921506", "./Fourth Batch/RAKHIPRAJAPATI_41921506/1.bmp", "./Fourth Batch/RAKHIPRAJAPATI_41921506/2.bmp", "./Fourth Batch/RAKHIPRAJAPATI_41921506/3.bmp", "./Fourth Batch/RAKHIPRAJAPATI_41921506/4.bmp", "./Fourth Batch/RAKHIPRAJAPATI_41921506/5.bmp"],
  [i++, "RATNA", "49846167", "./Fourth Batch/RATNA_49846167/1.bmp", "./Fourth Batch/RATNA_49846167/2.bmp", "./Fourth Batch/RATNA_49846167/3.bmp", "./Fourth Batch/RATNA_49846167/4.bmp", "./Fourth Batch/RATNA_49846167/5.bmp"],

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
