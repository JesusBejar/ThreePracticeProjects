// get elements
const getBtn = document.querySelector("#fetch-quote")
const saveBtn = document.querySelector("#save-quote")
const quoteDisplay = document.querySelector("#quote-display")
const savedQuotes = document.querySelector("#saved-quotes")

// connect to API
async function getAQuote() {
    try {
        // console.log('clicked')
        const response = await fetch('https://stoic-quotes.com/api/quote')
        // console.log(response)
        const json = await response.json()
        const quote = json.text
        console.log(quote)
    } catch (e) {
        console.error(e)
    }

}

// fetch quote event
getBtn.addEventListener('click', getAQuote)
