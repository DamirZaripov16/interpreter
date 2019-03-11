const generalAreaEl = document.getElementById('generalArea');
const areaInEl = document.getElementById('areaIn');
const areaOutEl = document.getElementById('areaOut');
const translateEl = document.getElementById('translate');


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


    areaOutEl.textContent = areaInEl.value;

});

