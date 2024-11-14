document.getElementById('fetchButton').addEventListener('click', fetchUserData);

function fetchUserData() {
    fetch('https://randomuser.me/api')
        .then(response => response.json())
        .then(data => {
            const user = data.results[0];
            displayUserInfo(user);
        })
        .catch(error => {
            console.error('Помилка при отриманні даних:', error);
            document.getElementById('userInfo').innerHTML = '<p>Сталася помилка при отриманні даних. Спробуйте пізніше.</p>';
        });
}

function displayUserInfo(user) {
    const userInfoDiv = document.getElementById('userInfo');
    userInfoDiv.innerHTML = `
        <div class="user-card">
            <img src="${user.picture.large}" alt="User Picture">
            <div class="user-details">
                <p><strong>Мобільний телефон:</strong> ${user.cell}</p>
                <p><strong>Місто:</strong> ${user.location.city}</p>
                <p><strong>Поштовий індекс:</strong> ${user.location.postcode}</p>
                <p><strong>Електронна пошта:</strong> ${user.email}</p>
            </div>
        </div>
    `;
}