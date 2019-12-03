// const getPuzzle = (wordCount) => new Promise((resolve, reject) => {
//   const request = new XMLHttpRequest()
//
//   request.addEventListener('readystatechange', (e)=>{
//     if(e.target.readyState === 4 && e.target.status === 200){
//       const data = JSON.parse(e.target.responseText)
//       resolve(data.puzzle)
//     }else if(e.target.readyState === 4 && e.target.status !== 200){
//     reject(e.target.status)
//     }
//   })
//   request.open('GET','http://puzzle.mead.io/puzzle?wordCount='+wordCount)
//   request.send()
//
// }, (e) => {
//   console.log('error: '+e)
// })

//using Fetch which has built in promises
// const getPuzzle = (wordCount) => {
//   return fetch('http://puzzle.mead.io/puzzle?wordCount='+wordCount, {})
//   .then((res) =>{
//   if(res.status === 200){
//     return res.json()
//   }else{
//     throw new Error('unable to fetch the puzzle')
//   }
//   })
//   .then((data) => {
//
//     return data.puzzle
//   })
// }

//using async await with fetch to simplify code
const getPuzzle = async (wordCount) => {
  const res = await fetch('https://puzzle.mead.io/puzzle?wordCount=' + wordCount, {})

  if (res.status === 200) {
    const data = await res.json()
    return data.puzzle
  } else {
    throw new Error('unable to fetch the puzzle')
  }
}
