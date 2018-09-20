const galleryNav = document.querySelector (".gallery__nav")

for ( let i= 0; i < galleryNav.children.length; i++) {

    galleryNav.children[i].addEventListener("click", function(){
        
        const img = this.dataset.image;
        document.querySelector(".gallery__image").scr = img;

        const galleryTitle = this.dataset.title;
        document.querySelector(".gallery__caption").textContent = galleryTitle;

    })

}