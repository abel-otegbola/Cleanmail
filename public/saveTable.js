const { jsPDF } = window.jspdf;

if(!loading) {
    let bulkTableth = document.querySelectorAll("#bulktable thead th")
    let bulkTabletr = document.querySelectorAll("#bulktable tbody tr")
    console.log(loading, bulkTableth, bulkTabletr)
}
// var head = ["ID", "Name", "Country"];
// var rows = [
//    [1, "Shaw", "Tanzania"],
//    [2, "Nelson", "Kazakhstan"],
//    [3, "Garcia", "Madagascar"]
// ];
// var doc = new jsPDF('p', 'pt');
// doc.autoTable(head, rows);
// doc.save('table.pdf');

let saveButton = document.getElementById("save");

saveButton.addEventListener("click", () => {
    console.log("save")
    doc.save("table.pdf")
})