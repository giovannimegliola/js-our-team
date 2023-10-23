"use strict";


//array dei membri del team con gli object all'interno

const team = [
  {
    name: "Wayne Barnett",
    role: "Founder & CEO",
    picture: "wayne-barnett-founder-ceo.jpg"
  },
  {
    name: "Angela Carroll",
    role: "Chief Editor",
    picture: "angela-caroll-chief-editor.jpg"
  },
  {
    name: "Walter Gordon",
    role: "Office Manager",
    picture: "walter-gordon-office-manager.jpg"
  },
  {
    name: "Angela Lopez",
    role: "Social Media Manager",
    picture: "angela-lopez-social-media-manager.jpg"
  },
  {
    name: "Scott Estrada",
    role: "Developer",
    picture: "scott-estrada-developer.jpg"
  },
  {
    name: "Barbara Ramos",
    role: "Graphic Designer",
    picture: "barbara-ramos-graphic-designer.jpg"
  }
]


// stampa in console log le info su ogni membro
for (let key in team) {
  console.log (team[key].name + " " + team[key].role + " " + team[key].picture);
}


addMember();

// aggiunta di un nuovo membro al click

document.getElementById("addMemberButton").addEventListener("click", function() {
  const name = document.getElementById("nameInput").value;
  const role = document.getElementById("roleInput").value;
  const picture = document.getElementById("pictureInput").value;

  if (name && role && picture) {
    
    const newMember = { name, role, picture };  // creo un nuovo membro 

    team.push(newMember);

    addMember();

    document.getElementById("nameInput").value = "";
    document.getElementById("roleInput").value = "";           //reset
    document.getElementById("pictureInput").value = "";
  }
});

function addMember() {
  const cards = document.getElementById("cardsContainer");
  cards.innerHTML = "";  //reset

  for (let i = 0; i < team.length; i++) {
    let member = team[i];

    let card = `
    <div class="card">
      <img src="./img/${member.picture}" alt="${member.name}"></img>
      <h3>${member.name}</h3>
      <h5>${member.role}</h5>
    </div>
    `;

    cards.innerHTML += card;
  }
}
