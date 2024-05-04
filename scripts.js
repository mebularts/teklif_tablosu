
document.getElementById('logo-upload').addEventListener('change', function(event) {
    var logoPreview = document.getElementById('logo-preview');
    logoPreview.src = URL.createObjectURL(event.target.files[0]);
});

  // Tarih seçiciyi etkinleştir
$(function() {
$("#tarih").datepicker();
});

// Güncel dolar kuru için API isteği yap
$(document).ready(function() {
$.get("https://api.exchangeratesapi.io/latest?base=USD", function(data) {
var dolarKuru = data.rates["TRY"];
$("#dolar_kuru").val(dolarKuru);
});
});



// Fonksiyon: Yeni satır ekle
function addRow() {
var table = document.querySelector('.job-table tbody');
var newRow = document.createElement('tr');
newRow.innerHTML = `
<td contenteditable="true"></td>
<td style="height: 20px;" contenteditable="true" class="numeric"></td>
<td contenteditable="true" class="numeric"></td>
<td contenteditable="true" class="numeric"></td>
<td contenteditable="true" class="numeric"></td>
<td></td>
`;
table.appendChild(newRow);
}

// İşaretleme: "+" işareti
document.addEventListener('DOMContentLoaded', function() {
var addButton = document.createElement('button');
addButton.innerText = '+';
addButton.classList.add('add-button');
addButton.onclick = addRow;
var table = document.querySelector('.job-table');
table.parentElement.insertBefore(addButton, table.nextSibling);

// Toplam tutar hesaplama
table.addEventListener('input', function(event) {
var target = event.target;
if (target.classList.contains('numeric')) {
var row = target.parentElement;
var adet = parseFloat(row.cells[1].innerText);
var fiyat = parseFloat(row.cells[2].innerText);
var kdv = parseFloat(row.cells[3].innerText);
var indirim = parseFloat(row.cells[4].innerText);

var toplamTutar = (adet * fiyat) + (adet * fiyat * (kdv / 100)) - indirim;
row.cells[5].innerText = toplamTutar.toFixed(2);
}
});
});
