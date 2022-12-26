let url = new URL(location.href);
let id = url.searchParams.get("id");

let content = document.querySelector('.content')
fetch('https://jsonplaceholder.typicode.com/users/' + id)
    .then(value => value.json())
    .then(user => {
        let title = document.createElement('h2')
        title.innerText = `${user.name}`;
        content.appendChild(title);

        for (const key in user) {
            let div = document.createElement('div');
            if (typeof user[key] !== 'object') {
                div.innerText = `${[key]}: ${user[key]}`;
            } else {
                div.innerText = `*${[key]}:`;
                for (const subkey in user[key]) {
                    let subDiv = document.createElement('div');
                    if (typeof user[key][subkey] !== 'object'){
                        subDiv.innerText = `**${[subkey]}: ${user[key][subkey]}`;
                    }else {
                        subDiv.innerText = `**${[subkey]}:`;
                        for (const subSubkey in user[key][subkey]){
                            let subSubDiv = document.createElement('div');
                            if (typeof user[key][subkey][subSubkey] !== 'object') {
                                subSubDiv.innerText = `***${[subSubkey]}:${user[key][subkey][subSubkey]}`
                            }
                            subDiv.appendChild(subSubDiv);
                        }
                    }
                    div.appendChild(subDiv);
                }
            }
            content.appendChild(div);
        }

    });
