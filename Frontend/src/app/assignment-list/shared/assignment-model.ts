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

export type AssignmentResponse = {
    assignmentName: string;
    projectId: number;
    estimateTime: number;
    billableTime: number;
    completedStatus?: boolean;
    actualTime: number;
};

export type CardList = {
    assignmentName?: string;
    billableTime?: number;
    estimateTime?: number;
    actualTime: number;
    cardObj: CardObj[];
}

export type CardObj = {
    cardName: string;
    cardActualTime: number;
    cardDate: string;
}