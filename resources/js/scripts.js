import data from './data.js'

const itemsContainer = document.getElementById('items')
const itemList = document.getElementById('item-list')

// the length of our data determines how many times this loop goes around
for (let i=0; i<data.length; ++i) {
    // create a new div element and give it a class name
    let newDiv = document.createElement('div');
    newDiv.className = 'item'

    // create an image element
    let img = document.createElement('img');
    let description = document.createElement('p');
    let price = document.createElement('p');
    let button = document.createElement('button')
    
    // this will change each time we go through the loop. Can you explain why?
    img.src = data[i].image
    img.width = 300
    img.height = 300

    description.textContent = data[i].desc
    price.textContent = data[i].price
    button.id = data[i].name

    button.dataset.price = data[i].price
    button.innerHTML = "Add to Cart"

    // Add the image to the div
    newDiv.appendChild(img)
    newDiv.appendChild(description)
    newDiv.appendChild(price)
    newDiv.appendChild(button)
    // put new div inside items container
    itemsContainer.appendChild(newDiv)
}