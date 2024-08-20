
const scrollUp = document.getElementById("scrollUp");

window.onscroll = function (){
    if(document.body.scrollTop > 200 || document.documentElement.scrollTop > 200){
        scrollUp.classList.add("show");
    }else{
        scrollUp.classList.remove("show");
    }
}

scrollUp.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
});

