let UserService = {
    init: function () {
        let token = localStorage.getItem("user");
        if (token) {
            window.location.replace("index.html");
        }
        $("#loginForm").on('submit', function (e) {
            e.preventDefault();
            let entity = {
                username: $("#username").val(),
                password: $("#password").val()
            };
            UserService.login(entity);
        });
    },
    
    login: function (user) {
        $.ajax({
            url: './users.json', 
            type: 'GET',
            dataType: 'json',
            success: function (data) {
                let users = data.users;
                let validUser = users.find(element => element.username === user.username && element.password === user.password);
                if (validUser) {
                    delete validUser.password;
                    localStorage.setItem("user", JSON.stringify(validUser));
                    window.location.replace("index.html");
                } else {
                    alert('Invalid credentials');
                }
            },
            error: function (xhr, status, error) {
                console.error('Error fetching data from file:', error);
            }
        });
    },
    
    logout: function () {
        localStorage.clear();
        window.location.replace("login.html");
    }
};