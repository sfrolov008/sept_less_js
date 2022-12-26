let postUrl = new URL(location.href);
let postId = postUrl.searchParams.get("postId");
let content_post = document.querySelector('.content_post');
fetch('https://jsonplaceholder.typicode.com/posts/' + postId)
    .then(userPosts => userPosts.json())
    .then(posts => {

        let post_details = document.createElement('div');
        post_details.classList.add('post_details','block_template');
        content_post.appendChild(post_details);
        let post_block = document.createElement('div');
        post_block.classList.add('post_block');
        let post_title = document.createElement('h2');
        post_title.classList.add('post_title');
        let post_body = document.createElement('div');
        post_body.classList.add('post_body');
        post_block.append(post_title, post_body);
        post_details.appendChild(post_block);

        for (const post in posts) {
            let str_post_body = JSON.stringify(posts.body);
            let clear_post_body = str_post_body.replaceAll(/[\\"]/g, '');
            post_title.innerText = posts.title;
            post_body.innerText = clear_post_body;
        }

        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
            .then(postComments => postComments.json())
            .then(comments => {
                let title_comments = document.createElement('h2');
                title_comments.classList.add('title_comments');
                title_comments.innerText = 'Comments:';
                post_details.appendChild(title_comments);
                let comments_block = document.createElement('div');
                comments_block.classList.add('comments_block');
                post_details.appendChild(comments_block);

                for (const comment of comments) {
                    let comment_box = document.createElement('div');
                    comment_box.classList.add('comment_box');
                    let comment_title = document.createElement('h2');
                    comment_title.classList.add('comment_title');
                    let comment_email = document.createElement('div');
                    comment_email.classList.add('comment_email');
                    let comment_body = document.createElement('comment_body');
                    comment_body.classList.add('comment_body');
                    let str_comment_body = JSON.stringify(comment.body);
                    let clear_comment_body = str_comment_body.replaceAll(/[\\"]/g, '');
                    comment_title.innerText = comment.name;
                    comment_email.innerText = comment.email;
                    comment_body.innerText = clear_comment_body;
                    comment_box.append(comment_title, comment_email, comment_body);
                    comments_block.appendChild(comment_box);
                }
            });
    });



