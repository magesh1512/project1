let openshopping = document.querySelector('.shopping');
let closeshopping = document.querySelector('.closeshopping');
let list = document.querySelector('.list');
let listcard = document.querySelector('.listcard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openshopping.addEventListener('click', () => {
    body.classList.add('active');
});

closeshopping.addEventListener('click', () => {
    body.classList.remove('active');
});

let products = [
    {
        id: 1,
        name: "Rasagulla",
        price: 199,
        image: "photo/Rasgulla.jpg"
    },
    {
        id: 2,
        name: "Gulab Jamun",
        price: 799,
        image: "photo/gulab.webp"
    },
    {
        id: 3,
        name: "Laddu",
        price: 599,
        image: "photo/laddu.webp"
    },
     {
        id: 4,
        name: "Mysore Pak",
        price: 1199,
        image: "photo/mysore.webp"
    },
     {
        id: 5,
        name: "Samosa",
        price: 1299,
        image: "photo/samosa.jpg"
    },
    {
        id: 6,
        name: "Egg Puff",
        price: 799,
        image: "photo/puff.jpg"
    },
    {
        id: 7,
        name: "Mixture",
        price: 2199,
        image: "photo/mixture.webp"
    },
     {
        id: 8,
        name: "Chips",
        price: 2599,
        image: "photo/chips.jpg"
    },
    {
        id: 9,
        name: "Chocolate Cake",
        price: 3199,
        image: "photo/Chocolate-Burfi-H1-1.webp"
    },
    {
        id: 10,
        name: "Black Forest",
        price: 2799,
        image: "photo/black.jpg"
    },
    {
        id: 11,
        name: "Vanilla",
        price: 1199,
        image: "photo/vanilla.jpg"
    },
     {
        id: 12,
        name: "Strawberry",
        price: 1499,
        image: "photo/strawberry.jpg"
    }
];

let listItems = [];

function renderList() {
    products.forEach((value,key)=>{
        let newdiv = document.createElement('div');
        newdiv.classList.add('item');
        newdiv.innerHTML = `
            <img src="${value.image}" >
            <div class="title"> ${value.name}</div>
            <div class="price">Rs. ${value.price.toLocaleString() }</div>
            <button onclick="addToCart(${key})">Add to Cart</button>
        `;
        list.appendChild(newdiv);
    })
}
renderList();

function addToCart(key) {
    if(listItems[key]==null){
        listItems[key] = JSON.parse(JSON.stringify(products[key]));
        listItems[key].quantity = 1;

    }
        reloadcart();
}
    function reloadcart(){
        listcard.innerHTML = '';
        let count = 0;
        let totalPrice = 0;
        listItems.forEach((value, key)=>{
            totalPrice = totalPrice + value.price;
            count = count + value.quantity;
            if(value != null){
                let newdiv = document.createElement('li')
                newdiv.innerHTML = `
                    <div><img src="${value.image}" ></div>
                    <div>${value.name}</div>
                    <div>${value.price.toLocaleString()}</div>
                    <div>
                        <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                        <div class="count">${value.quantity}</div>
                        <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                    </div>
                `;
                listcard.appendChild(newdiv);
            }
        });
    

        total.innerHTML = totalPrice.toLocaleString();
        quantity.innerHTML = count;
    }

    function changeQuantity(key, quantity) {
        if(quantity == 0){
           delete listItems[key];
        }
            else{
                listItems[key].quantity = quantity;
                listItems[key].price = quantity * products[key].price;
            }
            reloadcart();
    }


