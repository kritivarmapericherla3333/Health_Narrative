import {database,ref,get}

from "./firebase.js";

async function loadSymptoms(){

let part=

document.getElementById("bodyPart").value;

const dbRef=

ref(database,"symptoms");

get(dbRef).then((snapshot)=>{

let html="";

if(snapshot.exists()){

let data=snapshot.val();

for(let key in data){

if(data[key].category===part){

html+=

'<label><input type="checkbox" value="'+
data[key].remedy+
'"> '+data[key].symptom+
'</label><br>';

}

}

document.getElementById("symptomList")

.innerHTML=html;

}

});

}

async function findRemedy(){

let checked=

document.querySelectorAll(

'#symptomList input:checked'

);

let count={};

checked.forEach((item)=>{

let remedy=item.value;

count[remedy]=(count[remedy]||0)+1;

});

let best="";

let max=0;

for(let r in count){

if(count[r]>max){

max=count[r];

best=r;

}

}

document.getElementById("result")

.innerHTML=

"Suggested Remedy : "+best;

}

window.loadSymptoms=loadSymptoms;

window.findRemedy=findRemedy;