var x = document.getElementById('atfResults').getElementsByClassName("s-result-item celwidget")
for (var i = 0, l = x.length; i < l; i++) {
  console.log(x[i])
  var img = document.createElement('img');
  img.src = 'logo_green.jpg';
  x[i].appendChild(img);
}
