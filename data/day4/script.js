
// 1. getElementById()

const getById = () => {

    let a = document.getElementById("heading");

    document.getElementById("output").innerHTML = a.innerHTML;

};


// 2. getElementsByClassName()

const getByClass = () => {

    let a = document.getElementsByClassName("text");

    document.getElementById("output").innerHTML =
        a[0].innerHTML + "<br>" +
        a[1].innerHTML + "<br>" +
        a[2].innerHTML;

};


// 3. getElementsByTagName()

const getByTag = () => {

    let a = document.getElementsByTagName("p");

    document.getElementById("output").innerHTML =
        a[0].innerHTML + "<br>" +
        a[1].innerHTML + "<br>" +
        a[2].innerHTML;

};


// 4. querySelector()

const getByQuery = () => {

    let a = document.querySelector(".subheading");

    document.getElementById("output").innerHTML = a.innerHTML;

};


// 5. querySelectorAll()

const getAllQuery = () => {

    let a = document.querySelectorAll(".text");

    let result = "";

    a.forEach((item) => {

        result += item.innerHTML + "<br>";

    });

    document.getElementById("output").innerHTML = result;

};
