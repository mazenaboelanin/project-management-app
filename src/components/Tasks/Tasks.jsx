import NewTask from "../NewTask/NewTask";

export default function Tasks(){
  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-700 my-4">Tasks</h2>

      <NewTask />

      <p className="text-stone-800 mb-4">
        This prokect don't have any tasks yet. Click the "Add Task" button to add a new task.
      </p>

      <ul>

      </ul>
    </section>
  );
}