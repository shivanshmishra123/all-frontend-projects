let value = ""
let store1 = ""
let store2 = ""
let operation = ""
//By default set to none
document.getElementById("abcd").textContent = value;

//when all number buttons are clicked
function numberfunc(id) {
   document.getElementById("abcd").textContent = value+`${id}`
   value = value+`${id}`
}

//when All Clear Button is clicked
document.getElementById("AC").addEventListener("click",()=>{
   document.getElementById("abcd").textContent = "";
   value=""
   store1=""
   store2=""
   result = ""
})
//When Decimal button clicked
document.getElementById("decimal").addEventListener("click",()=>{
   document.getElementById("abcd").textContent = value+".";
   value = value+"."
})
// Divide button click
document.getElementById("divide").addEventListener("click",()=>{
   store1 = document.getElementById("abcd").textContent
   document.getElementById("abcd").textContent = "";
   value=""
   operation = "divide"
})

// Multiply button click
document.getElementById("multiply").addEventListener("click",()=>{
   store1 = document.getElementById("abcd").textContent
   document.getElementById("abcd").textContent = "";
   value=""
   operation = "multiply"
})
// Addition button click
document.getElementById("addition").addEventListener("click",()=>{
   store1 = document.getElementById("abcd").textContent
   document.getElementById("abcd").textContent = "";
   value=""
   operation = "addition"
})
// Minus button click
document.getElementById("minus").addEventListener("click",()=>{
   store1 = document.getElementById("abcd").textContent
   document.getElementById("abcd").textContent = "";
   value=""
   operation = "minus"
})

document.getElementById("equalsto").addEventListener("click",()=>{
   if (operation =="divide") {
      store2 = document.getElementById("abcd").textContent
      document.getElementById("abcd").textContent = parseFloat(store1) / parseFloat(store2)      
   }
   else if (operation=="addition") {
      store2 = document.getElementById("abcd").textContent
      document.getElementById("abcd").textContent = parseFloat(store1) + parseFloat(store2)
   
   }
   else if (operation=="multiply") {
      store2 = document.getElementById("abcd").textContent
      document.getElementById("abcd").textContent = parseFloat(store1) * parseFloat(store2)
   
   }
   else if (operation=="minus") {
      store2 = document.getElementById("abcd").textContent
      document.getElementById("abcd").textContent = parseFloat(store1) - parseFloat(store2)
   
   }

})