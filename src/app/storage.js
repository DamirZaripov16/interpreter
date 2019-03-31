import {Translite} from "./interpreter.js";

export const TatCyrField = document.getElementById("transliteTatCyr");
TatCyrField.value = sessionStorage["transliteTatCyr"] || "";
Translite.click = function(){
    sessionStorage["transliteTatCyr"]= TatCyrField.value;
};
//todo: не работает sessionStorage