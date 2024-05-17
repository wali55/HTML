const mobile = {
    brand: "oppo",
    color: "red",
    price: 16000
};

const text = "sky, sea, forest";

document.getElementById("new").innerHTML = `Mobile brand name ${mobile.brand}, price ${mobile["price"]}, color ${mobile.color}.`;

document.getElementById("another").innerHTML = text.slice(5, 8);

function newFunction() {
    let canVote;
    const age = Number(document.getElementById("age").value);
    document.getElementById("another1").innerHTML = age >= 18 ? "can vote" : "can not vote";
}

function myFunction() {
    let heading = document.getElementById("test");
    heading.innerHTML = "Hello ";
    let myInput = document.getElementById("demo").value;
    try {
        if (myInput.trim() === "") {
            throw "The field is empty";
        }
        if (isNaN(myInput)) {
            throw "Not a number";
        }
        myInput = Number(myInput);
        if (myInput < 5) {
            throw "Too low";
        } 
        if (myInput > 10) {
            throw "Too high"
        }
    }
    catch(err) {
        heading.innerHTML += err;
    }
}