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

export type User = {
    userId: number;
    assignee: string;
}

export type Project = {
    projectId: number;
    projectName: string;
}
