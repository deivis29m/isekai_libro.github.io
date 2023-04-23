const pages = document.querySelectorAll('.page');

pages.forEach((page, index) => {
    page.addEventListener('click', () => {
        if (!page.classList.contains('active')) {
            pages.forEach((p) => {
                p.classList.remove('active');
            });
            page.classList.add('active');
        }
    });
});