$(document).ready(function() {
    // Data in json format of varios products
	var json_data = {
   "electronics":  [
      {
         "url":  "https://images-na.ssl-images-amazon.com/images/I/71gEUnI48qL._SL1500_.jpg",
         "name":  "1 Ton 3 Star Inverter Split AC",
         "brand":  "Carrier",
         "price":  31699,
         "color":  "White",
         "warranty":  "1 year on product, 1 year on condenser, 10 years on compressor",
         "refrigerant": "R410A. No ozone depletion potential"
      },
      {
         "url": "https://images-na.ssl-images-amazon.com/images/I/516J61FQajL._SL1500_.jpg",
         "name": "1.8 Ton 4 Star Inverter Split AC",
         "brand": "Daikin",
         "price": 50999,
         "color": "White",
         "warranty": "1 Year on Product, 1 Year on Condenser, 10 Years on Compressor",
         "refrigerant": "R32. No ozone depletion potential"
      },
      {
         "url": "https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/OnePlus/8series/post_launch/Landing_page/8/pc/Desktop_01.png",
         "name": "OnePLus 8 5G",
         "brand": "OnePlus",
         "price": 49999,
         "color": "Interstellar Glow",
         "warranty": "1 year on mobile, 6 months on accessories",
         "memory": "8+128 GB",
         "battery": "4300 mAh",
         "rear-camera": "Triple Camera:  48MP+16MP+2MP",
         "front-camera": "16MP"
      },
      {
         "url": "https://images-na.ssl-images-amazon.com/images/I/71eq%2Bo0JBlL._SX679_.jpg",
         "name": "Redmi Note 8 Pro",
         "brand": "Redmi",
         "price": 15999,
         "color": "Shadow Black",
         "warranty": "1 yean on mobile, 6 months on accessories",
         "memory": "6+64GB",
         "battery": "4500 mAh",
         "rear-camera": "Quad Camera:  64MP+8MP+2MP+2MP",
         "front-camera": "20MP"
      },
      {
         "url": "https://images-na.ssl-images-amazon.com/images/I/81qVoEhymIL._SL1500_.jpg",
         "name": "Samsung Galaxy A51",
         "brand": "Samsung",
         "price": 25250,
         "color": "Blue",
         "warranty": "1 year manufacturer warranty, 6 months in accessories",
         "memory": "6+128GB",
         "battery": "4000 mAh",
         "rear-camera": "Quad Camera:  48MP+12MP+5MP+5MP",
         "front-camera": "32MP"
      },
      {
         "url": "https://images-na.ssl-images-amazon.com/images/I/61DWru8Y9NL._SL1500_.jpg",
         "name": "Haier 195 L 4 Star Direct-Cool Single-Door Refrigerator",
         "brand": "Haier",
         "price": 12490,
         "color": "Dazzle Steel",
         "warranty": "10 years on compressor, 1 year on product",
         "refrigerant": "R600a that has low Global Warming Potential"
      },
      {
         "url": "https://images-na.ssl-images-amazon.com/images/I/71vYqKHpkoL._SL1500_.jpg",
         "name": "Samsung 198 L 5 Star Inverter Direct Cool Single Door Refrigerator",
         "brand": "Samsung",
         "price": 17490,
         "color": "Camellia Blue",
         "warranty": "10 years on compressor, 1 year on product",
         "refrigerant": "R600a that has low Global Warming Potential"
      },
      {
         "url": "https://images-na.ssl-images-amazon.com/images/I/71sBGR6LZhL._SL1500_.jpg",
         "name": "Mi TV 4A PRO 80 cm (32 inches) HD Ready Android LED TV",
         "brand": "Xiaomi",
         "price": 12499,
         "resolution": "1366x768 pixels",
         "operating system": "Official Android",
         "warranty": "1 year on product, 1 year extra on panel"
      }
   ],
   "books": [
      {
         "url": "https://m.media-amazon.com/images/I/71JZ0neAP1L._AC_UY327_QL65_.jpg",
         "name": "The Blue Umbrella",
         "author": "Ruskin Bond",
         "price": 72,
         "category": "Fantasy & Science Fiction"
      },
      {
         "url": "https://m.media-amazon.com/images/I/91JOoydaScL._AC_UY327_QL65_.jpg",
         "name": "Carve the Mark",
         "author": "Veronica Roth",
         "price": 253,
         "category": "Fantasy & Science Fiction"
      },
      {
         "url": "https://images-na.ssl-images-amazon.com/images/I/51wbVQTpTgL._SX339_BO1,204,203,200_.jpg",
         "name": "Wings of Fire:  An Autobiography of Abdul Kalam",
         "author": "A.P.J. Abdul Kalam",
         "price": 342,
         "category": "Autobiography"
      },
      {
         "url": "https://images-na.ssl-images-amazon.com/images/I/512aq+FfOPL._SX321_BO1,204,203,200_.jpg",
         "name": " Mahatma Gandhi Autobiography:  The Story Of My Experiments With Truth",
         "author": "Mahatma Gandhi",
         "price": 989,
         "category": "Autobiography"
      },
      {
         "url": "https://images-na.ssl-images-amazon.com/images/I/510uIcLWISL._SX327_BO1,204,203,200_.jpg",
         "name": "Angels and Demons",
         "author": "Dan Brown",
         "price": 1750,
         "category": "Action & Adventure"
      },
      {
         "url": "https://images-na.ssl-images-amazon.com/images/I/512T9Qro-jL._SX308_BO1,204,203,200_.jpg",
         "name": "Inferno",
         "author": "Dan Brown",
         "price": 200,
         "category": "Action & Adventure"
      },
      {
         "url": "https://images-na.ssl-images-amazon.com/images/I/516JQ8yTfcL._SX304_BO1,204,203,200_.jpg",
         "name": "BHAGAVAD GITA as it is",
         "author": "His Divine Grace A.C. Bhaktivedanta Swami Prabhupada",
         "price": 223,
         "category": "Religious & Spirituality"
      },
      {
         "url": "https://m.media-amazon.com/images/I/814L+vq01mL._AC_UY327_QL65_.jpg",
         "name": "Ikigai:  The Japanese secret to a long and happy life",
         "author": "Héctor García and Francesc Miralles",
         "price": 395,
         "category": "Religious & Spirituality"
      }
   ],
   "sports": [
      {
         "url": "https://images-na.ssl-images-amazon.com/images/I/71a2fOpCPzL._SL1500_.jpg",
         "name": "Yonex Nanoray Light 18i Graphite Badminton Racquet",
         "brand": "Yonex",
         "price": 1649,
         "weight": "77gm",
         "frame material": "Carbon Graphite",
         "shaft material": "Carbon Graphite",
         "tension": "30lbs"
      },
      {
         "url": "https://images-na.ssl-images-amazon.com/images/I/41Jc7itifML.jpg",
         "name": "MRF Hunter plus Kashmir Willow Cricket bat",
         "brand": "MRF",
         "price": 1049,
         "size": "Full Size SH",
         "desciption": "Light weight short handle bat ideally suited for young aspiring cricketers"
      },
      {
         "url": "https://images-na.ssl-images-amazon.com/images/I/71oDgfRJJML._SL1200_.jpg",
         "name": "MRF ABD 17 cricket bag",
         "brand": "MRF",
         "price": 2610,
         "description": "Molded handle for easy pulling and lifting"
      },
      {
         "url": "https://images-na.ssl-images-amazon.com/images/I/715DtOHh94L._UL1500_.jpg",
         "name": "Adidas Men\"s Throb M Running Shoes",
         "brand": "Adidas",
         "price": 2449,
         "warranty": "90 days",
         "material": "Synthetic",
         "description": "Lace-Up and Round-Toe"
      },
      {
         "url": "https://images-na.ssl-images-amazon.com/images/I/717oEiM5LKL._UX675_.jpg",
         "name": "Adidas Men\"s Argo Trek 19 Trekking Shoes",
         "brand": "Adidas",
         "price": 2199,
         "warranty": "90 days",
         "material": "Synthetic",
         "description": "Lace-Up and Round-Toe"
      },
      {
         "url": "https://images-na.ssl-images-amazon.com/images/I/711ogN-dvhL._SL1500_.jpg",
         "name": "Reebok RARP-11081BL Skipping Rope",
         "brand": "Reebok",
         "price": 600,
         "color": "Blue",
         "length": "300 cm"
      },
      {
         "url": "https://images-na.ssl-images-amazon.com/images/I/41WM5vsR7xL._SL1000_.jpg",
         "name": "REEBOK Studio Yoga MAT 4MM ",
         "brand": "Reebok",
         "price": 1879,
         "color": "Black",
         "description": "Offers traction for all Yoga poses and prevents slipping"
      }
   ],
   "clothing": [
      {
         "url": "https://images-na.ssl-images-amazon.com/images/I/81G1usCtXcL._UL1500_.jpg",
         "name": "Adidas Men\"s Plain Regular Fit Polo",
         "brand": "Adidas",
         "price": 699,
         "color": "Yellow",
         "care instructions": "Machine Wash"
      },
      {
         "url": "https://images-na.ssl-images-amazon.com/images/I/81dt1UlzXAL._UX679_.jpg",
         "name": "Adidas Boy\"s Regular fit T-Shirt",
         "brand": "Adidas",
         "price": 899,
         "color": "White",
         "care instructions": "Machine Wash"
      },
      {
         "url": "https://images-na.ssl-images-amazon.com/images/I/71tXvb35LKL._UL1500_.jpg",
         "name": "Monte Carlo White Coloured Boys Polyester t-Shirt",
         "brand": "Monte Carlo",
         "price": 549,
         "color": "White",
         "care instructions": "Machine Wash"
      },
      {
         "url": "https://images-na.ssl-images-amazon.com/images/I/61ZTJdOVigL._UL1500_.jpg",
         "name": "Monte Carlo Boys Printed Regular Fit Orange Coloured Cotton Blend T-Shirt",
         "brand": "Monte Carlo",
         "price": 549,
         "color": "Red",
         "fabric": "Cotton Blend",
         "care instructions": "Machine Wash"
      },
      {
         "url": "https://images-na.ssl-images-amazon.com/images/I/910dW-z%2B9WL._UL1500_.jpg",
         "name": "Puma Boy\"s Plain Regular fit T-Shirt",
         "brand": "Puma",
         "price": 1259,
         "color": "Royal-White-Navy",
         "care instructions": "Machine Wash"
      },
      {
         "url": "https://images-na.ssl-images-amazon.com/images/I/71vQiZYcuKL._UL1500_.jpg",
         "name": "Puma Men\"s Synthetic Shorts",
         "brand": "Puma",
         "price": 764,
         "color": "Black",
         "care instructions": "Machine Wash"
      },
      {
         "url": "https://images-na.ssl-images-amazon.com/images/I/81WMCS4-ASL._UL1500_.jpg",
         "name": "Reebok Men\"s Synthetic Shorts",
         "brand": "Reebok",
         "price": 649,
         "color": "Grey",
         "care instructions": "Machine Wash"
      },
      {
         "url": "https://images-na.ssl-images-amazon.com/images/I/71Ce7ndCDgL._UL1500_.jpg",
         "name": "Reebok Men\"s Synthetic Track Pants",
         "brand": "Reebok",
         "price": 1249,
         "color": "White",
         "care instructions": "Machine Wash"
      }
   ]
};
    // Remove functionality of sticky top for small and medium screen devices
    var width = screen.width;
    if(width<600) {
        $('nav').removeClass('sticky-top');
    }
	
    // Variable to store data of all products
	var products_data = JSON.parse(JSON.stringify({json_data})).json_data;
	
    // Redirect to login-form page if username and password has not been entered
	if(localStorage.getItem('username') == null || localStorage.getItem('password') == null) {
		location.href = 'login-form.html';
	}
	else home();
    
    // Empty the prodcut list displayed on home page
	function empty_product_grid() {
        $('.products').empty();
		$('form[name="brand"]').empty();
        $('form[name="price"]').empty();
		$('nav ul li').removeClass('active');
	}
    
    // Redirect to the single product view
    function openProduct(product) {
        
        // If product-data has not been saved then save the data of the product to be viewed
        if(localStorage.getItem('product-data') == null) {
            localStorage.setItem('product-data', JSON.stringify(product));
        }
        location.href = 'product.html';
    }
    
    // Display the product on home page
	function displayProduct(product) {
		let imgUrl = product.url;
		let name = product.name;
		let price = product.price;
		$('.products').append('\
			<div class="products-grid text-center mt-2">\
				<div class="m-2 h-100 border">\
					<img src="' + imgUrl + '">\
					<br><p>' + name + '</p>\
					<p>Rs. ' + price + '</p>\
				</div>\
			</div>');
        $('.products-grid div').on( {
            click: function() {openProduct(product);},
            mouseover: function() {$(this).addClass('shadow');},
            mouseout: function() {$(this).removeClass('shadow');}
        });
	}
    
    // Display grid of all products in specified category at home page
	function displayProducts(category) {
		$.each(category, function(index, product) {
			displayProduct(product);
		});
	}
    
    // Check if the price of product in the required range
    function validPrice(product_price, checked_price) {
        if(checked_price == '0-499' && product_price < 500) return true;
        else if(checked_price == '500-999' && product_price >= 500 && product_price < 1000) return true;
        else if(checked_price == '1000-2999' && product_price >= 1000 && product_price < 3000) return true;
        else if(checked_price == 'Over 3000' && product_price >= 3000) return true;
        return false;
    }
    
    // Filtering according to prices when home category is active
    function filteringAtHome() {
        let checked_prices = $('.price-filter input:checked');
        $('.products').empty();
        if(checked_prices.length == 0) {
            home();
        }
        else {
            $.each(checked_prices, function(index, val) {
                let price = val.labels[0].innerText;
                $.each(products_data, function(index1, category) {
                    $.each(category, function(index2, product) {
                        if(validPrice(product.price, price)) displayProduct(product);
                    });
                });
            });
        }
    }
    
    // Filter by brand and price for electronics, sports and clothing categories
	function filterByBrandAndPrice() {
		let checked_brands = $('.brand-filter input:checked');
        let checked_prices = $('.price-filter input:checked');
		let category = $('li.active')[0].innerText.toLowerCase();
        $('.products').empty();
		if(checked_brands.length == 0 && checked_prices.length == 0) {
			displayProducts(products_data[category]);
		} else if(checked_brands.length > 0 && checked_prices.length > 0) {
            $.each(checked_brands, function(index, val) {
                let brand = val.labels[0].innerText;
                $.each(checked_prices, function(index1, val1) {
                    let price = val1.labels[0].innerText;
                    $.each(products_data[category], function(index2, product) {
                        if(product.brand == brand && validPrice(product.price, price) == true) {
                            displayProduct(product);
                        }
                    });
                });
            });
        } else if(checked_brands.length > 0) {
			$.each(checked_brands, function(index, val) {
				let brand = val.labels[0].innerText;
				$.each(products_data[category], function(index1, product) {
					if(product.brand == brand) displayProduct(product);
				});
			});
		} else {
            $.each(checked_prices, function(index, val) {
                let price = val.labels[0].innerText;
                $.each(products_data[category], function(index1, product) {
                    if(validPrice(product.price, price)) displayProduct(product);
                });
            });
        }
	}
    
    // Display the brands of products of the specific category
	function displayBrand(category) {
		$('form[name="brand"]').append('\
            <div class="form-check bg-primary border border-dark">\
                <label class="form-check-label p-2">Brand</label>\
            </div>');
		let unique_brand = {};
		$.each(category, function(index, product) {
			let brand = product.brand;
			if(unique_brand[brand] == undefined) unique_brand[brand] = true;
		});
		$.each(unique_brand, function(brand, val) {
			$('form[name="brand"]').append('\
				<div class="form-check border border-dark">\
					<label class="form-check-label pl-2 brand-filter">\
						<input type="checkbox" class="form-check-input">' + brand +
					'</label>\
				</div>')
		});
		$('.brand-filter').on('change', filterByBrandAndPrice);
	}
    
    // Filter by category and price for books category
	function filterByCategoryAndPrice() {
		let checked_categories = $('.category-filter input:checked');
        let checked_prices = $('.price-filter input:checked');
		let category = $('li.active')[0].innerText.toLowerCase();
        $('.products').empty();
		if(checked_categories.length == 0 && checked_prices.length == 0) {
			displayProducts(products_data.books);
		} else if(checked_categories.length > 0 && checked_prices.length > 0) {
            $.each(checked_categories, function(index, val) {
                let category = val.labels[0].innerText;
                $.each(checked_prices, function(index1, val1) {
                    let price = val1.labels[0].innerText;
                    $.each(products_data.books, function(index2, product) {
                        if(product.category == category && validPrice(product.price, price) == true) {
                            displayProduct(product);
                        }
                    });
                });
            });
        } else if(checked_categories.length > 0) {
			$.each(checked_categories, function(index, val) {
				let category = val.labels[0].innerText;
				$.each(products_data.books, function(index1, product) {
					if(product.category == category) displayProduct(product);
				});
			});
		} else {
            $.each(checked_prices, function(index, val) {
                let price = val.labels[0].innerText;
                $.each(products_data.books, function(index1, product) {
                    if(validPrice(product.price, price)) displayProduct(product);
                });
            });
        }
	}
    
    // Dispaly the various categories of books
	function displayCategory(books) {
		$('form[name="brand"]').append('\
            <div class="form-check bg-primary border border-dark">\
                <label class="form-check-label p-2">Category</label>\
            </div>');
		let unique_category = {};
		$.each(books, function(index, product) {
			let category = product.category;
			if(unique_category[category] == undefined) unique_category[category] = true;
		});
		$.each(unique_category, function(category, val) {
			$('form[name="brand"]').append('\
				<div class="form-check border border-dark">\
					<label class="form-check-label pl-2 category-filter">\
						<input type="checkbox" class="form-check-input">' + category +
					'</label>\
				</div>')
		});
		$('.category-filter').on('change', filterByCategoryAndPrice);
	}
    
    // Display the price filter checkboxes
    function displayPrice() {
        $('form[name="brand"]').append('\
            <div class="form-check bg-primary border border-dark">\
                <label class="form-check-label p-2">Price</label>\
            </div>');
        $('form[name="brand"]').append('\
				<div class="form-check border border-dark sports">\
					<label class="form-check-label pl-2 price-filter">\
						<input type="checkbox" class="form-check-input">0-499\
					</label>\
				</div>')
        $('form[name="brand"]').append('\
				<div class="form-check border border-dark sports">\
					<label class="form-check-label pl-2 price-filter">\
						<input type="checkbox" class="form-check-input">500-999\
					</label>\
				</div>')
        $('form[name="brand"]').append('\
				<div class="form-check border border-dark sports">\
					<label class="form-check-label pl-2 price-filter">\
						<input type="checkbox" class="form-check-input">1000-2999\
					</label>\
				</div>')
        $('form[name="brand"]').append('\
				<div class="form-check border border-dark sports">\
					<label class="form-check-label pl-2 price-filter">\
						<input type="checkbox" class="form-check-input">Over 3000\
					</label>\
				</div>')
        let category = $('li.active')[0].innerText.toLowerCase();
        let price_filter = $('.price-filter');
        if(category == 'books') price_filter.on('change', filterByCategoryAndPrice);
        else if(category == 'home') price_filter.on('change', filteringAtHome);
        else price_filter.on('change', filterByBrandAndPrice);
    }
    
    // To be called when home category is clicked
	function home() {
		empty_product_grid();		
		$('#home').addClass('active'); // Make the home tab active
		$.each(products_data, function(category, products) {
			displayProducts(products);
		});
        displayPrice();
	}
    
    // To be called when electronics category is clicked
	function electronics() {
		empty_product_grid();
		$('#electronics').addClass('active'); // Make the electronics tab active
		displayProducts(products_data.electronics);
		displayBrand(products_data.electronics);
        displayPrice();
	}
    
    // To be called when books category is clicked
	function books() {
		empty_product_grid();
		$('#books').addClass('active'); // Make the books tab active
		displayProducts(products_data.books);
		displayCategory(products_data.books);
        displayPrice();
	}
    
    // To be called when sports category is clicked
	function sports() {
		empty_product_grid();
		$('#sports').addClass('active'); // Make the sports tab active
		displayProducts(products_data.sports);
		displayBrand(products_data.sports);
        displayPrice();
	}
    
    // To be called when clothing category is clicked
	function clothing() {
		empty_product_grid();
		$('#clothing').addClass('active'); // Make the clothing tab active
		displayProducts(products_data.clothing);
		displayBrand(products_data.clothing);
        displayPrice();
	}
	
    // Attach event handlers on different categories
	$('#home').on('click', home);
	$('#electronics').on('click', electronics);
	$('#books').on('click', books);
	$('#sports').on('click', sports);
	$('#clothing').on('click', clothing);
    
    // Redirect to cart page when cart link is clicked
    $('#cart').on('click', () => {
        location.href = 'cart.html';
    });
    
    // Remove username and password from localStorage and redirect to login-form page
    $('#logout').on('click', () => {
        localStorage.removeItem('username');
        localStorage.removeItem('password');
        location.href = 'login-form.html';
    });
});