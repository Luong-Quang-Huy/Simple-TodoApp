import { createContext } from "react";
import { useReducer } from "react";
import { useContext } from "react";

let dummyId = 2;

const TasksContext = createContext(null);
const DispatchContext = createContext(null);

export function useTasksContent(){
    return useContext(TasksContext);
}

export function useDispatchContext(){
    return useContext(DispatchContext);
}

function taskReducer(tasks,action){
    switch(action.type){
        case 'add':{
            return [
                ...tasks,
                {
                id: dummyId++,
                content: action.content,
                done: false
                }
            ]
        }
        case 'toggle-check':{
            return tasks.map(task => task.id === action.taskId ? {...task, done: action.checked} : task);
        }
        case 'update':{
            return tasks.map(task => task.id === action.taskId ? {...task, content: action.content} : task);
        }
        case 'delete':{
            return tasks.filter(task => task.id !== action.taskId);
        }
        default:{
            throw Error('Unknow action: ' + action.type);
        }
    }
}

export function TasksProvider({children}){
    const [tasks, dispatch] = useReducer(taskReducer, initialTasks);

    return (
        <TasksContext.Provider value={tasks}>
          <DispatchContext.Provider value={dispatch}>
            {children}
          </DispatchContext.Provider>
        </TasksContext.Provider>
    );
}

const initialTasks = [
  { id: 0, content: "làm trận lol", done: true },
  { id: 1, content: "làm bài tập", done: false },
];
