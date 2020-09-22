export interface Card {
    name: string;
    id: number;
    projectId: number;
    projectName: string;
    taskName: string;
    estimateTime: number;
    actualTime: number;
    referenceLink: string;
    taskDate: string;
    billableTime: number;
    completedStatus: boolean;
}
