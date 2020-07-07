$(document).ready(function() {
    
    // Redirect to login-form page if username and password has not been entered
    if(localStorage.getItem('username') == null || localStorage.getItem('password') == null) {
		location.href = 'login-form.html';
	}
    
    // Variable to store data of the product to be displayed
    var product = JSON.parse(localStorage.getItem('product-data'));
    
    // Remove the current product data from localStorage
    localStorage.removeItem('product-data');
    
    // Display the image of the product
    var imgUrl = product.url;
    $('.product-img').append('<img src="' + imgUrl + '">')
    
    // Display the price and other details of the product
    $.each(product, function(key, val) {
        if(key != 'url') {
            if(key == 'price') {
                $('.product-details').append('<p>' + key.charAt(0).toUpperCase() + key.slice(1) + ': Rs.' + val);
            }
            else {
                $('.product-details').append('<p>' + key.charAt(0).toUpperCase() + key.slice(1) + ': ' + val);
            }
        }
    });
    
    // Redirect to cart page when cart link is clicked
    $('#cart').on('click', function() {
        location.href = 'cart.html';
    });
    
    // Remove username and password from localStorage and redirect to login-form page
    $('#logout').on('click', function() {
        localStorage.removeItem('username');
        localStorage.removeItem('password');
        location.href = 'login-form.html';
    });
    
    // Add to cart functionality
    $('button').on('click', function() {
        
        // Variables to store username and password
        user = localStorage.getItem('username');
        pwd = localStorage.getItem('password');
        
        /* Add the current item in localStorage if it is not already present 
        with key set as a string contaning username, password and name of
        the product to be added and make quantity of product equal to 1.
        If it is present already then just increase the quantity by 1 and
        increase the price accrodingly.
        Then redirect to the cart page */
        
        let keyForThisProduct = user + pwd + product.name;
        let newQuantity = 1;
        let totalPrice = product.price;
        
        if(localStorage.getItem(keyForThisProduct) != null){
            let productAlreaadyInCart = JSON.parse(localStorage.getItem(keyForThisProduct));
            
            newQuantity = productAlreaadyInCart.quantity + 1;
            totalPrice = product.price * newQuantity;
        }
        
        product.quantity = newQuantity;
        product.totalPrice = totalPrice;
        localStorage.setItem(keyForThisProduct, JSON.stringify(product));
        
        location.href = 'cart.html';
        
    });
});