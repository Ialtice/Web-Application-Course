$(document).ready(function() {
	$("li a").each(function() {
	    $(this).click(function(){//click event handler
	        $.ajax({
                type: "get",
                url: "json_files/" + this.title +".json", //Json File name built
                error: function(xhr, status, error) {
                    alert("Error: " + xhr.status + " - " + error);
                },
                dataType: "json",
                success: function(data) {
                    $("main").empty();// clear elements in main
                    $.each(data, function(){
                        $.each(this, function(key, value){
                            $("main").append($("<h1>" + value.title + "</h1>"// added html to main from data
                                + "<h2>" + value.month +"</h2>"
                                + "<h3>" + value.speaker + "</h3>"
                                + "<img src=" + value.image + " alt="  +  this.title + "_picture>"
                                + "<p>" + value.text + "</p>"));
                        });
                    });

                }
            })
        });
    });
}); // end ready and it works as intended
