/*The number of clicks should increment when the cat picture is clicked.*/
var elem =document.getElementById('cat_1');
var score = document.getElementById('score_1');
var elem =document.getElementById('cat_2');
var score = document.getElementById('score_2');

/* parseInt(); */
$('#cat_1').click(function(e){
   var presentScore = $('#score_1').text();
   $('#score_1').text(parseInt(presentScore)+1);
});

$('#cat_2').click(function(e){
   var presentScore = $('#score_2').text();
   $('#score_2').text(parseInt(presentScore)+1);
});