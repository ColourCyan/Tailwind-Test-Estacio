const burger = document.querySelector('#burger');
const menu = document.querySelector('#menu');
const chevron_prod = document.querySelector('#chevron-prod');
const submenu_products = document.querySelector('#submenu-products');
const chevron_info = document.querySelector('#chevron-info');
const submenu_information = document.querySelector('#submenu-information');

burger.addEventListener('click',()=>{
    if(menu.classList.contains('hidden')){
        menu.classList.remove('hidden');
    }
    else{
        menu.classList.add('hidden');
    }
})

chevron_prod.addEventListener('click',()=>{
    if(submenu_products.classList.contains('hidden')){
        submenu_products.classList.remove('hidden');
    }
    else{
        submenu_products.classList.add('hidden');
    }
})

chevron_info.addEventListener('click',()=>{
    if(submenu_information.classList.contains('hidden')){
        submenu_information.classList.remove('hidden');
    }
    else{
        submenu_information.classList.add('hidden');
    }
})

