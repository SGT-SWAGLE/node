var main = function () {
    $('.article').click(function () {
        $('.article').removeClass('current'); //these two reset all articles to default state
        $('.description').hide();

        $(this).addClass('current'); // these two expand and highlight the article clicked
        $(this).children('.description').show();
    });





// this was commented out because it causes problems when your typing into the form

/*
    $(document).keypress(function (event) {
        if (event.which === 111) {
            $('.current').children('.description').toggle();
        }
        else if (event.which === 110) {
            var currentArticle = $('.current');
            var nextArticle = currentArticle.next();
            currentArticle.removeClass('current');
            nextArticle.addClass('current');
        }
    });
    */
    
        $( "#cityfield" ).keyup(function() {
  var url = "http://uskkfbe6e088.swagle.koding.io:8123/getcity?q="+$("#cityfield").val();
$.getJSON(url,function(data) {
    var everything;
    everything = "<ul>";
    $.each(data, function(i,item) {
      everything += "<li> "+data[i].city;
    });
    everything += "</ul>";
    $("#txtHint").html(everything);
  })
  .done(function() { console.log('getJSON request succeeded!'); })
  .fail(function(jqXHR, textStatus, errorThrown) { 
    console.log('getJSON request failed! ' + textStatus); 
    console.log("incoming "+jqXHR.responseText);
  })
  .always(function() { console.log('getJSON request ended!');
  })
  .complete(function() { console.log("complete"); });
});

$("#button").click(function(e){ //when submit button is clicked
  var value = $("#cityfield").val();
  console.log(value);
  e.preventDefault();
  $("#dispcity").text(value); //displays in the box
  
      var myurl= "https://api.wunderground.com/api/0d6a3f58a17bc196/geolookup/conditions/q/UT/"; //sends a request to weather service for info
  myurl += value;
  myurl += ".json";
  console.log(myurl);
  $.ajax({
    url : myurl,
    dataType : "jsonp",
    success : function(parsed_json) {
      var location = parsed_json['location']['city'];
      var temp_string = parsed_json['current_observation']['temperature_string'];
      var current_weather = parsed_json['current_observation']['weather'];
      everything = "<ul>";
      everything += "<li>Location: "+location; //then fills it in spans
      everything += "<li>Temperature: "+temp_string;
      everything += "<li>Weather: "+current_weather;
      everything += "</ul>";
      $("#weather").html(everything);
    }
  });
  
});

};

$(document).ready(main);
    
    
    // the folowing is archive of proper code! = = = = = = = = = = = = = = = = =
    /*
    $( "#cityfield" ).keyup(function() {
  var url = "https://students.cs.byu.edu/~clement/CS360/ajax/getcity.cgi?q="+$("#cityfield").val();
$.getJSON(url,function(data) {
    var everything;
    everything = "<ul>";
    $.each(data, function(i,item) {
      everything += "<li> "+data[i].city;
    });
    everything += "</ul>";
    $("#txtHint").html(everything);
  })
  .done(function() { console.log('getJSON request succeeded!'); })
  .fail(function(jqXHR, textStatus, errorThrown) { 
    console.log('getJSON request failed! ' + textStatus); 
    console.log("incoming "+jqXHR.responseText);
  })
  .always(function() { console.log('getJSON request ended!');
  })
  .complete(function() { console.log("complete"); });
});

$("#button").click(function(e){ //when submit button is clicked
  var value = $("#cityfield").val();
  console.log(value);
  e.preventDefault();
  $("#dispcity").text(value); //displays in the box
  
      var myurl= "https://api.wunderground.com/api/0d6a3f58a17bc196/geolookup/conditions/q/UT/"; //sends a request to weather service for info
  myurl += value;
  myurl += ".json";
  console.log(myurl);
  $.ajax({
    url : myurl,
    dataType : "jsonp",
    success : function(parsed_json) {
      var location = parsed_json['location']['city'];
      var temp_string = parsed_json['current_observation']['temperature_string'];
      var current_weather = parsed_json['current_observation']['weather'];
      everything = "<ul>";
      everything += "<li>Location: "+location; //then fills it in spans
      everything += "<li>Temperature: "+temp_string;
      everything += "<li>Weather: "+current_weather;
      everything += "</ul>";
      $("#weather").html(everything);
    }
  });
  
});

};

$(document).ready(main);
*/