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
let editModeId = null;

function handleAddOrUpdate() {
  const id = parseInt(document.getElementById('productId').value);
  const name = document.getElementById('productName').value;
  const price = parseInt(document.getElementById('productPrice').value);
  const quantity = parseInt(document.getElementById('productQuantity').value);

  if (!id || !name || isNaN(price) || isNaN(quantity)) {
    alert("Vui lòng nhập đầy đủ thông tin.");
    return;
  }

  if (editModeId !== null) {
    const product = products.find(p => p.id === editModeId);
    product.id = id;
    product.name = name;
    product.price = price;
    product.quantity = quantity;
    editModeId = null;
  } else {
    if (products.some(p => p.id === id)) {
      alert("ID đã tồn tại. Vui lòng chọn ID khác.");
      return;
    }
    products.push(new Product(id, name, price, quantity));
  }

  resetForm();
  renderTable();
}

function renderTable() {
  const tbody = document.getElementById("productTable");
  tbody.innerHTML = "";

  let totalValue = 0;
  let maxPrice = 0;
  let maxProduct = null;

  products.forEach((p, index) => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${p.id}</td>
      <td>${p.name}</td>
      <td>${p.price.toLocaleString()} VNĐ</td>
      <td>${p.quantity}</td>
      <td>${p.getTotalValue().toLocaleString()} VNĐ</td>
      <td>
        <button class="edit" onclick="editProduct(${p.id})">Sửa</button>
        <button class="delete" onclick="deleteProduct(${p.id})">Xóa</button>
      </td>
    `;

    tbody.appendChild(row);
    totalValue += p.getTotalValue();

    if (p.price > maxPrice) {
      maxPrice = p.price;
      maxProduct = p;
    }
  });

  document.getElementById("totalValue").textContent = `Tổng giá trị tồn kho: ${totalValue.toLocaleString()} VNĐ`;
  document.getElementById("mostExpensive").textContent = maxProduct
    ? `Sản phẩm đắt nhất: ${maxProduct.name} (${maxProduct.price.toLocaleString()} VNĐ)`
    : "";
}

function editProduct(id) {
  const product = products.find(p => p.id === id);
  document.getElementById('productId').value = product.id;
  document.getElementById('productName').value = product.name;
  document.getElementById('productPrice').value = product.price;
  document.getElementById('productQuantity').value = product.quantity;
  editModeId = id;
}

function deleteProduct(id) {
  products = products.filter(p => p.id !== id);
  renderTable();
}

function resetForm() {
  document.getElementById('productId').value = "";
  document.getElementById('productName').value = "";
  document.getElementById('productPrice').value = "";
  document.getElementById('productQuantity').value = "";
}
function searchProduct() {
  const searchId = parseInt(document.getElementById("searchId").value);
  if (isNaN(searchId)) {
    alert("Vui lòng nhập ID cần tìm!");
    return;
  }

  const foundProduct = products.find(p => p.id === searchId);
  const tbody = document.getElementById("productTable");
  tbody.innerHTML = "";

  if (foundProduct) {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${foundProduct.id}</td>
      <td>${foundProduct.name}</td>
      <td>${foundProduct.price.toLocaleString()} VNĐ</td>
      <td>${foundProduct.quantity}</td>
      <td>${foundProduct.getTotalValue().toLocaleString()} VNĐ</td>
      <td>
        <button class="edit" onclick="editProduct(${foundProduct.id})">Sửa</button>
        <button class="delete" onclick="deleteProduct(${foundProduct.id})">Xóa</button>
      </td>
    `;
    tbody.appendChild(row);

    document.getElementById("totalValue").textContent = `Tổng giá trị tồn kho: ${foundProduct.getTotalValue().toLocaleString()} VNĐ`;
    document.getElementById("mostExpensive").textContent = `Sản phẩm tìm thấy: ${foundProduct.name}`;
  } else {
    alert("Không tìm thấy sản phẩm với ID đã nhập.");
    document.getElementById("totalValue").textContent = "";
    document.getElementById("mostExpensive").textContent = "";
  }
}

function showAllProducts() {
  document.getElementById("searchId").value = "";
  renderTable();
}

