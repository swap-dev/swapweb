var scroll = new SmoothScroll('a[href*="#"]', {
  speed: 250,
  speedAsDuration: false, // If true, use speed as the total duration of the scroll animation
  durationMax: null, // Integer. The maximum amount of time the scroll animation should take
  durationMin: null, // Integer. The minimum amount of time the scroll animation should take
  clip: true,
  easing: 'easeInOutCubic'
});

// Explorer Stats
$(document).ready(function () {
  // Fetch the initial table
  refreshTable();

  // Fetch every 5 seconds
  setInterval(refreshTable, 24000);
});

function refreshTable() {
  const request = new XMLHttpRequest();

  request.open('GET', 'https://explorer.getswap.eu/api/networkinfo');
  request.send();

  request.onload = () => {
    if (request.status === 200) {
      //Extracting data
      var hashrate = JSON.parse(request.response).data.hash_rate;
      var difficulty = JSON.parse(request.response).data.difficulty;

      //Creating table
      var network2 =
        "<div id='#networkdivload' class='mx-1 my-1'><i class='fas fa-tachometer-alt'></i>&ensp;Network " + (hashrate / 32).toFixed(2) +
        " Kgps</div><div class='mx-1 my-1'><i class='fas fa-unlock'></i>&ensp;Difficulty " + Intl.NumberFormat().format(difficulty) + "</div>";

      //Showing the table inside table
      document.getElementById("networkdiv").innerHTML = network2;
    }

  };

}

// Explorer Stats 2
$(document).ready(function () {
  // Fetch the initial table
  refreshTable2();

  // Fetch every 5 seconds
  setInterval(refreshTable2, 24000);
});

function refreshTable2() {
  const request2 = new XMLHttpRequest();

  request2.open('GET', 'https://explorer.getswap.eu/api/emission');
  request2.send();

  request2.onload = () => {
    if (request2.status === 200) {
      //Extracting data
      var coinbase = JSON.parse(request2.response).data.coinbase;
      var blocknumber = JSON.parse(request2.response).data.blk_no;

      //Creating table
      var network3 =
        "<div class='mx-1 my-1'><i class='fas fa-layer-group'></i>&ensp;Circulation " + Intl.NumberFormat().format((coinbase / 1000000000000).toFixed(0)) +
        " XWP</div><div class='mx-1 my-1'><i class='fas fa-cubes'></i>&ensp;Block " + Intl.NumberFormat().format(blocknumber) + "</div>";

      //Showing the table inside table
      document.getElementById("networkdiv2").innerHTML = network3;
    }

  };

}

//////////////////////////////////////////////////////////////////////////////

// Miners Tabbature
function openMiner(evt, minerName) {
  var i, x, tablinks;
  x = document.getElementsByClassName("miner");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < x.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" btn-outline-tab2-dark", " ");
  }
  document.getElementById(minerName).style.display = "block";
  evt.currentTarget.className += " btn-outline-tab2-dark";
}

//////////////////////////////////////////////////////////////////////////////

// Team Tabbature
function openTeam(evt, teamName) {
  var i, x, tablinksteam;
  x = document.getElementsByClassName("team");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  tablinksteam = document.getElementsByClassName("tablinkteam");
  for (i = 0; i < x.length; i++) {
    tablinksteam[i].className = tablinksteam[i].className.replace(" btn-outline-tab2-dark", " ");
  }
  document.getElementById(teamName).style.display = "block";
  evt.currentTarget.className += " btn-outline-tab2-dark";
}

//////////////////////////////////////////////////////////////////////////////

// Wallet Tabbature
function openWallet(evt, walletName) {
  var i, x, tablinkswallet;
  x = document.getElementsByClassName("wallet");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  tablinkswallet = document.getElementsByClassName("tablinkwallet");
  for (i = 0; i < x.length; i++) {
    tablinkswallet[i].className = tablinkswallet[i].className.replace(" btn-outline-tab2-dark", " ");
  }
  document.getElementById(walletName).style.display = "block";
  evt.currentTarget.className += " btn-outline-tab2-dark";
}