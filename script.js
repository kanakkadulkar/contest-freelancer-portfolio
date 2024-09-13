document.getElementById('profilePic').addEventListener('click', function() {
    const info = document.getElementById('profileInfo');
    if (info.style.display === 'flex') {
        info.style.display = 'none';
    } else {
        info.style.display = 'flex';
    }
});

var typed= new Typed(".typing",{
    strings:["","Web Developer","App Developer"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true

})