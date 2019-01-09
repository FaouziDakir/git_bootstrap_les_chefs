window.onscroll = function(){

    if(document.documentElement.scrollTop > 800){
        document.getElementById('nav1').classList.add('bg-dark');
        document.getElementById('nav2').classList.add('bg-dark');
        document.getElementById('nav3').classList.add('d-none');

    } else {
        document.getElementById('nav1').classList.remove('bg-dark');
        document.getElementById('nav2').classList.remove('bg-dark');
        document.getElementById('nav3').classList.remove('d-none');


    }
};