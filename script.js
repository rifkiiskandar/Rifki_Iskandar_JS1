// Contoh 1: If-Else
function contohIfElse() {
    var x = parseInt(document.getElementById("inputIfElse").value);
    if (x > 5) {
        document.getElementById("hasilIfElse").innerHTML = x + " lebih besar dari 5";
    } else {
        document.getElementById("hasilIfElse").innerHTML = x + " kurang dari atau sama dengan 5";
    }
}

// Contoh 2: Nested If
function contohNestedIf() {
    var x = parseInt(document.getElementById("inputNestedIfX").value);
    var y = parseInt(document.getElementById("inputNestedIfY").value);
    if (x > 5) {
        if (y > 2) {
            document.getElementById("hasilNestedIf").innerHTML = x + " lebih besar dari 5 dan " + y + " lebih besar dari 2";
        } else {
            document.getElementById("hasilNestedIf").innerHTML = x + " lebih besar dari 5 tetapi " + y + " tidak lebih besar dari 2";
        }
    } else {
        document.getElementById("hasilNestedIf").innerHTML = "x kurang dari atau sama dengan 5";
    }
}

// Contoh 3: Switch Case
function contohSwitchCase() {
    var day = document.getElementById("inputSwitchCase").value;
    switch (day) {
        case "Monday":
            document.getElementById("hasilSwitchCase").innerHTML = "Hari Senin";
            break;
        case "Tuesday":
            document.getElementById("hasilSwitchCase").innerHTML = "Hari Selasa";
            break;
        case "Wednesday":
            document.getElementById("hasilSwitchCase").innerHTML = "Hari Rabu";
            break;
        case "Thursday":
            document.getElementById("hasilSwitchCase").innerHTML = "Hari Kamis";
            break;
        case "Friday":
            document.getElementById("hasilSwitchCase").innerHTML = "Hari Jum'at";
            break;
        case "Saturday":
            document.getElementById("hasilSwitchCase").innerHTML = "Hari Sabtu";
            break;
        case "Sunday":
            document.getElementById("hasilSwitchCase").innerHTML = "Hari Minggu";
            break;
        default:
            document.getElementById("hasilSwitchCase").innerHTML = "Hari Lainnya";
    }
}

// Contoh 4: For Loop
function contohForLoop() {
    var text = "";
    var j = parseInt(document.getElementById("inputForLoop").value);
    for (var i = 0; i < j; i++) {
        text += "Angka: " + i + "<br>";
    }
    document.getElementById("hasilForLoop").innerHTML = text;
}

// Contoh 5: While Loop
function contohWhileLoop() {
    var text = "";
    var i = 0;
    var x = parseInt(document.getElementById("inputWhileLoop").value);
    while (i < x) {
        text += "Angka: " + i + "<br>";
        i++;
    }
    document.getElementById("hasilWhileLoop").innerHTML = text;
}

// Contoh 6: Do-While Loop
function contohDoWhileLoop() {
    var text = "";
    var i = 0;
    var z = parseInt(document.getElementById("inputDoWhileLoop").value);
    do {
        text += "Angka: " + i + "<br>";
        i++;
    } while (i < z);
    document.getElementById("hasilDoWhileLoop").innerHTML = text;
}

// Contoh 7: Function
function contohFunction() {
    var a = parseInt(document.getElementById("inputFunctionA").value);
    var b = parseInt(document.getElementById("inputFunctionB").value);
    function tambah(a, b) {
        return a + b;
    }
    var hasil = tambah(a, b);
    document.getElementById("hasilFunction").innerHTML = "Hasil penambahan: " + hasil;
}
