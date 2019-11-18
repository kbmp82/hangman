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

//useing async await
//using Fetch which has built in promises
const getPuzzle = async (wordCount) => {
  const res = await fetch('http://puzzle.mead.io/puzzle?wordCount='+wordCount, {})

  if(res.status === 200){
    const data = await res.json()
      return data.puzzle
    }else{
      throw new Error('unable to fetch the puzzle')
    }
}

//get country
const getCountry = async (countryCode) => {
  const res = await fetch('https://restcountries.eu/rest/v2/all',{})
  if(res.status === 200){
    const data = await res.json()
    const country = data.find(countryInfo => {
      return countryInfo.alpha2Code === countryCode
    })
    return country.name
  }else{
    throw new Error('Could not fetch the country')
  }

  //   const request = new XMLHttpRequest()
  // request.addEventListener('readystatechange', (e) => {
  //   if(e.target.readyState === 4 && e.target.status === 200){
  //     const response = JSON.parse(e.target.responseText)
  //     const country = response.find(countryInfo => {
  //       return countryInfo.alpha2Code === countryCode
  //     })
  //     callback(country.name)
  //   }
  //
  // })
  // request.open('GET', 'https://restcountries.eu/rest/v2/all')
  // request.send()
}


//get location as promise

// const getLocation = () => {
//   return fetch('https://ipinfo.io?token=9471db2dfe3e41',{})
//   .then((res) => {
//     //console.log(res)
//     if(res.status === 200){
//     return res.json()
//   }else{
//     throw new Error('something went wrong')
//   }
//   })
//   .then((data) =>{
//     return getCountry(data.country)
//     .then((res) => {
//       data.fullCountry = res
//       return data
//     })
//
//   })
// }

//get location using async await
const getLocation = async () => {
  const res = await fetch('https://ipinfo.io?token=9471db2dfe3e41',{})
  if(res.status === 200){
  const data = await res.json()
  data.fullCountry = await getCountry(data.country)
  return data
  }else{
    throw new Error('something went wrong')
  }
}

export {getPuzzle as default}
