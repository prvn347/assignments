/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/
 

function calculateTotalSpentByCategory(transactions = [
  {
    id: 1,
    timestamp: 1656076800000,
    price: 10,
    category: 'Food',
    itemName: 'Pizza',
  },
  {
    id: 2,
    timestamp: 1656259600000,
    price: 20,
    category: 'Food',
    itemName: 'Burger',
  },
]) {
  let totalprice = 0;

  for(let i = 0; i < transactions.length;i++){

    
  if( transactions[i] < transactions.length){
    if(transactions["category" = 'Food']){
      totalprice += transactions.price ;
      return totalprice;
    }
    
  }
  }
  return [] ;
}
console.log(totalprice);

module.exports = calculateTotalSpentByCategory;
