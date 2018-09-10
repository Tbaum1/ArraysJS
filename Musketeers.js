const musketeers = ["Athos", "Porthos", "Aramis"];

for(i = 0; i < musketeers.length; i++){
    console.log(musketeers[i]);
}

musketeers.push("D'Artagnon");

musketeers.forEach(function(element) {
    console.log(`${element}`);
});

musketeers.splice(2, 1);

for( i of musketeers){
    console.log(i);
}

//Sum Array
const values = [3,11,7,2,9,10];

let sum = 0;

for (var i = 0; i < values.length; i++) {
  sum += values[i]
}
console.log(sum);

//Array Maximum

let temp = 0;
for(i = 0; i < values.length; i++){
    if(values[i] > temp){
        temp = values[i];
    }
}
;
console.log(temp);