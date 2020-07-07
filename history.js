$(document).ready(function() {
    
    // Redirect to login-form page if username and password has not been entered
    if(localStorage.getItem('username') == null || localStorage.getItem('password') == null) {
		location.href = 'login-form.html';
	}
    
    // Variables to store username and password
    var user = localStorage.getItem('username');
    var pwd = localStorage.getItem('password');
    
    // Display all the products ordered till date
    $.each(localStorage, function(key, val) {
        if(key.startsWith('checkout' + user + pwd)) {
            let product = JSON.parse(val);
            let imgUrl = product.url;
            let name = product.name;
            let totalPrice = product.totalPrice;
            let quantity = product.quantity;
            
            let date = product.date;
            let time = product.time;
            
            $('.products').append('\
                <div class="products-grid text-center mt-2">\
                    <div class="m-2 h-100 border">\
                        <img src="' + imgUrl + '">\
                        <p>' + name + '</p>\
                        <p> Quantity: ' + quantity + '</p>\
                        <p>Rs. ' + totalPrice + '</p>\
                        <p>' + date + ' ' + time + '</p>\
                    </div>\
                </div>');
        }
    });
    
    // Redirect to home page to continue shopping
    $('button').on('click', () => {
        location.href = 'home.html';
    });
    
    // Remove username and password from localStorage and redirect to login-form page
    $('#logout').on('click', function() {
        localStorage.removeItem('username');
        localStorage.removeItem('password');
        location.href = 'login-form.html';
    });
});