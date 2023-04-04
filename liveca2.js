
		// 2. This code loads the IFrame Player API code asynchronously.
		var tag = document.createElement('script');
		tag.src = "https://www.youtube.com/iframe_api";
		var firstScriptTag = document.getElementsByTagName('script')[0];
		firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

		var player;
		function onYouTubeIframeAPIReady() {
			player = new YT.Player('ytplayer', {
				height: '360',
				width: '640',
				videoId: 'B-JxbgF-Gv4',
				playerVars: {
  autoplay: 1,
  controls: 1,
  showinfo: 0,
  modestbranding: 1,
  rel: 0,
  iv_load_policy: 3,
  cc_load_policy: 0,
  disablekb: 1,
  fs: 0
},

				events: {
					'onReady': onPlayerReady,
					'onStateChange': onPlayerStateChange
				}
			});
		}

		function onPlayerReady(event) {
			// Event listener when the player is ready.
			event.target.playVideo();
		}

		var isPlaying = false;
		function onPlayerStateChange(event) {
			// Event listener when the player changes state.
			if (event.data == YT.PlayerState.PLAYING) {
				document.getElementById('player').classList.add('playing');
				isPlaying = true;
			} else {
				document.getElementById('player').classList.remove('playing');
				isPlaying = false;
			}
		}

		function togglePlayPause() {
			if (isPlaying) {
				player.pauseVideo();
				isPlaying = true;
			} else {
				player.playVideo();
				isPlaying = true;
			}
		}

		document.getElementById('player').addEventListener('click', togglePlayPause);