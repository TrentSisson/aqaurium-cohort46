import {useLocation} from "./LocationDataProvider.js"
import {Location} from "./Location.js"



export const LocationList = () => {

    const contentElement = document.querySelector(".containerLeft__travelLocations")
    const location = useLocation()

    // Generate all of the HTML for all of the locations
    let locationHTMLRepresentations = ""
    for (const local of location) {
        locationHTMLRepresentations += Location(local)

        /*
            Invoke the Location component function
            and pass the current fish object as an argument.
            Each time, add the return value to the
            locationHTMLRepresentations variable with `+=`
        */
    }
    

    // Add a section, and all of the fish to the DOM
    contentElement.innerHTML += `
        <article class="LocationList">
            ${locationHTMLRepresentations}
        </article>
    `
}