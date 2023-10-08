const controls = document.querySelectorAll('.control');
const items = document.querySelectorAll('.box-proj');
let currentItem = 0;

controls.forEach(control =>{
    control.addEventListener('click', ()=>{
        const isLeft = control.classList.contains('btn-seta-left');

        if (isLeft) {
            currentItem -=1;
        }else{
            currentItem +=1;
        }

        if (currentItem >= items.length)
            currentItem = 0;
        
        if (currentItem < 0)
            currentItem = items.length - 1;
        
        items.forEach(item => item.classList.remove('on'));

        items[currentItem].scrollIntoView({
            inline: "center",
            behavior: "smooth"
        });

        items[currentItem].classList.add('on');
    })
})