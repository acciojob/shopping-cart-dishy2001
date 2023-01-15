let grandtotal = 0;
const addData = () => {
  let name = document.getElementById('item-name-input').value;
  let qty = document.getElementById('item-qty-input').value;
  let price = document.getElementById('item-price-input').value;
  let table = document.getElementById('table1');
  let newRow = table.insertRow(table.rows.length - 1);
  let namecell = newRow.insertCell(0);
  let qtycell = newRow.insertCell(1);
  let pricecell = newRow.insertCell(2);
  let totalprice = newRow.insertCell(3);
  if (qty <= 0 && price <= 0) {
	  document.getElementById('item-qty-input').value = "";
	  document.getElementById('item-price-input').value = "";
	  return;
  }
  if (qty <= 0) {
	  document.getElementById('item-qty-input').value = "";
	  return;
  }
  if (price <= 0) {
	  document.getElementById('item-price-input').value = "";
	  return;
  }
  namecell.classList.add("item");
  totalprice.classList.add("price");
  namecell.innerHTML = name;
  qtycell.innerHTML = qty;
  pricecell.innerHTML = price;
  totalprice.innerHTML = qty * price;
  grandtotal += qty * price;
  document.getElementById('total').innerHTML = "Total Ammount " + grandtotal + " $";
  document.getElementById('myinputs').reset();
}