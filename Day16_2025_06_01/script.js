class Product {
  constructor(id, name, price, quantity) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }

  getTotalValue() {
    return this.price * this.quantity;
  }
}

let products = [];
let editingId = null;

function addOrUpdateProduct() {
  const id = parseInt(document.getElementById("productId").value);
  const name = document.getElementById("productName").value;
  const price = parseFloat(document.getElementById("productPrice").value);
  const quantity = parseInt(document.getElementById("productQuantity").value);

  if (!id || !name || !price || !quantity) {
    alert("Vui lòng nhập đầy đủ thông tin!");
    return;
  }

  const existingIndex = products.findIndex(p => p.id === id);

  if (editingId !== null) {
    const index = products.findIndex(p => p.id === editingId);
    products[index] = new Product(id, name, price, quantity);
    editingId = null;
  } else {
    if (existingIndex !== -1) {
      alert("ID đã tồn tại. Vui lòng chọn ID khác.");
      return;
    }
    products.push(new Product(id, name, price, quantity));
  }

  clearForm();
  renderTable();
}

function clearForm() {
  document.getElementById("productId").value = "";
  document.getElementById("productName").value = "";
  document.getElementById("productPrice").value = "";
  document.getElementById("productQuantity").value = "";
}

function renderTable() {
  const table = document.getElementById("productTable");
  table.innerHTML = "";

  products.forEach(product => {
    const row = table.insertRow();
    row.innerHTML = `
      <td>${product.id}</td>
      <td>${product.name}</td>
      <td>${product.price.toLocaleString()} VNĐ</td>
      <td>${product.quantity}</td>
      <td>${product.getTotalValue().toLocaleString()} VNĐ</td>
      <td>
        <button class="edit-btn" onclick="editProduct(${product.id})">Sửa</button>
        <button class="delete-btn" onclick="deleteProduct(${product.id})">Xóa</button>
      </td>
    `;
  });

  const total = products.reduce((sum, p) => sum + p.getTotalValue(), 0);
  document.getElementById("totalValue").innerText =
    `Tổng giá trị tồn kho: ${total.toLocaleString()} VNĐ`;

  const expensive = products.reduce((max, p) => p.price > max.price ? p : max, products[0]);
  if (expensive) {
    document.getElementById("mostExpensive").innerText =
      `Sản phẩm đắt nhất: ${expensive.name} (${expensive.price.toLocaleString()} VNĐ)`;
  } else {
    document.getElementById("mostExpensive").innerText = "";
  }
}

function deleteProduct(id) {
  products = products.filter(p => p.id !== id);
  renderTable();
}

function editProduct(id) {
  const product = products.find(p => p.id === id);
  if (product) {
    document.getElementById("productId").value = product.id;
    document.getElementById("productName").value = product.name;
    document.getElementById("productPrice").value = product.price;
    document.getElementById("productQuantity").value = product.quantity;
    editingId = id;
  }
}

products.push(new Product(1, "Iphone 12", 6000000, 3));
products.push(new Product(2, "Samsung S6", 1000000, 4));
renderTable();
