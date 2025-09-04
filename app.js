const userList = document.getElementById('ListadeUsuarios');
const searchInput = document.getElementById('Usuario');

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        users.forEach(user => {
            const listItem = document.createElement('li');

            listItem.textContent = `${user.name} - ${user.email}`;

            userList.appendChild(listItem);
        });

        searchInput.addEventListener('keyup', () => {
            const searchTerm = searchInput.value.toLowerCase();
            const filteredUsers = users.filter(user =>
                user.name.toLowerCase().includes(searchTerm) // Filtrar usuarios cuyo nombre incluya el texto
            );
        });
    });