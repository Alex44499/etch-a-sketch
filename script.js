const container = document.querySelector('.container-grid')

const buttonReset = document.querySelector('.buttonClear')
const buttonApply = document.querySelector('.buttonApply')

const slider = document.querySelector('input')
const value = document.querySelector('.value')

// Display slider value
value.textContent = 'Value: ' + slider.value + ' x ' + slider.value
slider.oninput = function () {
  value.textContent = 'Value: ' + slider.value + ' x ' + slider.value
}

// Change div color with click event
function createCells(col, rows) {
  for (let i = 0; i < col * rows; i++) {
    const div = document.createElement('div')
    div.className = 'cell'

    div.style.border = '1px solid blueviolet'
    div.style.borderRadius = '8px'
    div.style.boxShadow =
      '0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
    div.style.background = 'antiquewhite'

    container.style.gridTemplateColumns = `repeat(${col},1fr)`
    container.style.gridTemplateRows = `repeat(${rows},1fr)`

    // Change color based on mouse position
    div.addEventListener('mouseenter', () => {
      div.style.backgroundColor = 'gray'
    })

    container.append(div)
  }
}

// Initial number of cells
createCells(2, 2)

//Clear container with previous divs
function clear() {
  container.querySelectorAll('*').forEach((n) => n.remove())
}

// Change size on click
buttonApply.addEventListener('click', () => {
  clear()
  let w = slider.value
  let h = slider.value
  createCells(w, h)
})

//Reset conditions
buttonReset.addEventListener('click', () => {
  container.querySelectorAll('*').forEach((n) => (n.style.background = 'antiquewhite'))
})
