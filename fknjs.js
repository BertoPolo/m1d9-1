/*const displaySpots = function() {
    
    let bingoSpotsNode = document.getElementById("bingoSpots")

    for (let spotNumber = 1 ; spotNumber <= 76; spotNumber++ ){

        let newSpotNumber = document.createElement("div")
        newSpotNumber.innerText = spotNumber
        newSpotNumber.classList.add("spots")

        bingoSpotsNode.appendChild(newSpotNumber)
    }
}
window.onload = function() {
    displaySpots()
}
*/


const displayMonth = function() {

    let monthContainerNode = document.getElementById("bingoSpots")

    for (let dayNumber = 1; dayNumber <= 76; dayNumber++) {

        let newDayNode = document.createElement("div") 
        newDayNode.innerText = dayNumber 
        newDayNode.classList.add("day")  

        monthContainerNode.appendChild(newDayNode)
    }

}

window.onload = function() {
    displayMonth()
}