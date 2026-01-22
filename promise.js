function getNumber() {
    return new Promise((resolve, reject) => {
        const num = 6
        resolve(num)
    })
}

function checkEven(num) {
    return new Promise((resolve, reject) => {
        if (num % 2 === 0) {
            resolve(num * 2)
        } else {
            reject("Number is odd, promise rejected")
        }
    })
}

getNumber()
    .then(result => {
        console.log("Number received:", result)
        return checkEven(result)
    })
    .then(finalResult => {
        console.log("After multiplying:", finalResult)
    })
    .catch(error => {
        console.log("Error:", error)
    })
