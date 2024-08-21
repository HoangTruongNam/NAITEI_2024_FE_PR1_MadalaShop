// Lấy tất cả các nút like và số lượt like từ DOM
const likeButtons = document.querySelectorAll('.like-button');

likeButtons.forEach(button => {
    const id = button.getAttribute('data-id');
    const likeCountElement = button.querySelector('.like-count');

    // Khởi tạo số lượt like và trạng thái liked từ localStorage
    let likeCount = localStorage.getItem(`likeCount_${id}`) ? parseInt(localStorage.getItem(`likeCount_${id}`)) : 0;
    let isLiked = localStorage.getItem(`isLiked_${id}`) === 'true';

    // Cập nhật số lượt like và trạng thái nút like
    updateLikeButton(button, likeCountElement, isLiked, likeCount);

    // Thêm sự kiện click cho nút like
    button.addEventListener('click', () => {
        // Tăng hoặc giảm số lượt like dựa trên trạng thái hiện tại
        if (isLiked) {
            likeCount--;
        } else {
            likeCount++;
        }
        // Đổi trạng thái liked
        isLiked = !isLiked;

        // Lưu trạng thái và số lượt like vào localStorage
        localStorage.setItem(`likeCount_${id}`, likeCount);
        localStorage.setItem(`isLiked_${id}`, isLiked);

        // Cập nhật giao diện người dùng
        updateLikeButton(button, likeCountElement, isLiked, likeCount);
    });
});

// Hàm cập nhật số lượt like và trạng thái nút like
function updateLikeButton(button, likeCountElement, isLiked, likeCount) {
    likeCountElement.textContent = likeCount;
    if (isLiked) {
        button.classList.add('liked');
    } else {
        button.classList.remove('liked');
    }
}
