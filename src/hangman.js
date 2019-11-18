//hangman class
class Hangman{
  constructor(word, attempts){
    this.word = word
    this.wordLetter = word.toLowerCase().split('')
    this.attempts = attempts
    this.guessed = []
    this.gameOver = false
    this.won = false
  }
  //display result
  displayResult(){
    let answer = ''
  this.wordLetter.map((letter) => {
    const index = this.guessed.indexOf(letter)
    if(index > -1){
      answer += this.guessed[index]
    }else if (letter === ' '){
        answer += ' &nbsp;'
    }else{
      answer += '_ '
    }
  })

  //check game over
  if(!this.gameOver && this.guessed.length > 0){
      document.querySelector('#message').innerHTML = this.status
  // if(this.attempts > 0){
  //
  //   if(this.wordLetter.every((letter) => this.guessed.includes(letter))){
  //       document.querySelector('#message').innerHTML = `Congrats! You won!`
  //   }else{
  //     document.querySelector('#message').innerHTML = `you have <strong>${this.attempts}</strong> attemps remaining...`
  //   }
  //
  // }else{
  //     this.gameOver = true
  //   document.querySelector('#message').innerHTML = `GAME OVER, the word was ${this.word}`
  // }
}
    document.querySelector('#word').innerHTML = '<h2>'+answer+'</h2>'
}

  //commit guess
  makeGuess(letter){
    if(!this.guessed.includes(letter)){
      this.guessed.push(letter)
      if(!this.wordLetter.includes(letter)) this.attempts -= 1
      this.displayResult()
    }else{
      document.querySelector('#message').innerHTML = '<p>You have already guessed that letter</p>'
    }
  }

  //get status message
  get status(){
    let message = ''
     if(this.attempts > 0){
       if(this.wordLetter.every((letter) => this.guessed.includes(letter) || letter === ' ')){
           return `Congrats! You won!`
       }else{
         return `you have <strong>${this.attempts}</strong> attemps remaining...`
       }

     }else{
         this.gameOver = true
      return `GAME OVER, the word was ${this.word}`
     }
  }
}

export {Hangman as default}
  //
  // //contructor for Hangman
  // const TheGame = function(word, attempts){
  // this.word = word
  // this.wordLetter = word.toLowerCase().split('')
  // this.attempts = attempts
  // this.guessed = []
  // this.gameOver = false
  // }
  //
  // //display results back to user
  // TheGame.prototype.displayResult = function (){
  //   let answer = ''
  // this.wordLetter.map((letter) => {
  //   const index = this.guessed.indexOf(letter)
  //   if(index > -1){
  //     answer += this.guessed[index]
  //   }else{
  //     answer += '_ '
  //   }
  // })
  //
  // //check game over
  // if(!this.gameOver && this.guessed.length > 0){
  // if(this.attempts > 0){
  //   document.querySelector('#message').innerHTML = `you have <strong>${this.attempts}</strong> attemps remaining...`
  // }else{
  //     this.gameOver = true
  //   document.querySelector('#message').innerHTML = `GAME OVER, the word was ${this.word}`
  // }}
  //   document.querySelector('#word').innerHTML = '<h2>'+answer+'</h2>'
  // }

  // //commit guess
  // TheGame.prototype.makeGuess = function (letter){
  //   if(!this.guessed.includes(letter)){
  //     this.guessed.push(letter)
  //     if(!this.wordLetter.includes(letter)) this.attempts -= 1
  //     this.displayResult()
  //   }else{
  //     document.querySelector('#message').innerHTML = '<p>You have already guessed that letter</p>'
  //   }
  // }
