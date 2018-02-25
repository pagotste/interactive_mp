var method ='flickr.photos.search';
var key ='80f5f1c61f91e0f488ccfb957e7b0a56';
var format = 'json';

var urlflk = 'https://api.flickr.com/services/feeds/photos_public.gne';

function jsonFlickrFeed(json){
  $(".span_1_of_4").remove();
  $('div').removeClass('.span_1_of_4');

  $.each(json.items, function(i,item){
    var link = item.media.m;
    var style1 = 'style=\'background:url("';
    var style2 = '") no-repeat center; width: 20em; height:20em; background-size: cover; border:#C4C0B8 solid 1px;margin:1.6%;display:inline-block;border-radius: 4px;\'';
    var imgCont = "<div class='span_1_of_4' "+ style1 + link + style2 +"/></div>";
    $(imgCont).appendTo(".section");
  });
  document.getElementById("filterArea").value = "";
}


function searchTerm(){
  var text = document.getElementById("filterArea").value;
  if(text){
    $.ajax({
      url: urlflk,
      dataType: 'jsonp',
      data:{'tags':text,'format':format}
    });
  }
}
