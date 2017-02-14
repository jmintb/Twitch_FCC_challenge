

var TWITCH_CHANNEL_API_URL = "https://wind-bow.gomix.me/twitch-api/channels/";
var TWITCH_STREAM_API_URL = "https://wind-bow.gomix.me/twitch-api/streams/";
var streams = [];
var streamIds = ["ESL_SC2", "OgamingSC2", "freecodecamp", "storbeck", "fake_channel"]
function createNewStream(id, link, logo_url, status){
  var stream = {
  id: id,
  link: link,
  logo_url: logo_url,
  status: status
  };

  return stream;
}

var streams = {
  freecodecamp: {
    id: "freecodecamp",
    link: "",
    status: false
  }
};

$(document).ready(function(){

  for (var i = 0; i < streamIds.length; i++)
    
    streams.push()

  }


$.getJSON(TWITCH_API_URL+="freecodecamp?callback=?", function(data){
  console.log("data"+JSON.stringify(data));
});

});
