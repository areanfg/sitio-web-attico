// Script básico para interactividad
document.addEventListener('DOMContentLoaded', function() {
    console.log('Web cargada correctamente');
    
    // Efecto de scroll suave en enlaces
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});