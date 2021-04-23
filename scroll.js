window.addEventListener('load', (event) => {

			document.getElementById('head__right__tohu').addEventListener('click', () => {

        
				var content = document.getElementById('content');
				var content_position = content.getBoundingClientRect();

     
				window.scrollTo( 0, content_position.top);

			});
		});