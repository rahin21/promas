Outline:
--------
Project
|--- Tasks
   |---- subtasks

DB Collections
--------------
User {
  id: UUID;
  name: string;
  email: string;
  password: string; // hash
  projects: [
    Project.id, Project.id
  ];
  tasks: {
    todo: [
      Task.id, Task.id
    ],
    running: [
      Task.id, Task.id
    ],
    done: [
      Task.id, Task.id
    ]
  }
}
Project {
  id: UUID;
  name: string;
  owner: User.id;
  deadline: Date;
  tasks: [
    {
      id: UUID;
      name: string;
      status: string;
      description: string;
      deadline: Date;
      assignee: User.id;
      parent: Project.id;
      subtasks: [
        {
          ...Task;
          parent: Task.id;
        }
      ];
      comments: [
        {
          id: UUID;
          text: string;
          author: User.id;
          date: Date;
          parent: Task.id;
          replies: [
            {
              ...Comment,
              parent: Comment.id;
            }
          ]
        }
      ];
    }
  ];
}


await updateDoc(doc(db, collection_path, id), values);
await getDocs(collection(db, collection_path));
await addDoc(collection(db, collection_path), data);

Pages:
- Dashboard Page - shows project list
- Project Page - shows project details and tasks
- Task Page - shows task details, subtasks and comments
- Profile Page - shows user profile

Task Assignment
Task Status options: todo, running, done
Task Deadline checking

Tasks:
- Project Creation, Update, Delete
- Task Creation, Update, Delete, assign, expiration
   - SubTask {same}
- Comment Creation, Delete
   - Reply {same}