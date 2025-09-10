const userList = document.getElementById('ListadeUsuarios');
const searchInput = document.getElementById('Usuario');
let allUsers = [];

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        allUsers = users;
        renderUsers(users);
    });

function renderUsers(users) {
    userList.innerHTML = ""; 
    users.forEach(user => {
        const listItem = document.createElement('li');
        listItem.textContent = `${user.name} - ${user.email}`;

        listItem.addEventListener('click', () => {
            showUserDetails(user);
        });

        userList.appendChild(listItem);
    });
}

searchInput.addEventListener('keyup', () => {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredUsers = allUsers.filter(user =>
        user.name.toLowerCase().includes(searchTerm)
    );
    renderUsers(filteredUsers);
});

function showUserDetails(user) {
    const detailsDiv = document.createElement('div');
    detailsDiv.classList.add('detalle');
    detailsDiv.innerHTML = `
        <h2>${user.name}</h2>
        <p><strong>Usuario:</strong> ${user.username}</p>
        <p><strong>Email:</strong> ${user.email}</p>
        <p><strong>Teléfono:</strong> ${user.phone}</p>
        <p><strong>Compañía:</strong> ${user.company.name}</p>
    `;

    const oldDetails = document.querySelector('.detalle');
    if (oldDetails) oldDetails.remove();

    userList.insertAdjacentElement('afterend', detailsDiv);
}
