import { tabHandler } from './views/switchTabsView.js';
import { ProjectsModel, StructureModel } from './model.js';
import { renderProjectsLists } from './views/projectsView.js';
import { renderStructure } from './views/structureView.js';
import { projectsToggler } from './views/projectsListToggle.js';


const init = function () {
    tabHandler();
    projectsToggler();

    const projects = new ProjectsModel();
    const projectsArray = projects.getProjects();
    renderProjectsLists(projectsArray);


    const structureModel = new StructureModel();
    const structureArray = structureModel.getStructures();
    structureArray.forEach((structure, index) => renderStructure(structure, index));
};
init();