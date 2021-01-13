export const Fish = (fish) => {
    return `
        <section class="fishCard">
            <div><img  class="fish__image image--card" src="${fish.image}" width="200px"/></div>
            <div class="fishCard__name">NAME: ${fish.name}</div>
            <div class="fishCard__species">SPECIES: ${fish.species}</div>
            <div class="fishCard__length">SIZE: ${fish.length}</div>
            <div class="fishCard__location">LOCATION: ${fish.location}</div>
            <div class="fishCard__diet">${fish.food}</div>
        </section>
    `
}