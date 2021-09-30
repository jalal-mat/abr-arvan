export class ProjectsModel {
    #projectsArray = [
        { name: 'wordpress', requester: 'تیم CDN', method: 'Opensourse/Github', language: 'php', price: '10000000', gitUrl: 'https://github.com/features/codespaces', author: 'جلال مطوری' },
        { name: 'Drupal Plugin', requester: 'تیم CDN', method: 'Opensourse/Github', language: 'Python', price: '10000000', gitUrl: 'https://github.com/features/codespaces', author: 'حسن سیدی' },
        { name: 'Migrate From CloudFlare to Arvan', requester: 'تیم CDN', method: 'Opensourse/Github', language: 'C++', price: '20000000', gitUrl: 'https://github.com/features/codespaces', author: 'حسن سیدی' },
        { name: 'IP WhiteList Script', requester: 'تیم CDN', method: 'Opensourse/Github', language: 'C', price: '30000000', gitUrl: 'https://github.com/features/codespaces', author: 'حسن سیدی' },
        { name: 'cPanel Quick Installation', requester: 'تیم CDN', method: 'Opensourse/Github', language: '-', price: '5000000', gitUrl: 'https://github.com/features/codespaces', author: 'حسن سیدی' },
        { name: 'Dynamic DNS', requester: 'تیم CDN', method: 'Opensourse/Github', language: '-', price: '15000000', gitUrl: 'https://github.com/features/codespaces', author: 'حسن سیدی' },
        { name: 'CLI to work with CDN', requester: 'تیم CDN', method: 'Opensourse/Github', language: '-', price: '15000000', gitUrl: 'https://github.com/features/codespaces', author: 'حسن سیدی' },
    ];

    getProjects() {
        return this.#projectsArray;
    }
}

export class StructureModel {
    #structureArray = [
        {
            title: 'جلسات استراتژی',
            content: [
                'هر سال یک بار مجموعه جلساتی تحت عنوان جلسات برنامه ریزی استراتژیک برگزار می‌شود. بر اساس این جلسات تیم راهبری داستان سال را می‌نویسد و پس از بحث و تبادل نظر OKR یک ساله‌ی شرکت نگارش می‌شود.',
                'پس از گذشت 6 ماهه مجموعه جلساتی در راستای بازنگری و یا اصلاح استراتژی و یا OKR سازمان متناسب با رخدادهای 6 ماه گذشته برگزار می‌شود',
            ],
            subtitle: 'حاضرین',
            subcontent: 'تمامی اعضای شرکت می‌توانند در این جلسات حضور پیدا کنند. حضور راهبرهای هر تیم در این جلسات اجباری است.'
        },
        {
            title: 'جلسات حاکمیت دایره',
            content: [
                'جلسات حاکمیت دایره به منظور لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است.',
                'پس از گذشت 2 ماه جلسه ای برای بازنگری و یا اصلاح حاکمیت دایره و یا سازمان متناسب با رخدادهای آن 2 ماه برگزار می‌شود',
            ],
            subtitle: 'حاضرین',
            subcontent: 'تمامی اعضای شرکت می‌توانند در این جلسات حضور پیدا کنند. حضور راهبرهای هر تیم در این جلسات اجباری است.'
        },
        {
            title: 'جلسات برنامه‌ریزی اسپرینت/کانبان',
            content: [
                'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد',
                'و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد',
                'با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد'
            ],
            subtitle: 'حاضرین',
            subcontent: 'فقط راهبرهای تیم‌ها در این جلسات حضور خواهند داشت و حضور آنها اجباری است..'
        },
        {
            title: 'جلسات محصول',
            content: [
                'در جلسات محصول ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد',
            ],
            subtitle: 'حاضرین',
            subcontent: 'تمامی اعضای شرکت می‌توانند در این جلسات حضور پیدا کنند. حضور راهبرهای هر تیم در این جلسات اجباری است.'
        }
    ];

    getStructures() {
        return this.#structureArray;
    }
}