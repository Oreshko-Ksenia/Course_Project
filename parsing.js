

var xmlDoc;

if (typeof window.DOMParser != "undefined") {
    xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", "BD.xml", false);
    if (xmlhttp.overrideMimeType) {
        xmlhttp.overrideMimeType('text/xml');
    }
    xmlhttp.send();
    xmlDoc = xmlhttp.responseXML;
} else {
    xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
    xmlDoc.async = "false";
    xmlDoc.load("BD.xml");
}

const dishes = xmlDoc.getElementsByTagName("spectakl");
var str = "";


for (let i = 0; i < dishes.length; i++) {
    const dist = dishes[i];
    const zanrs =  dist.getElementsByTagName("zanr")[0].textContent;
    const vozrasts =  dist.getElementsByTagName("vozrast")[0].textContent;
    const cenas =  dist.getElementsByTagName("cena")[0].textContent;

    str += "<div class=\"spectakl1\"><p>" + zanrs + "<br>" + vozrasts + "<br>" + cenas + "</p></div></div>";
}

document.getElementById("xmlthisisass").innerHTML += str;


function Click(){
    alert("Ваш билет забронирован! Мы рады, что вы выбрали нас.");
}

const images2 = document.querySelectorAll('.pics2 img');

function handleMouseOver() {
  this.style.transform = 'scale(1.4)';
}

function handleMouseOut() {
  this.style.transform = 'scale(1)';
}

images2.forEach(image => {
  image.addEventListener('mouseover', handleMouseOver);
  image.addEventListener('mouseout', handleMouseOut);
});