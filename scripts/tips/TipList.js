import { useTips } from "./TipDataProvider.js"
import { Tips } from "./Tip.js"

export const TipList = () => {

    const contentElement = document.querySelector(".containerRight")
    const tips = useTips()

    // Generate all of the HTML for all of the fish
    let tipsHTMLRepresentations = ""
    for (const tip of tips) {
        tipsHTMLRepresentations += Tips(tip)

        /*
            Invoke the Fish component function
            and pass the current fish object as an argument.
            Each time, add the return value to the
            tipsHTMLRepresentations variable with `+=`
        */
    }
    

    // Add a section, and all of the fish to the DOM
    contentElement.innerHTML += `
        <article class="tipList">
            ${tipsHTMLRepresentations}
        </article>
    `
}