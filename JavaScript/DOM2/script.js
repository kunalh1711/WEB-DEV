console.log("hello");

// let boxes = document.getElementsByClassName("box");
// console.log(boxes);

// let boxes = document.getElementsByClassName("box")
// console.log(boxes)

// boxes[2].style.backgroundColor = "red"

// document.getElementById("red").style.backgroundColor = "red"


// document.querySelector(".box").style.backgroundColor = "green"   //select thr first box

document.querySelectorAll(".box").forEach(e =>{
    e.style.backgroundColor = "green";
}) 