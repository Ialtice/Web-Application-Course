$(document).ready(function() {
    $("#hire").validate({
        rules: {
            name: {
                required: true,
            },
            email: {
                required: true,
                email: true
            },
            summary: {
                required: true,
            },
        }
    });
});