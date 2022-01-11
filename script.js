let problemNum = 1;

//1) Select the section with an id of container without using querySelector.
console.log("Problem #" + problemNum);
let container = document.getElementById("container")
console.log(container);
problemNum++;

//2) Select the section with an id of container using querySelector.
console.log("Problem #" + problemNum);
let container2 = document.querySelector("#container")
console.log(container2);
problemNum++;

//3) Select all of the list items with a class of "second".
console.log("Problem #" + problemNum);
let second = document.getElementsByClassName("second")
console.log(second);
problemNum++;

//4) Select a list item with a class of third, but only the list item inside of the ol tag.
console.log("Problem #" + problemNum);
let olThird = document.querySelector("ol.third")
console.log(olThird);
problemNum++;

//5) Give the section with an id of container the text "Hello!".
console.log("Problem #" + problemNum);
console.log(container.innerText = "Hello!");
problemNum++;

//document.getElementById("container").innerHTML = "Hello!"
//6) Add the class main to the div with a class of footer.
console.log("Problem #" + problemNum);
let footerElem = document.querySelector(".footer")
footerElem.classList.add("main")
console.log(footerElem);
problemNum++;

//7) Remove the class main on the div with a class of footer.
console.log("Problem #" + problemNum);
footerElem.classList.remove("main")
console.log(footerElem);
problemNum++;

//8) Create a new li element.
console.log("Problem #" + problemNum);
let newLi = document.createElement("li")
console.log(newLi);
problemNum++;

//9) Give the li the text "four".
console.log("Problem #" + problemNum);
newLi.innerHTML = "four"
console.log(newLi);
problemNum++;

//10) Append the li to the ul element.
console.log("Problem #" + problemNum);
let unordeList = document.querySelector("ul")
unordeList.appendChild(newLi)
console.log(unordeList)
problemNum++;

//12) Loop over all of the lis inside the ol tag and give them a background color of "green".
console.log("Problem #" + problemNum);
let orderList = document.querySelectorAll("ol > li")
for(let i = 0; i < orderList.length; i++){
    orderList[i].style.backgroundColor = "green"
}
console.log(orderList);
problemNum++;

let ulRef = document.getElementsByName("ol");
//console.log(ulRef.length);
//13) Remove the div with a class of footer.
console.log("Problem #" + problemNum);
console.log(document.querySelector(".footer").remove());
problemNum++;