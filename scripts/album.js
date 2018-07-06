     albumId = window.location.href.split("id=")[1];
     rootURL = "https://api.deezer.com/album/";
     app = new Vue({
        el : "#album",
        data : {
            album   : "",
        },
        filters : {
            minutes    : sec   => Math.floor(sec / 60) + "m" + sec % 60 ,
        },
       
            created(){
                fetch(rootURL + albumId)
                .then(res => res.json())
                .then(res => {
                    this.album   = res;
            });
        }
    });


