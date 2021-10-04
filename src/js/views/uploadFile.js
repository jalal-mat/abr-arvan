export const portofolioObj = {
    uploadBtn: document.getElementById('portofolio_upload_button'),
    fileBtn: document.getElementById('portofolio_file_button'),
    fileInput: document.getElementById('portofolio_input')
};

export const resomeObj = {
    uploadBtn: document.getElementById('resume_upload_button'),
    fileBtn: document.getElementById('resume_file_button'),
    fileInput: document.getElementById('resume_input')
};

const uploadError = function (obj) {
    obj.fileInput.setAttribute('placeholder', '');

    const uploadContainer = obj.uploadBtn.closest('.register__upload-container');
    uploadContainer.classList.remove('register__upload-container--active');
    uploadContainer.classList.add('register__upload-container--error');

    const hintNum = uploadContainer.getAttribute('data-hint');

    document.querySelector(`.register__upload-hint--${hintNum}`).style.color = '#FE5959';
    document.querySelector(`.register__upload-hint--${hintNum}`).innerText = 'فایل بزرگتر از حد مجاز است';
};

const uploadOk = function (obj) {
    const uploadContainer = obj.uploadBtn.closest('.register__upload-container');

    uploadContainer.classList.remove('register__upload-container--error');
    uploadContainer.classList.add('register__upload-container--active');
    const hintNum = uploadContainer.getAttribute('data-hint');

    document.querySelector(`.register__upload-hint--${hintNum}`).style.color = '#9DB0CB';
    document.querySelector(`.register__upload-hint--${hintNum}`).innerText = 'حداکثر حجم مجاز 1 مگابایت می‌باشد';
};

const checkFileSize = function (obj) {
    if (!obj.fileBtn.files || !obj.fileBtn.files.length) {
        return false;
    }

    const MB = parseFloat(obj.fileBtn.files[0].size) / 1024 / 1024;

    if (MB > 1) {
        return false;
    }
    return true;
};

export const uploadFileHandler = function (obj) {
    obj.uploadBtn.addEventListener('click', openDialog);

    function openDialog() {
        obj.fileBtn.click();
    }

    obj.fileBtn.addEventListener('change', function () {
        if (checkFileSize(obj)) {
            uploadOk(obj);
            obj.fileInput.value = obj.fileBtn.value;
            return true;
        } else {
            uploadError(obj);
            obj.fileInput.value = '';
            return false;
        }
    });
};