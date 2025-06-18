function handleLogin(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    
    if (username.trim()) {
        const button = event.target.querySelector('.login-btn');
        button.style.background = 'rgba(34, 197, 94, 0.3)';
        button.innerHTML = 'Signing In...';
        
        window.location.href = '/html/index.html';
    }
}

function createParticle() {
    const particle = document.createElement('div');
    particle.className = 'shape';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.width = particle.style.height = (Math.random() * 60 + 40) + 'px';
    document.querySelector('.floating-shapes').appendChild(particle);
    
    setTimeout(() => {
        particle.remove();
    }, 15000);
}

setInterval(createParticle, 3000);
