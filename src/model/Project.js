import _ from 'lodash';

const Project = (name = '', tasks = []) => {
    let _name = name;
    let _tasks = tasks;

    const addTask = (newTask) => {
        _tasks.push(newTask);
        return _tasks;
    }

    const removeTask = (someTask) => {
        return _.filter(_tasks, function(o) {o === someTask});
    }

    const setName = (newName) => {
        _name = newName;
    }

    const getName = () => _name;
    const getTasks = () => _tasks;

    return {
        addTask,
        setName,
        getName,
        getTasks,
        removeTask
    }

}

export default Project