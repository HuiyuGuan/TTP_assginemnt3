let problemNum = 1;

//1) Select the section with an id of container without using querySelector.
console.log("Problem #" + problemNum);
console.log(document.getElementById("container"));
problemNum++;

//2) Select the section with an id of container using querySelector.
console.log("Problem #" + problemNum);
console.log(document.querySelectorAll("#container"));
problemNum++;

//3) Select all of the list items with a class of "second".
console.log("Problem #" + problemNum);
console.log(document.querySelectorAll(".second"));
problemNum++;

//4) Select a list item with a class of third, but only the list item inside of the ol tag.
console.log("Problem #" + problemNum);
console.log(document.getElementsByClassName("third"));
problemNum++;

//5) Give the section with an id of container the text "Hello!".
console.log("Problem #" + problemNum);
console.log();
problemNum++;

//document.getElementById("container").innerHTML = "Hello!"
//6) Add the class main to the div with a class of footer.
console.log("Problem #" + problemNum);
console.log();
problemNum++;

//7) Remove the class main on the div with a class of footer.
console.log("Problem #" + problemNum);
console.log();
problemNum++;

//8) Create a new li element.
console.log("Problem #" + problemNum);
console.log();
problemNum++;

//9) Give the li the text "four".
console.log("Problem #" + problemNum);
console.log();
problemNum++;

//10) Append the li to the ul element.
console.log("Problem #" + problemNum);
console.log(document.querySelector("ul").appendChild("li"));
problemNum++;

//12) Loop over all of the lis inside the ol tag and give them a background color of "green".
console.log("Problem #" + problemNum);
console.log();
problemNum++;

let ulRef = document.getElementsByName("ol");
//console.log(ulRef.length);
//13) Remove the div with a class of footer.
console.log("Problem #" + problemNum);
console.log(document.querySelector("#footer").remove());
problemNum++;