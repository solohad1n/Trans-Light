const navItem = document.querySelectorAll('.catalog__nav__item');
const robeProducts = document.getElementById('robe');
const compulite = document.getElementById('compulite');


navItem.forEach((li,index) => {
    li.addEventListener('click', function () {
        navItem.forEach(list => {
        list.classList.remove('catalog__nav__item_active')
        
        if (index === 0) {
            robeProducts.style.display = 'block';
            compulite.style.display = 'none'
        }
        if (index === 1) {
            robeProducts.style.display = 'none';
            compulite.style.display = 'block'
        }
    })
        li.classList.add('catalog__nav__item_active')
    })
})
