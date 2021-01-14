export const Location = (location) =>{
return `
<section class="locationCard">
<h1 class="title">LOCATION</h1>
<div class="locationCard__city">CITY: ${location.city}</div>
<div class="locationCard__country">COUNTRY: ${location.country}</div>
<div class="locationCard__bodyWater">BODY OF WATER: ${location.bodyWater}</div>
<div><img  class="locationCard__image" src="${location.image}" width="1000px"/>



`
}