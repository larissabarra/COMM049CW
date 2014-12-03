function deleteThisSearch(passedKey) {
    Object.keys(localStorage).forEach(function(key) {
        var regex = new RegExp("(" + passedKey.replace(/\//g, "\\/").replace(/\-/g, "\\-") + ")", "g");
        if (regex.test(key)) {
            localStorage.removeItem(key);
        }
    });
    window.location.reload();
}

$(function() {
    //dealing with offline page
    if(!(navigator.onLine)) {
        $("#online").css('display', 'none');
        $("#logoutButton").attr('href', 'logout.html');
    }

    //session
    $("#username").html(sessionStorage.getItem("username"));

    //the searches
    var username = sessionStorage.getItem("username");
    var currentLocation = sessionStorage.getItem("currentLocation");
    var html = "";

    var temporaryArray = new Array();

    for(i = 0; i < localStorage.length; i++) {
        var savedSearch = JSON.parse(localStorage.getItem(localStorage.key(i)));
        for(k = 0; k < savedSearch.length; k++) {
            var key = savedSearch[k].key.split("-");
            var entireKey = savedSearch[k].key;
            var key2 = savedSearch[k].key.split("-");
            key2.reverse().shift();
            var deleteKey = key2.reverse().join("-").trim();

            if (key[0] == username && key[1] == currentLocation) {
                if (key[4] == 0) {
                    //creating new header
                    html += "<div><h3><span class='titleSearch'>On <strong>" + key[2] + "</strong> you saved <strong>" + key[3] + "</strong> close to "
                        + savedSearch[k].value
                        + "</span><input type='button' value='×' class='deleteSearch' id='" + deleteKey + "'/>"
                        + "<div class='clear'></div></h3>"
                        + "<div><strong>The closest are:</strong>";
                } else {
                    //storing values to be sorted
                    html += "<br/><span>" + Number(key[4]) + " - " + savedSearch[k].value + "</span>";
                }
            }
            console.log(html);
        }
        html += "</div>";
    }

    html += "</div>";

    $("#searches").html(html);

    //sorting by most recent
    $("#searches h3").each(function() {
        $(this).closest('div').prependTo('#searches');
    });

    //the accordion effect
    $("#searches").accordion({
        header: "> div > h3",
        heightStyle: "content",
        collapsible: true,
        heightStyle: "fill",
        active: false
    });

    $('.deleteSearch').click(function () {
        deleteThisSearch($(this).attr('id'));
    });
});