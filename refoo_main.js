const fullScreenImage = document.getElementById('image-container');
const menuItems = document.querySelectorAll('.menu-item');
const imagePaths = [
    'full-screen-image.jpg',       // 초기 이미지
    'full-screen-image2.jpg',      // 남은 음식 처리하기 이미지
    'full-screen-image3.jpg',      // 커뮤니티 이미지
    'full-screen-image4.jpg'       // 요리 레시피 이미지
];

let currentImageIndex = 0;

function changeImage(index) {
    fullScreenImage.style.backgroundImage = `url('${imagePaths[index]}')`;
    fullScreenImage.setAttribute('data-image-index', index);
    currentImageIndex = index;
}

menuItems.forEach((menuItem, index) => {
    menuItem.addEventListener('mouseenter', () => {
        changeImage(index + 1); // 이미지 인덱스를 메뉴 아이템 인덱스 + 1로 설정
    });

    menuItem.addEventListener('mouseleave', () => {
        if (currentImageIndex !== 0) {
            changeImage(0); // 마우스를 떼면 초기 이미지로 돌아가도록 변경
        }
    });

    menuItem.addEventListener('click', (event) => {
        const clickedIndex = parseInt(event.target.getAttribute('data-index'));
        changeImage(clickedIndex + 1); // 클릭한 메뉴 아이템에 해당하는 이미지로 변경
    });
});

// 자동으로 이미지 변경 (5초마다)
setInterval(() => {
    currentImageIndex = (currentImageIndex + 1) % imagePaths.length;
    changeImage(currentImageIndex);
}, 5000);  // 5초 간격으로 이미지 변경