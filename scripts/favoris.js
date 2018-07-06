new Vue({
        el : "#favorites",
        data : {
            favorites : JSON.parse(localStorage.getItem('favorite')),
        },
        methods : {
            removeFavorite(item){
                this.favorite.splice(this.favorite.findIndex(f.id === item.id), 1);
                localStorage.setItem('favorite', JSON.stringify(this.favorites));
            }
        },
        
    });
