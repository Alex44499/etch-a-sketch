const container = document.querySelector(".container-grid")

const slider = document.querySelector("input")
const value = document.querySelector(".value")



value.textContent = "Value: " + slider.value
slider.oninput=function(){
	value.textContent = "Value: " + this.value
}	



// Get number from slider 


// Create number of divs = to obtained number 
// Change div color with click event  



///////////////////////////////////////////////////////

// const grid = document.createElement("div")

// function getSliderNumber (slider){

// }

// grid.className = "grid"

// grid.style.width = '30px'
// grid.style.height = '30px'
// grid.style.backgroundColor = 'black'

// container.append(grid)

