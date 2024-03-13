// Hamburger menu item
document.getElementById('mobile-menu').addEventListener('click', function () {
    var navList = document.querySelector('.nav-list');
    this.classList.toggle('active');
    navList.classList.toggle('show');
});


// Audio elements
const audio = new Audio('assets/loops/bass/BASSBrooding.wav');
const audio2 = new Audio('assets/loops/bass/EESEToronto.wav');
const audio3 = new Audio('assets/loops/NeverForget.wav');
const audio4 = new Audio('assets/loops/Atmosphere.wav');
const snd1 = new Audio('assets/drums/hihat-close.wav'); 
const snd2 = new Audio('assets/drums/hihat-open.wav');
const snd3 = new Audio('assets/drums/kick.wav');
const snd4 = new Audio('assets/drums/ride.wav');
const snd5 = new Audio('assets/drums/snare.wav');
const snd6 = new Audio('assets/drums/tom-high.wav');
const snd7 = new Audio('assets/drums/tom-low.wav');
const snd8 = new Audio('assets/drums/tom-mid.wav');
const snd9 = new Audio('assets/drums/CymaticsOrchidCrashPerfect.wav');
const snd10 = new Audio('assets/drums/CymaticsOrchidCrashLightHighs.wav');
const snd11 = new Audio('assets/drums/CymaticsOrchidRideMysterious.wav');
const snd12 = new Audio('assets/drums/CymaticsOrchidKickLayered.wav');
// Sliders
const slider = document.getElementById('slider');
const slider2 = document.getElementById('slider2');
const slider3 = document.getElementById('slider3');
const slider4 = document.getElementById('slider4');
const sliderDrums = document.getElementById('sliderDrums');


// Set initial volume and attach event listeners
const initialVolume = 0.2;
const initialVolumeDrums = 0.6;


setVolume(audio, slider, initialVolume);
setVolume(audio2, slider2, initialVolume);
setVolume(audio3, slider3, initialVolume);
setVolume(audio4, slider4, initialVolume);
setVolume(snd1, sliderDrums, initialVolumeDrums);
setVolume(snd2, sliderDrums, initialVolumeDrums);
setVolume(snd3, sliderDrums, initialVolumeDrums);
setVolume(snd4, sliderDrums, initialVolumeDrums);
setVolume(snd5, sliderDrums, initialVolumeDrums);
setVolume(snd6, sliderDrums, initialVolumeDrums);
setVolume(snd7, sliderDrums, initialVolumeDrums);
setVolume(snd8, sliderDrums, initialVolumeDrums);
setVolume(snd9, sliderDrums, initialVolumeDrums);
setVolume(snd10, sliderDrums, initialVolumeDrums);
setVolume(snd11, sliderDrums, initialVolumeDrums);
setVolume(snd12, sliderDrums, initialVolumeDrums);



slider.oninput = function() {
    let value = this.value;
    let volumePercentage = value / 100;
    setVolume(audio, slider, volumePercentage);
};

slider2.oninput = function() {
    let value = this.value;
    let volumePercentage = value / 100;
    setVolume(audio2, slider2, volumePercentage);
};

slider3.oninput = function() {
    let value = this.value;
    let volumePercentage = value / 100;
    setVolume(audio3, slider3, volumePercentage);
};

slider4.oninput = function() {
    let value = this.value;
    let volumePercentage = value / 100;
    setVolume(audio4, slider4, volumePercentage);
};

sliderDrums.oninput = function() {
    let value = this.value;
    let volumePercentage = value / 100;
    setVolume(snd1, sliderDrums, volumePercentage);
    setVolume(snd2, sliderDrums, volumePercentage);
    setVolume(snd3, sliderDrums, volumePercentage);
    setVolume(snd4, sliderDrums, volumePercentage);
    setVolume(snd5, sliderDrums, volumePercentage);
    setVolume(snd6, sliderDrums, volumePercentage);
    setVolume(snd7, sliderDrums, volumePercentage);
    setVolume(snd8, sliderDrums, volumePercentage);
    setVolume(snd9, sliderDrums, volumePercentage);
    setVolume(snd10, sliderDrums, volumePercentage);
    setVolume(snd11, sliderDrums, volumePercentage);
    setVolume(snd12, sliderDrums, volumePercentage);
}

// Function to update slider background
function updateSliderBackground(slider) {
    let min = slider.getAttribute('min');
    let max = slider.getAttribute('max');
    let val = slider.value;
    let range = (max - min);
    let perc = (val / range) * 100;
    slider.style.backgroundImage = `linear-gradient(to right, #fe0000 ${perc}%, #d6e900 ${perc}%)`;
}

// Add event listeners to all sliders
[slider, slider2, slider3, slider4, sliderDrums].forEach(slider => {
    slider.addEventListener("input", function() {
        updateSliderBackground(this);
    });
});


function setVolume(audio, slider, volumePercentage) {
    // Set the volume of the audio
    audio.volume = volumePercentage;
    updateSliderBackground(slider);
}








// Function to play the sounds
function soundBass01() {
    audio.play(); 
}

function soundBass02() {
    audio2.play(); 
}

function soundAmbient01() {
    audio3.play(); 
}

function soundAmbient02() {
    audio4.play(); 
}

function soundKick00() {
    snd1.play()
}

function soundKick01() {
    snd2.play()
}

function soundKick02() {
    snd3.play()
}

function soundSnare01() {
    snd4.play()
}

function soundSnare02() {
    snd5.play()
}

function soundClap() {
    snd6.play()
}

function soundHiHat() {
    snd7.play()
}

function soundHiHatClosed() {
   snd8.play()
}

function soundSplash01() {
    snd9.play()
}

function soundSplash02() {
    snd10.play()
}

function soundRide() {
    snd11.play()
}

function soundTom() {
    snd12.play()
}