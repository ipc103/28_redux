export function fetchCats () {
    const cats = [{id: 1, name: '10x'}, {id: 2, name: 'Fıstık'}, {id: 3, name: 'Maru'}];
    return {
        type: 'FETCH_CATS',
        payload: cats
    }
}


export function addCats (ourString) {
    const newCat = {name: ourString}    
    return {
        type: 'ADD_CATS',
        payload: newCat
    }
}

