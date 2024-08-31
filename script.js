window.addEventListener('load', () => {
    const splashScreen = document.querySelector('.splash-screen');
    
    setTimeout(() => {
        splashScreen.classList.add('hidden');
    }, 5000); // Show splash screen for 3 seconds
});
