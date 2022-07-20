// When the user scrolls the page, execute myFunction

const stickyHeader = () => {
    window.addEventListener('scroll', toggleSticky);
    const header = document.getElementById('header');
    const sticky = header.offsetTop;

    function toggleSticky() {
        if (window.pageYOffset > sticky) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }
    }
};

export default stickyHeader;
