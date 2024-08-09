var topPosition = 200
var leftPosition = 100
var speed = 1000;

var ball = document.getElementById('ball')
ball.style.position = 'absolute'

moveball = setInterval("ballMove()", speed)



function ballMove ()
{

 leftPosition = Math.random() * (screen.availWidth-200);
 topPosition =  Math.random() * (screen.availHeight-200);


ball.style.left = leftPosition + 'px'
ball.style.top = topPosition + 'px'


if (leftPosition >= screen.availWidth-200)
{
  topPosition = 0
  leftPosition = 0

}


}

function explode() 
{
    ball.src = '200w.gif';
    console.log('stop')
    clearInterval(moveball)
    alert('Your score is:' + speed + ' ms')
  
}
