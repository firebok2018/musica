

$('#play').click(function play(){ 
	var myAudio = document.getElementById('myAudio');
	if (myAudio.paused) { 
		myAudio.play();
		//botpnpause
		$('#play').css({backgroundImage: 'url(../icons/play.png)'})
	} 
	else {
		myAudio.pause();
		//botonplay
		$('#play').attr('backgroundImage', 'url(../icons/pause.png)')
	}
}).css({cursor: 'pointer'})
var l= document.getElementById("volumen");
l.oninput=function(){
	/*$("#l").text("volumen  "+l.value)*/
	myAudio.volume=l.value
}
var d=document.getElementById("myDis");
var  pro=document.getElementById("pro");
myAudio.ontimeupdate=function(){
	d.max= myAudio.duration
	d.value=myAudio.currentTime;
	$('#se').text(myAudio.currentTime);
	
	d.oninput=function(){
	 	myAudio.currentTime=d.value
	}
    $('#songTitle').text(myAudio.src).css({display:'flex',color:'white'});
    pro.max=myAudio.duration
    pro.value=myAudio.currentTime
    
    var mm=Math.floor(myAudio.currentTime / 60)
    var ss=Math.floor(myAudio.currentTime - mm * 60)
    var m=Math.floor(myAudio.duration / 60)
    var s=Math.floor(myAudio.duration - m * 60)
    if(ss < 10) {ss = "0"+ss}
     if(s < 10){s ="0"+s}
    if(mm < 10) {mm = "0"+mm}
    if(m < 10){m ="0"+m}
    $('#time').text(mm+" : "+ss)
    $('#tr').text(m+":"+s)
 }
$('#audio').click(function(){
	if(myAudio.muted){
		myAudio.muted = false;
		$('#audio').css({filter:' brightness(100%)'})
    	
	} else {
    	myAudio.muted = true;
    	$('#audio').css({filter:' brightness(30%)'})
	}
})


$('.lim:eq(2)').click(function(e){
	e.preventDefault()
	$('#mainm').fadeIn().css({display:'flex'})
})