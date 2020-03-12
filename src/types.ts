import { ADD_TASK, REMOVE_TASK, COMPLETE_TASK, CHANGE_FILTER } from './constants';

// Store
export type Filter = string;

export interface ITask {
    id: number,
    text: string,
    isCompleted: boolean,
}

// Actions
interface IAddTaskAction {
    type: typeof ADD_TASK,
    payload: ITask,
}

interface IRemoveTaskAction {
    type: typeof REMOVE_TASK,
    payload: {
        id: number,
    }
}

interface ICompleteTaskAction {
    type: typeof COMPLETE_TASK,
    payload: {
        id: number,
    }
}

interface IChangeFilterAction {
    type: typeof CHANGE_FILTER,
    payload: {
        activeFilter: Filter,
    }
}

export type TaskActionTypes = IAddTaskAction | IRemoveTaskAction | ICompleteTaskAction;
export type FilterActionType = IChangeFilterAction;