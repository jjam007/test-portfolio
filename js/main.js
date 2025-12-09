document.addEventListener('DOMContentLoaded', () => {
    // Custom Cursor
    const cursor = document.getElementById('cursor');
    const follower = document.getElementById('cursor-follower');
    const links = document.querySelectorAll('a, button, .project-card');

    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';

        // Follower with delay
        setTimeout(() => {
            follower.style.left = e.clientX + 'px';
            follower.style.top = e.clientY + 'px';
        }, 50);
    });

    links.forEach(link => {
        link.addEventListener('mouseenter', () => {
            document.body.classList.add('hovered');
        });
        link.addEventListener('mouseleave', () => {
            document.body.classList.remove('hovered');
        });
    });

    // Loader
    const loader = document.getElementById('loader');
    const progress = document.querySelector('.loader-progress');

    let loadValue = 0;
    const loadInterval = setInterval(() => {
        loadValue += Math.random() * 10;
        if (loadValue >= 100) {
            loadValue = 100;
            clearInterval(loadInterval);
            setTimeout(() => {
                loader.style.opacity = '0';
                setTimeout(() => {
                    loader.style.display = 'none';
                }, 500);
            }, 500);
        }
        progress.style.width = loadValue + '%';
    }, 100);

    // Scroll Progress
    window.addEventListener('scroll', () => {
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (scrollTop / scrollHeight) * 100;
        document.getElementById('scroll-progress').style.width = scrolled + '%';
    });

    // Smooth Scroll for Anchors
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
