import { GrabTasker } from "../../model/newapisdk"

export interface PropGrabTask {
    task: GrabTasker
    updateData(data: Partial<GrabTasker>): void
}
