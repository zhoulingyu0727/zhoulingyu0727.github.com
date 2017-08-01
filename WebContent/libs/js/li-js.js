var list=document.querySelector('.boxList');
    window.onload=function(){
        setInterval(transition,1000)

    }
    function transition(){
        list.className='on boxList';
    }