fetch('https://jsonplaceholder.typicode.com/users')
    .then(function (response) { return response.json(); })
    .then(function (users) {
    console.log(users);
})
    .catch(function (err) {
    console.log(err);
});
