let price = [250,645,300,900,50];
console.log(price);
for(let val of price){
    let offerPrice = val/10;
    val = val - offerPrice;
    console.log(val);
}