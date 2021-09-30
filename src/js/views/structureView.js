export const renderStructure = function (structure, index) {
    const structuresTabContainer = document.querySelectorAll('.structure__tab-container');
    const structureContentLimiter = document.querySelector('.structure__content-limiter');
    let p = '';

    // create the tabs. the first tab contain active class
    const btn = index === 0
        ?
        `<button class="structure__tab structure__tab--${index + 1} structure__tab--active" data-tab="${index + 1}">
            ${structure.title}
        </button>`
        :
        `<button class="structure__tab structure__tab--${index + 1}" data-tab="${index + 1}">
            ${structure.title}
        </button>`;


    // adding tabs
    structuresTabContainer[index].insertAdjacentHTML('afterbegin', btn);


    // create the paragraphs
    structure.content.forEach(content =>
        p += `<p class="structure__content-text">${content}</p>`);


    // main content of each tab
    const mainContent =
        `<h3 class="structure__title">${structure.title}</h3>
        ${p}
        <h4 class="structure__attendees">${structure.subtitle}</h4>
        <p class="structure__content-text">${structure.subcontent}</p>`;


    // the content with the parent element. the first one has active class
    const html = index === 0 ?
        `<div class="structure__content structure__content--${index + 1} structure__content--active">
            ${mainContent}
        </div>` :
        `<div class="structure__content structure__content--${index + 1}">
            ${mainContent}
        </div>`;


    // add the whole content
    structureContentLimiter.insertAdjacentHTML('afterbegin', html);
};