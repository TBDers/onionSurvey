$("#submit").on("click", function (event) {
    event.preventDefault();




    // grab the form elements
    var newSurvey = {
        question1: $("#question1").val().trim(),
        question2: $("#question2").val().trim(),
        question3: $("#question3").find(":selected").text(),
        question4: $("#question4").val().trim(),
        question5: $("#question5").val().trim()
    };

    console.log(newSurvey);

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
            $("#question3").val("");
            $("#question4").val("");
            $("#question5").val("");
        });

});