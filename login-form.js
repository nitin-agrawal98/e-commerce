// Data of valid users
var users_data = {
    users: [
        {
            "username": "admin",
            "password": "admin"
        },
        {
            "username": "vineetks",
            "password": "vineetks"
        },
        {
            "username": "nitin",
            "password": "nitin"
        },
        {
            "username": "nikhil",
            "password": "nikhil"
        }
    ]
}

// Redirect to home page if username and password has been entered
if(localStorage.getItem('username') != null || localStorage.getItem('password') != null) {
    location.href = 'home.html';
}

var json_data = JSON.stringify(users_data);

var user_data = JSON.parse(json_data);
var userList = user_data.users;

// Validate form
function validateForm() {
    let name = document.forms['login-form']['username'].value;
    let pwd = document.forms['login-form']['password'].value;
    for (let i = 0; i < userList.length; i++) {
        if (name == userList[i].username && pwd == userList[i].password) {
            localStorage.setItem('username', name);
            localStorage.setItem('password', pwd);
            return true;
        }
    }
    document.getElementById('invalid-form').innerHTML = 'Invalid Username or Password';
    return false;
}