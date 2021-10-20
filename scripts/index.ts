fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => { return response.json(); })
    .then(users => {
        let tbody = document.createElement('tbody');
        for (let user of users) {
            let tr = document.createElement('tr');
            let userAddress = `${user.address.street}, ${user.address.city} ${user.address.zipcode}`;
            let userInfo = [user.name, user.website, user.email, userAddress];

            for (let i = 0; i < userInfo.length; i++) {
                let td = document.createElement('td');
                let textNode = document.createTextNode(userInfo[i]);
                td.appendChild(textNode);
                tr.appendChild(td);
            }
            tr.dataset.userId = user.id;
            tbody.appendChild(tr);
        }
        return document.getElementsByTagName('table')[0].appendChild(tbody);
    })
    .then(result => {
        document.querySelectorAll('tbody tr').forEach(item => {
            item.addEventListener('click', e => {
                document.getElementById('modalContainer').style.display = 'block';
                fetch('https://jsonplaceholder.typicode.com/todos')
                    .then(response => { return response.json(); })
                    .then(todos => {
                        let modalTodos = document.querySelector('#modalContainer ul');
                        for (let todo of todos) {
                            const tableRow = e.target as HTMLElement;
                            if (todo.userId.toString() === tableRow.parentElement.dataset.userId.toString()) {
                                let li = document.createElement('li');
                                let todoTitle = document.createTextNode(todo.title);
                                li.appendChild(todoTitle);
                                modalTodos.appendChild(li);
                            }
                        }
                    })
                    .catch(err => { console.log(err); })
            });
        });
    })
    .catch(err => { console.log(err); });

window.onclick = e => {
    let modal = document.getElementById('modalContainer');
    if (e.target == modal) {
        modal.style.display = "none";
        document.getElementById('modalBody').innerHTML = '';
    }
}