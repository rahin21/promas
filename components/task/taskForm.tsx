import { Button } from "@/components/ui/button";
import { FormEvent } from 'react'
import FormInput from "../form-input";

export default function TaskForm({ userEmail, project }: { 
  userEmail: string | null,
  project: string | null 
}) {
  async function onSubmit(event: FormEvent<HTMLFormElement>) {

    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const formDataObj = Object.fromEntries(formData)
    
    let tasks = JSON.parse(localStorage.getItem('tasks') || '[]');

    const taskId = formDataObj['name'];

    if (taskId) {
      const taskIndex = tasks.findIndex((task: any) => task.name === taskId)
      if (taskIndex !== -1) {
        tasks[taskIndex] = formDataObj
      } else {
        tasks.push(formDataObj)  
      }
    } else {
      tasks.push(formDataObj)
    }

    localStorage.setItem('tasks', JSON.stringify(tasks));

    window.location.reload();
    

  }

  return (
    <form onSubmit={onSubmit}>
      <FormInput data={{
        label: "Task Name",
        input_name: "name",
        type: "text",
        placeholder: "Write task name here",
        required: true
      }} />
      <FormInput data={{
        label: "Task Description",
        input_name: "description",
        type: "text",
        placeholder: "Write task description here",
        required: true
      }} />
      <FormInput data={{
        label: "Assign User",
        input_name: "assignee",
        type: "email",
        placeholder: "john.doe@company.com",
        required: true
      }} />
      <FormInput data={{
        label: "Deadline",
        input_name: "deadline",
        type: "date",
        placeholder: "Select a date",
        required: true
      }} />
      <div className="hidden">
        <input type="text" name="task_id" value={`${Date.now()}-${Math.random()}`} />
        <input type="text" name="owner" value={userEmail ?? ""} />
        <input type="text" name="project" value={project ?? ""} />
      </div>
      <Button type="submit" className="my-3 px-6">Create Task</Button>
    </form>
  )
}