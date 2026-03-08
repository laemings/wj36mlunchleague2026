import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js"

import {
getFirestore,
collection,
addDoc
}
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js"

const firebaseConfig = {

apiKey:"AIzaSyCFhr-YyjN4qSc8e1a8IAOKEi3ktjVP18Y",
authDomain:"wonju36lunchleague2026.firebaseapp.com",
projectId:"wonju36lunchleague2026"

}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

window.login=function(){

let pass=document.getElementById("password").value

if(pass==="laemings111!"){

document.getElementById("adminPanel").style.display="block"

alert("관리자 로그인 성공")

}
else{

alert("비밀번호 틀림")

}

}

window.addMatch=async function(){

let teamA=document.getElementById("teamA").value
let teamB=document.getElementById("teamB").value

let scoreA=parseInt(document.getElementById("scoreA").value)
let scoreB=parseInt(document.getElementById("scoreB").value)

let scorer=document.getElementById("scorer").value
let assist=document.getElementById("assist").value

await addDoc(collection(db,"matches"),{

teamA:teamA,
teamB:teamB,
scoreA:scoreA,
scoreB:scoreB,
scorer:scorer,
assist:assist

})

alert("경기 저장 완료")

}