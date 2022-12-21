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
    async getPlanets(id) {
      const planet = await this.getResource(`/planets/${id}/`);
      return planet._transformPlanet(planet);
    }
  
    async getAllStarships() {
      const res = await this.getResource(`/starships/`);
      return res.results.map(this._transformPlanet)
    }
    getStarships(id) {
      return this.getResource(`/starships/${id}/`);
    }

    _transformPlanet(planet) {
      const idRegExp = /\/([0-9]*)\/$/;
      const id = planet.url.match(idRegExp)[1];
      
      return {
        id,
        name: planet.name,
        population: planet.population,
        rotationPeriod: planet.rotation_period,
        diameter: planet.diameter
      }
    }
  }
  
  const swapi = new SwapiService();
  
  swapi.getAllPeople().then(body => console.log('getAllPeople',body));
  swapi.getAllPlanets().then(body => console.log('getAllPlanets',body));
  swapi.getAllStarships().then(body => console.log('getAllStarships',body));
  
  
  
  
  // getResource('https://swapi.dev/api/people/1/')
  //   .then(body => console.log(body))
  //   .catch(err => console.log(err));
  
  // fetch('https://swapi.dev/api/people/1/')
  //   .then(response => response.json())
  //   .then(body => console.log(body));