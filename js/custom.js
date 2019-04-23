var scroll = new SmoothScroll('a[href*="#"]', {
	speed: 500,
  speedAsDuration: false, // If true, use speed as the total duration of the scroll animation
	durationMax: null, // Integer. The maximum amount of time the scroll animation should take
	durationMin: null, // Integer. The minimum amount of time the scroll animation should take
	clip: true,
  easing: 'easeInOutCubic'
});

//Blog Section
/*
$(function () {
	var $content = $('#jsonContent');
	var data = {
		rss_url: 'https://medium.com/feed/@havencurrency'
	};
	$.get('https://api.rss2json.com/v1/api.json', data, function (response) {
		if (response.status == 'ok') {
			var output = '';
			$.each(response.items, function (k, item) {
				var visibleSm;
				if(k < 3){
					visibleSm = '';
				 } else {
					 visibleSm = ' visible-sm';
				 }
				output += '<div class="col-sm-6 col-md-4' + visibleSm + '">';
				output += '<div class="blog-post"><header>';

				var tagIndex = item.description.indexOf('<img'); // Find where the img tag starts
				var srcIndex = item.description.substring(tagIndex).indexOf('src=') + tagIndex; // Find where the src attribute starts
				var srcStart = srcIndex + 5; // Find where the actual image URL starts; 5 for the length of 'src="'
				var srcEnd = item.description.substring(srcStart).indexOf('"') + srcStart; // Find where the URL ends
				var src = item.description.substring(srcStart, srcEnd); // Extract just the URL
				output += '<div class="blog-element"><img class="img-responsive" src="' + src + '" width="360px" height="240px"></div></header>';
				output += '<div class="blog-content"><h4><a href="'+ item.link + '">' + item.title + '</a></h4>';
				output += '<div class="post-meta"><span>By ' + item.author + '</span></div>';
				var yourString = item.description.replace(/<img[^>]*>/g,""); //replace with your string.
				var maxLength = 120 // maximum number of characters to extract
				//trim the string to the maximum length
				var trimmedString = yourString.substr(0, maxLength);
				//re-trim if we are in the middle of a word
				trimmedString = trimmedString.substr(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(" ")))
				output += '<p>' + trimmedString + '...</p>';
				output += '</div></div></div>';
				return k < 3;
			});
			$content.html(output);
		}
	});
});
*/
//Stats Section
/*
$(function() {
$.getJSON('https://swap.coinscope.cc/api/networkinfo', function(hashrate) {

$( "#hashrate" ).attr( "data-to", hashrate.data.hash_rate/1000000 );

$('#hashrate').countTo({
  from: 0,
  to: hashrate.data.hash_rate/1000000 ,
  speed: 3000,
  refreshInterval: 80,
  decimals: 3,
  formatter: function (value, options) {
    return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
  },
  onUpdate: function (value) {
    console.debug(this);
  },
  onComplete: function (value) {
    console.debug(this);
  }
});

})
});
*/


// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


const request = new XMLHttpRequest();
 
request.open('GET', 'https://swap.coinscope.cc/api/networkinfo');
request.send(); 
 
request.onload = () => {
  if (request.status === 200) {
		console.log("Success"); // So extract data from json and create table
    
    //Extracting data
    var hashrate = JSON.parse(request.response).data.hash_rate;
		var difficulty = JSON.parse(request.response).data.difficulty;
    
    //Creating table
		var network="<h3><i class='fas fa-tachometer'></i>&ensp;Graphrate "+(hashrate/32).toFixed(2)+" Kgps</h3><h3><i class='fas fa-unlock'></i>&ensp;Difficulty "+(difficulty/1000).toFixed(2)+" K</h3>";
 
    //Showing the table inside table
    document.getElementById("networkdiv").innerHTML = network;   
	} 
	 
};
 
request.onerror = () => {
  console.log("error")
};