(function () {
    emailjs.init("user_tj1OIC1yuctFWQRomFWM9");
})();

$("#sendSurveyButton").on("click", function (event) {
    event.preventDefault();
    var emailNames = $("#email").val();
    // var emailNames = str.valueOf();
    console.log(emailNames);

    if (emailNames === "") {
        alert("Please insert email addresses. Eg: onion1@onionsurvey.com , onion2@onionsurvery.com, etc.");
    }

    else {
        var template_params = {
            "to_name": "Cepa Head",
            "from_name": "Onion Survey",
            "message_html": "Go to www.Onionsurvey.com if you're awesome and take the survey!",
            "user_email": emailNames
        }

        var service_id = "default_service";
        var template_id = "template_fI64wY8s";
        emailjs.send(service_id, template_id, template_params);

        return false;
    };
});







// var myform = $("form#myform");
// myform.submit(function(event){
// 	event.preventDefault();

// 	var params = myform.serializeArray().reduce(function(obj, item) {
//      obj[item.name] = item.value;
//      return obj;
//   }, {});

//   // Change to your service ID, or keep using the default service
//   var service_id = "default_service";

//   var template_id = "template_fI64wY8s";
//   myform.find("button").text("Sending...");
//   emailjs.send(service_id,template_id,params)
//   	.then(function(){ 
//        alert("Sent!");
//        myform.find("button").text("Send");
//      }, function(err) {
//        alert("Send email failed!\r\n Response:\n " + JSON.stringify(err));
//        myform.find("button").text("Send");
//     });
//   return false;
// });