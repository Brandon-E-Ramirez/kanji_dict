import * as utils from './utils.js'
import * as kanji from './kanji-data.js'

function Card(){
  function getGradeKanji(grade){
        const link = `https://kanjiapi.dev/v1/kanji/grade-${grade}`;
        fetch(link)
        .then(response => {
            return response.json();
        }).then(data => {
            console.log(data);//displays when button is pressed 
            displayGradeData(data);
        }).catch(err => console.log(err)); //prints error message
    } 

function gradeBtnPressed(n){
    console.log('button was pressed');
switch(n) {
  case 1:
    getGradeKanji(1);
    break;
  case 2:
    getGradeKanji(2);
    break;
  case 3:
    getGradeKanji(3);
    break;
      case 4:
    getGradeKanji(4);
    break;
      case 5:
    getGradeKanji(5);
    break;
      case 6:
    getGradeKanji(6);
    break;
      case 8:
    getGradeKanji(8);
    break;
  default:
    console.log("There was an error: 'gradeBtnPressed'");
    } 
}

    //displays the data for any grade/category
    function displayGradeData(data){
        const div = document.createElement('div');
        div.className="grade-div";
        data.forEach(element => {
            const btn = document.createElement("button");
            btn.className="character-card";
            btn.innerHTML = element;

// Add a click event listener to each dynamically created button
        btn.addEventListener("click", function () {
            //alert("Button clicked for: " + element);
            
            kanji.kanjiData(element);



        });

            div.appendChild(btn);
        });
        document.body.appendChild(div)
    }
    
    return(
<>
        <div className="input-container">
            <input type="text" placeholder="Enter your text here..." className="input-field" id="input"/>
        </div>

<div className="btn-list">
<input type="submit" onClick={() => gradeBtnPressed(1)} value="Get Grade 1 Kanji"/>
<input type="submit" onClick={()=> gradeBtnPressed(2)} value="Get Grade 2 Kanji"/>
<input type="submit" onClick={() => gradeBtnPressed(3)} value="Get Grade 3 Kanji"/>
<input type="submit" onClick={() => gradeBtnPressed(4)} value="Get Grade 4 Kanji"/>
<input type="submit" onClick={() => gradeBtnPressed(5)} value="Get Grade 5 Kanji"/>
<input type="submit" onClick={() => gradeBtnPressed(6)} value="Get Grade 6 Kanji"/>
<input type="submit" onClick={() => gradeBtnPressed(8)} value="Get Grade 8 Kanji"/>
<input type="submit" onClick={() => utils.clearPage()} value="Clear Page"/>
</div>



</>
        );
    
}
export default Card