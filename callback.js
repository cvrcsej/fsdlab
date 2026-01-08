function readUserId(callback) {
    setTimeout(function () {
        let userId = 101
        callback(userId)
    }, 1000)
}

function fetchUserDetails(userId, callback) {
    setTimeout(function () {
        let user = {
            id: userId,
            name: "Rahul",
            email: "Rahul@gmail.com"
        }
        callback(user)
    }, 1000)
}

function fetchUserOrders(user, callback) {
    setTimeout(function () {
        let orders = [
            { orderId: 1, product: "Laptop" },
            { orderId: 2, product: "Mobile" }
        ]
        callback(user, orders)
    }, 1000)
}

readUserId(function (userId) {
    console.log("User ID:", userId)

    fetchUserDetails(userId, function (user) {
        console.log("User Details:", user)

        fetchUserOrders(user, function (user, orders) {
            console.log("Order Details:", orders)
        })
    })
})