// this function is for the validation plugin that requires all fields to be submitted and
//email to be required type email
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