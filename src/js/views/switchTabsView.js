
const switchTabs = function (e, section) {
    const clicked = e.target.closest(`.${section}__tab`);
    const tabs = document.querySelectorAll(`.${section}__tab`);
    const tabContent = document.querySelectorAll(`.${section}__content`);

    if (!clicked) return;

    tabs.forEach(tab => tab.classList.remove(`${section}__tab--active`));
    clicked.classList.add(`${section}__tab--active`);

    tabContent.forEach(tc => tc.classList.remove(`${section}__content--active`));
    document.querySelector(`.${section}__content--${clicked.dataset.tab}`).classList.add(`${section}__content--active`);

    const triangles = document.querySelectorAll('.structure__tab-triangle');
    const currentTriangle = clicked.parentElement.querySelector('object');
    if (currentTriangle) {
        triangles.forEach(tr => tr.classList.remove('structure__tab-triangle--active'));
        currentTriangle.classList.add('structure__tab-triangle--active');
    }
};

export const tabHandler = function () {
    const tabsContainer = document.querySelector('.projects__tabs-container');
    const structureTabContainer = document.querySelector('.structure__tabs');

    tabsContainer.addEventListener('click', function (e) {
        switchTabs(e, 'projects');
    });

    structureTabContainer.addEventListener('click', function (e) {
        switchTabs(e, 'structure');
    });
};