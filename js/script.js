var mybox = document.getElementById('mybox');
mybox.onclick = function(){
	mybox.style.backgroundColor = 'red';
}

var box2 = document.getElementById('box2');
btn1.onclick = function(){
	box2.style.backgroundColor = 'red';
}

var box3 = document.getElementById('box3');
btn2.onclick = function(){
	box3.style.width = "300px";
	box3.style.height = "100px";
}

var box4 = document.getElementById('box4');
texthover.onmouseover = function(){
	texthover.innerHTML = 'HELLO WORLD';
}

var box5 = document.getElementById('box5');
movetext.onmouseover = function(){
	movetext.style.marginTop = "170px";
}

var box6 = document.getElementById('box6');
inputtxt.oninput = function(){
	result.innerHTML = inputtxt.value;
}

var box7 = document.getElementById('box7');
btn3.onclick = function(){
	box7.classList.toggle("boxy");
}