$("#navListButton").click(function(){
    $("#navList").slideToggle();
});


let winH = $(window).height() * 0.8;

$(window).on('scroll', function () {
    if ($(this).scrollTop() > winH ) {
        $('#nav').addClass('bgRed');
        $('#headerImg').attr('src', 'media/logo2.png');
    } else {
        $('#nav').removeClass('bgRed');
        $('#headerImg').attr('src', 'media/logo2.png');
    }
}).on('resize', function(){
   winH = $(this).height() * 0.8;
});



// Slideshow JS
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 60000); // Change image every 2 seconds
}










// SongKick api
function getCurrentEvents(xhttp) {
console.log("Hello World!")

// Grabbing the data
$.getJSON("https://api.songkick.com/api/3.0/artists/10130913/calendar.json?apikey=9FXv19GCGsdmTVTU&jsoncallback=?",

    function(data) {
    // data is JSON response object
    console.dir(data);


    function popEvent(data) {
        console.log("working")
        // Make the blank variables
        var domEventName = document.getElementById("eventName");
        var domEventVenue = document.getElementById("eventVenue");
        var domEventTime = document.getElementById("eventTime");
        var domEventAge = document.getElementById("eventAge");

        var upComingShows = document.getElementById("upComingShows");

        console.log(data.resultsPage.totalEntries);

        if (data.resultsPage.totalEntries === 0) {
            domEventName.textContent = "N/A";
            domEventVenue.textContent = "N/A";
            domEventTime.textContent = "N/A";
            domEventAge.textContent = "N/A";

            // upComingShows.style.display = "none";
            $("#upComingShows").hide();
            $("#noShows").show();
        };
        // Loop though the object bassed on the number of events e.g: 4
        // console.log(data.resultsPage.results + "<br>");

        if (data.resultsPage.totalEntries >= 1) {
            var domEventName = document.getElementById("eventName");
            var domEventVenue = document.getElementById("eventVenue");
            var domEventTime = document.getElementById("eventTime");
            var domEventAge = document.getElementById("eventAge");

            $("#upComingShows").show();
            $("#noShows").hide();

            for (var i = 0; i < data.resultsPage.totalEntries; i++) {
                data.resultsPage.totalEntries[i];
                console.log("Event loop working!")

                domEventName.textContent += data.resultsPage.results.event[i].displayName;
                $( "<br>" ).appendTo( "#eventName" );

                domEventVenue.textContent += data.resultsPage.results.event[i].venue.displayName;
                $( "<br>" ).appendTo( "#eventVenue" );

                domEventTime.textContent += data.resultsPage.results.event[i].start.datetime;
                $( "<br>" ).appendTo( "#eventTime" );

                domEventAge.textContent += data.resultsPage.results.event[i].ageRestriction;
                $( "<br>" ).appendTo( "#eventAge" );


            };


        };
    };
    popEvent(data);
    });
};
getCurrentEvents();
