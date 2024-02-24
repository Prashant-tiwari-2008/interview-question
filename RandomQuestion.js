//Calculate total price of food

const foodPrices = {
    burger: 50,
    fries: 30,
    soda: 8,
    pizza: 60,
    salad: 10,
    water: 2,
    sandwich: 30,
    soup: 10,
    coffee: 100
  }
  
  const orders = [{
      tableNumber: 1,
      items: ['burger', 'fries', 'soda', 'fries']
    },
    {
      tableNumber: 2,
      items: ['pizza', 'salad', 'water', 'soda', 'salad']
    },
    {
      tableNumber: 3,
      items: ['sandwich', 'soup', 'coffee']
    },
  ];
  
  function getTotalPrice(prices, orders){
      let TotalOrder = {}
      let TotalPrice = 0;
      
      //CalCulating total order
      for(ele of orders){
         for(item of ele.items){
             TotalOrder[item] = (TotalOrder[item] || 0) +1
         }
      }
      
      //Calculating total price
      for(ele in TotalOrder){
          TotalPrice += prices[ele] + TotalOrder[ele]
      }
      
      return TotalPrice
      
  }
  
  console.log(getTotalPrice(foodPrices,orders))