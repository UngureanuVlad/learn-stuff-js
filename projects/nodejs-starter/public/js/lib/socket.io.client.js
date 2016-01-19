var socket = io();
$('form').submit(function(){
  socket.emit('chat message', 'add_user_name: ' + $('#m').val());
  $('#m').val('');
  return false;
});
socket.on('chat message', function(msg){
  $('#messages').append($('<li>').text(msg));
  var objDiv = document.getElementById("messages");
objDiv.scrollTop = objDiv.scrollHeight;
});
socket.on('error', function(){
  socket.socket.reconnect();
});
socket.on('disconnect', function(){
  socket.socket.reconnect();
});
