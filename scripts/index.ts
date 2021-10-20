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

            tbody.appendChild(tr);
        }
        return document.getElementsByTagName('table')[0].appendChild(tbody);
    })
    .catch(err => { console.log(err); });
