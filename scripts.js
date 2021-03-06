function wp() {
    if (localStorage.wallpaper === undefined) {
        var datum = new Date();
        var dag = new Array(7);
        dag[0] = "'https://storage.googleapis.com/chromeos-wallpaper-public/20130514-011007_trey-ratcliff-the-road_high_resolution.jpg'";
        dag[1] = "'https://storage.googleapis.com/chromeos-wallpaper-public/20130514-013335_Trey%20Ratcliff%20-%20OTW%20to%20Glen_high_resolution.jpg'";
        dag[2] = "'https://storage.googleapis.com/chromeos-wallpaper-public/20130514-013029_trey-ratcliff-bridge-oshir_high_resolution.jpg'";
        dag[3] = "'https://storage.googleapis.com/chromeos-wallpaper-public/20130206-212548_image%20(20)_high_resolution.jpg'";
        dag[4] = "'https://storage.googleapis.com/chromeos-wallpaper-public/20130206-212207_image%20(13)_high_resolution.jpg'";
        dag[5] = "'https://storage.googleapis.com/chromeos-wallpaper-public/20130206-212013_Tokyo%20Smog_high_resolution.jpg'";
        dag[6] = "'https://storage.googleapis.com/chromeos-wallpaper-public/20120827-185431_2-landscape5_high_resolution.jpg'";

        var n = dag[datum.getDay()];
        var burl = "url(" + n + ") no-repeat center/cover fixed";
        document.getElementById("iotd").style.background = burl;
    } else if (localStorage.wallpaper !== undefined) {
        document.getElementById("iotd").style.background = "url(" + localStorage.wallpaper + ") no-repeat center/cover fixed";
    }
}

function clock() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('clock').innerHTML =
        h + ":" + m + ":" + s;
    var t = setTimeout(clock, 500);
}

function checkTime(i) {
    if (i < 10) {
        i = "0" + i
    }
    return i;
}

function hex2rgb(hex, opacity) {
    var h = hex.replace('#', '');
    h = h.match(new RegExp('(.{' + h.length / 3 + '})', 'g'));

    for (var i = 0; i < h.length; i++)
        h[i] = parseInt(h[i].length == 1 ? h[i] + h[i] : h[i], 16);

    if (typeof opacity != 'undefined') h.push(opacity);

    return 'rgba(' + h.join(',');
}

function hello() {
    document.getElementById('hello').innerHTML =
        "Hello" + ", " + localStorage.name;
    window.setTimeout(hallo, 3000);
}

function hallo() {
    document.getElementById('hello').innerHTML =
        "Hallo" + ", " + localStorage.name;
    window.setTimeout(czesc, 3000);
}

function czesc() {
    document.getElementById('hello').innerHTML =
        "Cześć" + ", " + localStorage.name;
    window.setTimeout(halla, 3000);
}

function halla() {
    document.getElementById('hello').innerHTML =
        "Hallå" + ", " + localStorage.name;
    window.setTimeout(koni, 3000);
}

function koni() {
    document.getElementById('hello').innerHTML =
        "こんにちは" + ", " + localStorage.name;
    window.setTimeout(nihao, 3000);
}

function nihao() {
    document.getElementById('hello').innerHTML =
        "你好" + ", " + localStorage.name;
    window.setTimeout(merhaba, 3000);
}

function merhaba() {
    document.getElementById('hello').innerHTML =
        "Merhaba" + ", " + localStorage.name;
    window.setTimeout(marhabaan, 3000);
}

function marhabaan() {
    document.getElementById('hello').innerHTML =
        "مرحبا" + ", " + localStorage.name;
    window.setTimeout(bonjour, 3000);
}

function bonjour() {
    document.getElementById('hello').innerHTML =
        "Bonjour" + ", " + localStorage.name;
    window.setTimeout(zdravo, 3000);
}

function zdravo() {
    document.getElementById('hello').innerHTML =
        "Zdravo" + ", " + localStorage.name;
    window.setTimeout(hodi, 3000);
}

function hodi() {
    document.getElementById('hello').innerHTML =
        "Hodi" + ", " + localStorage.name;
    window.setTimeout(hola, 3000);
}

function hola() {
    document.getElementById('hello').innerHTML =
        "¡Hola" + ", " + localStorage.name;
    window.setTimeout(perz, 3000);
}

