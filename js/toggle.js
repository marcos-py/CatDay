function toggleCongratulations(el){
    document.getElementById('dreamgirl-post').style.display = 'none';
    var display = document.getElementById(el).style.display;
    if(display == 'none'){
        document.getElementById(el).style.display = 'block';
    }else {
        document.getElementById(el).style.display = 'none';
    }
}

function toggleDreamgirl(el){
    document.getElementById('congratulations-post').style.display = 'none';
    var display = document.getElementById(el).style.display;
    if(display == 'none'){
        document.getElementById(el).style.display = 'block';
    }else {
        document.getElementById(el).style.display = 'none';
    }
}


