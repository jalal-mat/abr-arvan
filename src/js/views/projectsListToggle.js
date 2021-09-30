
const toggleProjectList = function (e) {
    const clicked = e.target.closest('.projects__list');
    const svgObject = document.querySelector(`.projects__arrow-down--${clicked.dataset.arrow} object`);
    let arrowType = svgObject.getAttribute('data');

    if (!clicked) return;

    // toggle active on projects__list
    clicked.classList.toggle('projects__list--active');

    // toggle active on projects__feature
    document.querySelector(`.projects__feature--${clicked.dataset.arrow}`).classList.toggle('projects__feature--active');

    // switch between arrow-down and arrow-up SVG
    arrowType === './assets/svg/arrow-down.svg' ? arrowType = './assets/svg/arrow-up.svg' : arrowType = './assets/svg/arrow-down.svg';

    // set the switched SVG
    svgObject.setAttribute('data', arrowType);
};


export const projectsToggler = function () {
    const projectsListContainer = document.querySelectorAll('.projects__list-container');

    // handle click on list of projects forEach project tab
    projectsListContainer.forEach(projectContainer =>
        projectContainer.addEventListener('click', toggleProjectList.bind(this)));
};