// intialize the count as 0 (set variable)
// listen for clicks on the increment button (add event listener onclick --> and use with function)
// increment the count variable when the button is clicked (function)
// change the count-el in the HTML to reflect the new count
//-----------------------------------------------------//
let count = 0;
// intialize the count as 0 (set variable)
function increment() {
  //create function to increate people
  // increment the count variable when the button is clicked (function)
  count += 1;
  document.getElementById("count-el").textContent = count; // change the count-el in the HTML to reflect the new count --> set new value
}

let saveEl = document.getElementById("save-el"); //save button
function save() {
  saveEl.textContent += count + " - "; // when press save update p tag
  count = 0; // set count back to 0
  document.getElementById("count-el").textContent = count; //set h3 tag to 0
}
