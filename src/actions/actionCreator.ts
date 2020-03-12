import { ADD_TASK, REMOVE_TASK, COMPLETE_TASK, CHANGE_FILTER } from '../constants';
import { TaskActionTypes, FilterActionType, ITask, Filter } from '../types';

export const addTast = (task: ITask): TaskActionTypes => ({
  type: ADD_TASK,
  payload: {
    ...task
  },
});

export const removeTask = (id: number): TaskActionTypes => ({
  type: REMOVE_TASK,
  payload: {
    id,
  },  
});

export const completeTask = (id: number): TaskActionTypes => ({
  type: COMPLETE_TASK,
  payload: {
    id,
  },
});

export const changeFilter = (activeFilter: Filter): FilterActionType => ({
  type: CHANGE_FILTER,
  payload: {
    activeFilter,
  },
});
