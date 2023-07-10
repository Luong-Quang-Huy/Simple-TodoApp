import {useState} from 'react';
import { useDispatchContext } from './AppContext';

export default function AddTask(){
    const [taskContent, setTaskContent] = useState('');
    const dispatch = useDispatchContext();
    const handleContentChange = (e) => {
        setTaskContent(e.target.value);
    }

    const handleCreateTask = () => {
        if(taskContent !== ''){
            dispatch({
                type: 'add',
                content: taskContent
            });
        }
        setTaskContent('');
    }

    return (
      <>
        <input
        className="task-input"
          type="text"
          value={taskContent}
          onChange={handleContentChange}
          placeholder="What do you want to do?"
        />
        <button className={"btn btn--create"} onClick={handleCreateTask}>
          Create
        </button>
      </>
    );
}