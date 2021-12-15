





const counters = document.querySelectorAll('.counter');
const speed = 200;

counters.forEach(counter => {
    const updateCount = () => {
        const target  = +counter.getAttribute('data-target');

        const count = +counter.innerText

        const inc = target/speed;

        if (count < target) {
            counter.innerText = count + inc;
            setTimeout(updateCount, 1);
        }else{
            count.innerText =target;
        }
    }

    updateCount();
});


const scrollbtn = document.querySelector("gotopbtn");

window.addEventListener("scroll",scrollfunction);

function scrollfunction() {
    if(window.pageYOffset > 300){
        if(!scrollbtn.classList.add("gotopbtn")){
            scrollbtn.classList.add("gotopbtn")
            scrollbtn.style.display = "block";
        }
        
    }
    else{
        if(!scrollbtn.classList.add("gotopbtn")){
            scrollbtn.style.display = "none";
        }   
    }
};

gotopbtn.addEventListener("click",gotopbtn);

function scrollbtn() {
    window.scrollTo(0,0);
}






