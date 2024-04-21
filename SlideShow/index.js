const initSlider = () =>{
    
    const imagelist  =  document.querySelector(".slider-wrapper .img-list"); 
    const slidebutton = document.querySelectorAll(".slider-wrapper .slidebutton");
    const maxscrollLeft = imagelist.scrollWidth - imagelist.clientWidth;
    slidebutton.forEach(button => {
        button.addEventListener("click",()=>{
            const direction = button.id === "prev-slide" ? -1 : 1;
            const scrollamount = imagelist.clientWidth * direction;
            imagelist .scrollBy({left: scrollamount, behavior: "smooth"})
        })
    })

    const handleSlideButton = () => {
        slidebutton[0].style.display = imagelist.scrollleft <= 0 ? "none" : "block";
        slidebutton[1].style.display = imagelist.scrollleft >= maxscrollLeft ? "none" : "block";
    }

    imagelist.addEventListener("scroll",() =>{
        handleSlideButton();
    })

}

window.addEventListener("load",initSlider);