const crew = [
    {
        "name": "Douglas Hurley",
        "images": {
            "png": "../assets/crew/image-douglas-hurley.png",
            "webp": "../assets/crew/image-douglas-hurley.webp"
        },
        "role": "Commander",
        "bio": "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."
    },
    {
        "name": "Mark Shuttleworth",
        "images": {
            "png": "../assets/crew/image-mark-shuttleworth.png",
            "webp": "../assets/crew/image-mark-shuttleworth.webp"
        },
        "role": "Mission Specialist",
        "bio": "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist."
    },
    {
        "name": "Victor Glover",
        "images": {
            "png": "../assets/crew/image-victor-glover.png",
            "webp": "../assets/crew/image-victor-glover.webp"
        },
        "role": "Pilot",
        "bio": "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer."
    },
    {
        "name": "Anousheh Ansari",
        "images": {
            "png": "../assets/crew/image-anousheh-ansari.png",
            "webp": "../assets/crew/image-anousheh-ansari.webp"
        },
        "role": "Flight Engineer",
        "bio": "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space."
    }
]

const role = document.querySelector('#role');
const name = document.querySelector('#name');
const p = document.querySelector('.des p');

// 获取视口宽度
const viewWidth = document.documentElement.clientWidth;
let bottomnav;
let img;
console.log(viewWidth)
// 根据视口宽度选择图片和导航栏
if (viewWidth > 767) {
    img = document.querySelector('.peopleImg');
    bottomnav = document.querySelector('.bottomnav_nomobile');
} else {
    img = document.querySelector('.peopleImg_mobile');
    bottomnav = document.querySelector('.bottomnav_mobile');
}
bottomnav.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') {
        const active = bottomnav.querySelector('.active');
        if (active) {
            active.classList.remove('active');
        }
        e.target.classList.add('active');
        const currentPeopleId = e.target.dataset.id;
        role.innerText = `${crew[currentPeopleId].role.toUpperCase()}`;
        name.innerText = `${crew[currentPeopleId].name.toUpperCase()}`;
        p.innerText = `${crew[currentPeopleId].bio}`;
        // 根据视口宽度切换图片
        if (viewWidth > 767) {
            img.style.background = `url(${crew[currentPeopleId].images.png}) no-repeat`;
            img.style.backgroundSize = `cover`;
        } else {
            img.style.background = `url(${crew[currentPeopleId].images.png}) no-repeat`;
            img.style.backgroundSize = `contain`;
            img.style.backgroundPosition = `center`;
        }
    }
})