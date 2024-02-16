
export function kanjiData(kanji){
    console.log('kanji ' + kanji + "logged from k-d.js!");
        const link = `https://kanjiapi.dev/v1/kanji/${kanji}`;
        fetch(link)
        .then(response => {
            return response.json();
        }).then(data => {
            console.log(data);//displays when button is pressed 
            displayKanjiData(data);
            return data;
        }).catch(err => console.log(err)); //prints error message
    } 
    
function displayKanjiData(d){
console.log(`Kanji: ${d.kanji}`);
console.log(`Meaning:  ${d.meanings}`);
console.log(`Kun: ${d.kun_readings}`);
console.log(`On: ${d.on_readings}`);
console.log(`Name Readings: ${d.name_readings}`);

        let kanji_data = [
      { Kanji: d.kanji, Meanings: d.meanings, Kun: d.kun_readings, On: d.on_readings, Name_Readings: d.name_readings},
    ];


createTable(kanji_data);


}

    // Function to create the table
    function createTable(data) {
      // Create a table element
      var table = document.createElement("table");
      table.className = "kanji-info";

      // Create a header row
      var headerRow = table.insertRow();
      for (let key in data[0]) {
        var headerCell = headerRow.insertCell();
        headerCell.textContent = key;
      }

      // Create rows and cells for the data
      for (let i = 0; i < data.length; i++) {
        var row = table.insertRow();
        for (let key in data[i]) {
          var cell = row.insertCell();

        if(data[i][key] == ""){
            cell.textContent = "〇";
        }else{
            cell.textContent = data[i][key];
        }

        }
      }



      document.body.appendChild(table);
    }

export function clearPageKanjiInfo(){
    const kanjiInfo = document.getElementsByClassName("kanji-info");
while (kanjiInfo.length > 0 ) {
    kanjiInfo[0].remove();
}


}



