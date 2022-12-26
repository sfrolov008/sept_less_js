let detailsUrl = new URL(location.href);
let id = detailsUrl.searchParams.get("id");
let content_details = document.querySelector('.content_details');

fetch('https://jsonplaceholder.typicode.com/users/' + id)
    .then(value => value.json())
    .then(user => {
        let user_details = document.createElement('div');
        user_details.classList.add('user_details', 'block_template');
        content_details.appendChild(user_details);
        let title_details = document.createElement('h2');
        title_details.classList.add('title_details');
        title_details.innerText = `${user.name}`;
        let details_list = document.createElement('ul');
        details_list.className = 'details_list'
        for (const [key, value] of Object.entries(user)) {
            let li = document.createElement('li')
            details_list.append(li);
            if (typeof value !== 'object') {
                li.innerText = `${key}: ${value}`;
            } else {
                li.innerText = `${key}:`;
                let sList = document.createElement('ul');
                sList.className = `${key}_list`;
                sList.classList.add('block_template','list_template');
                li.append(sList);
                for (const [skey, svalue] of Object.entries(value)) {
                    let sLi = document.createElement('li');
                    sList.append(sLi);
                    if (typeof svalue !== 'object') {
                        sLi.innerText = `${skey}: ${svalue}`;
                    } else {
                        let ssList = document.createElement('ul');
                        ssList.className = `${skey}_list`;
                        ssList.classList.add('block_template', 'list_template');
                        sLi.innerText = `${skey}:`;
                        sLi.append(ssList);
                        for (const [sskey, ssvalue] of Object.entries(svalue)) {
                            let ssLi = document.createElement('li');
                            ssList.appendChild(ssLi);
                            ssLi.innerText = `${sskey}: ${ssvalue}`;
                        }
                    }
                }
            }
        }
        let details_btn = document.createElement('div');
        details_btn.classList.add('details_btn', 'btn_template');
        let details_a = document.createElement('a');
        details_a.innerText = 'Post of current user'
        details_a.href = '#details_post';
        details_btn.appendChild(details_a);
        user_details.append(title_details, details_list, details_btn);

        function read_posts_title() {
            fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
                .then(pstvalue => pstvalue.json())
                .then(posts => {
                    let details_post = document.createElement('div');
                    details_post.classList.add('details_post', 'block_template');
                    details_post.id = 'details_post';
                    content_details.appendChild(details_post);
                    for (const post of posts) {
                        let post_card = document.createElement('div');
                        post_card.classList.add('post_card','block_template', 'card_template');
                        let post_title_card = document.createElement('div');
                        post_title_card.classList.add('post_title_card');
                        post_title_card.innerText = `${post.id}. ${post.title}`
                        let post_title_btn = document.createElement('div');
                        post_title_btn.classList.add('post_title_btn', 'btn_template');
                        let post_a = document.createElement('a');
                        post_a.innerText = 'to post';
                        post_a.href = 'post-details.html?postId=' + post.id;
                        post_title_btn.appendChild(post_a);
                        post_card.append(post_title_card, post_title_btn);
                        details_post.append(post_card);
                    }
                });
        }
        details_btn.addEventListener('click', read_posts_title, {once: true})
    });





