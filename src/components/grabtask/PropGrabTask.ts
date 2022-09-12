import { ITask } from "../../model/Task"

export interface PropGrabTask {
    task: ITask
    updateData(data: Partial<ITask>): void
}
