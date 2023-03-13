const slideBar = document.querySelector(".slidebar");
arrowIcons = document.querySelectorAll(".icons i");

let isDragging = false;

arrowIcons.forEach(icon =>{
    icon.addEventListener("click", ()=>{
        slideBar.scrollLeft += icon.id === "left" ? -350 : 350;
    });
})

const dragging = (e)=>{
    if(!isDragging) return;
    slideBar.classList.add("dragging");
    slideBar.scrollLeft -= e.movementX;
}

const dragstop = ()=>{
    isDragging = false;
    slideBar.classList.remove("dragging");
}

slideBar.addEventListener("mousemove",dragging);
slideBar.addEventListener("mousedown", ()=> isDragging = true);
document.addEventListener("mouseup", dragstop);

