import { tabHandler } from './views/switchTabsView.js';
import { ProjectsModel } from './models/projectModel.js';
import { StructureModel } from './models/structureModel.js';
import { renderProjectsLists } from './views/projectsView.js';
import { renderStructure } from './views/structureView.js';
import { projectsToggler } from './views/projectsListToggle.js';
import { uploadFileHandler, portofolioObj, resomeObj } from './views/uploadFile.js';
import * as formFields from './views/getFormFields.js';
import { jobAppliersModel } from './models/jobAppliersModel.js';


(function init() {
    tabHandler();
    projectsToggler();
    uploadFileHandler(resomeObj);
    uploadFileHandler(portofolioObj);

    const projects = new ProjectsModel();
    const projectsArray = projects.getProjects();
    renderProjectsLists(projectsArray);

    const structureModel = new StructureModel();
    const structureArray = structureModel.getStructures();
    structureArray.forEach((structure, index) => renderStructure(structure, index));

    formFields.checkName();
    formFields.checkPhone();
    formFields.checkMail();

    formFields.submitForm();
})();