import { getItineraries, useItineraries } from "./ItineraryProvider.js"
import { itinerary } from "./Itinerary.js"

const contentTarget = document.querySelector(".itineraryList")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("delete--")){
    // if (window.confirm("Press `OK` to Delete this itinerary forever")){
    const [prefix, itineraryId] = clickEvent.target.id.split("--")
    const deleteButtonEvent = new CustomEvent("ItineraryDeleteButtonClicked", {
        detail: {
            clickedItineraryId: parseInt(itineraryId)
        }
    })
    eventHub.dispatchEvent(deleteButtonEvent)
    console.log(deleteButtonEvent)
    // }
    }
})

eventHub.addEventListener("itineraryStateChanged", () => {
    ItineraryList()
})

const render = (currentItineraryArray) => {
    contentTarget.innerHTML = `
                            ${
                                currentItineraryArray.map(itineraryObj => {
                                    return itinerary(itineraryObj)
                                }).reverse().join("")
                            }
    `
}

export const ItineraryList = () => {
    getItineraries()
        .then(() => {
            const itineraryArray = useItineraries()
            render(itineraryArray)
        })
}

