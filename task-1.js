// M1 Extra task 1

const groceries = {
    "Orange Juice": {
    price : 1.5,
    discount: 10,
    },
    "Chocolate": {
    price : 2,
    discount : 0,
    },
    'Potato': { 
        price: 1.4, 
        discount : 0 },
    // more items...
    }


const shoppingBag = [
        { product: 'Chocolate', quantity: 3 },
        { product: 'Orange Juice', quantity: 23 },
        ]


function getTotalPriceOfShoppingBag(shoppingBag) {
    
    const total = shoppingBag.reduce((total, item) => {
        const subtotal = item.quantity * (groceries[item.product].price - (groceries[item.product].price * (groceries[item.product].discount) / 100))
        return total += subtotal

    }, 0)

    return total.toFixed(2)
      
}


const totalPrice = getTotalPriceOfShoppingBag(shoppingBag);
console.log('totalPrice', totalPrice); // Возвращает 37.05

