export type Assignment = {
    assignmentName: string;
    projectId: number;
    estimateTime: number;
    billableTime: number;
    completedStatus?: boolean;
};

export type Project = {
    projectId: number;
    projectName: string;
}