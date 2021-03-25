

$(document).ready(function() {
    var url;
    var caption;
    var imagesArr = new Array();
    // get the image URL and caption for each image
    $("a").each(function(){
        url = $(this).attr("href");
        caption = $(this). attr("title");
        var tempImage = [url,caption];
        imagesArr.push(tempImage);
    });
    // preload the image for each link
    var $images = new Array();
    for (var i = 0; i < imagesArr.length; i++){
        $images.push($("<img>").attr("src", imagesArr[i][1]));
    }
    // set up the event handlers for each link
    $("a").on("click", function(event){
        // cancel the default action of each link
        event.preventDefault();
        $("#image").attr("src", )

    })

    // move the focus to the first link
    $("a:first").focus();
}); // end ready