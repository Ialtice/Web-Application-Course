$(document).ready(function(){
    $.ajax({
        type: "get",
        url: "homePage.json",
        beforeSend: function() {
            $("#about").html("Loading...");
        },
        timeout: 100000,
        error: function(xhr, status, error) {
            alert("Error: " + xhr.status + " - " + error);
        },
        dataType: "json",
        success: function(data) {
            $("#about").html("");
            $.each(data, function(){
                $.each(this, function(key, value){
                    $("#about").append
                    ("<h3 class=\"headings\" id=\"headshot\">" + value.headshot + "</h3>"
                        + "<img id=\"imageHeadshot\" src="+ value.image + " alt=" + value.imageAlt + " class=\"right\" >"
                        + "<p id = \"aboutME\">" + value.aboutMe + "</p>"
                    );
                });

            });
        }
    });
    $.ajax({
        type: "get",
        url: "homePage1.json",
        beforeSend: function() {
            $("#accomplishments").html("Loading...");
        },
        timeout: 100000,
        error: function(xhr, status, error) {
            alert("Error: " + xhr.status + " - " + error);
        },
        dataType: "json",
        success: function(data) {
            $("#accomplishments").html("");
            $.each(data, function(){
                $.each(this, function(key, value){
                    $("#accomplishments").append
                    ("<h3 class=\"headings\">" + value.headings + "</h3>"
                    + "<ul>"
                            + "<li>" + value.award1 + "</li>"
                            + "<li>" + value.award2 + "</li>"
                            + "<li>" + value.award3 + "</li>"
                    + "</ul>"
                    );
                });

            });
        }
    });
    $.ajax({
        type: "get",
        url: "homepage3.json",
        beforeSend: function() {
            $("#why").html("Loading...");
        },
        timeout: 100000,
        error: function(xhr, status, error) {
            alert("Error: " + xhr.status + " - " + error);
        },
        dataType: "json",
        success: function(data) {
            $("#why").html("");
            $.each(data, function(){
                $.each(this, function(key, value){
                    $("#why").append
                    ("<img src=" + value.image + " alt=" + value.imageAlt + " id=\"awards\">"
                    + "<h3 class=\"headings\">" + value.heading +  "</h3>"
                    + "<p>" + value.whyText + "</p>"
                    );
                });

            });
        }
    });
});