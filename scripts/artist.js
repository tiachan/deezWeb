    artistId = window.location.href.split("id=")[1];
    rootURL = "https://api.deezer.com/artist/";
    deezerApp = new Vue({
        el : "#artist",
        data : {
            artist : "",
        }
    });
    fetch(rootURL + artistId)
        .then(res => res.json())
        .then(res => deezerApp.artist = res);
