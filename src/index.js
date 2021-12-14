import page from './view/page';
import taskComponent from './view/task-component/taskComponent';

console.log('hello world')

const mainPage = page.createPage();
const myTask = taskComponent.createTaskComponent();

mainPage.appendChild(myTask);

document.body.appendChild(mainPage);