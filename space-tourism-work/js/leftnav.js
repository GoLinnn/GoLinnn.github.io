const technology = [
    {
        "name": "Launch vehicle",
        "images": {
            "portrait": "../assets/technology/image-launch-vehicle-portrait.jpg",
            "landscape": "../assets/technology/image-launch-vehicle-landscape.jpg"
        },
        "description": "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"
    },
    {
        "name": "Spaceport",
        "images": {
            "portrait": "../assets/technology/image-spaceport-portrait.jpg",
            "landscape": "../assets/technology/image-spaceport-landscape.jpg"
        },
        "description": "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch."
    },
    {
        "name": "Space capsule",
        "images": {
            "portrait": "../assets/technology/image-space-capsule-portrait.jpg",
            "landscape": "../assets/technology/image-space-capsule-landscape.jpg"
        },
        "description": "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."
    }
]
const leftnav = document.querySelector('.leftnav');
const launchName = document.querySelector('#launchName');
const p = document.querySelector('.launch p');
// 获取视口宽度
const viewWidth = document.documentElement.clientWidth;
let img;
// 根据视口宽度选择图片
if (viewWidth > 1039) {
    img = document.querySelector('.launchImg');
} else {
    img = document.querySelector('.launchImgMove');
}
leftnav.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') {
        const active = leftnav.querySelector('.active');
        if (active) {
            active.classList.remove('active');
        }
        e.target.classList.add('active');
        const currentlaunchId = e.target.dataset.id;
        launchName.innerText = `${technology[currentlaunchId].name.toUpperCase()}`;
        p.innerText = `${technology[currentlaunchId].description}`;

        // 根据视口宽度切换图片
        if (viewWidth > 1039) {
            img.style.background = `url(${technology[currentlaunchId].images.portrait}) no-repeat`;
        } else {
            img.style.background = `url(${technology[currentlaunchId].images.landscape}) no-repeat`;
            img.style.backgroundSize = `cover`;
        }
    }
})