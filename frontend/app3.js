var settings = {
  "async": true,
  "crossDomain": true,
  "url": "http://localhost:3000/userprofile/",
  "method": "GET",
  "headers": {
    "cache-control": "no-cache",
    "postman-token": "ef04e8ae-d085-3729-22fc-ff75cbe580ad"
  }
}

$.ajax(settings).done(function (response) {
  console.log(response[0].user_data.id);
  for (var i = 0; i < response.length; i++) {
    var id = response[i].user_data.id;
  }
});
