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
            'а': 'a', 'ә': 'ä', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd', 'е': 'e', 'ё': 'e', 'ж': 'j', 'җ': 'j',
            'з': 'z', 'и': 'i', 'й': 'y', 'к': 'q', 'л': 'l', 'м': 'm', 'н': 'n', 'ң': 'ñ',
            'о': 'o', 'ө': 'ö', 'п': 'p', 'р': 'r', 'с': 's', 'т': 't', 'у': 'u', 'ү': 'ü', 'ф': 'f', 'х': 'h', 'h': 'h',
            'ц': 'ç', 'ч': 'ç', 'ш': 'ş', 'щ': 'ş', 'ъ': "'",
            'ы': 'i', 'ь': "'", 'э': 'e', 'ю': 'yu', 'я': 'ya'
        };




        if (str != '')
            str = str.toLowerCase();



        for (let i = 0; i < str.length; i++) {
            if (/[а-яёәҗңөүh]/.test(str.charAt(i))) {
                link += transl[str.charAt(i)];
            } else if (/[a-zäjühççşşi0-9]/.test(str.charAt(i))) {
                link += str.charAt(i);
            } else if (link.slice(-1) !== space)  {
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