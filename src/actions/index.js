export function fetchCats(){

  const cats = fetch('http://localhost:3000/api/v1/cats').then(response => {
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
  debugger;
  const newCatFromApi = fetch('http://localhost:3000/api/v1/cats', {
    method: 'POST', 
    headers: {
      'Accept': 'application/json', 
      'Content-Type': 'application/json'
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











