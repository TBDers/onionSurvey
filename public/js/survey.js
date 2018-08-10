$("#submit").on("click", function (event) {
    event.preventDefault();

    // grab the form elements
    var newSurvey = {
        question1: $("#question1").val().trim(),
        question2: $("#question2").val().trim(),
        question3: $("#textarea1").val().trim(),
    };

    $.post("/api/surveys", newSurvey,
        function (data) {
            if (data) {
                alert("Thank you for submitting your survey!");
            }
            else {
                alert("Sorry please try again");
            }

            // Clear the form when submitting
            $("#question1").val("");
            $("#question2").val("");
            $("#textarea1").val("");
        });

});