// const tabs = document.querySelectorAll('.tab');
// const tabContent = document.querySelectorAll('.content');


const switchTabs = function (e, section) {
    const clicked = e.target.closest(`.${section}__tab`);
    const tabs = document.querySelectorAll(`.${section}__tab`);
    const tabContent = document.querySelectorAll(`.${section}__content`);

    if (!clicked) return;

    tabs.forEach(tab => tab.classList.remove('tab--active'));
    clicked.classList.add('tab--active');

    tabContent.forEach(tc => tc.classList.remove('content--active'));
    document.querySelector(`.${section}__content--${clicked.dataset.tab}`).classList.add('content--active');
};

export const addHandlerRender = function () {
    const tabsContainer = document.querySelector('.projects__tabs-container');
    const structureTabContainer = document.querySelector('.structure__tabs');

    tabsContainer.addEventListener('click', function (e) {
        switchTabs(e, 'projects');
    });

    structureTabContainer.addEventListener('click', function (e) {
        switchTabs(e, 'structure');
    });
};