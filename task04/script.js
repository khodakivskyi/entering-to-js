let divs = document.querySelectorAll("div.table");

divs.forEach((element) => {
    let tds=element.querySelectorAll("td");

    tds.forEach((td, index) => {
        if((index+1)%2===0)
            td.classList.add("selected");
    })
})
