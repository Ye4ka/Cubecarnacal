        // Находим элементы 

        const burger = document.querySelector('.header__burger');
        const nav = document.querySelector('.header__nav');
        const links = document.querySelectorAll('.header__link');

        // Открытие/закрытие по клику на бургер
        
        burger.addEventListener('click', function() {
            this.classList.toggle("active");
            nav.classList.toggle("header__open");
        });
        
        // Закрытие при клике на ссылки

        links.forEach(link => {
            link.addEventListener('click', function() {
                burger.classList.remove("active");
                nav.classList.remove("header__open");
            });
        });

        // Отправка формы

        document.getElementById('contactForm').addEventListener('submit', function(e) {
        e.preventDefault();
    
        const email = this.querySelector('input[name="email"]').value;
        const name = this.querySelector('input[name="name"]').value;
        const message = this.querySelector('textarea[name="message"]').value;
    
        if (!email.includes('@')) {
            alert('Пожалуйста, введите корректный email адрес');
            return;
        }
    
        console.log('Отправка формы:', { name, email, message });
        });
        