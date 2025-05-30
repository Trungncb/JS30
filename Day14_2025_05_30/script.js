let editIndex = -1;

function themSinhVien() {
  const masv = document.getElementById("masv").value;
  const hoten = document.getElementById("hoten").value;
  const email = document.getElementById("email").value;
  const sdt = document.getElementById("sdt").value;

  const danhSach = document.getElementById("danhsach");
  const btn = document.getElementById("btn-action");

  if (btn.textContent === "Thêm") {
    const row = danhSach.insertRow();
    row.innerHTML = `
      <td>${masv}</td>
      <td>${hoten}</td>
      <td>${email}</td>
      <td>${sdt}</td>
      <td><button onclick="suaSinhVien(this)">Sửa</button></td>
    `;
  } else {
    const row = danhSach.rows[editIndex];
    row.cells[0].textContent = masv;
    row.cells[1].textContent = hoten;
    row.cells[2].textContent = email;
    row.cells[3].textContent = sdt;

    btn.textContent = "Thêm";
    editIndex = -1;
  }

  document.getElementById("masv").value = "";
  document.getElementById("hoten").value = "";
  document.getElementById("email").value = "";
  document.getElementById("sdt").value = "";
}

function suaSinhVien(button) {
  const row = button.parentElement.parentElement;
  editIndex = row.rowIndex - 1;

  document.getElementById("masv").value = row.cells[0].textContent;
  document.getElementById("hoten").value = row.cells[1].textContent;
  document.getElementById("email").value = row.cells[2].textContent;
  document.getElementById("sdt").value = row.cells[3].textContent;

  document.getElementById("btn-action").textContent = "Lưu";
}
