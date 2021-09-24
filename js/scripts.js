const templateYoutube = 'https://www.youtube.com/embed/';

$('input').change(function (e) {
    const url = e.target.value;
    const iframe = e.target.getAttribute("data-iframe");
    const parsedUrl = youtubeUrlChecker(url);
    if (parsedUrl != false) {
        $('#' + iframe).attr('src', templateYoutube + parsedUrl);
    }
    else {
        M.toast({html: 'Invalid URL!'})
        e.target.value = '';
    }    
});

const youtubeUrlChecker = (url) => {
    const expression = /^(?:https?:\/\/)?(?:m\.|www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;
    if (url.match(expression)) return url.match(expression)[1];
    return false;
}