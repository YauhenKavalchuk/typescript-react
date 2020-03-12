import { ADD_TASK, REMOVE_TASK, COMPLETE_TASK } from '../constants';
import { load } from 'redux-localstorage-simple';

const savedTasks = load({ namespace: 'todo-list' });

const initialState = (savedTasks && savedTasks.tasks) ? savedTasks.tasks : [];

const tasks = (state = initialState, { type, payload = {} }) => {
  const { id, text, isCompleted } = payload;

  switch (type) {
    case ADD_TASK :
      return [
        ...state, {
          id,
          text,
          isCompleted,
        }
      ];
    case REMOVE_TASK:
        return [...state].filter(task => task.id !== id);
      case COMPLETE_TASK:
        return [...state].map(task => {
          if(task.id === id) {
            task.isCompleted = !task.isCompleted;
          }
          return task;
        });
    default:
      return state;
  }
}

export default tasks;
