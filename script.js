const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {
	let results = [];
	//console.log(str); // typeof: string
	// TODO
	if(str) {
		fruit.filter((val) => {
			const lowerFruit = val.toLowerCase();
			const lowerInput = str.toLowerCase();
			if(lowerFruit.includes(lowerInput)) {
				results.push('<li>' + lowerFruit + '</li>');
			}
		})
		
	}
	showSuggestions(results);
}

function searchHandler(e) {
	let typedInput = e.target.value;
	suggestions.style.display = 'block';
	return search(typedInput);
}

function showSuggestions(results) {
	let listData;
	if(!results.length) {
		userValue = input.value;
		listData = userValue;
	} else {
		listData = results.join('');
		//console.log(listData);
	}
	
	suggestions.innerHTML = listData;
}

function useSuggestion(e) {
	let clickedItem = e.target.innerHTML;
	input.value = clickedItem;
	suggestions.innerHTML = clickedItem;
	suggestions.style.display = 'none';
;


}
const lis = document.querySelector('.suggestions li');
console.log(lis);

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);