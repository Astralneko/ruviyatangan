const url2 = window.location.pathname + window.location.search;
const english_link = url2.split('/').splice(url2.indexOf("spa"),1).join('/');
const rokadong_link = url2.split('/').map(a => {
	if(a == 'spa') 
	return 'rkd'; 
	else 
	return a;
}).join('/');

document.getElementById("english-page").href=english_link;
document.getElementById("rokadong-page").href=rokadong_link;