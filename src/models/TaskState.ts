import type { Task } from "./Task";

export interface TaskState {
    loading: boolean
    data: Task[]
}