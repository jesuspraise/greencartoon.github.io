
let viderr = '';

function firepostvideo(files){
    const preview = document.querySelector('.pstbay');
    const vid = preview.querySelector('video');
    const file = files[0];

    viderr = 'local';
    preview.classList.remove('present');
    vid.setAttribute('src', '');

    if(file){
        if(file.type.startsWith('video/')){
            
            const reader = new FileReader();
            reader.onload = (function(aVid){return function(e){aVid.src = e.target.result;};})(vid);
            reader.readAsDataURL(file);
            preview.classList.add('present');

            const pstbaxx = document.querySelector('.pstbaxx');
            pstbaxx.classList.remove('vidurlerr');
        }
    }
}

function fireanimactual(files){
    let error = '';
    const preview = document.querySelector('.pstbcaab span');
    const file = files[0];
    if(file){
        if(file.type.startsWith('video/')){
            preview.innerText = file.name;
        }
        else {
            error = 'unsupported format, please select a video file';
        }
    }
    else {
        error = 'a video file is required';
    }

    if(error !== ''){
        preview.innerText = 'choose actual animation';
        handleErr(error);
    }
}

function firemodelpreview(files){
    let error = '';

    const preview = document.querySelector('.psteab');
    const file = files[0];

    if(file){
        if(file.type.startsWith('image/')){
            preview.innerHTML = `<div class="psteaba abs fullw fullh">
                                    <img class="objftcov fullw fullh" src="">
                                </div>`;
            const vid = preview.querySelector('img');

            const reader = new FileReader();
            reader.onload = (function(aVid){return function(e){aVid.src = e.target.result;};})(vid);
            reader.readAsDataURL(file);
        }
        else {
            error = 'unsupported format, please select an image file';
        }
    }
    else {
        error = 'an image preview is required';
    }
    
    if(error !== ''){
        preview.innerHTML = '';
        handleErr(error);
    }
}
function firemodelactual(files){
    let error = '';
    const preview = document.querySelector('.pste .pstbcaab span');
    const file = files[0];
    if(file){
        if(file.type.startsWith('image/')){
            preview.innerText = file.name;
        }
        else {
            error = 'unsupported format, please select an image file';
        }
    }
    else {
        error = 'an image is required';
    }

    if(error !== ''){
        preview.innerText = 'choose actual model picture';
        handleErr(error);
    }
}

function showvideo(){
    const preview = document.querySelector('.pstbay');
    const video = preview.querySelector('.pstbaya video');
    const pstbaxx = document.querySelector('.pstbaxx');
    
    if(video.videoHeight){
        preview.classList.add('present');
        pstbaxx.classList.remove('vidurlerr');
    }
    else {
        video.setAttribute('src', '');
        pstbaxx.classList.add('vidurlerr');
    }
}
// function videoerror(){
//     const preview = document.querySelector('.pstbay');
//     const pstbaxx = document.querySelector('.pstbaxx');

//     preview.classList.remove('present');

//     if(viderr === 'url'){
//         pstbaxx.classList.add('vidurlerr');
//     }
//     // console.log('video error');
// }
// function getvideobyurl(){
//     const input = document.querySelector('.pstbaaab input.byurl');
//     const url = input.value;
//     const video = document.querySelector('.pstbaya video');
//     const preview = document.querySelector('.pstbay');

//     preview.classList.remove('present');

//     viderr = 'url';

//     video.addEventListener('canplay', showvideo);
//     video.addEventListener('error', videoerror);
    
//     video.setAttribute('src', url);
// }

function resetform(){
    const form = document.querySelector('form#postform');
    const input = form.querySelector('input#uppostvideo');

    form.reset();
    firepostvideo(input.files);
}


function resetpubform(formid){
    const form = document.querySelector(`form#${formid}`);
    const input = form.querySelector('input.preview');

    form.reset();
    firepubfiles(input.files);
}
function firepubfiles(files){
    const preview = document.querySelector('.pubbaaax');
    const file = files[0];

    if(file){
        if(file.type.startsWith('image/')){
            preview.innerHTML = `<div class="pubbaaaxa fullw rel">
                                    <img class="fullw fullh objftcov">
                                    <div class="pstbayb abs round" onclick="resetpubform('postpublication');">
                                        <svg class="flex" width="16" height="16" viewBox="0 0 16 16">
                                            <path xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"></path>
                                        </svg>
                                    </div>
                                </div>`;

            const vid = preview.querySelector('img');

            const reader = new FileReader();
            reader.onload = (function(aVid){return function(e){aVid.src = e.target.result;};})(vid);
            reader.readAsDataURL(file);
        }
        else if(file.type.startsWith('video/')){
            preview.innerHTML = `<div class="pubbaaaxa fullw rel">
                                    <video class="fullw fullh objftcov" muted autoplay></video>
                                    <div class="pstbayb abs round" onclick="resetpubform('postpublication');">
                                        <svg class="flex" width="16" height="16" viewBox="0 0 16 16">
                                            <path xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"></path>
                                        </svg>
                                    </div>
                                </div>`;

            const vid = preview.querySelector('video');

            const reader = new FileReader();
            reader.onload = (function(aVid){return function(e){aVid.src = e.target.result;};})(vid);
            reader.readAsDataURL(file);
        }
        else {
            preview.innerHTML = '';
        }
    }
    else {
        preview.innerHTML = '';
    }
}