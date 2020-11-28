
function submitt() {
	var x = document.getElementById('fname').value;
	localStorage.setItem('animal1',x);

	var y= document.getElementById('anotheranimal').value;
	localStorage.setItem('animal2',y);

	var z= document.getElementById('onemore').value;
	localStorage.setItem('animal3',z);

	var k= document.getElementById('adjname').value;
	localStorage.setItem('adjective',k);
	

	var l= document.getElementById('verbname').value;
	localStorage.setItem('verb',l);

	var p= document.getElementById('number').value;
	localStorage.setItem('number',p);

	var q= document.getElementById('speed').value;
	localStorage.setItem('speed',q);

	 var o=document.querySelector("input[name='radio1']:checked").value;
	localStorage.setItem('radio',o);

	
	var a= document.getElementById('mquote').value;
	localStorage.setItem('message',q);

	var s= document.getElementById('motivate').value;
	localStorage.setItem('message1',s);

}


for( var j=0;j<=7;j++) {
 document.getElementsByClassName('r2')[j].innerHTML =localStorage.getItem('animal2');
}
document.getElementsByClassName('r3')[0].innerHTML =localStorage.getItem('animal3');

document.getElementsByClassName('r4')[0].innerHTML =localStorage.getItem('adjective');

for( var l=0;l<=2;l++) {
document.getElementsByClassName('r5')[l].innerHTML =localStorage.getItem('verb');
}


document.getElementsByClassName('r6')[0].innerHTML =localStorage.getItem('number');

document.getElementsByClassName('r7')[0].innerHTML =localStorage.getItem('speed');

document.getElementsByClassName('r8')[0].innerHTML =localStorage.getItem('radio');

document.getElementsByClassName('r10')[0].innerHTML =localStorage.getItem('message1');

for( var i=0;i<=7;i++) {
document.getElementsByClassName('r1')[i].innerHTML =localStorage.getItem('animal1');
}
 


document.getElementsByClassName('r9')[0].innerHTML =localStorage.getItem('message');




