import * as kanji from "./kanji-data";

export function clearPage(){
    const gradeKanji = document.getElementsByClassName("grade-div");
    kanji.clearPageKanjiInfo();
    while (gradeKanji.length > 0 ) {
    gradeKanji[0].remove();
}


}