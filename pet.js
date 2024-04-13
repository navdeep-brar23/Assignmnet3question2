// Function to load JSON data
function loadJSON(filename, callback) {
    var xhr = new XMLHttpRequest();
    xhr.overrideMimeType("application/json");
    xhr.open('GET', filename, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            callback(xhr.responseText);
        }
    };
    xhr.send();
}

// Function to display grooming services
function displayGroomingServices(services) {
    var groomingGrid = document.getElementById("groomingGrid");

    services.forEach(function(service, index) {
        var div = document.createElement("div");
        div.className = index % 2 === 0 ? "grooming-service even" : "grooming-service odd";
        var link = document.createElement("a");
        link.href = service.link;
        link.textContent = service.name;
        div.appendChild(link);
        groomingGrid.appendChild(div);
    });
}

// Function to display pet hotel info
function displayPetHotelInfo(info) {
    var petHotelInfo = document.getElementById("petHotelInfo");
    petHotelInfo.textContent = info.summary;
    petHotelInfo.innerHTML += '<div class="info-link">For more information, visit <a href="' + info.link + '">typsy</a></div>';
}

// Function to display pet day camp info
function displayPetDayCampInfo(info) {
    var outdoorPlayArea = document.getElementById("outdoorPlayArea");
    outdoorPlayArea.textContent = info.outdoorPlayArea;

    var indoorActivityZone = document.getElementById("indoorActivityZone");
    indoorActivityZone.textContent = info.indoorActivityZone;

    var restingArea = document.getElementById("restingArea");
    restingArea.textContent = info.restingArea;
}

// Load and display pet services data
loadJSON("pet_services.json", function(response) {
    var data = JSON.parse(response);
    displayGroomingServices(data.groomingServices);
    displayPetHotelInfo(data.petHotelInfo);
    displayPetDayCampInfo(data.petDayCamp);
});
