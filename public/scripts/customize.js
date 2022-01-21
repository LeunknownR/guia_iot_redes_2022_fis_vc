window.addEventListener('DOMContentLoaded', () => {
    const btnCollapse = document.querySelector('#btn-collapse-sidebar-nav');
    btnCollapse.addEventListener('click', () => {
        document.querySelector('#sidebar-nav').classList.add('active');
        document.querySelector('#sidebar-nav .filter').classList.add('active');
    });
    document.querySelector('#sidebar-nav .filter').addEventListener('click', () => {
        document.querySelector('#sidebar-nav .filter').classList.remove('active');
        document.querySelector('#sidebar-nav').classList.remove('active');
        console.log("HASNDJ");
    });
});