function perz() {
    document.getElementById('hello').innerHTML =
        "سلام" + ", " + localStorage.name;
    window.setTimeout(hello, 3000);
}

function savenameascookie() {
    name = document.getElementById("nameinput").value;
    localStorage.name = name;
}

function savewallpaperascookie() {
    wallpaper = document.getElementById("wallpaperinput").value;
    localStorage.wallpaper = wallpaper;
}

function removecustwpp() {
    localStorage.removeItem("wallpaper");
}

function appcolor() {
    var cpickhex = document.getElementById("cpicker").value;
    var cpickrgb = hex2rgb(cpickhex);
    localStorage.cpickrgbmenubar = cpickrgb + ", 0.6)";
    localStorage.cpickrgbtodobutton = cpickrgb + ", 0.3)";
    localStorage.cpickrgbtodosettings = cpickrgb + ", 0.9)";
    document.getElementById("settings").classList.add("notransition");
    document.getElementById("todomenu").classList.add("notransition");
}

function remcolor() {
    localStorage.removeItem("cpickrgbmenubar");
}

function loadcolor() {
    if (localStorage.cpickrgbmenubar === undefined) {
        document.getElementById("menubar").style.backgroundColor = "rgba(50, 50, 50, 0.6)";
	document.getElementById("todobutton").style.backgroundColor = "rgba(200, 200, 200, 0.3)";
	document.getElementById("todomenu").style.backgroundColor = "rgba(50, 50, 50, 0.9)";
	document.getElementById("settings").style.backgroundColor = "rgba(50, 50, 50, 0.9)";

    } else if (localStorage.cpickrgbmenubar !== undefined) {
        document.getElementById("menubar").style.backgroundColor = localStorage.cpickrgbmenubar;
        document.getElementById("todobutton").style.backgroundColor = localStorage.cpickrgbtodobutton;
	document.getElementById("todomenu").style.backgroundColor = localStorage.cpickrgbtodosettings;
	document.getElementById("settings").style.backgroundColor = localStorage.cpickrgbtodosettings;
    }
}
document.addEventListener('DOMContentLoaded', function() {
    clock(), hello(), wp(), loadcolor();
    document.getElementById("openbtn").addEventListener('click', function() {
        document.getElementById("settings").style.width = "300px";
        document.getElementById("settings").style.padding = "0 10px 0 0";
        document.getElementById("close").style.width = "100%";
    });
    document.getElementById("todobutton").addEventListener('click', function() {
        document.getElementById("todomenu").style.maxHeight = "9999px";
        document.getElementById("todomenu").style.padding = "5px 5px 0px 5px";
	document.getElementById("closetodobutton").style.visibility = "visible";
    });
    document.getElementById("close").addEventListener('click', function() {
        document.getElementById("settings").style.width = "0";
        document.getElementById("settings").style.padding = "0 0 0 0";
        document.getElementById("close").style.width = "0";
	document.getElementById("settings").offsetHeight;
	document.getElementById("settings").classList.remove("notransition")
	document.getElementById("todomenu").offsetHeight;
	document.getElementById("todomenu").classList.remove("notransition")
    });
    document.getElementById("closetodobutton").addEventListener('click', function() {
        document.getElementById("todomenu").style.maxHeight = "0px";
        document.getElementById("todomenu").style.padding = "0px 5px 0px 5px";
	document.getElementById("closetodobutton").style.visibility = "hidden";
    });
    var snc = document.getElementById('snc');
    snc.addEventListener('click', function() {
        savenameascookie();
    });
    var appwpp = document.getElementById('appwpp');
    appwpp.addEventListener('click', function() {
        savewallpaperascookie(), wp();
    });
    var remwpp = document.getElementById('remwpp');
    remwpp.addEventListener('click', function() {
        removecustwpp(), wp();
    });
    var remcel = document.getElementById('remcolor');
    remcel.addEventListener('click', function() {
        remcolor(), loadcolor();
    });
    document.getElementById('nameinput').onkeydown = namechar;
    document.getElementById('wallpaperinput').onkeydown = wppchar;
    document.getElementById('cpicker').addEventListener("input", function() {
        appcolor(), loadcolor();
    });
});

function namechar(event) {
    var char = event.keyCode;
    if (char == 13) {
        savenameascookie();
    }
}

function wppchar(event) {
    var char = event.keyCode;
    if (char == 13) {
        savewallpaperascookie(), wp();
    }
}
