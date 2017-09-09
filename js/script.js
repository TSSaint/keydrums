// keydrum JS

// listen for user keypresses

window.addEventListener('keydown', function(x) 
{
    console.log(x);
    // stores an instance of a keypress in a dynamically generated variable within ES6 template string
    const audio = document.querySelector(`.aud[data-key="${x.keyCode}"]`);
    const sound = document.querySelector(`.snd[data-key="${x.keyCode}"]`);
    console.log(audio);

    // logic that allows user to keep pressing button and generate sound accordingly
    if (!audio) return;
    console.log(sound)
    console.log('bum -- tsss')

    // rewind sound clip to the start
    audio.currentTime = 0;
    audio.play();
    console.log(sound);
});