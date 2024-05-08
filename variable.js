const mobile = {
    brand: "oppo",
    color: "red",
    price: 16000
};

document.getElementById("new").innerHTML = `Mobile brand name ${mobile.brand}, price ${mobile["price"]}, color ${mobile.color}.`;