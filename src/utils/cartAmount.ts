function cartAmount(goods:any):Number {
    var res:Number = 0;
    for (let item of goods) {
        res += item.amount;
    }
    return res;
}

export default cartAmount;