import NewTask from "../NewTask/NewTask";

export default function Tasks({tasks, onAddTask, onDeleteTask}){
  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-700 my-4">Tasks</h2>

      <NewTask onAddTask={onAddTask} onDeleteTask={onDeleteTask} />

      { 
        tasks.length === 0 && 
        <p className="text-stone-800 mb-4">
        This prokect don't have any tasks yet. Click the "Add Task" button to add a new task.
        </p>
      }

      {
        tasks.length > 0 &&
        <ul className="p-4 mt-8 rounded-md bg-stone-100">
          { tasks.map(task => 
          <li key={task.id} className="flex justify-between my-4">
            <span>{task.text}</span>
            <button className="text-stone-700 hover:text-red-500" onClick={() => onDeleteTask(task.id)}>Delete</button>
          </li>
          )}
        </ul>
      }

      <ul>

      </ul>
    </section>
  );
}