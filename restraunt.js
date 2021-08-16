class Food{
    cost = this.calculatePrice;
    calories = this.calculateCalories;
};

const hamburgerProps = {
  SIZE_SMALL: 'small',
  SIZE_LARGE: 'large',
  STUFF_CHEESE: 'cheese',
  STUFF_SALAD: 'salad',
  STUFF_POTATO: 'potato',
};

const hamburgerPrices = {
  small: 50,
  large: 100,
  cheese: 10,
  salad: 20,
  potato: 15,
};

const hamburgerCallories = {
  small: 20,
  large: 40,
  cheese: 20,
  salad: 5,
  potato: 10,
};

const saladKind = {
  fat: 'Olivier salad',
  fit: 'Caesarus salad'
}

const saladGramms = {
  small: 100,
  medium: 150,
  large: 200,
};

const saladPrices = {
  Caesarus: 100, //for 100g
  Olivier: 50, //for 100g
};

const saladCallories = {
  Caesarus: 20, //for 100g
  Olivier: 80, //for 100g
};

const drinkProps = {
  cokeCost: 50,
  cokeCalls: 40,
  coffeeCost: 80,
  coffeeCalls: 20,
};

Object.freeze(hamburgerProps,hamburgerPrices,hamburgerCallories,saladKind,
              saladGramms,saladPrices,saladCallories,drinkProps)

  class Hamburger extends Food{
    size = this.size;
    stuffing = this.stuffing;
    calculatePrice(){
      let props = [this.size,this.stuffing];
      const prices = props.flat();
      for (let item of prices){
          if(item === 'small') {
            prices.push(hamburgerPrices.small);
          } else if(item === 'large'){
              prices.push(hamburgerPrices.large);
            }
          if(item === 'cheese'){
            prices.push(hamburgerPrices.cheese);
          } else if(item === 'salad'){
            prices.push(hamburgerPrices.salad);
          } else if(item === 'potato') {
            prices.push(hamburgerPrices.potato);
          }
      }
      props.length = 0;
      props = prices.filter((item) => {
        if(typeof item === 'number') return item;
      });
      
      return this.cost = `${props.reduce((cost, item) =>{
          cost += item;
          return cost;
      })} tugs`;
    };
  
    calculateCalories(){
      let props = [this.size,this.stuffing];
      const calories = props.flat();
      for (let item of calories){
          if(item === 'small') {
            calories.push(hamburgerCallories.small);
          } else if(item === 'large'){
             calories.push(hamburgerCallories.large);
            }
          if(item === 'cheese'){
            calories.push(hamburgerCallories.cheese);
          } else if(item === 'salad'){
            calories.push(hamburgerCallories.salad);
          } else if(item === 'potato') {
            calories.push(hamburgerCallories.potato);
          }
      }
      props.length = 0;
      props = calories.filter((item) => {
        if(typeof item === 'number') return item;
      });
      
      return this.calories = `${props.reduce((cost, item) =>{
          cost += item;
          return cost;
      })} calories`;
    };
  };

  Hamburger.prototype.getSize = function(size){
    if (size === 1) this.size = hamburgerProps.SIZE_SMALL;
    if (size === 2) this.size = hamburgerProps.SIZE_LARGE;
  };
  
  Hamburger.prototype.getStuffing = function(...stuffing){
    const mix = stuffing;
    const stuffList = [];
    for(let stuff of mix){
      if(stuff.toLowerCase() === 'cheese') stuffList.push(hamburgerProps.STUFF_CHEESE);
      if(stuff.toLowerCase() === 'salad') stuffList.push(hamburgerProps.STUFF_SALAD);
      if(stuff.toLowerCase() === 'potato') stuffList.push(hamburgerProps.STUFF_POTATO)
    }
    this.stuffing = stuffList;
  };
  
  class Salad extends Food{
    weight = this.weight;
    kindOfSalad = this.kindOfSalad;
    calculatePrice(){
      const props = [this.kindOfSalad, this.weight];
      const price = {};
      for(let prop of props){
        
          if(prop === 'Caesarus salad'){
              price.kind = prop;          
          }
          if(prop === '100g' && price.kind === 'Caesarus salad'){
              price.cost = `${saladPrices.Caesarus} tugs`;
          };
          if(prop === '150g' && price.kind === 'Caesarus salad'){
              price.cost = `${saladPrices.Caesarus*1.5} tugs`;
          };
          if(prop === '200g' && price.kind === 'Caesarus salad'){
              price.cost = `${saladPrices.Caesarus*2} tugs`;
          }; 
          
          if(prop === 'Olivier salad'){
              price.kind = prop;
          };
          if(prop === '100g' && price.kind === 'Olivier salad'){
              price.cost = `${saladPrices.Olivier} tugs`;
          };
          if(prop === '150g' && price.kind === 'Olivier salad'){
              price.cost = `${saladPrices.Olivier*1.5} tugs`;
          };
          if(prop === '200g' && price.kind === 'Olivier salad'){
              price.cost = `${saladPrices.Olivier*2} tugs`;
          };  
      }
      return this.cost = price.cost;
    }
  
    calculateCalories(){
      const props = [this.kindOfSalad, this.weight];
      const price = {};
      for(let prop of props){
          if(prop === 'Caesarus salad'){
              price.kind = prop;          
          }
          if(prop === '100g' && price.kind === 'Caesarus salad'){
              price.calories = `${saladCallories.Caesarus} calories`;
          };
          if(prop === '150g' && price.kind === 'Caesarus salad'){
              price.calories = `${saladCallories.Caesarus*1.5} calories`;
          };
          if(prop === '200g' && price.kind === 'Caesarus salad'){
              price.calories = `${saladCallories.Caesarus*2} calories`;
          }; 
          
          if(prop === 'Olivier salad'){
              price.kind = prop;
          };
          if(prop === '100g' && price.kind === 'Olivier salad'){
              price.calories = `${saladCallories.Olivier} calories`;
          };
          if(prop === '150g' && price.kind === 'Olivier salad'){
              price.calories = `${saladCallories.Olivier*1.5} calories`;
          };
          if(prop === '200g' && price.kind === 'Olivier salad'){
              price.calories = `${saladCallories.Olivier*2} calories`;
          };  
      }
      return this.calories = price.calories; 
    };
  };

  Salad.prototype.getWeight = function(weight){
    if(weight === 1) return this.weight = saladGramms.small + 'g';
    if(weight === 2) return this.weight = saladGramms.medium + 'g';
    if(weight === 3) return this.weight = saladGramms.large + 'g';
  };

  Salad.prototype.getSaladKind = function(kindOfSalad){
    if(kindOfSalad.toLowerCase() === 'olivier'){
        this.kindOfSalad = saladKind.fat;
    } else if(kindOfSalad.toLowerCase() === 'caesarus') {
        this.kindOfSalad = saladKind.fit;
    } else this.kindOfSalad = "Unfortunately, we don't have this kind of salad in the menu.";
  };

  class Beverage extends Food{
    kindOfDrink = this.kindOfDrink;
    calculatePrice(){
      if(this.kindOfDrink === 'coke') this.cost = `${drinkProps.cokeCost} tugs`;
      if(this.kindOfDrink === 'coffee') this.cost = `${drinkProps.coffeeCost} tugs`
    };
  
    calculateCalories(){
      if(this.kindOfDrink === 'coke') this.calories = `${drinkProps.cokeCalls} calories`;
      if(this.kindOfDrink === 'coffee') this.calories = `${drinkProps.coffeeCalls} calories`;
    };
  };

  Beverage.prototype.getDrinkKind = function(drink){
      if(drink.toLowerCase() === 'coke'){
          this.kindOfDrink = drink.toLowerCase();
      } else if(drink.toLowerCase() === 'coffee'){
          this.kindOfDrink = drink.toLowerCase();
      } else this.kindOfDrink = "Unfortunately, we don't have this kind of a drink in the menu.";
  };

 function Order(){
   const orderState = 'open'
   const menu = this.getMenu;
   const list = this.getList;
   const orderCalories = this.getOrderCalories;
   const preCheck = this.getPreCheck;
   const bill = this.getBill;
 };

 Order.prototype.getMenu = function(ctgry){
  delete this.preCheck;
  const menu = [];
    switch(ctgry.toLowerCase()){
      case 'hamburger':
        menu.push(hamburgerProps,hamburgerPrices,hamburgerCallories);
        this.menu = menu;
        break;
      case 'salad':
        menu.push(saladKind,saladGramms,saladPrices,saladCallories);
        this.menu = menu;
        break;
      case 'drinks':
        menu.push(drinkProps);
        this.menu = menu;
        break;
      case 'all':
        menu.push(hamburgerProps,hamburgerPrices,hamburgerCallories,
                  saladKind,saladGramms,saladPrices,saladCallories,drinkProps);
        this.menu = menu;
        break;
    };
 };

 Order.prototype.getList = function(...dish){
   delete this.menu;
   let orderList = dish;
   this.list = orderList;
 };

 Order.prototype.changeRequest = function(changes, changeItem, anotherItem){
  delete this.menu; 
    if(this.orderState === 'closed')  return console.log('Sorry, you already paid for this order, please make another one.')
    if(changes.toLowerCase() === 'delete'){
      if(changeItem.toLowerCase() === 'hamburger'){
        for(let item of this.list){
          if(item instanceof Hamburger) {
            this.list.splice(this.list.indexOf(item), 1)
          }
        }
      } else if(changeItem.toLowerCase() === 'salad'){
        for(let item of this.list){
          if(item instanceof Salad) {
            this.list.splice(this.list.indexOf(item), 1)
          }
        }
      } else if(changeItem.toLowerCase() === 'drink'){
        for(let item of this.list){
          if(item instanceof Beverage) {
            this.list.splice(this.list.indexOf(item), 1)
          }
        }
      } else if(changeItem.toLowerCase() === 'all')this.list = 'Please, make your order as soon as you`ll come up with it';
    } else if(changes.toLowerCase() === 'change'){
      if(changeItem.toLowerCase() === 'hamburger'){
        for(let item of this.list){
          if(item instanceof Hamburger) {
            this.list.splice(this.list.indexOf(item), 1, anotherItem)
          }
        }
      } else if(changeItem.toLowerCase() === 'salad'){
        for(let item of this.list){
          if(item instanceof Salad) {
            this.list.splice(this.list.indexOf(item), 1, anotherItem)
          }
        }
      } else if(changeItem.toLowerCase() === 'drink'){
        for(let item of this.list){
          if(item instanceof Beverage) {
            this.list.splice(this.list.indexOf(item), 1, anotherItem)
          }
        }
      }
    } else if(changes.toLowerCase() === 'add'){
      if(changeItem.toLowerCase() === 'hamburger'){
        this.list.push(anotherItem);
      }else if(changeItem.toLowerCase() === 'salad'){
        this.list.push(anotherItem);
      }else if(changeItem.toLowerCase() === 'drink'){
        this.list.push(anotherItem);
      };
    };
  };

 Order.prototype.getOrderCalories = function(){
  const calsList = [];
    if(typeof this.list === 'undefined'){
      delete this.cost;
      this.preCheck = 'First you need to order something.';
    }else{
      for(let dish of this.list){
        calsList.push(parseFloat(dish.calories));
      }
      this.orderCalories = `${calsList.reduce((cals, item)=>{
        cals +=item;
        return cals
      }, 0)} calories`
    }
 };

 Order.prototype.getPreCheck = function(){
  const Check = [];
  delete this.menu;
    if(typeof this.list === 'undefined'){
      delete this.cost;
      this.preCheck = 'First you need to order something.';
    }else{
      for(let dish of this.list){
      Check.push(parseFloat(dish.cost));
      }
    this.preCheck = `${Check.reduce((cost, item)=>{
      cost +=item;
      return cost
    }, 0)} tugs`
    }
 };

 Order.prototype.getBill = function(obj){
  delete this.menu;
  this.bill = this.preCheck;
  delete this.preCheck;
  this.orderState = 'closed';
  return Object.freeze(obj);
 };
