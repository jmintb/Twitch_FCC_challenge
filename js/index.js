var TWITCH_CHANNEL_API_URL = "https://wind-bow.gomix.me/twitch-api/channels/";
var TWITCH_STREAM_API_URL = "https://wind-bow.gomix.me/twitch-api/streams/";
var channelIds = ["ESL_SC2", "OgamingSC2", "freecodecamp", "storbeck", "atest132453"]
var rows = [];


$(document).ready(function() {
    $.getJSON(TWITCH_CHANNEL_API_URL + "test_channelnn" + "?callback=?", function(data) {
        console.log("new test " + JSON.stringify(data))
    });
    updateChannels();

    function updateChannels() {
        channelIds.forEach(function(channel) {
            $.getJSON(TWITCH_CHANNEL_API_URL + channel + "?callback=?", function(data) {
                var channelData = {};
                if (data.error == "Not Found") {
                    channelData.id = channel;
                    channelData.status = "Does not exist.";
                    channelData.channel_url = "";
                    channelData.logo_url = "http://shackmanlab.org/wp-content/uploads/2013/07/person-placeholder.jpg";
                    console.log("channelData" + JSON.stringify(channelData));
                    updateHtml(channelData);
                } else {
                    channelData.logo_url = data.logo;
                    channelData.id = data.display_name;
                    channelData.channel_url = data.url;
                    $.getJSON(TWITCH_STREAM_API_URL + channel + "?callback=?", function(data) {
                        if (data.stream === null) {
                            channelData.status = "Offline"
                        } else {
                            channelData.status = data.stream.game;
                        }
                        updateHtml(channelData);
                        console.log("channelData" + JSON.stringify(channelData));
                    });
                }
            });
        });
    }

    function updateHtml(data) {
      var innerHtml = '  <td><img class="channel-icon img img-responsive" src='+data.logo_url+' alt="">' +data.id+'</td><td><a href="'+data.channel_url+'">'+data.status+'</a></td>'
      var row = document.createElement("tr");
      $(row).attr("id", data.id);
      if (data.status != "Offline" && data.status != "Does not exist.") {
        $(row).addClass("table-row-online");
      }
      $(row).html(innerHtml);
      rows.push(row);
      if(rows.length == channelIds.length){
        rows.sort( function(a, b){
          var id_a = $(a).attr("id");
          var id_b =  $(b).attr("id");

              return id_a.localeCompare(id_b);
        });
        $("tbody").append(rows);

      }

    }



});
