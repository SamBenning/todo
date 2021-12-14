import {format, compareAsc} from 'date-fns/addDays';

const Task = (name='', isComplete=false, dueDate = {}, project = {}) => {
    let _name = name;
    let _isComplete = isComplete;
    let _dueDate = dueDate;
    let _project = project;

    const getName = () => {
        return _name;
    }

    const getIsComplete = () => {
        return _isComplete;
    }

    const getDueDate = () => {
        return _dueDate;
    }

    const getProject = () => {
        return _project;
    }

    const setIsComplete = (bool=false) => {
        _dueDate = bool;
    }

    return {
        getName,
        getIsComplete,
        getDueDate,
        getProject,
        setIsComplete
    }
}

export default Task;