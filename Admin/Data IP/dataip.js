document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("tambah").addEventListener("click", function() {
        const table = document.getElementById("tabel").getElementsByTagName("tbody")[0];
        const rowCount = table.rows.length;
        const row = table.insertRow(rowCount);

        // Add cells to the new row
        row.insertCell(0).innerHTML = ""; // No.
        row.insertCell(1).innerHTML = ""; // Ip Address
        row.insertCell(2).innerHTML = ""; // User
        row.insertCell(3).innerHTML = ""; // Port Location
        row.insertCell(4).innerHTML = ""; // Pc Mac Address
        row.insertCell(5).innerHTML = ""; // Port Name
        row.insertCell(6).innerHTML = ""; // Nama Switch

        // Create the Opsi cell and add buttons
        const cellOpsi = row.insertCell(7);

        // Edit Button
        const editButton = document.createElement("button");
        editButton.className = "edit-btn";
        
        const editimg = document.createElement("img");
        editimg.setAttribute("src", "/Admin/Assets/IconSpidol.png");
        editimg.setAttribute("alt", "Edit");
        editimg.style.width = "15px";
        editimg.style.height = "15px";
        editButton.appendChild(editimg);
        editButton.appendChild(document.createTextNode("Edit"));
        cellOpsi.appendChild(editButton);

        // Delete Button
        const deleteButton = document.createElement("button");
        deleteButton.className = "dlt-btn";

        const deleteimg = document.createElement("img");
        deleteimg.setAttribute("src", "/Admin/Assets/IconTrash.png");
        deleteimg.setAttribute("alt", "Delete");
        deleteimg.style.width = "15px";
        deleteimg.style.height = "15px";
        deleteButton.appendChild(deleteimg);
        deleteButton.appendChild(document.createTextNode("Delete"));
        cellOpsi.appendChild(deleteButton);

        // Event when clicking the Edit button
        editButton.addEventListener("click", function () {
            alert("Mengedit baris ke-" + (rowCount + 1));
        });

        // Event when clicking the Delete button
        deleteButton.addEventListener("click", function() {
            const row = this.closest('tr'); // Find the closest <tr> to the clicked button
            row.remove(); // Remove the row
        });
    });
});
