const menuIcon = document.querySelector('.menu-icon i');
const checkRead = document.querySelectorAll('#check-mark p i')
const deletePannel = document.querySelectorAll('#close-card i')
const likeBtn = document.querySelectorAll('#likes i')
menuIcon.addEventListener('click', e => {
    e.preventDefault();
    let menulist = menuIcon.parentElement.parentElement.querySelector('nav')
    menuIcon.classList.toggle('bx-x')
    menulist.classList.toggle('active')

})

checkRead.forEach((element) => {
    element.addEventListener('click', e => {
        let pointer = e.target;
        let showRead = pointer.parentElement.parentElement.parentElement.parentElement;
        let x = showRead.querySelectorAll('.image-container .image-layer')
        pointer.style.color = "blue"
        pointer.parentElement.style.borderColor = "blue"
        x.forEach((element) => {
            element.classList.add('active')

        })
    })
})

deletePannel.forEach((element) => {
    element.addEventListener('click', e => {
        let close = element.closest('.card-holder')
        close.classList.add('delete')

    })
})

likeBtn.forEach((element) => {
    element.addEventListener('click', e => {
        e.target.classList.toggle('bxs-heart')
        e.target.style.color = "blue"
    })
})


