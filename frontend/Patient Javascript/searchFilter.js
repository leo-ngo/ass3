// function searchID() {
//     var input, filter, table, tr, td, i, txtValue;
//     input = document.getElementById("myInput0");
//     filter = input.value.toUpperCase();
//     table = document.getElementById("patient_table");
//     tr = table.getElementsByTagName("tr");
//     for (i = 1; i < tr.length; i++) {
//         td = tr[i].getElementsByTagName("td")[0];
//         if (td) {
//             txtValue = td.textContent || td.innerText;
//             if (txtValue.toUpperCase().indexOf(filter) > -1) {
//                 tr[i].style.display = "";
//             } else {
//                 tr[i].style.display = "none";
//             }
//         }       
//     }
// }

// function searchName() {
//     var input, filter, table, tr, td, i, txtValue;
//     input = document.getElementById("myInput1");
//     filter = input.value.toUpperCase();
//     table = document.getElementById("patient_table");
//     tr = table.getElementsByTagName("tr");
//     for (i = 1; i < tr.length; i++) {
//         td = tr[i].getElementsByTagName("td")[1];
//         if (td) {
//             txtValue = td.textContent || td.innerText;
//             if (txtValue.toUpperCase().indexOf(filter) > -1) {
//                 tr[i].style.display = "";
//             } else {
//                 tr[i].style.display = "none";
//             }
//         }       
//     }
// }

// function searchGender() {
//     var input, filter, table, tr, td, i, txtValue;
//     input = document.getElementById("myInput2");
//     filter = input.value.toUpperCase();
//     table = document.getElementById("patient_table");
//     tr = table.getElementsByTagName("tr");
//     for (i = 1; i < tr.length; i++) {
//         td = tr[i].getElementsByTagName("td")[2];
//         if (td) {
//             txtValue = td.textContent || td.innerText;
//             if (txtValue.toUpperCase().indexOf(filter) > -1) {
//                 tr[i].style.display = "";
//             } else {
//                 tr[i].style.display = "none";
//             }
//         }       
//     }
// }

// function searchBirthday() {
//     var input, filter, table, tr, td, i, txtValue;
//     input = document.getElementById("myInput3");
//     filter = input.value.toUpperCase();
//     table = document.getElementById("patient_table");
//     tr = table.getElementsByTagName("tr");
//     for (i = 1; i < tr.length; i++) {
//         td = tr[i].getElementsByTagName("td")[3];
//         if (td) {
//             txtValue = td.textContent || td.innerText;
//             if (txtValue.toUpperCase().indexOf(filter) > -1) {
//                 tr[i].style.display = "";
//             } else {
//                 tr[i].style.display = "none";
//             }
//         }       
//     }
// }

// function searchAddress() {
//     var input, filter, table, tr, td, i, txtValue;
//     input = document.getElementById("myInput4");
//     filter = input.value.toUpperCase();
//     table = document.getElementById("patient_table");
//     tr = table.getElementsByTagName("tr");
//     for (i = 1; i < tr.length; i++) {
//         td = tr[i].getElementsByTagName("td")[4];
//         if (td) {
//             txtValue = td.textContent || td.innerText;
//             if (txtValue.toUpperCase().indexOf(filter) > -1) {
//                 tr[i].style.display = "";
//             } else {
//                 tr[i].style.display = "none";
//             }
//         }       
//     }
// }