/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  const result=[];
  for(let i=0;i<transactions.length;i++){
    let cat=transactions[i]["category"];
    let price=transactions[i]["price"];
    let flag=false;
    for(let j=0;j<result.length;j++){
      if(result[j]["category"]==cat){
        result[j]["totalSpent"]+=price;
        flag=true;
        break;
      }
    }
    if(!flag){
      result.push({category:cat,totalSpent:price});
    }
  }
  return result;
}

module.exports = calculateTotalSpentByCategory;
