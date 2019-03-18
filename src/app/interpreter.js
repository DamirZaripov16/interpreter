// Inner Functional

const arrTatCyr = ['Я','я','Ю','ю','Ч','ч','Ш','ш','Щ','щ','Ж','ж','Җ','җ','Ж','ж','А','а','Ә','ә','Б','б','В','в','Г','г','Д','д','Е','е','Ё','ё','З','з','И','и','Й','й','К','к','Л','л','М','м','Н','н','Ң ','ң','О','о','Ө','ө','П','п','Р','р','С','с','Т','т','У','у','Ү','ү','Ф','ф','Х','х','Һ','һ','Ц','ц','Ы','ы','Ь','ь','Ъ','ъ','Э','э'];
const arrTatLat = ['Ya','ya','Yu','yu','Ç','ç','Ş','ş','Ş','ş','J','j','J','j','A','a','Ä','ä','B','b','V','v','Ğ','ğ','D','d','E','e','E','E','Z','z','I','i','Yo','yo','Q','q','L','l','M','m','N','n','Ñ','ñ','O','o','Ö','ö','P','p','R','r','S','S','T','t','U','u','Ü','ü','F','f','H','h','C','c','`','`','\'','\''];


function TatCyrToTatLat(text){
    for (let i=0; i<arrTatCyr; i++) {
        let reg = new RegExp(arrTatCyr[i], 'g');
        text = text.replace(reg, arrTatLat[i]);
    }
    return text
}


function TatLatToTatCyr(id){
    let text = $("#"+id).html();
    for(let i=0; i<arrTatLat.length; i++){
        let reg = new RegExp(arrTatLat[i], "g");
        text = text.replace(reg, arrTatCyr[i]);
    }
    $("#"+id).html(text);
}

function translit(){
    $("[name=result]").val(TatCyrToTatLat($("[name=translit]").val()));
}

// Outer Functional
const generalAreaEl = document.getElementById('generalArea');
const areaInEl = document.getElementById('areaIn');
const resultEl = document.getElementById('result');
const translateEl = document.getElementById('translit');

generalAreaEl.addEventListener('submit', (evt) => {
    evt.preventDefault();

    areaInEl.addEventListener('input', (evt) => {
        areaInEl.value = '';
        if (areaInEl.value === '') {
            areaInEl.textContent = 'Введите текст на татарском';
        }
    });

    translateEl.addEventListener('click', (evt) => {
        evt.preventDefault();

    });


    resultEl.textContent = translit();
});

