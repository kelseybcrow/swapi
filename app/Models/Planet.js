export default class Planet {
  constructor({ name, rotation_period, orbital_period, diameter, climate, gravity, terrain, surface_water, population, residents }) {
    this.name = name
    this.rotation_period = rotation_period
    this.orbital_period = orbital_period
    this.diameter = diameter
    this.climate = climate
    this.gravity = gravity
    this.terrain = terrain
    this.surface_water = surface_water
    this.population = population
    this.residents = residents
  }

  get Template() {

    return /*html*/`
    <div class='col-3'>
      <div class="card p-2 value">
          ${this.name} - ${this.climate} - ${this.gravity} - ${this.population}
      </div>
    </div>
    `
  }
}