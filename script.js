var urlParams = new URLSearchParams(window.location.search);
var title = urlParams.get('title');
var ifileurl = urlParams.get('ifileurl');
var key = urlParams.get('key');
var type = urlParams.get('type');
var privacy = urlParams.get('privacy');
var apiurl = 'https://www.twayobiz.com/file-endpoint?key=' + key + '&title=' + title + '&ifileurl=' + ifileurl + '&key=' + key + '&type=' + type;
function myFunction() {
document.getElementById('hiddenframe').src = apiurl;
}
setTimeout(function(){
   window.location.href = 'success.json';
}, 3000)