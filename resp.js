burger = document.querySelector('.burger')
 navbar= document.querySelector('.nav-bar')
 navlist= document.querySelector('.nav-list')
 rightnav= document.querySelector('.rightnav')

 burger.addEventListener('click',()=>{
     rightnav.classList.toggle('v-class');
     navlist.classList.toggle('v-class');
     navbar.classList.toggle('h-nav');
 })