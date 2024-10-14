import {glosses, verbs, timeOfDay, irSentences, saberSentences, decirSentences, tenerSentences, clothesSentences, freeTimeSentences} from './glosses.js'

let glossSubmitButton = document.getElementById('submit-btn')
let newGlossButton = document.getElementById('new-gloss')
let activeListText = document.getElementById('active-list')
console.log(activeListText.innerText)

let startButton = document.getElementById('start')

// Get glosslist selection buttons
let verbsButton = document.getElementById('verbs')
let presentTenseButton = document.getElementById('present')
let timeButton = document.getElementById('time')
let irButton = document.getElementById('ir-sentences')
let saberButton = document.getElementById('saber-sentences')
let decirButton = document.getElementById('decir-sentences')
let tenerButton = document.getElementById('tener-sentences')
let clothesSentencesButton = document.getElementById('ropa-sentences')
let freeTimeSentencesButton = document.getElementById('tiempo-libre-sentences')


let glossInputSpanish = document.getElementById('user-input')

let answerFeedback = document.getElementById('feedback')
let glossTextSwedish = document.getElementById('gloss-swedish')
let scoreFeedback = document.getElementById('score')

let currentGlossList = ''
let currentGloss = ''
let glossIndex = ''
let currentListLength = ''

addEventToButton(verbsButton, verbs);
addEventToButton(timeButton, timeOfDay);
addEventToButton(irButton, irSentences);
addEventToButton(saberButton, saberSentences);
addEventToButton(decirButton, decirSentences);
addEventToButton(tenerButton, tenerSentences);
addEventToButton(clothesSentencesButton, clothesSentences);
addEventToButton(freeTimeSentencesButton, freeTimeSentences);

startButton.addEventListener('click', function() {
    getRandomGloss(currentGlossList)
})

glossSubmitButton.addEventListener('click', function() {
    handleSubmission(currentGlossList);
})

glossInputSpanish.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        handleSubmission(currentGlossList);
    }
})

newGlossButton.addEventListener('click', function() {
    answerFeedback.innerText = ''
    glossInputSpanish.value = ''
    getRandomGloss(currentGlossList)
    
})

glossInputSpanish.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowRight') {
        answerFeedback.innerText = ''
        glossInputSpanish.value = ''
        getRandomGloss(currentGlossList)
    }
})

function addEventToButton(listButton, currentList) {
    listButton.addEventListener('click', function() {
        clearAll()
        currentListLength = currentList.length
        scoreFeedback.innerText = '0/' +currentListLength
        activeListText.innerText = listButton.innerText
        console.log(activeListText.innerText)
        setGlossList(currentList)
    })
}

function clearAll() {
    answerFeedback.innerText = ''
    glossInputSpanish.value = ''
    glossTextSwedish.innerText = ''
}

function setGlossList(selectedGlossList){
    currentGlossList = selectedGlossList
}

function getRandomGlossIndex(arrayLength) {
    return Math.floor(Math.random() * arrayLength)
}

function getRandomGloss(currentGlossList){
    glossIndex = getRandomGlossIndex(currentGlossList.length)
    glossIndex = Number(glossIndex)
    console.log('glossIndex: ', glossIndex)
    currentGloss = currentGlossList[glossIndex]
    glossTextSwedish.innerText = currentGloss.swedish
}     
    
function handleSubmission(currentGlossList) { 
    let userInput = glossInputSpanish.value
    console.log(userInput)
    if (userInput.toLowerCase() === currentGloss.spanish.toLowerCase()) {
    answerFeedback.innerText = currentGloss.spanish.toLowerCase() +' är rätt!'
    // console.log('Before splice:', currentGlossList, glossIndex);
    currentGlossList.splice(glossIndex, 1)
    // console.log('After splice:', currentGlossList);
    scoreFeedback.innerText = (currentListLength-currentGlossList.length) +'/' +currentListLength
    } else {
    answerFeedback.innerText = 'Fel, rätt svar är: ' +currentGloss.spanish.toLowerCase()
}
}

