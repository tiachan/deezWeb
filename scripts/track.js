     trackId = window.location.href.split("id=")[1];
     rootURL = "https://api.deezer.com/track/";
     deezerApp = new Vue({
        el : "#track",
        data : {
            track : '',
        },
        filters : {
            minutes    : sec   => Math.floor(sec / 60) + "m" + sec % 60,
        },
        methods : { favorites : function(){
                 if (this.newTaskTitle === "") return; // si le tableau est vide ca ne s ajoute pas en bas

                    var newFav = {
                       title : this.newFavTitle,
                       }; 

                this.tasks.push(favorites)
                  this.newTaskTitle  = ""; // Lorsque l'on push le nouveau favoris alors le tableau se remplit
                    localStorage.setItem("favoritesList", JSON.stringify(this.favorite));  // Sauvegarde dans le local-storage 
        }
         
       }
    });
    
    fetch(rootURL + trackId)
        .then(res => res.json())
        .then(res => deezerApp.track = res);

    