let button = document.getElementById("btn");
button.addEventListener("click", ()=>{
    alert("i was clicked, yayy")
    document.querySelector(".box").innerHTML = "<b> I am changed </b>"
})
document.addEventListener("keydown", (e)=>{
    console.log(e)
})