// M1 Extra task 1

const groceries = {
    "Apples": {
    price : 1.5,
    discount: 10,
    },
    "Rice": {
    price : 2,
    discount : 0,
    },
    'Carrot': { 
        price: 1.4, 
        discount : 0 },
    // more items...
    }


const shoppingBag = [
        { product: 'Rice', quantity: 3 },
        { product: 'Carrot', quantity: 23 },
        ]


function getTotalPriceOfShoppingBag(shoppingBag) {
    
    const total = shoppingBag.reduce((total, item) => {
        const subtotal = item.quantity * (groceries[item.product].price - (groceries[item.product].price * (groceries[item.product].discount) / 100))
        return total += subtotal

    }, 0)

    return total.toFixed(2)
      
}


const totalInCart = getTotalPriceOfShoppingBag(shoppingBag);
console.log('totalInCart', totalInCart);

