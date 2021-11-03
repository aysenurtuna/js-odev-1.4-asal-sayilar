
let asal = [2]

function asalSayilar() {
    let counter = 0
    for (let i = 3; i <= 1000; i++) {
        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                counter++
            }
        }
        if (counter==0) 
            asal.push(i)
        else
            counter = 0
    }
    console.log(...asal)
}

asalSayilar()