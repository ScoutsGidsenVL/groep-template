// Load more function to show more articles on homepage
const loadmore = document.querySelector('#loadmore');
let currentItems = 3;
loadmore.addEventListener('click', (e) => {
    const elementList = [...document.querySelectorAll('.news-feed .col')];
    for (let i = currentItems; i < currentItems + 3; i++) {
        if (elementList[i]) {
            elementList[i].style.display = 'block';
        }
    }
    currentItems += 3;

    // Load more button will be hidden after list fully loaded
    if (currentItems >= elementList.length) {
        event.target.style.display = 'none';
    }
})