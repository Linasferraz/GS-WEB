document.addEventListener('DOMContentLoaded', () => {
    // Alert functionality
    const showAlert = (message) => {
        alert(message);
    };

    // Example of showing an alert on page load
    showAlert('Bem-vindo ao Nosso Projeto! E lembrem-se que proteger o oceano é garantir a vida dos animais marinhos e o equilíbrio do nosso planeta. Cada pequena ação de preservação é uma grande onda de esperança para um futuro sustentável.');

    // Login form validation
    const loginForm = document.getElementById('loginForm');
    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        
        if (username === '' || password === '') {
            showAlert('Por favor, preencha todos os campos.');
        } else {
            showAlert('Login realizado com sucesso!');
            // Here you can add your login logic
        }
    });

    // Carousel functionality
    const carouselImages = [
        'img/car1.png',
        'img/car2.png',
        'img/car3.png',
    ];
    let currentImageIndex = 0;

    const carouselImage = document.querySelector('.carousel-image');
    const prevButton = document.querySelector('.carousel-button.prev');
    const nextButton = document.querySelector('.carousel-button.next');

    const updateCarouselImage = () => {
        carouselImage.src = carouselImages[currentImageIndex];
    };

    nextButton.addEventListener('click', () => {
        currentImageIndex = (currentImageIndex + 1) % carouselImages.length;
        updateCarouselImage();
    });

    prevButton.addEventListener('click', () => {
        currentImageIndex = (currentImageIndex - 1 + carouselImages.length) % carouselImages.length;
        updateCarouselImage();
    });
});
