
function handleErr(err){
    const jsdiv = document.querySelector('.jserr');
    if(jsdiv){
      jsdiv.innerHTML = `<div class="jserra fixed fullw flex justcc">
                            <div class="jserraa">
                                <span>${err}</span>
                            </div>
                        </div>`;
    }
}

