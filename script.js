// Write your JavaScript code here!

const {
    addDestinationInfo,
    validateInput,
    formSubmission,
    myFetch,
    pickPlanet,
} = require('./scriptHelper')


const launchStatus = document.getElementById("launchStatus");
const missionTarget = document.getElementById("missionTarget");
window.addEventListener("load", function() {
    let form = document.querySelector("form");
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        let pilotName = document.querySelector("input[name=pilotName]");
        let copilotName = document.querySelector("input[name=copilotName]");
        let fuelLevel = document.querySelector("input[name=fuelLevel]");
        let cargoMass = document.querySelector("input[name=cargoMass]");
        const list = document.getElementById("faultyItems");
  
        formSubmission(
            document,
            list,
            pilotName.value,
            copilotName.value,
            fuelLevel.value,
            cargoMass.value
        );
    });

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
   
   listedPlanetsResponse.then(function (result) {
           // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
       listedPlanets = result;
       let randomPlanet = pickPlanet(listedPlanets);
       console.log(listedPlanets);

       addDestinationInfo(
        document, 
        randomPlanet.name,
        randomPlanet.diameter,
        randomPlanet.star,
        randomPlanet.distance,
        randomPlanet.moons,
        randomPlanet.image
       );
    });
});