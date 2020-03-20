$(function(){
	
	
	let $mainMenuItems = $("#main-menu ul").children("li"),
		totalMainMenuItems = $mainMenuItems.length,
		openedIndex = 0;
		
		
	init = function(){
		bindEvents();
			if(validIndex(openedIndex))
				animateItem($mainMenuItems.eq(openedIndex), true, 750);
	};
		
		
	bindEvents = function(){
		$mainMenuItems.children(".images").click(function(){
			let indexToCheckAndAnimate = $(this).parent().index();
				checkAnimateItem(indexToCheckAndAnimate);
		});
			
		$(".button").hover(
		function(){
			$(this).addClass("hovered");
		},
		function(){
			$(this).removeClass("hovered");
		});
			
		$(".button").click(function(){
			let indexToCheckAndAnimate = $(this).index();
				checkAnimateItem(indexToCheckAndAnimate);
		});
	};
		
		
		
	validIndex = function(indexToCheck){
		return (indexToCheck >= 0) && (indexToCheck < totalMainMenuItems);
	};
		
		
		
	animateItem = function($item, toOpen, speed){
		let $colorImage = $item.find(".color"),
		itemParam = toOpen ? {width: "510px"}: {width: "233px"},
		colorImageParam = toOpen ? {left: "0px"}: {left: "233px"};
		$colorImage.animate(colorImageParam,speed);
		$item.animate(itemParam,speed);
	};
		
		
	checkAnimateItem = function(indexToCheckAndAnimate){
		if(openedIndex === indexToCheckAndAnimate){
			animateItem($mainMenuItems.eq(indexToCheckAndAnimate), false, 250);
			openedIndex = -1;
		}else{
			if(validIndex(indexToCheckAndAnimate)){
				animateItem($mainMenuItems.eq(openedIndex), false, 250);
				animateItem($mainMenuItems.eq(indexToCheckAndAnimate), true, 250);
				openedIndex = indexToCheckAndAnimate;
			}
		}
	};
		
		
	init();
	
});