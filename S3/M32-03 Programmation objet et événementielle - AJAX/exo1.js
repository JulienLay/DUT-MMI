let somDivPropre = (n) => {
    let divisible = []
    let somme = 0
    for(let i=1; i<n; i++) {
        if (n%i == 0) {
            divisible.push(i)
        }
    }

    for (let val of divisible) {
        somme += val
    }
    return somme
}

let premier = (n) => {
    return n%n == 0 && n%1 == 0
}

let parfait = (n) => {
    return somDivPropre(n) == n
}

let testParfait = () => {
    let tab = []
    for(let i=2; i<1000; i++) {
        if (parfait(i)) {
            tab.push(i)
        }
    }
    return tab
}

let sublime = (n) => {
    let divisible = []
    let somme = 0
    for(let i=1; i<=n; i++) {
        if (n%i == 0) {
            divisible.push(i)
        }
    }
    for(let val of divisible) {
        somme += val
    }
    console.log(divisible)
    return ((parfait(divisible.length)) && parfait(somme))
}

let testSublime = () => {
    let tab = []
    for(let i=2; i<1000; i++) {
        if (sublime(i)) {
            tab.push(i)
        }
    }
    return tab
}

console.log(somDivPropre(18))
console.log(premier(18))
console.log(parfait(6))
console.log(testParfait())
console.log(sublime(12))
console.log(testSublime())