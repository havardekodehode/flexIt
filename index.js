const elipseContainerEl = document.getElementById("elipseContainer");

let imgEl = document.querySelectorAll(".element")

const buttonsElements = document.querySelectorAll("button")

buttonsElements.forEach(button => {
    button.addEventListener("click", function(){ 
        isActive(button)   
    })
});





function randomOrder(imagesEl){
    let index = Array.from({length : imagesEl.length}, (value, ind) => ind)
    imagesEl.forEach(element => {
        let randomNum = Math.floor(Math.random() * index.length)
        element.style.order = index[randomNum];
        index.splice[randomNum, 1]
    })
}

function add(){
    for (let i = 1; i < 5; i++) {
        const img = document.createElement("img")
        img.src = `assets/Ellipse ${i}.png`
        img.className = "element" 
        elipseContainerEl.appendChild(img)
    }
}

function isActive(button){
    if(button.className.match("button_red")){
        button.className = "button"

        switch (button.dataset.property) {
            case "flex-direction":
                elipseContainerEl.style.flexDirection = "row"
                break;
            case "order":
                randomOrder(imgEl)
                break;
            case "gap":
                elipseContainerEl.style.gap = "0px"
                break;
            case "add":
                add()
                break;
            case "justify-content":
                elipseContainerEl.style.justifyContent = "initial"
                break;
            case "align-items":
                elipseContainerEl.style.alignItems = "initial"
            case "wrap":
                elipseContainerEl.style.flexWrap = "nowrap"
        
            default:
                break;
        }

    }else{
        
            button.className = "button button_red"

            switch (button.dataset.property) {
                case "flex-direction":
                    elipseContainerEl.style.flexDirection = "column"
                    break;
                case "order":
                    randomOrder(imgEl)
                    break;
                case "gap":
                    elipseContainerEl.style.gap = "50px"
                    break;
                case "add":
                    add()
                    break;
                case "justify-content":
                    elipseContainerEl.style.justifyContent = "center"
                    break;
                case "align-items":
                    elipseContainerEl.style.alignItems = "center"
                case "wrap":
                    elipseContainerEl.style.flexWrap = "wrap"
            
                default:
                    break;
            }
            if(button.dataset.property === "order" || button.dataset.property === "add"){
                button.className = "button"

            }
    }
}
