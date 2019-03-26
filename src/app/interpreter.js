//Tabs

const tabLinks = document.querySelectorAll(".tabs a");
const tabPanels = document.querySelectorAll(".tabs-panel");

for(let el of tabLinks) {
    el.addEventListener("click", e => {
        e.preventDefault();

        document.querySelector('.tabs li.active').classList.remove("active");
        document.querySelector('.tabs-panel.active').classList.remove("active");

        const parentListItem = el.parentElement;
        parentListItem.classList.add("active");
        const index = [...parentListItem.parentElement.children].indexOf(parentListItem);

        const panel = [...tabPanels].filter(el => el.getAttribute("data-index") == index);
        panel[0].classList.add("active");
    });
}

//General

function Translite() {
    let TatLatField = document.getElementById("transliteTatLat"),
        TatCyrField = document.getElementById("transliteTatCyr"),
        butRun = document.getElementById("transliteRun"),
        butClear = document.getElementById("transliteClear");

    butRun.addEventListener("click", run);
    butClear.addEventListener("click", clear);

    function run() {
        let str = TatCyrField.value;
        let space = ' ';
        let link = '';
        let transl = {
            'а': 'a',
            'А': 'A',
            'ә': 'ä',
            'Ә': 'Ä',
            'б': 'b',
            'Б': 'B',
            'в': 'v',
            'В': 'V',
            'г': 'g',
            'Г': 'G',
            'д': 'd',
            'Д': 'D',
            'е': 'e',
            'Е': 'E',
            'ё': 'e',
            'Ё': 'E',
            'ж': 'j',
            'Ж': 'J',
            'җ': 'j',
            'Җ': 'J',
            'з': 'z',
            'З': 'Z',
            'и': 'i',
            'И': 'I',
            'й': 'y',
            'Й': 'Y',
            'к': 'q',
            'К': 'Q',
            'л': 'l',
            'Л': 'L',
            'м': 'm',
            'М': 'M',
            'н': 'n',
            'Н': 'N',
            'ң': 'ñ',
            'Ң': 'Ñ',
            'о': 'o',
            'О': 'O',
            'ө': 'ö',
            'Ө': 'Ö',
            'п': 'p',
            'П': 'P',
            'р': 'r',
            'Р': 'R',
            'с': 's',
            'С': 'S',
            'т': 't',
            'Т': 'T',
            'у': 'u',
            'У': 'U',
            'ү': 'ü',
            'Ү': 'Ü',
            'ф': 'f',
            'Ф': 'F',
            'х': 'h',
            'Х': 'H',
            'h': 'h',
            'Һ': 'h',
            'ц': 'ç',
            'Ц': 'Ç',
            'ч': 'ç',
            'Ч': 'Ç',
            'ш': 'ş',
            'Ш': 'Ş',
            'щ': 'ş',
            'Щ': 'Ş',
            'ъ': "'",
            'Ъ': "'",
            'ы': 'i',
            'Ы': 'I',
            'ь': "'",
            'Ь': "'",
            'э': 'e',
            'Э': 'E',
            'ю': 'yu',
            'Ю': 'Yu',
            'я': 'ya',
            'Я': 'Ya',
            '!': '!',
            '"': '"',
            '№': '№',
            ';': ';',
            '%': '%',
            ':': ':',
            '?': '?',
            '*': '*',
            '(': '(',
            ')': ')',
            '-': '-',
            '+': '+',
            '@': '@',
            '#': '#',
            '$': '$',
            '^': '^',
            '&': '&',
            '_': '_',
            '=': '=',
            '.': '.',
            ',': ',',
            '{': '{',
            '}': '}',
            "'": "'",
            '<': '<',
            '>': '>',
            '/': '/',
            '`': '`',
            '~': '~',
            '«': '«',
            '»': '»',
        };

        for (let i = 0; i < str.length; i++) {
            if (/[-!"№;%:?*()+@#$^&_=.,{}<>/`~«»а-яёәҗңөүhА-ЯЁӘҖҢӨҮҺ]/.test(str.charAt(i))) {
                link += transl[str.charAt(i)];
            } else if (/[-!"№;%:?*()+@#$^&_=.,{}<>/`~«»a-zäjühççşşi0-9A-ZÄJÄhÇÇŞŞI]/.test(str.charAt(i))) {
                link += str.charAt(i);
            } else if (link.slice(-1) !== space) {
                link += space;
            }
        }
        TatLatField.value = link;
    }

    function clear() {
        TatCyrField.value = "";
        TatLatField.value = "";
    }
}

Translite();