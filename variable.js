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