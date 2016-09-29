class CatApi {
  static fetchCats() {
    return fetch('http://localhost:3000/api/v1/cats').then(response => {
      return response.json();
    })
  }
}

export default CatApi;