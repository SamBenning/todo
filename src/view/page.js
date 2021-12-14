import './page.style.scss';

const page = (() => {

    const createPage = () => {
        const pageContainer = document.createElement('div');
        pageContainer.classList.add('page-container');
        pageContainer.innerText = 'hello world';
        return pageContainer;
    }

    return {
        createPage
    }
})();

export default page;