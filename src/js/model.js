export class ProjectsModel {
    #projectsArray = [
        { name: 'wordpress', requester: 'تیم CDN', method: 'Opensourse/Github', language: 'php', price: '10000000', author: 'جلال مطوری' },
        { name: 'Drupal Plugin', requester: 'تیم CDN', method: 'Opensourse/Github', language: 'Python', price: '10000000', author: 'حسن سیدی' },
        { name: 'Migrate From CloudFlare to Arvan', requester: 'تیم CDN', method: 'Opensourse/Github', language: 'C++', price: '20000000', author: 'حسن سیدی' },
        // { name: 'IP WhiteList Script', requester: 'تیم CDN', language: 'C', price: '30000000', author: 'حسن سیدی' },
        // { name: 'cPanel Quick Installation', requester: 'تیم CDN', language: '-', price: '5000000', author: 'حسن سیدی' },
        // { name: 'Dynamic DNS', requester: 'تیم CDN', language: '-', price: '15000000', author: 'حسن سیدی' },
        // { name: 'CLI to work with CDN', requester: 'تیم CDN', language: '-', price: '15000000', author: 'حسن سیدی' },
    ];

    getProjects() {
        return this.#projectsArray;
    }
}