$('#close').on('click', function() {
    //$('#bg-youtube-player').stopVideo();
$('#bg-youtube-player')[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');    
});