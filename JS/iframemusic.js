// JavaScript Document

//	console.log($('iframe').length)
				
$(document).mouseup(function (e){
var container = $('iframe');
	if (!container.is(e.target) && container.has(e.target).length === 0){
		$(this).fadeOut()
	}
}).mouseup(function (p){
var container = $('iframe');
	if (!container.is(p.target) && container.has(p.target).length === 0){
		$('iframe').fadeOut()
	}
})

$('#oculto').click(function(){
	$('#mainm').fadeOut('fast')
})

$('.playm:eq(0)').click(function(){
	$('#plataforma').fadeIn()
	$('.irep').addClass('pm').fadeIn(function(){
		$('#wil').click(function(){
			$('#mainm').slideDown().css({display:'flex'})
			$('#play').click(function(){ 
				var myAudio = document.getElementById("myAudio");
				if (myAudio.paused) { 
					myAudio.play();
					//botpnpause
					$('#play').css({backgroundColor: 'blue'})
				} 
				else {
					myAudio.pause();
					//botonplay
					$('#play').css({backgroundColor: 'red'})
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
			
		})
		$('#itunes').click(function(){
			$('iframe:eq(0)').fadeIn('fast').addClass('float')
		})
		$('#spotify').click(function(){
			$('iframe').hide()
			$('iframe:eq(1)').fadeIn('fast').addClass('float')
		})
		$('#deezer').click(function(){
			$('iframe').hide()
			$('iframe:eq(2)').fadeIn('fast').addClass('float')
		})
		$('#youtube').click(function(){
			$('iframe').hide()
			$('iframe:eq(3)').fadeIn('fast').addClass('float')
		})
		$('#soundcloud').hide()
		
	})
})
//console.log("palsd   "+$('.playm').length)
$('.playm:eq(1)').click(function(){
$('#plataforma').fadeIn()
	$('.irep').addClass('pm').fadeIn(function(){
		$('#wil').click(function(){
			$('#mainm').slideDown().css({display:'flex'})
		})
		$('#itunes').click(function(){
			$('iframe:eq(4)').fadeIn('fast').addClass('float')
		})
		$('#spotify').click(function(){
			$('iframe').hide()
			$('iframe:eq(5)').fadeIn('fast').addClass('float')
		})
		$('#soundcloud').click(function(){
			$('iframe').hide()
			$('iframe:eq(6)').fadeIn('fast').addClass('float')
		})
		$('#deezer').click(function(){
			$('iframe').hide()
			$('iframe:eq(7)').fadeIn('fast').addClass('float')
		})
		$('#youtube').click(function(){
			$('iframe').hide()
			$('iframe:eq(8)').fadeIn('fast').addClass('float')
		})
		
		
	})
	
})
$('.playm:eq(2)').click(function(){
	
	$('#plataforma').fadeIn()
	$('.irep').addClass('pm').fadeIn(function(){
		$('#wil').click(function(){
			$('#mainm').slideDown().css({display:'flex'})
		})
		$('#itunes').click(function(){
			$('iframe:eq(9)').fadeIn('fast').addClass('float')
		})
		$('#spotify').click(function(){
			$('iframe').hide()
			$('iframe:eq(10)').fadeIn('fast').addClass('float')
		})
		$('#deezer').click(function(){
			$('iframe').hide()
			$('iframe:eq(11)').fadeIn('fast').addClass('float')
		})
		$('#youtube').click(function(){
			$('iframe').hide()
			$('iframe:eq(12)').fadeIn('fast').addClass('float')
		})
		$('#soundcloud').hide()
		
	})
})
$('.playm:eq(3)').click(function(){
	$('#plataforma').fadeIn()
	$('.irep').addClass('pm').fadeIn(function(){
		$('#wil').click(function(){
			$('#mainm').slideDown().css({display:'flex'})
		})
		$('#itunes').click(function(){
			$('iframe:eq(13)').fadeIn('fast').addClass('float')
		})
		$('#spotify').click(function(){
			$('iframe').hide()
			$('iframe:eq(14)').fadeIn('fast').addClass('float')
		})
		$('#deezer').click(function(){
			$('iframe').hide()
			$('iframe:eq(15)').fadeIn('fast').addClass('float')
		})
		$('#youtube').click(function(){
			$('iframe').hide()
			$('iframe:eq(16)').fadeIn('fast').addClass('float')
		})
		$('#soundcloud').hide()
		
	})
})
$('.playm:eq(4)').click(function(){
	$('#plataforma').fadeIn()
	$('.irep').addClass('pm').fadeIn(function(){
		$('#wil').click(function(){
			$('#mainm').slideDown().css({display:'flex'})
		})
		$('#itunes').click(function(){
			$('iframe:eq(17)').fadeIn('fast').addClass('float')
		})
		$('#spotify').click(function(){
			$('iframe').hide()
			$('iframe:eq(18)').fadeIn('fast').addClass('float')
		})
		$('#deezer').click(function(){
			$('iframe').hide()
			$('iframe:eq(20)').fadeIn('fast').addClass('float')
		})
		$('#youtube').click(function(){
			$('iframe').hide()
			$('iframe:eq(21)').fadeIn('fast').addClass('float')
		})
		$('#soundcloud').click(function(){
			$('iframe').hide()
			$('iframe:eq(19)').fadeIn('fast').addClass('float')
		})
		
	})
})
$('span').click(function(){
			$('#plataforma').fadeOut()
		}).css({
		fontSize:'3.5rem',
		position:'absolute',
		cursor:'pointer',
		float: 'right',
		color:'red',
		margin: '0 80%'
	}).mouseover(function(){
	
})
