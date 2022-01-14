const baseUrl = "https://api.themoviedb.org/3";
const apiKey = "api_key=0d83d121e0afb1f0043673f8c49b7dcb";
const popularUrl = `${baseUrl}/movie/popular?${apiKey}`;
const searchUrl = `${baseUrl}/search/movie?${apiKey}&query=`;

class DataSource {
  static searchMovie(keyword) {
    return fetch(`${searchUrl + keyword}`)
    .then(response => response.json())
    .then(responseJson => {
      if(responseJson.results) {
        return Promise.resolve(responseJson.results);
      } else {
        return Promise.reject(`${keyword} is not found`);
      }
    })
  }

  static getMovie() {
    return fetch(`${popularUrl}`)
    .then(response => response.json())
    .then(responseJson => {
      if(responseJson.results) {
        return Promise.resolve(responseJson.results);
      } else {
        return Promise.reject(`${keyword} is not found`);
      }
    })
  }
}

export default DataSource;