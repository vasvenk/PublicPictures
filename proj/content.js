var x = document.getElementById('atfResults').getElementsByClassName("s-result-item celwidget")
for (var i = 0, l = x.length; i < l; i++) {
  console.log(x[i])
  var img = document.createElement('img');
  img.src = 'https://raw.githubusercontent.com/vasvenk/purchoose/master/images/logo%20options/1x/logo_green(48x48).png?token=AYycbPlT9kBGuLTZW6BtfHlTa5b8hC_rks5b6f_CwA%3D%3D';
  x[i].firstChild.appendChild(img);
}

chrome.runtime.onMessage.addListener( function(request, sender, sendResponse) {
    console.log("something happening from the extension");
    var data = request.data || {};

    var linksList = document.querySelectorAll('a');
    [].forEach.call(linksList, function(header) {
        header.innerHTML = request.data;
    });
    sendResponse({data: data, success: true});
});
