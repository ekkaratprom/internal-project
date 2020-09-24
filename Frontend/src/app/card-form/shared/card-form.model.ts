export type CardForm = {
    userId: number;
    taskName: string;
    projectId: number;
    referenceLink: string;
    estimateTime: number;
    actualTime: number;
    billableTime: number;
    taskDate: string;
    completedStatus?: boolean;
};
