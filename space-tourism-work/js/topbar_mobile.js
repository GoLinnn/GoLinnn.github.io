document.querySelector('.topbar_box').addEventListener('click', () => {
    document.querySelector('.topbar_nav').style.display = 'block';
})
const close = document.querySelector('.close');
if (close) {
    close.addEventListener('click', () => {
        document.querySelector('.topbar_nav').style.display = 'none';
    })
}
const menu = document.querySelector('.topnav_mobile');
if (menu) {
    menu.addEventListener('click', (e) => {
        if (e.target.tagName === 'A') {
            const active = topnav.querySelector('.active');
            if (active) {
                active.classList.remove('active');
            }
            e.target.classList.add('active');
            const currentPageId = e.target.dataset.id;
            switch (currentPageId) {
                case '0':
                    location.href = './index.html';
                    break;
                case '1':
                    location.href = './destination.html';
                    break;
                case '2':
                    location.href = './crew.html';
                    break;
                case '3':
                    location.href = './technology.html';
                    break;
            }
        }
    })
}
