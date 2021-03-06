//global vars
var latitude, longitude;

$(function () {
    //geolocation
    if (navigator.geolocation) {
        // geolocation is supported
        $("#overlay").show();
        navigator.geolocation.getCurrentPosition(success_handler, failure_handler);
    } else {
        console.log("Geolocation is not supported");
    }

    //session
    $("#username").html(sessionStorage.getItem("username"));
});

function saveSearch() {
    var search = $("input[type='radio'][name='slider']:checked").val();
    //compose key to save searches
    var d = new Date();
    var formattedDate = d.getFullYear() + '/'
        + ((d.getMonth() + 1) < 10 ? '0' : '') + (d.getMonth() + 1) + '/'
        + (d.getDate() < 10 ? '0' : '') + d.getDate();
    var key = sessionStorage.getItem("username") + "-" + sessionStorage.getItem("currentLocation")
        + "-" + formattedDate + "-" + search;

    var array;
    switch (search) {
        case "ATM" : array = ATMArray; break;
        case "transport" : array = transportArray; break;
        case "food" : array = foodArray; break;
        case "night" : array = nightArray; break;
    }

    var sortedArray = new Array();
    sortedArray.push({key: key + "-" + 0, value: address});
    for(i = 1; i <= array.length; i++) {
        sortedArray.push({key: key + "-" + i, value: array[i-1]});
    }

    localStorage.setItem(key, JSON.stringify(sortedArray));

    alert("Your search was saved successfully!");
}

function success_handler(position) {
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;
    $("#overlay").hide();
    initialize(latitude, longitude);
    $(".button").removeAttr('disabled');
}

function failure_handler(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            msg = "User refused permission";
            break;
        case error.POSITION_UNAVAILABLE:
            msg = "Cannot obtain current position";
            break;
        case error.TIMEOUT:
            msg = "Timed out";
            break;
        default:
            msg = "Don't know what's happening here!";
            break;
    }

    $("<p>Location information is not available because: "
        + msg + "</p>").appendTo("#overlay");
}

//the following code is provided by Google and modified to fit project's purposes

var ATMMap, transportMap, foodMap, nightMap;
var infowindow;
var address;
var ATMArray = new Array(), transportArray = new Array(), foodArray = new Array(), nightArray = new Array();

function initialize(lat, lon) {
    var latLong = new google.maps.LatLng(Number(lat), Number(lon));

    var mapOptions = {
        zoom: 15,
        center: latLong
    };

    //getting current address
    new google.maps.Geocoder().geocode({'latLng': latLong}, function(results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            if (results[0]) {
                //formatted address
                address = results[0].formatted_address;
            } else {
                alert("No results found for your current address");
            }
        } else {
            address = "";
            alert("Geocoder failed to obtain your current address due to: " + status);
        }
    });

    //creating all maps
    ATMMap = new google.maps.Map(document.getElementById('ATMMapArea'), mapOptions);

    transportMap = new google.maps.Map(document.getElementById('transportMapArea'), mapOptions);

    foodMap = new google.maps.Map(document.getElementById('foodMapArea'), mapOptions);

    nightMap = new google.maps.Map(document.getElementById('nightMapArea'), mapOptions);

    //inserting marker for current position in all maps
    var image = 'images/position.png';
    var currentLocation1 = new google.maps.Marker({
        position: latLong,
        map: ATMMap,
        icon: image
    });
    var currentLocation2 = new google.maps.Marker({
        position: latLong,
        map: transportMap,
        icon: image
    });
    var currentLocation3 = new google.maps.Marker({
        position: latLong,
        map: foodMap,
        icon: image
    });
    var currentLocation4 = new google.maps.Marker({
        position: latLong,
        map: nightMap,
        icon: image
    });

    //creating requests for places
    var requestATM = {
        location: latLong,
        //radius: 10000,
        types: ['atm'],
        rankBy: google.maps.places.RankBy.DISTANCE
    };

    var requestTransport = {
        location: latLong,
        //radius: 5000,
        types: ['train_station', 'bus_station', 'subway_station'],
        rankBy: google.maps.places.RankBy.DISTANCE
    };

    var requestFood = {
        location: latLong,
        //radius: 5000,
        types: ['restaurant', 'food', 'cafe'],
        rankBy: google.maps.places.RankBy.DISTANCE
    };

    var requestNight = {
        location: latLong,
        //radius: 5000,
        types: ['bar', 'night_club'],
        rankBy: google.maps.places.RankBy.DISTANCE
    };

    infowindow = new google.maps.InfoWindow();

    //searching nearby places
    var serviceATM = new google.maps.places.PlacesService(ATMMap);
    serviceATM.nearbySearch(requestATM, callbackATM);

    var serviceTransport = new google.maps.places.PlacesService(transportMap);
    serviceTransport.nearbySearch(requestTransport, callbackTransport);

    var serviceFood = new google.maps.places.PlacesService(foodMap);
    serviceFood.nearbySearch(requestFood, callbackFood);

    var serviceNight = new google.maps.places.PlacesService(nightMap);
    serviceNight.nearbySearch(requestNight, callbackNight);
}

function callbackATM(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
        for (var i = 0; i < results.length; i++) {
            ATMArray.push(results[i].name + ", at " + results[i].vicinity);
            createMarker(results[i], ATMMap);
        }
    }
}

function callbackTransport(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
        for (var i = 0; i < results.length; i++) {
            transportArray.push(results[i].name + ", at " + results[i].vicinity);
            createMarker(results[i], transportMap);
        }
    }
}

function callbackFood(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
        for (var i = 0; i < results.length; i++) {
            foodArray.push(results[i].name + ", at " + results[i].vicinity);
            createMarker(results[i], foodMap);
        }
    }
}

function callbackNight(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
        for (var i = 0; i < results.length; i++) {
            nightArray.push(results[i].name + ", at " + results[i].vicinity);
            createMarker(results[i], nightMap);
        }
    }
}

function createMarker(place, map) {
    var marker = new google.maps.Marker({
        map: map,
        position: place.geometry.location,
        title: place.name
    });

    google.maps.event.addListener(marker, 'click', function () {
        infowindow.setContent('<h2>' + place.name + '</h3>' + '<p>' + place.vicinity + '</p>');
        infowindow.open(map, this);
    });
}