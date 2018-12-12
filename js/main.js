(function () {
    'use strict';

    const participantsContainer = document.getElementById('participants-container');
    const newName = document.getElementById('new-name');
    const randomPizza = document.getElementById('random-pizza');
    const pizzas = [
        {name: "Margarita", ingredients: "Tomat, ost"},
        {name: "Vesuvio", ingredients: "Skinka"},
        {name: "Capricciosa", ingredients: "Skinka, champinjoner"},
        {name: "Hawaii", ingredients: "Skinka, ananas"},
        {name: "Funghi", ingredients: "Champinjoner"},

        {name: "Bolognese", ingredients: "Köttfärs, lök"},
        {name: "Sisiljana", ingredients: "Sardeller, oliver, vitlök"},
        {name: "Altono", ingredients: "Tonfisk"},
        {name: "Rimini", ingredients: "Bacon, lök, ägg"},
        {name: "La Maffia", ingredients: "Bacon, lök, paprika"},

        {name: "Salami", ingredients: "Salami, paprika"},
        {name: "Bussola", ingredients: "Skinka, räkor"},
        {name: "Etná", ingredients: "Skinka, champinjoner, ananas"},
        {name: "Mamma mia", ingredients: "Skinka, champinjoner, räkor"},
        {name: "Tropicana", ingredients: "Skinka, ananas, banan, curry"},

        {name: "Calzone (inbakad)", ingredients: "Skinka"},
        {name: "Marinara", ingredients: "Räkor, musslor"},
        {name: "Vegetariana",
            ingredients: "Champinjoner, lök, paprika, oliver, sparris, kronärtskocka"},
        {name: "Gudafadern",
            ingredients: "Tonfisk, musslor, paprika (stark)"},
        {name: "Tre dogi", ingredients: "Skinka, räkor, tonfisk"},

        {name: "Neptuno", ingredients: "Räkor, tonfisk"},
        {name: "Bambino (inbakad)", ingredients: "Köttfärs, ananas"},
        {name: "Casablanca",
            ingredients: "Skinka, champinjoner, bacon, lök"},
        {name: "Pompeji",
            ingredients: "Skinka, champinjoner, bacon, lök, ägg"},
        {name: "Pizza hot",
            ingredients: "Köttfärs, paprika, feferoni, lök, tacosås (stark)"},

        {name: "Vampire", ingredients: "Champinjoner, köttfärs, lök, feferoni, salami"},
        {name: "Mexicana", ingredients: "Köttfärs, champinjoner, paprika (stark)"},
        {name: "Quattro stagion",
            ingredients: "Skinka, champinjoner, räkor, musslor"},
        {name: "Ciao ciao",
            ingredients: "Oxfilé, champinjoner, tomat, kronärtskocka, vitlök"},
        {name: "Fest pizza",
            ingredients: "Oxfilé, champinjoner, sparris, bearnaisesås"},

        {name: "Bergåsa",
            ingredients: "Oxfilé, champinjoner, paprika, curry, bearnaisesås (stark)"},
        {name: "Gorgonzola",
            ingredients: "Oxfilé, champinjoner, tomat, gorgonzola, oliver"},
        {name: "Lambada",
            ingredients: "Oxfilé, bacon, skinka, köttfärs, bearnaisesås"},
        {name: "Indiana", ingredients: "Oxfilé, tomat, banan, curry"},
        {name: "Mazzini", ingredients: "Oxfilé, färsk tomat, vitlöksost"},

        {name: "Kobani", ingredients: "Köttfärs, salami, jalapeño, paprika, tacokrydda"},
        {name: "Kebab pizza", ingredients: "Kebabkött, lök, tomat, feferoni, sallad, sås"},
        {name: "Gyros pizza", ingredients: "Gyroskött, lök, tomat, feferoni, sallad, sås"},
        {name: "Sverige special",
            ingredients: "Kebabkött, skinka, sås"},
        {name: "Vikingbåt (Halvinbakad)",
            ingredients: "Kebab eller gyros, champinjoner, lök, bearnaisesås"},

        {name: "Kebab calzone (inbakad)",
            ingredients: "Kebabkött, lök, sås"},
        {name: "Gyros calzone (inbakad)",
            ingredients: "Gyroskött, lök, sås"},
        {name: "Kyckling pizza",
            ingredients: "Kyckling, champinjoner, curry"},
        {name: "Bahamas",
            ingredients: "Kyckling, banan, jordnötter, curry"},

        {name: "Kockens",
            ingredients: "Skinka, champinjoner, ananas, lök, paprika, bacon, vitlök"},
        {name: "Fiskarens",
            ingredients: "Räkor, musslor, krabba, tonfisk"},
        {name: "Formaggio (inbakad)",
            ingredients: "Mozzarella, fetaost, gorgonzola, vitlöksost"},
        {name: "Calzone special",
            ingredients: "Skinka, champinjoner, lök, bacon, köttfärs, vitlök"},

        {name: "Ciao bella (Halvinbakad)",
            ingredients: "Champinjoner, lök, oxfilé vitlök"},
        {name: "Hawaii special", ingredients: "Oxfilé, champinjoner, gorgonzola, ananas, vitlök"},
        {name: "Husets pizza",
            ingredients: "Skinka, champinjoner, lök, paprika, salami, vitlök, gratinerad ost"},
        {name: "UFO (dubbel inbakad)",
            ingredients: "Skinka, champinjoner, räkor"},

        {name: "Shish kebab",
            ingredients: "Oxfilé, kyckling, champinjoner, lök, paprika, vitlök (stark)"},
        {name: "Favoriten",
            ingredients: "Lök, kebabkött, pommes, sås"},
        {name: "Halva/halva",
            ingredients: "Gyros & kebabkött, sallad, lök, tomat, feferoni, sås"},
        {name: "Herkules", ingredients: "Pepperonikorv, salami, lök, tomat, mozzarellaost"},

        {name: "Kebabtallrik", ingredients: "Kebab"},
        {name: "Gyrostallrik", ingredients: "Gyros"},
    ];

    newName.addEventListener("keyup", (event) => {
        if (event.code == "Enter" && event.srcElement.value != "") {
            const name = event.srcElement.value;

            let nameElement = document.createElement("p");

            nameElement.className = "name";
            nameElement.textContent = name;

            participantsContainer.appendChild(nameElement);

            event.srcElement.value = "";
        }
    });

    randomPizza.addEventListener("click", () => {
        let allNames = participantsContainer.getElementsByClassName("name");

        for (let i = 0; i < allNames.length; i++) {
            let currentName = allNames[i];
            let name = currentName.textContent;
            const nameEndIndex = currentName.textContent.indexOf(" - ");
            if (nameEndIndex !== -1) {
                name = currentName.textContent.slice(0, nameEndIndex);
            }

            currentName.textContent = name + " - " + getRandomPizza();
        }
    });

    function getRandomPizza() {
        let randomIndex = Math.floor(Math.random() * pizzas.length);

        return pizzas[randomIndex].name + " (" + pizzas[randomIndex].ingredients + ")";
    }
})();
