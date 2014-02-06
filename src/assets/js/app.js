// Clicking on video plays and pauses toggle
// Toggle the play pause button when clicked or video state changed
	// This is a bug with moving the range bar

// http://css-tricks.com/custom-controls-in-html5-video-full-screen/
// Bootstrap messes up controls
window.onload = function() {

	// Video
	var video = document.getElementById("videoPlayer");
	var videoControls = document.getElementById("video-controls");
	var videoContainer = document.getElementById("video-container");

	// Buttons
	var playButton = document.getElementById("play-pause");
	var muteButton = document.getElementById("mute");
	var fullScreenButton = document.getElementById("full-screen");

	// Sliders
	var seekBar = document.getElementById("seek-bar");
	var volumeBar = document.getElementById("volume-bar");

	var nextEl = document.createElement("div");
	var nextText = document.createTextNode("Click Here!");

	video.addEventListener("ended", function() {
		video.src = 'assets/media/end.ogg';
		video.type = 'video/ogg';
		video.loop = true;
		video.play();
		
		nextEl.className = 'nextVideo';
		nextEl.appendChild(nextText);

		videoContainer.appendChild(nextEl);

		videoControls.className = 'hidden';
	});

	nextEl.addEventListener("click", function() {
		alert("You clicked in the video");
	});

	// Event listener for the play/pause button
	playButton.addEventListener("click", function() {
		if (video.paused == true) {
			// Play the video
			video.play();

			// Update the button text to 'Pause'
			//playButton.innerHTML = "Pause";
			playButton.className = "glyphicon glyphicon-pause";
		} else {
			// Pause the video
			video.pause();

			// Update the button text to 'Play'
			//playButton.innerHTML = "Play";
			playButton.className = "glyphicon glyphicon-play";
		}
	});

	// Event listener for the mute button
	muteButton.addEventListener("click", function() {
		if (video.muted == false) {
			// Mute the video
			video.muted = true;

			// Update the button text
			// muteButton.innerHTML = "Unmute";
			muteButton.className = "glyphicon glyphicon-volume-off";
		} else {
			// Unmute the video
			video.muted = false;

			// Update the button text
			// muteButton.innerHTML = "Mute";
			muteButton.className = "glyphicon glyphicon-volume-up";
		}
	});


	// Event listener for the full-screen button
	fullScreenButton.addEventListener("click", function() {
		if (video.requestFullscreen) {
			video.requestFullscreen();
		} else if (video.mozRequestFullScreen) {
			video.mozRequestFullScreen(); // Firefox
		} else if (video.webkitRequestFullscreen) {
			video.webkitRequestFullscreen(); // Chrome and Safari
		}
	});


	// Event listener for the seek bar
	seekBar.addEventListener("change", function() {
		// Calculate the new time
		var time = video.duration * (seekBar.value / 100);

		// Update the video time
		video.currentTime = time;

		playButton.className = "glyphicon glyphicon-pause";
	});

	
	// Update the seek bar as the video plays
	video.addEventListener("timeupdate", function() {
		// Calculate the slider value
		var value = (100 / video.duration) * video.currentTime;

		// Update the slider value
		seekBar.value = value;
	});

	// Pause the video when the seek handle is being dragged
	seekBar.addEventListener("mousedown", function() {
		video.pause();
	});

	// Play the video when the seek handle is dropped
	seekBar.addEventListener("mouseup", function() {
		video.play();
	});

	// Event listener for the volume bar
	volumeBar.addEventListener("change", function() {
		// Update the video volume
		video.volume = volumeBar.value;
	});
}