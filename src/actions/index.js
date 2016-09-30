export function fetchCats(){

  const cats = fetch('http://localhost:3000/api/v1/cats', 
    {headers: {'Authorization': `Bearer ${sessionStorage.getItem('jwt')}`}})
    .then(response => {
    return response.json()
  }).then(catsPayload => {
    return catsPayload
  })

  return {
    type: 'FETCH_CATS',
    payload: cats
  }

}

export function fetchDogs(){
  const dogs = [{id: 1, name: 'Odie'}];

  return {
    type: 'FETCH_DOGS',
    payload: dogs
  }
}

export function addCat(newCatFromForm) {
  const newCatFromApi = fetch('http://localhost:3000/api/v1/cats', {
    method: 'POST', 
    headers: {
      'Accept': 'application/json', 
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${sessionStorage.getItem('jwt')}`
    },
    body: JSON.stringify({cat: newCatFromForm})

  }).then(response => {
    return response.json()
  }).then(newCatPayload => {
    return newCatPayload
  })
  // POST the new cat data to the API
  // wait to receive a response of the newly created cat
  // ONLY THEN will it put that cat in the action object's payload, and send it 
  // through to the reducer
  return {type: 'ADD_CAT', payload: newCatFromApi}
}

export function fetchHobbies() {
  const hobbies = fetch('http://localhost:3000/api/v1/hobbies', {headers: {"Authorization": `Bearer ${sessionStorage.getItem('jwt')}`}}).then(response => {
    return response.json();
  }).then(hobbiesPayload => {
    return hobbiesPayload;
  })

  return {type: 'FETCH_HOBBIES', payload: hobbies}
}

export function logIn(userCreds) {
  debugger;
  const jwtToken = fetch('http://localhost:3000/api/v1/login', {
    method: 'POST', 
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }, 
    body: JSON.stringify(userCreds)
  }).then(response => {
    return response.json()
  }).then(jwtTokenFromPayload => {
    return jwtTokenFromPayload
  })
  return {type: 'LOG_IN_SUCCESS', payload: jwtToken}
  // 1. use fetch to POST this to the API
  // 2. save the JWT that we get back from the API, to localStorage
}











