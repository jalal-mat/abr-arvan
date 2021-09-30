const projectContents = document.querySelectorAll('.projects__content');

export const renderProjectsLists = function (projects) {

    projectContents.forEach((_, indexContent) =>
        projects.forEach((project, index) => {
            const eachProjectContent = document.querySelector(`.projects__content--${indexContent + 1} ul`);

            const html = `
            <li class="projects__list" data-arrow="${indexContent + 1}-${index + 1}">
                ${project.name}
                <div class="projects__arrow-down projects__arrow-down--${indexContent + 1}-${index + 1}">
                    <object data="./assets/svg/arrow-down.svg" type="image/svg+xml"></object>
                </div>

                <div class="projects__feature projects__feature--${indexContent + 1}-${index + 1}">
                    <div class="projects__item">
                        <div class="projects__item-icon">
                            <object data="./assets/svg/request.svg" type="image/svg+xml"></object>
                        </div>
                        <h4 class="title4 projects__item-title">درخواست دهنده</h4>
                        <p class="main-text projects__main-text">
                            ${project.requester}
                        </p>
                    </div>
                    <div class="projects__item">
                        <div class="projects__item-icon">
                            <object data="./assets/svg/doing-way.svg" type="image/svg+xml"></object>
                        </div>
                        <h4 class="title4 projects__item-title">روش اجرا و ارائه</h4>
                        <p class="main-text projects__main-text">${project.method}</p>
                    </div>
                    <div class="projects__item">
                        <div class="projects__item-icon">
                            <object data="./assets/svg/project-language.svg" type="image/svg+xml"></object>
                        </div>
                        <h4 class="title4 projects__item-title">زبان پروژه</h4>
                        <p class="main-text projects__main-text">${project.language}</p>
                    </div>
                    <div class="projects__item">
                        <div class="projects__item-icon">
                            <object data="./assets/svg/project-price.svg" type="image/svg+xml"></object>
                        </div>
                        <h4 class="title4 projects__item-title">مبلغ پروژه</h4>
                        <p class="main-text projects__main-text">${project.price}</p>
                    </div>
                    <div class="projects__item-description">
                        <div class="projects__item-description-row">
                            <div class="projects__item-description-icon">
                                <object data="./assets/svg/project-description.svg"
                                    type="image/svg+xml"></object>
                            </div>
                            <div class="projects__item-description-content">
                                <h4 class="title4">شرح پروژه</h4>
                                <ul>
                                    <li>نرم افزاری برای انتقال یک دامنه به همراه تنظیمات آن از روی کلودفلر
                                        به
                                        آروان</li>
                                    <li>یک دامنه را به همراه تنظیمات مربوطه از سرویس کلودفلر به آروان منتقل
                                        کند
                                        API Key این نرم افزار باید بتواند با دریافت</li>
                                    <li>حالت مطلوب میتواند یک وبسایت مستقل باشد و یا میتواند یک اسکریپتی که
                                        با
                                        دریافت اطلاعات مربوطه این کار را انجام دهد</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="projects__item-footer">
                        <div class="projects__item-git">
                            <div class="projects__item-git-icon">
                                <object data="./assets/svg/git-url.svg" type="image/svg+xml"></object>
                            </div>
                            <div class="projects__item-git-content">
                                <h4 class="title4">صفحه گیت هاب</h4>
                                <a class="project__item-git-url"
                                    href="https://github.com/features/codespaces"
                                    target="_blank">${project.gitUrl}</a>
                            </div>
                        </div>
                        <div class="projects__item-author">
                            <div class="projects__author-specs">
                                <div class="projects__author-name">
                                    توسط ${project.author}
                                </div>
                                <div class="projects__author-image">
                                    <object data="./assets/svg/author-image.svg"
                                        type="image/svg+xml"></object>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </li>`;

            eachProjectContent.insertAdjacentHTML('beforeend', html);
        }));
};