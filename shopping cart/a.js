		var navTog = document.querySelector('.navbar-toggle');
		var navBra = document.querySelector('.navbar-brand');
		var wish_ = document.querySelector('#wishlist');
		var cart = document.querySelector('#cart');
		var quickJect = document.querySelector('#quick-inject-reject');
		var compName = document.querySelector('#comp-name');
		var shopIcons = document.querySelector('.shopicons-cont')
		
		function handheld_header(){
			
			compName.style.display = "none";
			
			
			navBra.style.float = "";
			navBra.style.position = 'absolute';
			navBra.style.left = "calc(50% - 42px)";
			
			
			quickJect.appendChild(wish_);
			quickJect.appendChild(cart);
		}
		
		function big_screen(){
			compName.style.display = "";
			
			navBra.style.float = "left";
			navBra.style.position = ""
			
			shopIcons.appendChild(wish_);
			shopIcons.appendChild(cart);
		}
		
		if(window.screen.width < 768){
			handheld_header();
		}
		
		var prev = 'small';
		
		window.addEventListener('resize', function(event){
		
			var newWidth = window.innerWidth;
			
			if(newWidth < 768){
				if (prev=='big'){
					handheld_header();
					prev='small';
				}
			}else{
				if (prev=='small'){
						big_screen();
						prev='big';
					}
				
			}
		});
		