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