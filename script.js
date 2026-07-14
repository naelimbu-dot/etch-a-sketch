const container = document.createElement("div")
const body = document.querySelector("body")
const resetBtn = document.createElement("button")
container.classList = "container"
resetBtn.textContent = "Change Size"
body.appendChild(resetBtn)
body.appendChild(container)


function sketch(event) {
    event.target.style.backgroundColor = "black"
    console.log("filled")
}

function setSize(event) {
    let size = 4
    do {
        size = prompt("X by X size, what do you want? (max 100px, min 1px) (X)")
    }
    while (size < 1 || size > 100)
    const currentContainer = document.querySelector(".container")
    currentContainer.remove()
    const newContainer = document.createElement("div")
    newContainer.classList = "container"
    body.appendChild(newContainer)
    newContainer.display = "flex";
    newContainer.flexWrap = "wrap";
    newContainer.margin = "16px";
    newContainer.border = "2px solid black";
    makeGrid(size, newContainer)
}

function makeGrid(size, box) {
    console.log(box)
    for (let i = 0; i < (size*size); i++) {
        box.style.width = `512px`;
        box.style.height = `512px`;
        const pixel = document.createElement("div")
        pixel.classList = "pixel"
        box.appendChild(pixel)
        console.log("added")
        pixel.addEventListener("mouseover", sketch)
        pixel.style.width = `${512/size}px`;
        pixel.style.height = `${512/size}px`; 
    }
}

makeGrid(16, container)

resetBtn.addEventListener("click", setSize)