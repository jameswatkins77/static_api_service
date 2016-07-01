var settings = {
  "async": true,
  "crossDomain": true,
  "url": "http://localhost:3000/activeusers/",
  "method": "GET",
  "headers": {
    "cache-control": "no-cache",
    "postman-token": "edf84f59-afb6-5a08-0fc7-4a4758d997ad"
  }
}

$.ajax(settings).done(function (response) {
  for (var i = 0; i < response.length; i++) {
    if (response[i].user_data.active === 1) {
      $("#active_user_list").append("<li>"+"<a href=userprofile.html>"+response[i].user_data.first_name+"</a>" + " " +response[i].user_data.last_name+"</li>");
    }
  }
});
