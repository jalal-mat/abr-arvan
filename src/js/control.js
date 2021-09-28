import { addHandlerRender } from './views/switchTabsView.js';
import { ProjectsModel } from './model.js';
import { renderProject } from './views/projectsView.js';

const init = function () {
    addHandlerRender();
};
init();

const projects = new ProjectsModel();
const projectsArray = projects.getProjects();
projectsArray.forEach(project => console.log(renderProject(project)));


const projectsListContainer = document.querySelector('.projects__list-container');
projectsListContainer.addEventListener('click', function (e) {
    const clicked = e.target.closest('.projects__list');
    const projectsList = document.querySelectorAll('.projects__list');
    const projectsFeature = document.querySelectorAll('.projects__feature');

    if (!clicked) return;

    // projectsList.forEach(proj => proj.classList.remove('projects__list--active'));
    clicked.classList.toggle('projects__list--active');
    document.querySelector(`.projects__arrow-down--${clicked.dataset.arrow}`).classList.toggle('projects__arrow-down--active');
    // projectsFeature.forEach(proj => proj.classList.remove('projects__feature--active'));
    document.querySelector(`.projects__feature--${clicked.dataset.arrow}`).classList.toggle('projects__feature--active');
});