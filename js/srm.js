$(document).ready(function(){
			$("#details li>a").on("mouseenter click", function(){
					$("#details li>nav").stop().slideUp();
					$(this).next().stop().slideDown();
			});
			$("#details nav").mouseleave(function(){
				$(this).slideUp();
			});
	
		
			
			/*setInterval(leftMove,3800);
			function leftMove(){
			$("#photo").stop().animate({left:"-3800px"},1800 ,function(){$(this).append($(this).children().first());
			$(this).css("left","-1900px");
			}); }*/
			setInterval(fading,3800)
			let i=5;
			function fading(){
				i--;
				if(i==0){$("#photo img").fadeIn(1500);
				i=5;}
				else{$("#photo img").eq(i).fadeOut(1500);}
				
			}


			
			 $("#left").click(function(){
				$("#m2 div").stop().animate({left:0},"fast",function(){
				$(this).prepend($(this).children().last());
				$(this).css("left","-1900px");
						});
				});
			$("#right").click(function(){
				$("#m2 div").stop().animate({left:"-3800px"},"fast",function(){
				$(this).append($(this).children().first());
				$(this).css("left","-1900px");
						});
				});
			
			
			
			$('#n1 span').click(function(){
				if( $(this).text() == 'keyboard_arrow_down' ){
					 $("#popup").stop().slideDown();
					$(this).text('keyboard_arrow_up');
					//$("body").css('overflow','hidden');
				} else {
					 $("#popup").stop().slideUp();
					$(this).text('keyboard_arrow_down');
					//$("body").css('overflow','auto');
				}		
			});
			
			
			$("#small button").click( function(){
			const x = $(this).children().attr("src");
		
			const z1 = $("#big img").attr("src");
			const z2 = $("#big img").attr("alt");
			
			const z11 = x.replace("_small.", "_big.");
			
			$("#big img").attr("src", z11);
			
			});
			
			
			$("#map>img").click(function(){
				const mp=$(this).index();
				$("#gatepop>div").eq(mp).children("img").fadeIn();
				$("#gatepop>div").eq(mp).children("p").stop().animate({left:"10px"},"slow");
				$("#map").css({"filter":" grayscale(100%) brightness(140%) opacity(0.4)"});
				$("#map>img").prop("disabled", true);
				
			});
			
			$("#gatepop>div").click(function(){
				$(this).children("img").fadeOut();
				$(this).children("p").animate({left:"-800px"},"fast");
				$("#map").css({"filter":"sepia(0%)  brightness(100%) opacity(1)"});
				$("#map>img").prop("disabled", false);
			
			});	
			
			setInterval(rightMove,3500);
			function rightMove(){
			$("#bus5>div").stop().animate({left:"-550px"},1500 ,function(){$(this).prepend($(this).children().last());
			$(this).css("left","-1100px");
			}); }
			
			setInterval(upMove,3500);
			function upMove(){
			$("#kt5>div").stop().animate({top:"-355px"},1500 ,function(){$(this).prepend($(this).children().last());
			$(this).css("top","-710px");
			}); }
			//top:-455
				
			
			
			});///////end	