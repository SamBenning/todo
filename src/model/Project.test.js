import Project from './Project';

let testProject = Project('Project 1', [{name:'task1', isComplete:false}, {name:'task2', isComplete:false}]);

let testTask = {name: 'task3', isComplete: false};


test("Testing get name", () => {
    expect(testProject.getName()).toMatch('Project 1');
});

test("Test addTask", () => {
    expect(testProject.addTask(testTask)).toContain(testTask);
})

test("Test removeTask", () => {
    expect(testProject.removeTask(testTask)).not.toContain(testTask);
})