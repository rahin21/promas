export function getTasksFor(project: string) {

    let data = localStorage.getItem("tasks");
    if (data) {
        let all_tasks = JSON.parse(data);
        return all_tasks.filter((task: any) => task.project === project);
    } else {
        return [];
    }

}

export function getTask(task_name: string) {

    let data = localStorage.getItem("tasks");
    if (data) {
        let all_tasks = JSON.parse(data);
        return all_tasks.find((task: any) => task.name === task_name);
    }
    return undefined;

}