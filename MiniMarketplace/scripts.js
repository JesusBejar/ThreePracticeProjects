// get elements
const list = document.querySelector("#product-list")
const nameInput = document.querySelector("#product-name")
const priceInput = document.querySelector("#product-price")
const submitBtn = document.querySelector("#add-product")
const container = document.querySelector(".container")

// submit product event
submitBtn.addEventListener('click', (e) => {
    e.preventDefault()

    // make new product
    // console.log('clicked')
    const product = document.createElement('p')
    product.innerHTML = `${nameInput.value} - $${priceInput.value}`

    // add product to list
    list.appendChild(product)

    // clear input
    nameInput.value = ""
})

// future functionality -> error catchs and delete funcionality
// come back and add funcionality quotes 