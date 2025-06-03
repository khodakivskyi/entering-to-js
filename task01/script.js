document.body.style.fontFamily= "Arial, sans-serif";

let paragraphs = document.querySelectorAll("p");

if (paragraphs.length >= 3) {
    paragraphs[0].style.color = "orange";
    paragraphs[0].style.backgroundColor = "yellow";
    paragraphs[0].style.fontSize = "16px";
    paragraphs[0].style.padding = "5px";
    paragraphs[0].style.textAlign = "center";

    paragraphs[1].style.color = "blue";
    paragraphs[1].style.backgroundColor = "lightblue";
    paragraphs[1].style.fontSize = "14px";
    paragraphs[1].style.padding = "5px";
    paragraphs[1].style.textAlign = "right";

    paragraphs[2].style.color = "red";
    paragraphs[2].style.backgroundColor = "pink";
    paragraphs[2].style.fontSize = "12px";
    paragraphs[2].style.padding = "5px";
    paragraphs[2].style.textAlign = "left";
}


let tds = document.querySelectorAll("td");
for (let i = 0; i < tds.length; i++) {
    if (i%2===0) {
        tds[i].className = "selected";
    }
}


