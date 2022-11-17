const numPrime = [];
const limit =1000;

for (let i= 1; i<= limit; i++){
    numPrime.push(i)
}

const main = numPrime.filter((params) => {
    for(let i=2; i < params; i++) {
        if(params % i === 0) {
            return false;
    }
    }
    return params !== 1? true : false 
})

var somPrime= 0;
for(var i=0; i< main.length; i++) {
    somPrime += main[i];
}

console.log(somPrime);