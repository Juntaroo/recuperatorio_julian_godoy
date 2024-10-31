import type { Task } from "@/models/Task";
import type { TaskState } from "@/models/TaskState";
import { defineStore } from "pinia";


export const useTaskStore = defineStore({
    id:'task',
    state:(): TaskState =>({
       loading: false,
       data: []
    }),
    actions: {
        addTask(task : Task): void{
            this.data.push(task)
            console.log(this.data)
        },
        removeTask(task : Task): void{
            const index = this.data.findIndex((item) => item.id == task.id);
            if(index !==-1){
                this.data.splice(index,1)
            }
        },
        updateStatus(task : Task): void{
            //this.data.findIndex((item) => item.id == task.id);
            this.loading = !this.loading
        },
        showAll(){
            this.data
        },
        showCompleted(task: Task): void{
            
        },
        showPendient(task: Task): void{

        }
    }
})