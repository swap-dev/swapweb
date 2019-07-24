var scroll = new SmoothScroll('a[href*="#"]', {
	speed: 250,
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


// Pools Modal
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



// Explorer Stats
$(document).ready(function() {
    // Fetch the initial table
    refreshTable();

    // Fetch every 5 seconds
    setInterval(refreshTable, 24000);
});

function refreshTable(){
const request = new XMLHttpRequest();
 
request.open('GET', 'https://explorer2.xwp.fyi/api/networkinfo');
request.send(); 
 
request.onload = () => {
  if (request.status === 200) {
    console.log("Success"); // So extract data from json and create table
    
    //Extracting data
    var hashrate = JSON.parse(request.response).data.hash_rate;
    var difficulty = JSON.parse(request.response).data.difficulty;
    
    //Creating table
    var network=
    "<div id='#networkdivload' class='mx-1 my-1'><i class='fas fa-tachometer-alt'></i>&ensp;Network "+(hashrate/32).toFixed(2)+
    " Kgps</div><div class='mx-1 my-1'><i class='fas fa-unlock'></i>&ensp;Difficulty "+Intl.NumberFormat().format(difficulty)+"</div>";
 
    //Showing the table inside table
    document.getElementById("networkdiv").innerHTML = network;   
  } 
   
};
 
request.onerror = () => {
  console.log("error")
};

}

// Explorer Stats
$(document).ready(function() {
  // Fetch the initial table
  refreshTable2();

  // Fetch every 5 seconds
  setInterval(refreshTable2, 24000);
});

function refreshTable2(){
const request2 = new XMLHttpRequest();
 
request2.open('GET', 'https://explorer2.xwp.fyi/api/emission');
request2.send(); 
 
request2.onload = () => {
  if (request2.status === 200) {
    console.log("Success"); // So extract data from json and create table
    
    //Extracting data
    var coinbase = JSON.parse(request2.response).data.coinbase;
    var blocknumber = JSON.parse(request2.response).data.blk_no;
    
    console.log(new Intl.NumberFormat().format(coinbase));
    
    //Creating table
    var network2=
    "<div class='mx-1 my-1'><i class='fas fa-layer-group'></i>&ensp;Circulation "+Intl.NumberFormat().format((coinbase/1000000000000).toFixed(0))+
    " XWP</div><div class='mx-1 my-1'><i class='fas fa-cubes'></i>&ensp;Block "+Intl.NumberFormat().format(blocknumber)+"</div>";
 
    //Showing the table inside table
    document.getElementById("networkdiv2").innerHTML = network2;   
  } 
   
};
 
request2.onerror = () => {
  console.log("error")
};
}


// Tabbature
function openMiner(evt, minerName) {
  var i, x, tablinks;
  x = document.getElementsByClassName("miner");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none"; 
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < x.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" btn-primary2", " ");
  }
  document.getElementById(minerName).style.display = "block"; 
  evt.currentTarget.className += " btn-primary2";
}