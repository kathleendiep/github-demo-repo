

console.log("LINKED");

$(document).ready(function(){
    console.log('ready')
    $( ".kathleen" ).animate();

    document.getElementById('menu-1').addEventListener('click', function(){
    document.getElementById('big-menu').classList.add('toggle-open');
    console.log("LINKED");

    })



    document.getElementById('big-menu-close').addEventListener('click', function(){
    document.getElementById('big-menu').classList.remove('toggle-open');
    })
})



