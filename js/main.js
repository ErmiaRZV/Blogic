const header = document.querySelector('header')
const sect1 = document.querySelector('#sect1')
const sect2 = document.querySelector('#sect2')
const sect3 = document.querySelector('#sect3')
const sect4 = document.querySelector('#sect4')
const sect5 = document.querySelector('#sect5')
const sect6 = document.querySelector('#sect6')
const sect7 = document.querySelector('#sect7')
const sect8 = document.querySelector('#sect8')
const childrenSect3 = document.querySelectorAll('#sect3>div>div')
const childrenSect5 = document.querySelectorAll('#sect5>div>div')
const childrenSect7 = document.querySelectorAll('#sect7>div>div')
const windowHeight = window.innerHeight/2
const windowWidth = window.innerWidth
const menu = document.querySelector('#menu')
const boxMenu = document.querySelector('#boxMenu')
let topHeader = header.offsetTop

setTimeout(() => {
    header.children[0].classList.add('show')
}, 1000);
sect1.children[0].classList.add('scale')

window.addEventListener('scroll',()=>{
    let scrollY = window.scrollY
    if(scrollY>sect2.offsetTop-windowHeight){
        sect2.classList.add('translate')
    }else{
        sect2.classList.remove('translate')
    }
    if(scrollY>sect4.offsetTop-windowHeight){
        sect4.classList.add('translate')
    }else{
        sect4.classList.remove('translate')
    }
    if(scrollY>sect6.offsetTop-windowHeight){
        sect6.classList.add('translate')
    }else{
        sect6.classList.remove('translate')
    }
    if(scrollY>sect8.offsetTop-windowHeight){
        sect8.classList.add('translate')
    }else{
        sect8.classList.remove('translate')
    }

    childrenSect3.forEach((val)=>{
        if(scrollY>val.offsetTop-windowHeight ){
            val.classList.add('sect3')
        }else{
            val.classList.remove('sect3')
        }
    })
    childrenSect5.forEach((item)=>{
        if(scrollY>item.offsetTop-windowHeight ){
            item.classList.add('sect52')
            setTimeout(() => {
            item.classList.add('sect5')
            }, 100);
        }else{
            item.classList.remove('sect52')
            item.classList.remove('sect5')
        }
    })
    childrenSect7.forEach((item)=>{
        if(scrollY>sect7.offsetTop-windowHeight ){
            item.classList.add('sect52')
            setTimeout(() => {
            item.classList.add('sect5')
            }, 100);
        }else{
            item.classList.remove('sect52')
            item.classList.remove('sect5')
        }
    })
  

})


childrenSect7.forEach((val)=>{
    val.addEventListener('mouseenter',()=>{
        val.children[2].classList.add('sect7')
    })
    val.addEventListener('mouseleave',()=>{
        val.children[2].classList.remove('sect7')
    })
})



menu.addEventListener('click',()=>{
    boxMenu.classList.toggle('translate')
    header.classList.toggle('bg')
    header.children[0].classList.toggle('bg')


})