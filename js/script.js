console.log(`JavaScript file works!`);

// Items in our shopping cart
var shoppingCart = [];
var totalItems = 0;
var totalAmount = 0;
var cartItems = [];
// Fruit Items
var fruitItems = [
		{
			img: 'images/fruit/apple.jpg',
			name: 'Apple',
			price: 1
		},
		{
			img: 'images/fruit/banana.jpg',
			name: 'Banana',
			price: 0.5

		},
		{
			img: 'images/fruit/berries.jpg',
			name: 'Berries',
			price: 2
		},
		{
			img: 'images/fruit/mango.jpg',
			name: 'Mango',
			price: 1.5
		},
		{
			img: 'images/fruit/pineapple.jpg',
			name: 'Pineapple',
			price: 2
		}
	];

	// Dairy Items

	var dairyItems = [
		{
			img: 'images/dairy/butter.jpg',
			name: 'Butter',
			price: 2
		},
		{
			img: 'images/dairy/cheese.jpg',
			name: 'Cheese',
			price: 2.5
		},
		{
			img: 'images/dairy/icecream.jpg',
			name: 'Ice Cream',
			price: 3
		},
		{
			img: 'images/dairy/milk.jpg',
			name: 'Milk',
			price: 2
		},
		{
			img: './images/dairy/yoghurt.jpg',
			name: 'Yoghurt',
			price: 1.5
		}
	];

// Cereal items
var cerealItems = [
	{
		img: 'images/cereal/cheerios.jpg',
		name: 'Cheerios',
		price: 3
	},
	{
		img: 'images/cereal/crunch.jpg',
		name: 'Crunch',
		price: 2.5
	},
	{
		img: 'images/cereal/fruit-loops.jpg',
		name: 'Fruit Loops',
		price: 1.5
	},
	{
		img: 'images/cereal/puffs.jpg',
		name: 'Puffs',
		price: 1 
	},
	{
		img: 'images/cereal/raisin-bran.jpg',
		name: 'Raisin Bran',
		price: 2
	}
];

// Juice items
var juiceItems = [
	{
		img: 'images/juice/apple-juice.jpg',
		name: 'Apple Juice',
		price: 2
		
	},
	{
		img: 'images/juice/carrot-juice.jpg',
		name: 'Carrot Juice',
		price: 2.5
	},
	{
		img: 'images/juice/grape-juice.jpg',
		name: 'Grape Juice',
		price: 2
	},
	{
		img: 'images/juice/Orange-juice.jpg',
		name: 'Orange Juice',
		price: 1.5
	},
	{
		img: 'images/juice/tomato-juice.jpg',
		name: 'Tomato Juice',
		price: 2.5
	}
];

// Candy items
var candyItems = [
	{
		img: 'images/candy/kit-kat.jpg',
		name: 'Kit Kat',
		price: 1
	},
	{
		img: 'images/candy/m&ms.jpg',
		name: 'M&M\'s',
		price: 2
	},
	{
		img: 'images/candy/skittles.jpg',
		name: 'Skittles',
		price: 2.5
	},
	{
		img: 'images/candy/snickers.jpg',
		name: 'Snickers',
		price: 1
	},
	{
		img: 'images/candy/twix.jpg',
		name: 'Twix',
		price: 1.5
	}
];

var allItems = [fruitItems, dairyItems, cerealItems, juiceItems, candyItems];
console.log(allItems);

// Add click handlers to our category buttons
$('#fruits').click(function() {
	addShoppingItems('fruits');
});

$('#dairy').click(function() {
	addShoppingItems('dairy');
});

$('#cereal').click(function() {
	addShoppingItems('cereal');
});

$('#juices').click(function() {
	addShoppingItems('juices');
});

$('#candy').click(function() {
	addShoppingItems('candy');
});

// Add click handlers to each shopping item
$('#shopping-items').on('click', '.shopping-item', function() {
	
	var itemName = $(this).find('p').text();
	var item = null;
	fruitItems.forEach(function(fruit){
		if (itemName.startsWith(fruit.name)) {
			item = fruit;
		}
	})
	console.log(item, itemName);
	// addItemToShoppingCart(itemName);
	// totalItems += 1; 
	// console.log(totalAmount, item.price);
	// totalAmount += item.price; //How to display this?
	// console.log(totalItems, totalAmount);
	// $('#items').text = totalItems; //How to show this value in DOM?
	cartItems.push(item);
	addItemsToDom(cartItems);	
});

function addItemsToDom(cartItems){
	var itemCount = {};
	var total = 0;
	cartItems.forEach(function(oneItem){
		if (!itemCount[oneItem.name]) {
			itemCount[oneItem.name] = 0;
		} 
		itemCount[oneItem.name]++;
		total += oneItem.price;
	})
	$('#items').html("")
	for (var item in itemCount){
		$('#items').append(`
		<li>
			${item} ${itemCount[item]}
		</li>
	`);

	}
	console.log(itemCount);
	$('#total').html(total); 
}
// Add shopping items to our page
function addShoppingItems(category) {
	// first, clear out all items I am currently showing
	clearShoppingItems();

	var myItems;
	switch(category) {

		case 'fruits':
			myItems = fruitItems;
			break;
		case 'dairy':
			myItems = dairyItems;
			break;

		case 'cereal':
			myItems = cerealItems;
			break;
		case 'juices':
			myItems = juiceItems;
			break;
		case 'candy':
			myItems = candyItems;
			break;
		default:
	}

	var newList = $('<ul>');
	for(var i = 0; i < myItems.length; i++) {
		var currentItem = myItems[i];

		newList.append(
			`<li class="shopping-item">
				<img src="${currentItem.img}">
				<p>${currentItem.name} ${currentItem.price}</p> 
			</li>`);
	}

	$('#shopping-items').append(newList);
}

// Clear our current shopping-items
function clearShoppingItems() {
	$('#shopping-items').empty();
}

// Add item to shopping cart
function addItemToShoppingCart(item) {
	$('#items').append(`
		<li>
			${item}
		</li>
	`);
}
