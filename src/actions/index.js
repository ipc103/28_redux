
export function fetchCats(){
const cats = [{id: 1, name: 'Maru'}, {id: 2, name: "Grumpy Cat"}]

  return {
    type: 'FETCH_CATS',
    payload: cats
  }
}

export function addCats(name){
const cat = {name: name}
  return {
    type: 'ADD_CAT',
    payload: cat
  }
}

// action creators load data and creates an action for us
