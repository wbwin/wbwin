// JavaScript Document
var adverTop;
var adverLeft;
var adverObject;

function inix(){
    adverObject=document.getElementById("adver");
	if(adverObject.currentStyle){
		adverTop=parseInt(adverObject.currentStyle.top);
		adverLeft=parseInt(adverObject.currentStyle.left);
	}
	else{
	    adverTop=parseInt(document.defaultView.getComputedStyle(adverObject,null).top);
		adverLeft=parseInt(document.defaultView.getComputedStyle(adverObject,null).left);
	}	
}
function move(){
    scrollTop=parseInt(document.body.scrollTop)|parseInt(document.documentElement.scrollTop);
	scrollLeft=parseInt(document.body.scrollLeft)|parseInt(document.documentElement.scrollLeft);
	
	adverObject.style.top=adverTop+scrollTop+"px";	
	adverObject.style.left=adverLeft+scrollLeft+"px";
}
function closeAdv(){
    document.getElementById("adver").style.display="none"	
}
window.onload=inix;
window.onscroll=move;