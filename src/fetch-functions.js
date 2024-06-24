
const userUrl = 'https://jsonplaceholder.typicode.com/users'

export const checkResponseStatus = () => {
    let data = fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => {
            return {
                status: res.status,
                ok: res.ok,
                url: res.url
            }
        })
    return data
};

export const getUsers = () => {
    let data = fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => {
            return res.json()
        })
    return data
};

export const getUserPosts = (userId,maxNumPost=3) => {
    let data = fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
        .then(res => {
            return res.json()
        }).then(post => {
            return post.slice(0, maxNumPost)
        })
    return data
};

export const createNewUser = (newUserData) => {
    let options = {
        method: 'POST',
        header:{'Content-Type': 'applicatiion/json'} ,
        body:JSON.stringify(newUserData)

        
    }
    let data = fetch(` https://jsonplaceholder.typicode.com/users`,options)
    .then(res => {
        return res.json()
    }) 
return data 

}
