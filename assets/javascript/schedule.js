//link to firebase database
var trainData = new Firebase('https://ckktrainschedule.firebaseio.com/')

$('#submit').on('click', function() {
	// take in user info
	var trainName = $("#train-name").val().trim();
	var destination = $("#destination").val().trim();
	var firstTrainTime = $("#first-time").val().trim();
	var frequency = $("#frequency").val().trim();
//calculate values for vars below
	var nextArrival; 
	var minutesAway;
}