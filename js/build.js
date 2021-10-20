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
        tr.dataset.userId = user.id;
        tbody.appendChild(tr);
    }
    return document.getElementsByTagName('table')[0].appendChild(tbody);
})
    .then(function (result) {
    document.querySelectorAll('tbody tr').forEach(function (item) {
        item.addEventListener('click', function (e) {
            document.getElementById('modalContainer').style.display = 'block';
            fetch('https://jsonplaceholder.typicode.com/todos')
                .then(function (response) { return response.json(); })
                .then(function (todos) {
                var modalTodos = document.querySelector('#modalContainer ul');
                for (var _i = 0, todos_1 = todos; _i < todos_1.length; _i++) {
                    var todo = todos_1[_i];
                    var tableRow = e.target;
                    if (todo.userId.toString() === tableRow.parentElement.dataset.userId.toString()) {
                        var li = document.createElement('li');
                        var todoTitle = document.createTextNode(todo.title);
                        li.appendChild(todoTitle);
                        modalTodos.appendChild(li);
                    }
                }
            })
                .catch(function (err) { console.log(err); });
        });
    });
})
    .catch(function (err) { console.log(err); });
window.onclick = function (e) {
    var modal = document.getElementById('modalContainer');
    if (e.target == modal) {
        modal.style.display = "none";
        document.getElementById('modalBody').innerHTML = '';
    }
};
