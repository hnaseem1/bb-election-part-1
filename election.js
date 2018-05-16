document.addEventListener("DOMContentLoaded", function() {

  // Imagination!

  var list = document.createElement('ul');
  var body = document.querySelector('body')

  $.ajax({
    url: "https://bb-election-api.herokuapp.com/",
    method: 'GET',
    dataType: 'json'
  }).done(function(data) {

    for (var i = 0; i < data.candidates.length; i++) {

      var list_item = document.createElement('li')
      var node = document.createTextNode("Name: " + data.candidates[i].name + " " + "Votes: "+ data.candidates[i].votes)
      list_item.appendChild(node)
      list.append(list_item)
    }

    body.append(list)


    console.log(data.candidates[0].name + " " + data.candidates[0].votes);
  })
});
