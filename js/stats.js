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
