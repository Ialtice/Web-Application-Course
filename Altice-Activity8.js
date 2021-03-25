
var days = [];
var temperature = [];

var $ = function (id) {
  return document.getElementById(id);
};
function displayResults(){
  var sum = 0;
  var high = 0;
  var avg;
  var highDayI = 0;
  for(var i = 0; i < temperature.length; i++){
    sum += temperature[i]
    if(high < temperature[i]){
      high = temperature[i]
      highDayI = i;
    }
  }
  avg = sum / temperature.length
  var newH2 = document.createElement("h2");
  var node = document.createTextNode("Result");
  newH2.appendChild(node);
  var parent =  document.getElementById("result");
  parent.appendChild(newH2);
  var newP = document.createElement("p");
  var node1 = document.createTextNode("Average temperature = " + avg + "F");
  newP.appendChild(node1);
  parent.appendChild(newP);
  newP = document.createElement("p");
  var node2 = document.createTextNode("Highest temperature was on " + days[highDayI] + " with a temperature of "
      + high + "F")
  newP.appendChild(node2);
  parent.appendChild(newP);

}
function displayTemperature(){

  var newH2 = document.createElement("h2");
  var node = document.createTextNode("Day-Temperature");
  newH2.appendChild(node);
  var parent =  document.getElementById("temperature_table");
  parent.appendChild(newH2);
  var tempTable = document.getElementById("temperature_table");
  var row = tempTable.insertRow(0);
  var day = row.insertCell(0);
  var temp = row.insertCell(1);
  day.innerHTML = "<b>Day</b>";
  temp.innerHTML  = "<b>Temperature</b>";
  for(var i = 0; i < temperature.length; i++) {
    row = tempTable.insertRow(i + 1);
    day = row.insertCell(0);
    temp = row.insertCell(1);
    day.innerHTML = days[i];
    temp.innerHTML = temperature[i];

  }
}

function addTemperature(){
  var addDay = document.getElementById("Day");
  var dayText = addDay.value;
  var addTemp = document.getElementById("Temperature")
  var tempNum = parseInt(addTemp.value);
  if(dayText.length === 0 || isNaN(tempNum)){
    alert("You must enter a day and a valid temperature")
  }
  else{
    days.push(dayText);
    temperature.push(tempNum);
  }
  addTemp.value = "";
  addDay.value = addDay.selectedIndex = "0";
  document.getElementById("Day").focus();
}

window.onload = function () {
  document.getElementById("Day").focus();

  $("displayResults").onclick = displayResults;
  $("addTemperature").onclick = addTemperature;
  $("displayTemperature").onclick = displayTemperature;


};
