const arr = [1,2,5,"5",true,false]

function checkArray(arr){
    let isUnique = true;
    const newArr = []
    for(let i = 0; i < arr.length; i++) {
        if(!newArr.includes(arr[i])) {
            newArr.push(arr[i])
        } else {
            isUnique = false
            break;
        }
    }

    if(isUnique === true) {
        return "is unique"
    } else {
        return "not unique"
    }

}

console.log(checkArray(arr))

//////////////////////////////////////////////////////////////////


function checkNumArray(arr){
    let min = arr[0]
    let max = arr[0]
    let count = 0
    for(let i = 1; i < arr.length; i++) {
        if(min > arr[i]){
            min = arr[i]
        }
        if(max < arr[i]){
            max = arr[i]
        }
    }

    for(let i = min + 1; i < max; i++){
        if(!arr.includes(i)){
            count++
        }
    }
    return count
    

}
console.log(checkNumArray([1,2,3,10]))

////////////////////////////////////////////////////////////////


function CoffeeShop(name, menu) {
    this.name = name;
    this.menu = menu;
    this.orders = [];
  
    this.addOrder = function (item) {
      let foundItem = null;
      for (let i = 0; i < this.menu.length; i++) {
        if (this.menu[i].item === item) {
          foundItem = this.menu[i];
          break;
        }
      }
      if (foundItem) {
        this.orders.push(item);
      } else {
        console.log(`${item} - Այս տեսականին չունենք`) ;
      }
    };
  
    this.fillOrder = function () {
      if (this.orders.length > 0) {
        const item = this.orders.shift();
        return `Ձեր ${item} -ը պատրաստ է!`;
      } else {
        return "Բոլոր պատվերները կատարված են";
      }
    };
  
    this.listOrders = function () {
      return this.orders;
    };
  
    this.dueAmount = function () {
      let totalAmount = 0;
      this.orders.forEach((order) => {
        this.menu.forEach((menuItem) => {
          if (menuItem.item === order) {
            totalAmount += menuItem.price;
          }
        });
      });
      return totalAmount;
    };
  
    this.cheapItem = function () {
      let cheapestItem = this.menu[0];
      for (let i = 1; i < this.menu.length; i++) {
        if (this.menu[i].price < cheapestItem.price) {
          cheapestItem = this.menu[i];
        }
      }
      return cheapestItem.item;
    };
  
    this.drinkOnly = function () {
      const drinkItems = [];
      this.menu.forEach((menuItem) => {
        if (menuItem.type === "drink") {
          drinkItems.push(menuItem.item);
        }
      });
      return drinkItems;
    };
  
    this.foodOnly = function () {
      const foodItems = [];
      this.menu.forEach((menuItem) => {
        if (menuItem.type === "food") {
          foodItems.push(menuItem.item);
        }
      });
      return foodItems;
    };
  }
  
  
  const menu = [
    { item: "սուրճ", type: "drink", price: 1000 },
    { item: "թեյ", type: "drink", price: 800 },
    { item: "կռուասան", type: "food", price: 1600 },
    { item: "պոնչիկ", type: "food", price: 200 },
  ];
  
  const myCoffeeShop = new CoffeeShop("Best Coffee", menu);
  
  myCoffeeShop.addOrder("սուրճ");
  myCoffeeShop.addOrder("թեյ");
  myCoffeeShop.addOrder("պոնչիկ");
  
  console.log(myCoffeeShop.listOrders()); 
  
  console.log(myCoffeeShop.fillOrder());

  console.log(myCoffeeShop.dueAmount()); 
  
  console.log(myCoffeeShop.cheapItem()); 
  
  console.log(myCoffeeShop.drinkOnly()); 
  
  console.log(myCoffeeShop.foodOnly()); 