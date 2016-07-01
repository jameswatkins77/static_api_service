var settings = {
  "async": true,
  "crossDomain": true,
  "url": "http://localhost:3000/users/",
  "method": "GET",
  "headers": {
    "cache-control": "no-cache",
    "postman-token": "ece57e57-548e-4bc6-ca57-d03a8c96a5bd"
  }
}

$.ajax(settings).done(function (response) {
  for (var i = 0; i < response.length; i++) {
    $("#user_list").append('<li id="user'+i+'">'+'<a href=userprofile.html>'+response[i].user_data.first_name+'</a>' + ' ' +response[i].user_data.last_name+'</li>');
  }
});
