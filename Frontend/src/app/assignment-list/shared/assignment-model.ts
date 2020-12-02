export type Assignment = {
  assignmentName: string;
  projectId: number;
  estimateTime: number;
  endDate: string;
  billableTime: number;
  completedStatus?: boolean;
};

export type Project = {
  projectId: number;
  projectName: string;
}

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
}

export type CardLists = {
  projectName: string;
  assignmentId: number;
  assignmentName?: string;
  billableTime?: number;
  estimateTime?: number;
  completedStatus: boolean;
  totalActualTime?: number;
  cardObj: CardObj[];
}

export type CardObj = {
  cardName: string;
  cardActualTime: number;
  cardDate: string;
}


export type AssignmentList = {
  id: number,
  assignmentName?: string,
}

export type CardForm = {
  // estimateTime: number,
  // assignmentId: number,
  // cardDate: Date,
  // cardName: string,
  // userId: number,

  assignmentId: number;
  cardDate: string;
  cardName: string;
  estimateTime: number;
  userId: number;
};


export type DeletedStatusAssignment = {
  deletedStatus: boolean;
}

export type CompleteStatus = {
  completedStatus: boolean;
}


export type ProjectSent = {
  projectName: string;
}
