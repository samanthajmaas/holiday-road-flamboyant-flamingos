const contentTarget = document.querySelector('.forecast')

const render = (forecastData) => {
    contentTarget.innerHTML = `
                            <section>
                                <h3 class="forecastHeading">5-day Forecast for this Park Destination</h3>
                            </section>
                            `

} 

export const Forecast = () => {
    render()
}