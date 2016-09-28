export function fetchCats(){
  const cats = [{id: 1, name: 'Maru'}, {id: 2, name: 'Grumpy'}];

  return {
    type: 'FETCH_CATS',
    payload: cats
  }
}
