const mobile = {
    brand: "oppo",
    color: "red",
    price: 16000
};

const text = "sky, sea, forest";

document.getElementById("new").innerHTML = `Mobile brand name ${mobile.brand}, price ${mobile["price"]}, color ${mobile.color}.`;

document.getElementById("another").innerHTML = text.slice(5, 8);