"use strict";

//selecting Element
const btnArrowRight = document.querySelector(".arrow-Btn-right");
const btnArrowLet = document.querySelector(".arrow-Btn-left");
const btnRandom = document.querySelector(".random-btn");
const imageUsear = document.querySelector("img");
const nameUsear = document.querySelector(".name-user");
const subjectUser = document.querySelector(".subject-job");
const paragraphUsear = document.querySelector(".paragraph-content");
let counter = 0;

//Stariting condition

const peopele = [{
        namePic: "3",
        nameUsear: "Hadi Tal",
        job: "Front End Developer",
        pararaph: "I  m baby meggings twee health goth Bicycle rights tumeric chartreuse before they sold out chambray pop up.Shaman humblebrag pickled coloring book salvia hoodie, pressed four dollar toast everyday carry ",
    },
    {
        namePic: "0",
        nameUsear: "Zahram  karimi",
        job: "Back End Developer",
        pararaph: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8 bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag",
    },
    {
        namePic: "1",
        nameUsear: "AliMazaheri Fard",
        job: "Androind Developer",
        pararaph: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz edison bulb pop-up 3 wolf moon tote bag street art shabby chic",
    },
    {
        namePic: "2",
        nameUsear: "Sara Mohmmadi",
        job: "Graphics",
        pararaph: "I  m baby meggings twee health goth Bicycle rights tumeric chartreuse before they sold out chambray pop up.Shaman humblebrag pickled coloring book salvia hoodie, pressed four dollar toast everyday carry ",
    },
    {
        namePic: "4",
        nameUsear: "Mujtaba Hussaine",
        job: "Web Designer",
        pararaph: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal ",
    },
];

if (peopele[0].nameUsear === nameUsear.textContent) {
    peopele.reverse();
}
const random = Math.floor(Math.random() * 4 + 0);

imageUsear.setAttribute("src", `images/${peopele[random].namePic}.png`);
nameUsear.textContent = peopele[random].nameUsear;
subjectUser.textContent = peopele[random].job;
paragraphUsear.textContent = peopele[random].pararaph;

const loadInfoUsear = function() {
    if (peopele[0].nameUsear === nameUsear.textContent) {
        peopele.reverse();
    }

    imageUsear.setAttribute("src", `images/${peopele[counter].namePic}.png`);
    nameUsear.textContent = peopele[counter].nameUsear;
    subjectUser.textContent = peopele[counter].job;
    paragraphUsear.textContent = peopele[counter].pararaph;
    counter += 1;
    if (counter > peopele.length - 1) {
        counter = 0;
    }
};

btnArrowRight.addEventListener("click", loadInfoUsear);

btnArrowLet.addEventListener("click", loadInfoUsear);

btnRandom.addEventListener("click", function() {
    let random = Math.floor(Math.random() * 4 + 0);

    if (nameUsear.textContent === peopele[random].nameUsear) {
        let deleteIteam = peopele[random];

        peopele.splice(random, 1);

        random = Math.floor(Math.random() * peopele.length + 0);

        imageUsear.setAttribute("src", `images/${peopele[random].namePic}.png`);
        nameUsear.textContent = peopele[random].nameUsear;
        subjectUser.textContent = peopele[random].job;
        paragraphUsear.textContent = peopele[random].pararaph;

        peopele.push(deleteIteam);
    } else {
        imageUsear.setAttribute("src", `images/${peopele[random].namePic}.png`);
        nameUsear.textContent = peopele[random].nameUsear;
        subjectUser.textContent = peopele[random].job;
        paragraphUsear.textContent = peopele[random].pararaph;
    }
});