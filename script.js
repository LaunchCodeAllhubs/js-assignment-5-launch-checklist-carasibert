// Write your JavaScript code here!

const {
    addDestinationInfo,
    validateInput,
    formSubmission,
    myFetch,
    pickPlanet,
} = require('./scriptHelper')

document.addEventListener("load", function() {
    const list = document.getElementById("faultyItems");
    const launchStatus = document.getElementById("launchStatus");
    const missionTarget = document.getElementById("missionTarget");
   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
   
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);

       const randomPlanet = pickPlanet(listedPlanets);

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

    const form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
        let pilotName = document.querySelector("input[name=pilotName");
        let copilotName = document.querySelector("input[name=copilotName]");
        let fuelLevel = document.querySelector("input[name=fuelLevel]");
        let cargoMass = document.querySelector("input[name=cargoMass]");
  
        let formValidation = formSubmission(
            document,
            list,
            pilotName.value,
            copilotName.value,
            fuelLevel.value,
            cargoMass.value
        );

        if (formValidation) {
            missionTarget.style.visibility = "visible";
        }
    });
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
});