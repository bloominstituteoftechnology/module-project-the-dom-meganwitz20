function moduleProject1() {
  const footer = document.querySelector('footer')
  const currentYear = new Date().getFullYear()
  footer.textContent = `© BLOOM INSTITUTE OF TECHNOLOGY ${currentYear}`

  // 👇 WORK WORK BELOW THIS LINE 👇

  // 👉 TASK 1 - Add a "widget" class name to widgets so CSS kicks in
  const widgets = document.querySelectorAll('section > div')
  widgets.forEach(widget => widget.classList.add('widget'))

  // 👉 TASK 2 - Build a "Quote of the Day" widget
  const randomQuoteIndex = Math.floor(Math.random() * quotes.length)//es
  const randomQuote = quotes[randomQuoteIndex]
  const quoteDiv = document.querySelector('.quoteoftheday')
  const quoteText = document.createElement('div')
  quoteText.textContent = randomQuote.quote
  quoteDiv.appendChild(quoteText)
  const quoteAuthor = document.createElement('div')
  if (randomQuote.date) {
    quoteAuthor.textContent = `${randomQuote.author} in ${randomQuote.date}`
  } else {
    quoteAuthor.textContent = `${randomQuote.author} in an unknown date`
  }
  quoteDiv.appendChild(quoteAuthor)

  // 👉 TASK 3 - Build a "Corporate Speak" widget
  
  const randomAdverb1 = adverbs[Math.floor(Math.random() * adverbs.length)]
  const randomNoun1 = nouns[Math.floor(Math.random() * nouns.length)]
  const randomVerb1 = verbs[Math.floor(Math.random() * verbs.length)]
  const randomAdverb2 = adverbs[Math.floor(Math.random() * adverbs.length)]
  const randomNoun2 = nouns[Math.floor(Math.random() * nouns.length)]
  const randomVerb2 = verbs[Math.floor(Math.random() * verbs.length)]
  const corporateSpeak = document.querySelector('.corporatespeak')
  const corporateParagraph = document.createElement('p')
  corporateParagraph.textContent = `We need to ${randomVerb1} our ${randomNoun1} ${randomAdverb1} in order to ${randomVerb2} our ${randomNoun2} ${randomAdverb2}.`
  corporateSpeak.appendChild(corporateParagraph)

  // 👉 TASK 4 - Build a "Countdown" widget
  const countdown = document.querySelector('.countdown')
  const countdownParagraph = document.createElement('p')
  countdown.appendChild(countdownParagraph)
  countdownParagraph.textContent = 'T-minus 5...'
  const countdownInterval = setInterval(() => {
    const currentText = countdownParagraph.textContent
    if (currentText === 'T-minus 5...') {
      countdownParagraph.textContent = 'T-minus 4...'
    } else if (currentText === 'T-minus 4...') {
      countdownParagraph.textContent = 'T-minus 3...'
    } else if (currentText === 'T-minus 3...') {
      countdownParagraph.textContent = 'T-minus 2...'
    } else if (currentText === 'T-minus 2...') {
      countdownParagraph.textContent = 'T-minus 1...'
    } else if (currentText === 'T-minus 1...') {
      countdownParagraph.textContent = 'Liftoff! 🚀'
      clearInterval(countdownInterval)
    }
  }, 1000)

  // 👉 TASK 5 - Build a "Friends" widget
  const person = people[Math.floor(Math.random() * people.length)]
  const personParagraph = document.createElement('p')
  document.querySelector('.friends').appendChild(personParagraph)
  const year = person.dateOfBirth.split('-')[0]
  let sentence = `${person.fname} ${person.lname} was born in ${year} and `
  if(!person.friends.length){
    sentence += `has no friends.`
  } else { 
    sentence += `is friends with `
    for (let idx = 0; idx < person.friends.length; idx++) {
      const friendId = person.friends[idx]
      const friend = people.find(person => person.id === friendId)
      const fullName = `${friend.fname} ${friend.lname}`
      let isLastIdx = idx === person.friends.length - 1
      let isNextToLastIdx = idx === person.friends.length - 2
      if (isLastIdx) {
        sentence += `${fullName}.`
      } else if (isNextToLastIdx) {
        sentence += `${fullName} and `
      } else {
        sentence += `${fullName}, `
      }
    }
  }
  personParagraph.textContent = sentence

  // 👉 TASK 6 - Make it so user can tab through the widgets
  const widgetElements = document.querySelectorAll('.widget')
  widgetElements.forEach((widget, index) => {
    widget.setAttribute('tabindex', index + 1)
  })

  // 👆 WORK WORK ABOVE THIS LINE 👆
}

// ❗ DO NOT WORK BELOW THIS LINE
// ❗ DO NOT WORK BELOW THIS LINE
// ❗ DO NOT WORK BELOW THIS LINE
if (typeof module !== 'undefined' && module.exports) module.exports = { moduleProject1 }
else moduleProject1()