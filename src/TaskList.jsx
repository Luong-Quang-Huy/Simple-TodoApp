import { useTasksContent, useDispatchContext} from "./AppContext";
export default function TaskList({filterType}){
    const tasks = useTasksContent();
    const pendingTask = tasks.reduce((count, task) => task.done ? count : count + 1, 0);
    let filtedTasks = [];
    switch(filterType){
        case 'all':
            filtedTasks = [...tasks];
            break;
        case 'active':
            filtedTasks = tasks.filter(task => !task.done);
            break;
        case 'complete':
            filtedTasks = tasks.filter(task => task.done);
            break;
        default:
            throw Error('Unknow filter type' + filterType);
            break;
    }
    const taskElements = filtedTasks.map(task => <li key={task.id}><Task task={task}/></li>);
    return (
      <div>
        <ul className="task-list">{taskElements}</ul>
        <p className="pending-task-label">
          {pendingTask === 0 ? "All done. :)" : `${pendingTask} pending task`}
        </p>
      </div>
    );
}

function Task({task}){
    const dispatch = useDispatchContext();

    const handleTaskCheckChange = (e) => {
        dispatch({
          type: "toggle-check",
          taskId: task.id,
          checked: e.target.checked
        });
    }

    const handleDeleteTask = (e) => {
        dispatch({
            type: 'delete',
            taskId: task.id
        });
    }

    return (
      <>
        <div>
          <input
            className="task-checkbox"
            type="checkbox"
            checked={task.done}
            onChange={handleTaskCheckChange}
          />
          <label>{task.content}</label>
          <button
            className="btn--delete"
            onClick={handleDeleteTask}
          >
            Delete
          </button>
        </div>
      </>
    );
}