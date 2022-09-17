
const prendaCafe = document.getElementById("foto-Mom");
const derecha = document.getElementById("derecha");
const izquierda = document.getElementById("izquierda");

const momCafe1 = "/product/Mom Cafe/2.jpeg";
const momCafe2 = "/product/Mom Cafe/1.jpeg";


const prendaNegra = document.getElementById("MomNegro");
const derecha1 = document.getElementById("derecha1");
const izquierda1 = document.getElementById("izquierda1");

const momNegro1 = "/product/Negro/2.jpeg";
const momNegro2 = "/product/Negro/1.jpeg";

const prendaBeige = document.getElementById("MomBeige");
const derecha2 = document.getElementById("derecha2");
const izquierda2 = document.getElementById("izquierda2");

const momBeige1 = "/product/Beige/2.jpeg";
const momBeige2 = "/product/Beige/1.jpeg"

const panaCafe = document.getElementById("panaCafe");
const derecha3 = document.getElementById("derecha3");
const izquierda3 = document.getElementById("izquierda3");

const panaCafe1 = "/product/PanaCafe/2.png";
const panaCafe2 = "/product/PanaCafe/1.png";

const panaRosa = document.getElementById("panaRosa");
const derecha4 = document.getElementById("derecha4");
const izquierda4 = document.getElementById("izquierda4");

const panaRosa1 = "/product/PanaRosa/2.png";
const panaRosa2 = "/product/PanaRosa/1.png";

const panaVerde = document.getElementById("panaVerde");
const derecha5 = document.getElementById("derecha5");
const izquierda5 = document.getElementById("izquierda5");

const panaVerde1 = "/product/PanaVerde/2.png";
const panaVerde2 = "/product/PanaVerde/1.png";

const BotaRecta = document.getElementById("Bota-recta");
const derecha6 = document.getElementById("derecha6");
const izquierda6 = document.getElementById("izquierda6");

const BotaRecta1 = "/product/Bota Recta/2.png";
const BotaRecta2 = "/product/Bota Recta/1.png";

const BotaRectaClaro = document.getElementById("Bota-recta1");
const derecha7 = document.getElementById("derecha7");
const izquierda7 = document.getElementById("izquierda7");

const BotaRectaClaro1 = "/product/Tela Rigida1/2.png";
const BotaRectaClaro2 = "/product/Tela Rigida1/1.png";

const BotaRectaOscuro = document.getElementById("Bota-recta2");
const derecha8 = document.getElementById("derecha8");
const izquierda8 = document.getElementById("izquierda8");

const BotaRectaOscuro1 = "/product/Tela Rigida2/2.png";
const BotaRectaOscuro2 = "/product/Tela Rigida2/1.png";


function cmabiarImg(derecha, izquierda, prenda1, prenda2, foto) {
    derecha.addEventListener('click', () => {
        foto.src = prenda1      
    })
    izquierda.addEventListener('click', () => {
        foto.src = prenda2
    })

}
cmabiarImg(derecha, izquierda, momCafe1, momCafe2, prendaCafe);
cmabiarImg(derecha1, izquierda1, momNegro1, momNegro2, prendaNegra);
cmabiarImg(derecha2, izquierda2, momBeige1, momBeige2, prendaBeige);
cmabiarImg(derecha3, izquierda3, panaCafe1, panaCafe2, panaCafe);
cmabiarImg(derecha4, izquierda4, panaRosa1, panaRosa2, panaRosa);
cmabiarImg(derecha5, izquierda5, panaVerde1, panaVerde2, panaVerde);
cmabiarImg(derecha6, izquierda6, BotaRecta1, BotaRecta2, BotaRecta);
cmabiarImg(derecha7, izquierda7, BotaRectaClaro1, BotaRectaClaro2, BotaRectaClaro);
cmabiarImg(derecha8, izquierda8, BotaRectaOscuro1, BotaRectaOscuro2, BotaRectaOscuro);
