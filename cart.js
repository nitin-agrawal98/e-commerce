$(document).ready(function(){
    
    // Redirect to login-form page if username and password has not been entered
    if(localStorage.getItem('username') == null || localStorage.getItem('password') == null) {
		location.assign('login-form.html');
	}
    
    // Variables to store username and password
    var user = localStorage.getItem('username');
    var pwd = localStorage.getItem('password');
    
    // Variable to store the current date and time
    var d = new Date();
    
    // Total price of all products in cart
        let total = 0;
    
    // Remove product from cart
    function removeProduct(name) {
        localStorage.removeItem(user + pwd + name);
        location.reload();
    }
    
    // Empty the cart by removing all the products
    function empty() {
        
        // Remove all the products from localStorage present in the cart
        $.each(localStorage, function(key, val) {
            if(key.startsWith(user + pwd)) {
                let product = JSON.parse(val);
                if(key.startsWith(user + pwd)) {
                    removeProduct(product.name);
                }
            }
            
        });
    }
    
    // To display the required details of products in the cart
    $.each(localStorage, function(key, val) {
        
        // Varible to control which infromation about the product is displayed
        let flag = true;
        
        // Setting all the required variables to display the information about products
        if(key.startsWith(user + pwd)) {
            let product = JSON.parse(val);
            let imgUrl, name, quantity, totalPrice;
            let title1, info1, title2, info2;
            
            $.each(product, function(key1, val1) {
                if(key1 == 'url') imgUrl = val1;
                else if(key1 == 'name') name = val1;
                else if(key1 == 'brand' || key1 == 'author') {
                    title1 = key1.charAt(0).toUpperCase() + key1.slice(1);
                    info1 = val1;
                } else if(key1 == 'totalPrice') {
                    totalPrice = val1;
                    total += totalPrice;
                } else if(key1 == 'quantity') quantity = val1;
                else if(flag && key1 != 'price') {
                    title2 = key1.charAt(0).toUpperCase() + key1.slice(1);
                    info2 = val1;
                    flag = false;
                }
            });
            
            // Display the required information with the help of above variables
            $('.container').prepend('\
                        <div class="row m-2 border border-dark">\
                            <div class="col-sm-* mr-auto"><button class="btn btn-warning cancel">&times</button></div>\
                            <div class="col-sm-* cart"><img src="' + imgUrl + '"></div>\
                            <div class="col-sm-* my-auto mx-auto">\
                                <p>' + name + '</p>\
                                <p>' + title1 + ': ' + info1 + '</p>\
                                <p>' + title2 + ': ' + info2  + '</p>\
                            </div>\
                            <div class="col-sm-* my-auto mx-auto">\
                                <p> Quantity:</p>\
                                <span><button id="dec">-</button> ' + quantity
                                    + ' <button id="inc">+</button></span>\
                            </div>\
                            <div class="col-sm-* my-auto ml-auto p-2"><p>Rs. ' + totalPrice + '</p></div>\
                        </div>');
            
            // Remove the product by clicking cancel button
            $('.cancel').on('click', () => removeProduct(name));
            $('#dec').on('click', () => {
                if(quantity > 0){
                    quantity --;
                    product.quantity = quantity;
                    product.totalPrice = product.price * quantity;
                    localStorage.setItem(user + pwd + name, JSON.stringify(product));
                    if(quantity == 0) removeProduct(name);
                    location.reload();
                }
            });
            $('#inc').on('click', () => {
                quantity ++;
                product.quantity = quantity;
                product.totalPrice = product.price * quantity;
                localStorage.setItem(user + pwd + name, JSON.stringify(product));
                location.reload();
            });
        }
    });
    
    $('#total p').append('Rs. ' + total);
    
    // Remove username and password from localStorage and redirect to login-form page
    $('#logout').on('click', function() {
        localStorage.removeItem('username');
        localStorage.removeItem('password');
        location.href = 'login-form.html';
    });
    
    // Redirect to home page to continue shopping
    $('#continue-shopping').on('click', function() {
            location.href = 'home.html';
        });
    
    // Empty cart when empty cart button is clicked
    $('#empty').on('click', empty);
    
    /* Redirect to order history page after storing the data of checked out product in locaStorage
        assuming user buys the product when he/she clicks on the checkout button  */
    $('#checkout').on('click', function() {
        $.each(localStorage, function(key, val) {
            if(key.startsWith(user + pwd)) {
                let product = JSON.parse(val);
                
                let dd = d.getDate().toString().padStart(2, '0');
                let mm = (d.getMonth()+1).toString().padStart(2, '0');
                let yyyy = d.getFullYear().toString();
                let hr = d.getHours().toString().padStart(2, '0');
                let min = d.getMinutes().toString().padStart(2, '0');
                let sec = d.getSeconds().toString().padStart(2, '0');
                
                // Adding the date and time of purchase of the product
                product.date = dd + '-' + mm + '-' + yyyy;
                product.time = hr + ':' + min + ':' + sec;
                
                /* Add the current item in localStorage with key set as a string contaning "checkout",
                    username, password, name, date and time of purchase of the product. 
                    Then redirect to the cart page  */
                localStorage.setItem('checkout' + user + pwd + product.name + 
                                     product.date + product.time, JSON.stringify(product));
                
            }
        });
        
        // Empty the cart
        empty();
        
        //Redirect to order history page
        location.href = 'history.html';
        
    });
    
    // Redirect to order history page when My orders button is clicked
    $('#order').on('click', function() {
        location.href = 'history.html';
    });
});