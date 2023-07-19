var textVal = "UNDERGROUND";
$(document).ready(function() {
  var wW = $(window).width();

  $('.update').click(function() {
    textVal = $('.logo-title').val();
    drawLogo(textVal, wW);
  });
  
  $('.save').click(function() {
    drawLogo(textVal, 4000);
    var dt = document.getElementById('logo').toDataURL('image/png');
    dt = dt.replace(/^data:image\/[^;]*/, 'data:application/octet-stream');
    this.href = dt;
    drawLogo(textVal, wW);
  });
  
  $(window).resize(function() {
    wW = $(window).width();
    drawLogo(textVal, wW);
  });
  drawLogo(textVal, wW);
});

function drawLogo(textVal, wW) {
  var c = document.getElementById('logo');
  c.width = (wW / 2) * 1.237;
  c.height = (wW / 2);
  var ctx = c.getContext("2d");
  var fontSize = ((c.height * 0.19) * 0.8);
  var circleWidth = c.height * 0.17;
  //Draw red circle
  ctx.beginPath();
  ctx.strokeStyle = "#DC241F";
  ctx.arc(c.width / 2, c.height / 2, (c.height / 2) - (circleWidth / 2), 0, 2 * Math.PI);
  ctx.lineWidth = circleWidth;
  ctx.stroke();
  //Draw blue bar
  ctx.beginPath();
  ctx.fillStyle = "#0019A8";
  ctx.rect(0, c.height / 2 - (c.height * 0.095), c.width, (c.height * 0.19));
  ctx.fill();
  //Draw text
  ctx.beginPath();
  ctx.fillStyle = "#FFFFFF";
  ctx.font = "700 " + fontSize + "px Cabin";
  ctx.textBaseline = "top";
  ctx.textAlign = "center";
  ctx.fillText(textVal.toUpperCase(), (c.height / 2) * 1.237, (c.height / 1.91) - (fontSize / 2) - calcMargin(wW));
}

function calcMargin(fullWidth) {
  if (fullWidth < 569) {
    return 5;
  } else if (fullWidth >= 569 && fullWidth < 768) {
    return 7.5;
  } else if(fullWidth >= 768 && fullWidth <= 1200) {
    return 10;
  } else if(fullWidth === 4000) {
    return 35;
  } else {
    return 12.5;
  }
}