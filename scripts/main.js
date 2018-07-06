function loadXMLDoc() {
   var xhttp = new XMLHttpRequest();
   xhttp.onreadystatechange = function() {
   if (this.readyState == 4 && this.status == 200) {
       document.getElementById("demo").innerHTML =
       this.responseText;
   }
   };
   xhttp.open("GET", "https://api.deezer.com/version/service/id/method/?parameters", true);
   xhttp.send();

}

/////////////////////////VUE/////////////////////

var homePage = new Vue({
       el:'#deezer-app',
       
       data:{
           urlSrc: 'https://api.deezer.com/search?q=',
           searchParam:'',
           user: "",
           index:0,
           Data:[], //tableau des données
           orderOption:'',     // option de tri                      
           urlFinale:'',     //url du json venant de l'api
       },

       filters : {
           minutes    : sec   => Math.floor(sec / 60) + "m" + sec % 60 //calcul pour changer les secondes en minutes + secondes
                },

       methods:{

///////////////////////SEARCH////////////////////////

           newUrl: function(){
               var urlFinale = this.finalUrl; 
                  if(this.user === ""){
                    }else{
                       urlFinale = this.urlSrc+this.user;
                         }

                  if(this.orderOption === ""){
                    }else{
                       urlFinale = this.urlSrc+this.user+'&order='+this.orderOption;
                          }
                    return urlFinale;
       },
          orderedData: function(){
                this.finalUrl = this.newUrl();
                 var url = this.finalUrl;     
                    fetch(url)
                      .then(data => data.json())
                      .then((data)=>{
                        this.Data = data.data;
                 });
       },

///////////////////////FAVORITES (A FINALISER)////////////////////////

/*           favorites : function(){
                 if (this.newTaskTitle === "") return; // si le tableau est vide ca ne s ajoute pas en bas

                    var newFav = {
                       title : this.newFavTitle,
                       }; 

                this.tasks.push(favorites)
                  this.newTaskTitle  = ""; // Lorsque l'on push le nouveau favoris alors le tableau se remplit
                    localStorage.setItem("favoritesList", JSON.stringify(this.favorite));  // Sauvegarde dans le local-storage 
        },
         
       }
   });

*/



