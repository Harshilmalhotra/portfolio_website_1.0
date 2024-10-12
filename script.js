window.addEventListener('load', () => {
    const splashScreen = document.querySelector('.splash-screen');
    
    setTimeout(() => {
        splashScreen.classList.add('hidden');
    }, 3000); // Show splash screen for 3 seconds
});
