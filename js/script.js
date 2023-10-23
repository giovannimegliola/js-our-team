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