export default class SwapiService {

    _apiBase = 'https://swapi.dev/api';
  
    async getResource(url) {
      const res = await fetch(`${this._apiBase}${url}`);
  
      if (!res.ok) {
        throw new Error(`Could not fetch ${url}, received ${res.status}`);
      }
  
      return await res.json();
    }
  
    async getAllPeople() {
      const res = await this.getResource(`/people/`);
      return res.results;
    }
    getPerson(id) {
      return this.getResource(`/people/${id}/`);
    }
  
    async getAllPlanets() {
      const res = await this.getResource(`/planets/`);
      return res.results;
    }
    getPlanets(id) {
      return this.getResource(`/planets/${id}/`);
    }
  
    async getAllStarships() {
      const res = await this.getResource(`/starships/`);
      return res.results;
    }
    getStarships(id) {
      return this.getResource(`/starships/${id}/`);
    }
  }
  
  const swapi = new SwapiService();
  swapi.getPerson(3).then(people => console.log(people.name));
  swapi.getAllPeople().then(body => console.log(body));
  
  
  
  
  // getResource('https://swapi.dev/api/people/1/')
  //   .then(body => console.log(body))
  //   .catch(err => console.log(err));
  
  // fetch('https://swapi.dev/api/people/1/')
  //   .then(response => response.json())
  //   .then(body => console.log(body));