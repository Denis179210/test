function findPairs(arr, eval) {
    let pairs = []
        arr.forEach((index) => {
            arr.forEach((compare) => {
                if(arr.indexOf(index) === arr.indexOf(compare)) {
                    return
                } else {
                    if((index + compare) === eval) {
                        if(
                            pairs.indexOf(`${index} : ${compare}`.split(' : ').reverse().join(' : ')) === -1 
                                        && 
                            pairs.indexOf(`${index} : ${compare}`) === -1 
                        ) {
                            pairs.push(`${index} : ${compare}`);
                        }
                    }
                }
            })
        })
    return pairs
}


let numbArray = [1, 2, 3, 4, 5, 6, 9, 12, 7, 10, 13, 11, 14, 15, 16, 17];

let amount = 21;

console.log(findPairs(numbArray, amount));
