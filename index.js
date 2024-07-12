var popupbox = document.querySelector(".popupbox");
var popupbutton = document.getElementById("addbookcontent");



var booktitle = document.getElementById("booktitle")
var bookauther = document.getElementById("bookauther")
var bookabout = document.getElementById("bookabout")
var bookcontainer = document.querySelector(".bookcontainer")

var addbookname = document.getElementById("addbookname")
var body = document.querySelector("body")

popupbutton.addEventListener("click", function () {
   popupbox.style.display = "block";
  // body.classList.add("no-scroll")
});

addbookname.addEventListener("click", function (event) {
   event.preventDefault()
   var div = document.createElement("div")
   div.setAttribute("class", "bookclass")
   div.innerHTML = `<h1>${booktitle.value}</h1>
   <h3>${bookauther.value}</h3>
   <p>${bookabout.value}</p> 
   <button onclick="removebook(event)">remove</button>`
   bookcontainer.append(div)
   //popupbox.style.display = "none";
   document.getElementById("bookform").reset()

})

function removebook(event) {
   event.target.parentElement.remove()
}
var cancelpopup = document.getElementById("cancelpopup")

cancelpopup.addEventListener("click", function (event) {
   event.preventDefault()
   popupbox.style.display = "none";
  // body.classList.remove("no-scroll");
});