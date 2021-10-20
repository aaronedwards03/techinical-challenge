fetch('https://jsonplaceholder.typicode.com/users')
    .then(function (response) { return response.json(); })
    .then(function (users) {
    var tbody = document.createElement('tbody');
    for (var _i = 0, users_1 = users; _i < users_1.length; _i++) {
        var user = users_1[_i];
        var tr = document.createElement('tr');
        var userAddress = user.address.street + ", " + user.address.city + " " + user.address.zipcode;
        var userInfo = [user.name, user.website, user.email, userAddress];
        for (var i = 0; i < userInfo.length; i++) {
            var td = document.createElement('td');
            var textNode = document.createTextNode(userInfo[i]);
            td.appendChild(textNode);
            tr.appendChild(td);
        }
        tbody.appendChild(tr);
    }
    return document.getElementsByTagName('table')[0].appendChild(tbody);
})
    .catch(function (err) { console.log(err); });
