/*
외부에서 끌어올 경우 작동이 정상적으로 안된다....ㅠㅠ 왤까...
*/
/*
var direction = 'right';
var offset = 0;
var intervalLength = 120;
var clicks = 0;

$('#clicked').offset({left: offset, top:offset});

var moveSquare = function (){
 
  if(direction === 'right'){
    $('#clicked').offset({left:offset});
    offset++;
    if(offset > 200){
      offset = 0;
      direction = 'down';
    }
  }else if(direction === 'down'){
    $('#clicked').offset({top: offset});
    offset++;
    if(offset > 200){
      offset = 200;
      direction = 'left';
    }
  }else if(direction === 'left'){
    $('#clicked').offset({left: offset});
    offset--;
    if(offset < 0){
      offset = 200;
      direction = 'up';
    }
  }else if(direction === 'up'){
    $('#clicked').offset({top: offset});
    offset--;
    if(offset < 0){
      offset = 0;
      direction = 'right';
    }
  }
};
//////////////////////////////////////////////////////////////////////////
var intervalId = setInterval(moveSquare, intervalLength);

$('#clicked').click(function (){

clearInterval(intervalId);
intervalLength /= 2;
clicks++;

if(clicks > 10){
  $('#clicked').text("그만눌러주세요...");
}else{
  intervalId = setInterval(moveSquare, intervalLength)
}

});
*/