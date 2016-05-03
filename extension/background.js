$('document').ready(function(){
	var images = $('img');

	for(i = 0; i < images.length; i++){
		//images[i].src = "https://timenewsfeed.files.wordpress.com/2013/10/screen-shot-2013-10-09-at-4-10-39-pm.png?w=753";
		images[i].src = "https://ak-hdl.buzzfed.com/static/enhanced/webdr02/2013/7/25/15/grid-cell-4059-1374779934-0.jpg";
	}

	//var a = $('a');

	 // setTimeout(function(){for(j = 0; j < a.length; j++){
 // 		console.log($(a[i]).css('height'));
 // 		if($(a[i]).css('height').length > 4){
 // 			a[i].style.background = 'url(\'https://timenewsfeed.files.wordpress.com/2013/10/screen-shot-2013-10-09-at-4-10-39-pm.png?w=753\')';
 // 		}
 // 	}},1000);
});

	// $('img').load(function(){
	// 	$(this).attr('src', "https://timenewsfeed.files.wordpress.com/2013/10/screen-shot-2013-10-09-at-4-10-39-pm.png?w=753");
	// })