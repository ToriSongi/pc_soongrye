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
			
			/*setInterval(upMove,3500);
			function upMove(){
			$("#kt5>div:first-of-type").stop().animate({top:"-355px"},1100 ,function(){$(this).prepend($(this).children().last()); 
			$(this).css("top","-710px"); //$("#kt5>div").fadeOut(500);
			
			}); }
			//top:-455
			
				setInterval( upMove,3500);
				let j = 0; //원형블릿
			
				
				function upMove(){
						j++;
						if( j == 5) {j = 0; }
						$("#kt5>div:first-of-type").stop(false,true).animate({top:"-355px"},1100, function(){
								$(this).prepend($(this).children().last());
								$(this).css("top","-710px"); 
								$("#circle div").eq(j).addClass("gray").siblings().removeClass("gray");
						});
				}*/
				//원형 아이콘 클릭
				$('#circle div').click(function(){
					const slideX = $(this).index();
					console.log(slideX);
					slide(slideX);	
					
				});
				//자동슬라이드		
				
				//setInterval( slideUp,3500);
				let p = $("#circle div.gray").index();
				let s = setInterval( slide, 2500, p+1);
				//슬라이드
				let m = 0;
				const slideArea = $("#kt5>div:first-of-type");
				function slide(z){
					//console.log(z);
					clearInterval(s);
					$("#circle div").eq(z).addClass("gray").siblings().removeClass("gray");
					switch(z){	
						case 0:  m = 0; break;
						case 1:  m = -357; break;
						case 2:  m = -714;	break;
						case 3:  m = -1071;	break;
						case 4:  m = -1428;	break;	
						case 5:  m = -1785;	break;
						case 6:  m = -2142;	break;			
					}
					if (z >= 6) {
						slideArea.stop().animate({top: m }, 1100, function(){
								$(this).css("top","-357px");
								p=1;
								$("#circle div").eq(p).addClass("gray").siblings().removeClass("gray");
								s = setInterval( slide, 2500,p+1);
						});
					}
					
					if (z <= 0) {
						slideArea.stop().animate({top: m }, 1100, function(){
								$(this).css("top","-1785px");
								p=5;
								$("#circle div").eq(p).addClass("gray").siblings().removeClass("gray");
								s = setInterval( slide, 2500, p+1);
						});
					}		
					if(z>=1 && z<=5) {
						slideArea.stop().animate({top: m }, 1000, function(){
								p = z;
								$("#circle div").eq(p).addClass("gray").siblings().removeClass("gray");
								s = setInterval( slide, 2500, p+1);
						});	
					}			
				}
				
				
			
				
			
			
			});///////end	