import Hangman from './hangman'
import getPuzzle from './requests'

let gameOne
  const startGame = async () => {
  const puzzle = await getPuzzle(2)
  console.log(puzzle)
  gameOne = new Hangman(puzzle,2)
  document.querySelector('#intro').innerHTML = '<h3>The word is '+gameOne.word.length+ ' letters</h3>'
  document.querySelector('#message').innerHTML = '<p>A new game has begun, press a key to make a guess</p>'
  gameOne.displayResult()
  }
  document.querySelector('#restart').addEventListener('click', startGame)
  //Initialize new game

  startGame()
  window.addEventListener('keypress', (e) => {
  gameOne.makeGuess(e.key)
  })
