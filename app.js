let groceryList = document.querySelector('#grocery_list');
const addToListButton = document.querySelector('#add_to_list');
const groceryListInput = document.querySelector("#grocery_list_input");
let addToList = () => {
	groceryList.innerHTML += `<li> ${groceryListInput.value} </li>`;
	groceryListInput.value = '';
}

addToListButton.addEventListener('click', ()=>{
	addToList();
})

// addToList.addEventListener('submit', ()=>{
// 	groceryList.innerHTML += `<li> ${groceryListInput.value} </li>`;
// })

// Hacking it without a form/submit event
// Is this the right way? hmm...
groceryListInput.addEventListener('keypress', function (e) {
    var key = e.which || e.keyCode;
    if (key === 13) { // 13 is enter
      	addToList();
    }
});