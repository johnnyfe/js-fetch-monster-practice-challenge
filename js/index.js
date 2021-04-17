const urlOriginal=`http://localhost:3000/monsters/`
function getMonsters (page) {
const url=urlOriginal+`/?_limit=50&_page=${page}`;
fetch (url)
.then (resp=>resp.json())
.then (showMonsters)
.catch(error=>console.log(error))
};
getMonsters();

function createMonsterDiv (monsterObj){
    const div = document.createElement('div');
    const h2 = document.createElement('h2');
    const h3 = document.createElement('h3');
    const p = document.createElement('p');

    h2.innerText = monsterObj.name;
    h3.innerText = monsterObj.age;
    p.innerText = monsterObj.description;
    div.appendChild(h2);
    div.appendChild(h3);
    div.appendChild(p);
    return div;
};
function showMonsters(monstersArray){
    const monsterConteiner=document.getElementById('monster-container');
    monstersArray.forEach(monsterObj=>{
        const monsterDiv = createMonsterDiv(monsterObj);
    monsterConteiner.appendChild(monsterDiv);
    })
};

let forwardBtn=document.getElementById('forward');
let backBtn=document.getElementById('back');
forwardBtn.addEventListener('click', (page)=>{
        getMonsters(page++)
})
backBtn.addEventListener('click', (page)=>{
    getMonsters(page--)
})
