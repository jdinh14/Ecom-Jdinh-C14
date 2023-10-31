function toggleNav() {
    let sideNav = document.querySelector('.sidebarnav');
    let content = document.querySelector('.sidebarnav-content');
    
    if(sideNav.style.width === '0px' || sideNav.style.width === '') {
        sideNav.style.width = '250px';
        content.style.display = 'block';
    } else {
        sideNav.style.width = '0';
        content.style.display = 'none';
    }
}
