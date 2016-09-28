export function fetchCats(){
  const cats = [{id: 1, name: 'Maru'}, {id: 2, name: 'Grumpy Cat'}, {id: 3, name: 'Shadow'}];

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
