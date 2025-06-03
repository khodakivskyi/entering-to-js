let text = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt ea earum incidunt minima nihil. Blanditiis consectetur cumque debitis delectus dolor dolorem dolorum, eos laboriosam, modi nemo, quasi quos sint voluptatibus!`;

let text1=text[12]+text[6]+text[18]+text[25];
console.log(text1);

let text2=text.toLowerCase();
console.log(text2);

let index=text.indexOf("in")
while (index !== -1) {
    console.log(`Знайдено "in" на індексі: ${index}`);
    index=text.indexOf("in", index+1);
}
let words=text.split(" ");
console.log(words);

let textreversed=text.split('').reverse().join('');
console.log(textreversed);

function ucFirst(txt) {
    let newTxt = txt.charAt(0).toUpperCase() + txt.slice(1);
    return newTxt;
}

console.log(ucFirst('some text'));