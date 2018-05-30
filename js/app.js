/*The number of clicks should increment when the cat picture is clicked.*/
var elem =document.getElementById('cat');
var score = document.getElementById('score');

/* parseInt(); */
$('#cat').click(function(e){
   var presentScore = $('#score').text();
   $('#score').text(parseInt(presentScore)+1);
});