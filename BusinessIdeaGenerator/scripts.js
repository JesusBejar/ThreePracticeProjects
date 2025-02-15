// get elements
const generateBtn = document.querySelector("#generate-btn")
const saveBtn = document.querySelector("#save-btn")
const ideaDisplay = document.querySelector("#idea-display")
const savedIdeasList = document.querySelector("#saved-ideas")

// array with business ideas
const businessIdeaArray = ["VC-backed landscaping marketplace", "Bootstrapped ancient text library"]

// generate idea event
generateBtn.addEventListener('click', e => {
    let str = getRandomStr(businessIdeaArray)
    console.log(str)

})

// save idea event

// get random string from array to display
function getRandomStr (array) {
    if (array.length === 0) {
        return undefined
      }
      const randomIndex = Math.floor(Math.random() * array.length);
      return array[randomIndex]
}