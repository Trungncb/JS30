function themSinhVien() {
  var masv = document.getElementById("masv").value;
  var hoten = document.getElementById("hoten").value;
  var email = document.getElementById("email").value;
  var sdt = document.getElementById("sdt").value;

  var newRow = document.createElement("tr");
  newRow.innerHTML = `
    <td>${masv}</td>
    <td>${hoten}</td>
    <td>${email}</td>
    <td>${sdt}</td>
  `;
  document.getElementById("danhsach").appendChild(newRow);

  document.getElementById("masv").value = "";
  document.getElementById("hoten").value = "";
  document.getElementById("email").value = "";
  document.getElementById("sdt").value = "";
}
