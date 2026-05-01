
/*Nastavení konstantního kurzu*/
const kurz = {
    CZK: 1,
    EUR: 0.04,
    USD: 0.049,
    PLN: 0.17
};

document.getElementById("prevodnik").addEventListener("submit", function(e) {
    e.preventDefault();

    try {
        let castka = parseFloat(document.getElementById("castka").value);
        let from = document.getElementById("from").value;
        let to = document.getElementById("to").value;

        if (isNaN(castka) || castka <= 0) {
            throw "Zadej platnou částku!";
        }

        let result = (castka / kurz[from]) * kurz[to];  /*Výpočet převodu*/

        document.getElementById("result").innerText =
            castka + " " + from + " = " + result.toFixed(2) + " " + to;

    } catch (error) {
        document.getElementById("result").innerText = error;
    } finally {
        console.log("Pokus o převod proběhl");
    }
});