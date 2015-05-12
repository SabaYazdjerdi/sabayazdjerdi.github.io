$(function() {
	var $allVideos = $('video');
	var projects = ['DesignPrinciples'];
	for(var i = 0; i < projects.length; i++) {
		var name = projects[i];
		var $imageContainer = $('.imageContainer#' + name);
		var $video = $('video#video-' + name);
		var video = $video[0];

		$imageContainer.mousewheel(function(event) {
			var dy = -event.deltaY*event.deltaFactor;
			console.log(dy);
			if(dy >0){
				$allVideos.hide();
				$video.show();
				//console.log($video);
			}
		});

		$video.mousewheel(function(event) {
			var dy = -event.deltaY*event.deltaFactor;
			console.log(dy);
			
			if(video.ended === false)
				video.currentTime += dy/1000;
			if(video.currentTime<=0)
				$video.hide()

			return false;
		});

		$video[0].addEventListener('ended', function() {
			console.log('ended');
			//window.location.href = "DP1.html"
			if(name=='DesignPrinciples')
				window.location.href = "DP1.html"
			
		})
	};
});