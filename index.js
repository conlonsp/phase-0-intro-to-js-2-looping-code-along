function writeCards(names, event) {
    const arr = []
    for (let i = 0; i < names.length; i++) {
        arr.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
    }
    return arr
}

function countDown(int) {
    while (int >= 0) {
        console.log(int)
        int--
    }
}




































// function writeCards(name, event) {
//     const array = [];
//     for (let i = 0; i < name.length; i++) {
//         array.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`);
//     }
//     return array;
// }

// function countDown(count) {
//     let i = 10;
//     while (i >= 0) {
//         console.log(i--)
        
//     }
// }