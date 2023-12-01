const topnav = document.querySelector('.topnav');
topnav.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') {
        const active = topnav.querySelector('.active');
        if (active) {
            active.classList.remove('active');
        }
        e.target.classList.add('active');
        const currentPageId = e.target.dataset.id;
        console.log(currentPageId)
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