// Função para classificar o herói
function classificarHeroi(nome, xp) {
    let nivel;

    if (xp < 1000) {
        nivel = "Ferro";
    } else if (xp <= 2000) {
        nivel = "Bronze";
    } else if (xp <= 5000) {
        nivel = "Prata";
    } else if (xp <= 7000) {
        nivel = "Ouro";
    } else if (xp <= 8000) {
        nivel = "Platina";
    } else if (xp <= 9000) {
        nivel = "Ascendente";
    } else if (xp <= 10000) {
        nivel = "Imortal";
    } else {
        nivel = "Radiante";
    }

    console.log(`O Herói de nome ${nome} está no nível de ${nivel}`);
}

// Testando com diferentes heróis
classificarHeroi("Caveira Sombria", 7200);   // Ouro
classificarHeroi("Espectro Negro", 9500);     // Imortal
classificarHeroi("Corvo Assassino", 11000);    // Radiante
classificarHeroi("Bruxa Sombria", 500);   // Ferro

