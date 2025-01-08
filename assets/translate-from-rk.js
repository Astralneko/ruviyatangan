const url2 = window.location.pathname + window.location.search;
const english_link = url2.split('/').splice(url2.indexOf("rkd"),1).join('/');
const spanish_link = url2.split('/').map(a => {
	if(a == 'rkd') 
	return 'spa'; 
	else 
	return a;
}).join('/');

document.getElementById("english-page").href=english_link;
document.getElementById("spanish-page").href=spanish_link;