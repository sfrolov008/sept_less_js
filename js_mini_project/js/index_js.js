let content = document.querySelector('.content')
fetch('https://jsonplaceholder.typicode.com/users')
    .then(respones => respones.json())
    .then(users =>{
        for (const user of users) {
            let user_card = document.createElement('div');
            user_card.classList.add('user_card', 'block_template', 'card_template');
            let user_title = document.createElement('div');
            user_title.classList.add('user_title');
            user_title.innerText =`${user.id}. ${user.name}`;
            let user_btn = document.createElement('div');
            user_btn.classList.add('user_btn', 'btn_template');
            let a = document.createElement('a');
            a.innerText = 'Read more';
            a.href = 'user-details.html?id=' + user.id;
            user_btn.append(a);
            user_card.append(user_title, user_btn);
            content.appendChild(user_card);
        }
    });