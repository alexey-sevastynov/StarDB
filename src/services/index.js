export default class SwapiService {

    _apiBase = 'https://swapi.dev/api';
  
    async getResource(url) {
      const res = await fetch(`${this._apiBase}${url}`);
  
      if (!res.ok) {
        throw new Error(`Could not fetch ${url}, received ${res.status}`);
      }
  
      return await res.json();
    }
  
   
    async getPerson(id) {
      const person = await this.getResource(`/people/${id}/`);
      return this._transformPerson(person);
    }
    async getStarships(id) {
      const starships = await this.getResource(`/starships/${id}/`);
      return this._transformStarship(starships);
    }
    async getPlanets(id) {
      const planet = await this.getResource(`/planets/${id}/`);
      return this._transformPlanet(planet);
    }


    async getAllPeople() {
      const res = await this.getResource(`/people/`);
      return res.results.map(this._transformPerson);
    }
    async getAllPlanets() {
      const res = await this.getResource(`/planets/`);
      return res.results.map(this._transformPlanet);
    }
    async getAllStarships() {
      const res = await this.getResource(`/starships/`);
      return res.results.map(this._transformStarship)
    }
  
  
   
   

    _extractId(item){
      const idRegExp = /\/([0-9]*)\/$/;
      return item.url.match(idRegExp)[1]; 
      
    }
    _transformPlanet(planet) {
      return {
        id: this._extractId(planet),
        name: planet.name,
        population: planet.population,
        rotationPeriod: planet.rotation_period,
        diameter: planet.diameter
      }
    }
    _transformStarship(starship) {
      return {
        id: this._extractId(starship),
        name: starship.name,
        model: starship.model,
        manufacturer: starship.manufacturer,
        cosInCredits: starship.cosInCredits,
        length: starship.length,
        crew: starship.crew,
        passengers: starship.passengers,
        cargoCapacity: starship.cargoCapacity     
      }
    }

    _transformPerson(person) {
      return {
        id: this._extractId(person),
        name: person.name,
        gender: person.gender,
        birthYear: person.birthYear,
        eyeColor: person.eyeColor
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