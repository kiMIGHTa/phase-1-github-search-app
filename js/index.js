
 document.addEventListener('submit', (event)=>{
    event.preventDefault()
    let username = document.getElementById(`search`).value
    getUsers(username)
    getUserRepos()
    })


function getUsers(username){
     fetch(`https://api.github.com/search/users?q=${username}`,{
        headers: {
            'Accept': 'application/vnd.github.v3+json'
        }
    })
    .then(response =>response.json())
    .then(json=>displayUsers(json.items))
}

function displayUsers(users){
    console.log(users)
    users.forEach(element => {
        let character = document.createElement('li')
        character.innerHTML = `<li><img src=${element.avatar_url}>
                                <p>${element.login}</p></li>`
        document.querySelector(`#user-list`).appendChild(character)
    });

}

function getUserRepos(username){
    fetch(`https://api.github.com/search/users?q=${username}/repos`,{
       headers: {
           'Accept': 'application/vnd.github.v3+json'
       }
   })
   .then(response =>response.json())
   .then(data=>displayUserRepos(data))
}

function displayUserRepos(data){
    console.log(data)
}


