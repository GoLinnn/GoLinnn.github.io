const data = [
    {
        "name": "Moon",
        "images": {
            "png": "../assets/destination/image-moon.png",
            "webp": "../assets/destination/image-moon.webp"
        },
        "description": "See our planet as you've never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you're there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
        "distance": "384,400 km",
        "travel": "3 days"
    },
    {
        "name": "Mars",
        "images": {
            "png": "../assets/destination/image-mars.png",
            "webp": "../assets/destination/image-mars.webp"
        },
        "description": "Don't forget to pack your hiking boots. You'll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It's two and a half times the size of Everest!",
        "distance": "225 mil. km",
        "travel": "9 months"
    },
    {
        "name": "Europa",
        "images": {
            "png": "../assets/destination/image-europa.png",
            "webp": "../assets/destination/image-europa.webp"
        },
        "description": "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover's dream. With an icy surface, it's perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
        "distance": "628 mil. km",
        "travel": "3 years"
    },
    {
        "name": "Titan",
        "images": {
            "png": "../assets/destination/image-titan.png",
            "webp": "../assets/destination/image-titan.webp"
        },
        "description": "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
        "distance": "1.6 bil. km",
        "travel": "7 years"
    }
]
// 切换效果
const rightnav = document.querySelector('.rightnav');
const sphere = document.querySelector('.sphere');
const h2 = document.querySelector('.detail h2');
const description = document.querySelector('.detail .description');
const distance = document.querySelector('.detail .distance');
const travel = document.querySelector('.detail .travel');
rightnav.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') {
        const active = rightnav.querySelector('.active');
        if (active) {
            active.classList.remove('active');
        }
        e.target.classList.add('active');
        //获取当前按钮所指向的内容
        const currentId = e.target.dataset.id;
        const currentItem = data[currentId];
        //切换对应标题
        h2.innerText = `${currentItem.name}`;
        //切换对应描述
        description.innerText = `${currentItem.description}`;
        //切换对应距离
        distance.innerHTML = `${currentItem.distance}`;
        //切换对应时间
        travel.innerHTML = `${currentItem.travel}`;
        //切换相对应的星球图片
        sphere.style.background = `url(${currentItem.images.png})`;
        sphere.style.backgroundSize = `cover`;
    }
})