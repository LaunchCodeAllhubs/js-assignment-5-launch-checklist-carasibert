// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
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
   const pilotStatus = document.getElementById('pilotStatus');
   const copilotStatus = document.getElementById('copilotStatus');
   const fuelStatus = document.getElementById('fuelStatus');
   const cargoStatus = document.getElementById('cargoStatus');
   const launchStatus = document.getElementById('launchStatus');

    if (validateInput(pilot) === 'Empty' || validateInput(copilot) === 'Empty' || validateInput(fuelLevel) === 'Empty' || validateInput(cargoLevel) === 'Empty') {
        window.alert('All fields are required.');
        event.preventDefault();
        return false;
    }

    if (validateInput(fuelLevel) === 'Not a Number' || validateInput(cargoLevel) === 'Not a Number') {
        window.alert('Please enter valid numeric values for fuel level and cargo mass.')
        event.preventDefault();
        return false;
    }

    const fuelValidation = validateInput(fuelLevel);
    const cargoValidation = validateInput(cargoLevel);

    pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
    copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;

    list.style.visibility = 'hidden';
    launchStatus.innerHTML = `Awaiting information for Launch`;
    launchStatus.style.color = '';

    if (validateInput(fuelLevel) != 'Is a Number' || parseInt(fuelLevel) < 10000) {
        fuelStatus.innerHTML = `Fuel level too low for launch`;
        list.style.visibility = 'visible';
        launchStatus.innerHTML = 'Shuttle Not Ready for Launch';
        launchStatus.style.color = '#C7254E';
        return false;
    } else if (validateInput(cargoLevel) !== 'Is a Number' || parseInt(cargoLevel) > 10000) {
        cargoStatus.innerHTML = 'Cargo mass too heavy for launch';
        list.style.visibility = 'visible';
        launchStatus.innerHTML = 'Shuttle Not Ready for Launch';
        launchStatus.style.color = '#C7254E';
        return false; 
    } else {
        fuelStatus.innerHTML = `Fuel level high enough for launch`;
        cargoStatus.innerHTML = `Cargo mass low enough for launch`;
        list.style.visibility = 'hidden';
        launchStatus.innerHTML = 'Shuttle is Ready for Launch';
        launchStatus.style.color = '#419F6A';
        return true;
    }
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
