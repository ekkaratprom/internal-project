export type Assignment = {
  assignmentName: string;
  billableTime: number;
  completedStatus: boolean;
  endDate: string;
  estimateTime: number;
  projectId: number;
};

export type Project = {
  projectId: number;
  projectName: string;
};

export type AssignmentResponse = {
  id: number;
  assignmentName?: string;
  billableTime?: number;
  estimateTime?: number;
  actualTime?: number;
  completedStatus?: boolean;
  deletedStatus: boolean;
  project?: Project;
};

export type CardList = {
  assignmentName?: string;
  billableTime?: number;
  estimateTime?: number;
  completedStatus: boolean;
  totalActualTime?: number;
  cardObj: CardObj[];
};

export type CardLists = {
  assignmentId: number;
  assignmentName: string;
  billableTime: number;
  estimateTime: number;
  completedStatus: boolean;
  endDate: null | string;
  totalActualTime: number | null;
  cardObj: CardObj[];
};

export type CardObj = {
  cardId: number;
  cardName: string;
  cardActualTime: number;
  cardDate: string;
};


export type AssignmentList = {
  id: number,
  assignmentName?: string,
};

export type CardForm = {
  actualTime: number,
  assignmentId: number,
  cardDate: Date,
  cardName: string,
  userId: number,
};

export type DeletedStatusAssignment = {
  deletedStatus: boolean;
};

export type CompleteStatus = {
  completedStatus: boolean;
};

