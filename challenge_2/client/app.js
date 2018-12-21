$('form').on('submit', function(e){
  e.preventDefault();

  var data = $('form').serializeArray().reduce(function(obj, item) {
    obj[item.name] = item.value;
    return obj;
  }, {});

  var message = data.jsontext;
  //console.log('my message pre-ajax: ', message);

  /* initiate ajax */
  $.ajax({
<<<<<<< HEAD
    url: "http://127.0.0.1:3004/json",
=======
    url: "http://127.0.0.1:3001/json",
>>>>>>> d93395ce8a6d476b245b4aef5859362e71dc95e0
    type: 'POST',
    data: message,
    contentType: 'application/json',
    success: function(result){
    console.log('result back on the client: ', result);
    $("#jsonText").html(result);
    },
    fail: function(err){
      console.log('err back on the client: ', err);
      $("#jsonText").html('Damn this sucks, crickets');
    }
  });
});

