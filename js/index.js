

function vidcontrolTogFullScrn(el){
    const vidcontrolcustom = el.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement;
    const inptog = document.querySelector('input#togvidfullscrn');

    vidcontrolcustom.classList.toggle('fullscreen');
    if(inptog.checked){
        inptog.checked = false;
    }
    else {
        inptog.checked = true;
    }
}

function vidcontrolPauseAllMedia(){
    const media = document.querySelectorAll('video, audio');
    media.forEach(medium => {
        medium.pause();
    });
}
function vidcontrolHidePlayBtn(video){
    const vidcontrolcustom = video.parentElement.parentElement.parentElement;
    vidcontrolcustom.classList.add('playing');
    vidcontrolcustom.classList.remove('paused');
}
function vidcontrolHidePauseBtn(video){
    const vidcontrolcustom = video.parentElement.parentElement.parentElement;
    vidcontrolcustom.classList.remove('playing');
    vidcontrolcustom.classList.add('paused');
}

function vidcontrolPlay(el){
    vidcontrolPauseAllMedia();
    const video = el.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.querySelector('video');
    video.play();
}

function vidcontrolPause(el){
    const video = el.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.querySelector('video');
    video.pause();
}

function vidcontrolTimeUpdate(video){
    // console.log(video.currentTime);
    const rawdur = video.duration;
    const rawcurrtime = video.currentTime;
    const vidcontrols = video.parentElement.nextElementSibling;
    const vidrange = vidcontrols.querySelector('.vidrange');
    const vidprogress = vidcontrols.querySelector('.vidprogress');

    const vidrangeval = parseInt((rawcurrtime / rawdur) * 100);
    vidrange.value = vidrangeval;
    vidprogress.style.width = vidrangeval + '%';

    vidcontrolSetTime(video);
}

function vidcontrolSeek(vidrange){
    const vidcontrolcustom = vidrange.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement;
    const vidprogress = vidcontrolcustom.querySelector('.vidprogress');
    const video = vidcontrolcustom.querySelector('video');
    const rawdur = video.duration;
    
    const vidrangeval = vidrange.value;
    vidprogress.style.width = vidrangeval + '%';

    const currtime = (vidrangeval / 100) * rawdur;
    video.currentTime = currtime;
    
    vidcontrolSetTime(video);
}

function vidcontrolSetTime(video){
    const vidcontrols = video.parentElement.nextElementSibling;
    const vidtimeini = vidcontrols.querySelector('.vidtimeini');
    const vidtimefin = vidcontrols.querySelector('.vidtimefin');

    const currtime = parseInt(video.currentTime);
    const dur = parseInt(video.duration);

    let initial = '';
    let final = '';
    
    if(dur >= 0 && dur <= 60){
        //like ss;
        initial = currtime + 's';
        final = dur + 's';
    }
    else if(dur > 60 && dur < 3600){
        //like mm:ss;
        const iss = twoDigits(currtime % 60);
        const imm = twoDigits(Math.floor(currtime / 60));
        
        const fss = twoDigits(dur % 60);
        const fmm = twoDigits(Math.floor(dur / 60));

        initial = imm + ':' + iss;
        final = fmm + ':' + fss;
    }
    else if(dur > 3600){
        //like hh:mm:ss;
        const iss = twoDigits(currtime % 60);
        const imm = twoDigits(Math.floor(currtime / 60) % 60);
        const ihh = Math.floor(currtime / 3600);
        
        const fss = twoDigits(dur % 60);
        const fmm = twoDigits(Math.floor(dur / 60) % 60);
        const fhh = Math.floor(dur / 3600);

        initial = ihh + ':' + imm + ':' + iss;
        final = fhh + ':' + fmm + ':' + fss;
    }

    vidtimeini.innerText = initial;
    vidtimefin.innerText = final;
}

function twoDigits(n){
    if(n >= 0 && n < 10){
        return '0' + n;
    }
    else {
        return n;
    }
}