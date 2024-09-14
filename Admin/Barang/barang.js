document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("tambah").addEventListener("click", function () {
    const tabel = document
      .getElementById("tabel")
      .getElementsByTagName("tbody")[0];

    const rowCount = tabel.rows.length;
    const row = tabel.insertRow(rowCount);

    const cellNo = row.insertCell(0);
    const cellBarang = row.insertCell(1);
    const cellSerial = row.insertCell(2);
    const cellProperti = row.insertCell(3);
    const cellStatus = row.insertCell(4);
    const cellOpsi = row.insertCell(5);

    cellNo.innerHTML = "";
    cellBarang.innerHTML = "";
    cellSerial.innerHTML = "";
    cellProperti.innerHTML = "";
    cellStatus.innerHTML = "";
    cellOpsi.innerHTML = "";

    const editButton = document.createElement("button");
    editButton.className = "Edit";
    editButton.className = "edit-btn";
    
    const img = document.createElement("img");
    img.setAttribute("src", "/Admin/Assets/IconSpidol.png")
    img.setAttribute("alt", "Edit")
    img.style.width = "15px"
    img.style.height = "15px"
    
    editButton.appendChild(img);
    editButton.appendChild(document.createTextNode("Edit"));

    cellOpsi.appendChild(editButton);

    // Event ketika klik tombol Edit
    editButton.addEventListener("click", function () {
      alert("Mengedit baris ke-" + (rowCount + 1));
    });
  });
});
