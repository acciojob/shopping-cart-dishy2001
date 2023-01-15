//your code here
let grandtotal = 0;
// let itemArr = [];
function add(){
  let itemName = document.getElementById('item-name-input').value;
  let price = document.getElementById('item-price-input').value;
  if (!itemName) {
    alert("Enter a valid Item name !!");
    document.getElementById('item-name-input').value="";
    document.getElementById('item-price-input').value="";
    return;
  }
  if(Number(price)<=0){
    alert("Enter a valid Price !!");
    document.getElementById('item-name-input').value="";
    document.getElementById('item-price-input').value="";
    return;
  }
  let entry=document.getElementById("entry");
  let tr=document.createElement("tr");
  // let tdQuantity=document.createElement("td");
  // tdQuantity.setAttribute("ALIGN", "center");
  // if (itemArr.includes(itemName)) {
	  
  // }
  // itemArr.push(itemName);
  grandtotal+=Number(price);
  let tdItem=document.createElement("td");
  tdItem.setAttribute("ALIGN", "center");
  let tdPrice=document.createElement("td");
  tdItem.innerText=itemName;
  tdPrice.setAttribute("ALIGN", "center");
  tdPrice.innerText=`$ ${price}`;
  tr.appendChild(tdItem);
  tr.appendChild(tdPrice);
  entry.after(tr);
  let totalprice=document.getElementById("total");
  totalprice.innerText = `$ ${grandtotal}`;

  document.getElementById('item-name-input').value="";
  document.getElementById('item-price-input').value="";
}

// let button=document.getElementById("subm");
// // button.onClick=add;
// button.addEventListener("click", add);

