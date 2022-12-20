//your code here
let grandtotal = 0;
function add(){
  let itemName = document.getElementById('item-name-input').value;
  let price = document.getElementById('item-price-input').value;
  if(!itemName){
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
  grandtotal+=Number(price);
  let entry=document.getElementById("entry");
  let tr=document.createElement("tr");
  let tdItem=document.createElement("td");
  tdItem.style.paddingRight="10px";
  let tdPrice=document.createElement("td");
  tdItem.innerText=itemName;
  tdPrice.innerText=`$ ${price}`;
  tr.appendChild(tdItem);
  tr.appendChild(tdPrice);
  entry.after(tr);
  let totalprice=document.getElementById("total");
  totalprice.innerText = `$ ${grandtotal}`;

  document.getElementById('item-name-input').value="";
  document.getElementById('item-price-input').value="";
}


let button=document.getElementById("subm");
// button.onClick=add;
button.addEventListener("click", add);

