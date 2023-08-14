// Write your helper functions here!
require('isomorphic-fetch');
const { JSDOM } = require("jsdom");
const dom = new JSDOM();
const document = dom.window.document;

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   const missionTarget = document.getElementById('missionTarget');
    missionTarget.innerHTML = `
    <h2>Mission Destination</h2>
    <ol>
        <li>Name: ${name}</li>
        <li>Diameter: ${diameter}</li>
        <li>Star: ${star}</li>
        <li>Distance from Earth: ${distance}</li>
        <li>Number of Moons: ${moons}</li>
    </ol>
    <img src= "${imageUrl}">`;
    }

function validateInput(testInput) {
    if (testInput === '') {
        return 'Empty';
    } else if (isNaN(testInput)) {
        return 'Not a Number';
    } else {
        return 'Is a Number';
    }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
   const pilotStatus = validateInput(pilot);
   //list = document.getElementById("faultyItems");
   const copilotStatus = validateInput(copilot);
   const fuelStatus = validateInput(fuelLevel);
   const cargoStatus = validateInput(cargoLevel);
   const launchStatus = document.getElementById("launchStatus");

   document.getElementById("pilotStatus").innerHTML = `Pilot ${pilot} is ready for launch`;
   document.getElementById("copilotStatus").innerHTML = `Co-pilot ${copilot} is ready for launch`;
   

    if (pilotStatus === 'Empty' || copilotStatus === 'Empty' || fuelStatus === 'Empty' || cargoStatus === 'Empty') {
        window.alert('All fields are required.');
        event.preventDefault();
        // return false;
    } else if (fuelStatus === 'Not a Number' || cargoStatus === 'Not a Number') {
        window.alert('Please enter valid numeric values for fuel level and cargo mass.');
        event.preventDefault();
        // return false;
    } else {

    if (fuelLevel < 10000) {
        document.getElementById("fuelStatus").innerHTML = `Fuel level too low for launch`;
        document.getElementById("faultyItems").style.visibility = 'visible';
        document.getElementById("launchStatus").innerHTML = 'Shuttle Not Ready for Launch';
        document.getElementById("launchStatus").style.color = '#C7254E';
        //return false;
    } else if (cargoLevel > 10000) {
        document.getElementById("cargoStatus").innerHTML = 'Cargo mass too heavy for launch';
        document.getElementById("faultyItems").style.visibility = 'visible';
        document.getElementById("launchStatus").innerHTML = 'Shuttle Not Ready for Launch';
        document.getElementById("launchStatus").style.color = '#C7254E';
        //return false; 
    } else {
        document.getElementById("fuelStatus").innerHTML = `Fuel level high enough for launch`;
        document.getElementById("cargoStatus").innerHTML = `Cargo mass low enough for launch`;
        document.getElementById("faultyItems").style.visibility = 'hidden';
        launchStatus.innerHTML = 'Shuttle is Ready for Launch';
        launchStatus.style.color = '#419F6A';
        //return true;
        pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
        copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
    }
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch('https://handlers.education.launchcode.org/static/planets.json').then(response => response.json());

    return planetsReturned;
}

function pickPlanet(planets) {
    const randomIndex = Math.floor(Math.random() * planets.length);
    return planets[randomIndex];
}
};
module.exports = {
document,
addDestinationInfo,
validateInput,
formSubmission,
pickPlanet,
myFetch,
};
