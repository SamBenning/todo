import flatpickr from 'flatpickr';
import './taskComponent.style.scss';

const taskComponent = (() => {

    const createTaskComponent = () => {
        const taskComponentContainer = document.createElement('div');
        const taskCheckBox = document.createElement('input');
        const taskDatePicker = document.createElement('input');

        taskCheckBox.type = 'checkbox';
        taskDatePicker.type = 'text';

        flatpickr(taskDatePicker);

        taskComponentContainer.classList.add('task-component-container');
        taskCheckBox.classList.add('task-checkbox');
        taskDatePicker.classList.add('task-date-picker');

        taskComponentContainer.appendChild(taskCheckBox);
        taskComponentContainer.appendChild(taskDatePicker);
        return taskComponentContainer;

    }

    return {
        createTaskComponent
    }

})();

export default taskComponent