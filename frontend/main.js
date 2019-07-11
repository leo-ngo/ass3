
// api
var baseURL = "http://3.0.135.5:8080"

// auth

var username = sessionStorage.username
var password = sessionStorage.password
if (username === undefined && password === undefined) {
    username = localStorage.username
    password = localStorage.password
}
var code = window.btoa(`${username}:${password}`)

$('#logOut').click(() => {
    localStorage.removeItem("username")
    localStorage.removeItem("password")
    sessionStorage.removeItem("username")
    sessionStorage.removeItem("password")
})
