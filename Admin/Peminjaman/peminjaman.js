document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("tambah").addEventListener("click", function () {
    const table = document
      .getElementById("tabel")
      .getElementsByTagName("tbody")[0];

    const rowCount = table.rows.length;
    const row = table.insertRow(rowCount);

    // Buat Nambahin cell Table
    const cellNo = row.insertCell(0);
    const cellNama = row.insertCell(1);
    const cellNIK = row.insertCell(2);
    const cellNoHP = row.insertCell(3);
    const cellBarang = row.insertCell(4);
    const cellITOut = row.insertCell(5);
    const cellTglOut = row.insertCell(6);
    const cellITIn = row.insertCell(7);
    const cellTglIn = row.insertCell(8);
    const cellStatus = row.insertCell(9);
    const cellKeperluan = row.insertCell(10);
    const cellOpsi = row.insertCell(11);

    // Buat isi Data dalam Cell table
    cellNo.innerHTML = "";
    cellNama.innerHTML = "";
    cellNIK.innerHTML = "";
    cellNoHP.innerHTML = "";
    cellBarang.innerHTML = "";
    cellITOut.innerHTML = "";
    cellTglOut.innerHTML = "";
    cellITIn.innerHTML = "";
    cellTglIn.innerHTML = "";
    cellStatus.innerHTML = "";
    cellKeperluan.innerHTML = "";

    // Buat Edit Data dalam cell Button
    const editButton = document.createElement("button");
    editButton.innerHTML = "Edit";
    editButton.className = "edit-btn";

    const img = document.createElement("img");
    img.setAttribute("src", "/Admin/Assets/IconSpidol.png")
    img.setAttribute("alt", "Edit")
    img.style.width = "15px";
    img.style.height = "15px";

    editButton.appendChild(img);
    cellOpsi.appendChild(editButton);

    // Event ketika klik tombol Edit
    editButton.addEventListener("click", function () {
      alert("Mengedit baris ke-" + (rowCount + 1));
    });
  });
});
