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

export function addCat(newCatName) {
  return {type: 'ADD_CAT', payload: newCatName}
}
