//price calculation__________________________________________
function getItemsTotalCost(item,itemQnt,Price){
    const itemPrice=(document.getElementById(item)).innerText;
    const price=parseFloat(itemPrice);
    const itemQuantityString=document.getElementById(itemQnt);
    const itemQuantity=itemQuantityString.value;
    let quantity;
    if(itemQuantity=='') quantity='0';
    else quantity=parseFloat(itemQuantity);
    itemQuantityString.value='';
    const total= price * quantity;
    document.getElementById(Price).innerText=total;
    console.log(total)
    return total;
}

document.getElementById('calculate').addEventListener('click',function(){
    const clock = getItemsTotalCost('clock','clock-quantity','clock-total');
    const light = getItemsTotalCost('light','light-quantity','light-total');
    const Choco= getItemsTotalCost('Choco','Choco-quantity','Choco-total');
    const Gift = getItemsTotalCost('Gift','Gift-quantity','Gift-total');
    const total = clock+light+Choco+Gift;
    document.getElementById('total').innerText=total.toFixed(2);
    document.getElementById('grand-total').innerText=total.toFixed(2);
})  


//promo___________________________________________

document.getElementById('promo-btn').addEventListener('click',function(){
    const grandTotal=document.getElementById('grand-total');
    gTotal=parseFloat(grandTotal.innerText);
    const promofield=document.getElementById('promo-field');
    const code=promofield.value;
    promofield.value='';
    if(code=='1234') {
        grandTotal.innerText=(gTotal-(gTotal*.25)).toFixed(2);
    }
    else{
        alert('Ooops! Wrong Promo!')
    }
})
//payment_______________________________________________

const pay=document.getElementById('pay-btn');
pay.addEventListener('click',function(){
    alert('Payment Done');
})