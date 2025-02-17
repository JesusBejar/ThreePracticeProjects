// get elements
const generateBtn = document.querySelector("#generate-btn")
const saveBtn = document.querySelector("#save-btn")
const ideaDisplay = document.querySelector("#idea-display")
const savedIdeasList = document.querySelector("#saved-ideas")

// array with business ideas (add more)
const businessIdeaArray = ["VC-backed landscaping marketplace", 
    "Bootstrapped ancient text library"]

// generate idea event
generateBtn.addEventListener('click', e => {
    e.preventDefault()
    let str = getRandomStr(businessIdeaArray)
    // console.log(str)
    ideaDisplay.innerHTML = str
    // add conditional below that will skip next str chosen if it's the same
})

// save idea event
saveBtn.addEventListener('click', () => {
    // create item
    const item = document.createElement('p')
    item.innerHTML = ideaDisplay.innerHTML
    // add item to list 
    savedIdeasList.appendChild(item)
    // add remove from list functionality
})

// get random string from array to display
function getRandomStr (array) {
    if (array.length === 0) {
        return undefined
      }
      const randomIndex = Math.floor(Math.random() * array.length);
      return array[randomIndex]
}

// future functionality -> implement categories to filter