let par=document.querySelectorAll('p');

let charCounts=[], i=0;
par.forEach(element => {
    charCounts[i]=element.innerText.length;
    i++;
})
console.log(charCounts);

let arr = [20, 17, 4, -4, 10, -9, 13, 4, 12, 22, 13, 19, 1, 3];

let min=arr[0], max=arr[0], parni=0, nepar=0, dodat=0, vid=0, twochars=0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
    }
    if (arr[i] < min) {
        min = arr[i];
    }
    if(arr[i]%2===0){
        parni++;
    }
    else nepar++;
    if(arr[i]>0) dodat++;
    else if(arr[i]<0) vid++;
    if(arr[i]>=10||arr[i]<=-10) twochars++;
}
console.log(max, min, parni, nepar, dodat, vid, twochars);

function compareNumeric(a, b) {
    if (a > b) return 1;
    if (a === b) return 0;
    if (a < b) return -1;
}

arr.sort(compareNumeric);
console.log(arr);

let newarr= arr.reverse();
console.log(newarr);
