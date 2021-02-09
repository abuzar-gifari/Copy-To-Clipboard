const input = document.querySelector('#input');
const btn = document.querySelector('button.btn');


btn.onclick = function(){
	input.select(); // select() Method is used For input Field only

	document.execCommand('copy');
	
	alert('Copied coupon code '+input.value);
	
}