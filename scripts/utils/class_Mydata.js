export class Mydata{
    constructor(dataUrl='data/photographers.json'){
        this._dataUrl = dataUrl;
        this._photographers = [];
        this._media = [];
    }
    
    async initData(){
        await fetch(this._dataUrl)
        .then((res) => res.json())
        .then((promise) => {
            this._photographers = promise.photographers;
            this._media = promise.media;
        })
    }
        
    getAllPhotographers() {
        return this._photographers;
    }

    getAllMedia(){
        const media = this._media
        return media.filter((media) => media.photographerId == window.location.search.split('?id=').join(""))
    }
    
    getPhotographersById(){
        const currentId = window.location.search.split('?id=').join("");
        return this._photographers.find(photographers => photographers.id == currentId);
    }
}