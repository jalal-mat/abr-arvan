const projectsListContainer = document.querySelector('.projects__list-container');

projectsListContainer.addEventListener('click', function (e) {
    const clicked = e.target.closest('.projects__list');
    const projectsList = document.querySelectorAll('.projects__list');

    if (!clicked) return;

    projectsList.forEach(proj => proj.classList.remove('projects__list--active'));
    clicked.classList.add('projects__list--active');
});