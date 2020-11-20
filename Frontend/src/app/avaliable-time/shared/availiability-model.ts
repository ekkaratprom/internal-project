export type UserResponse = {
  userId: number;
  fullName: string;
  position: string;
  skills: Skill[];
  cards: Cards[];
}

export type Cards = {
  totalActualTime: number;
  totalEstimateTime: number;
  cardDate: string;
  card: Card[];
}

export type Card = {
  cardName: string;
  estimateTime: number | null;
  actualTime: number | null;
  cardId: number;
  createDate: string;
}




export type Total = {
  actualTime: number;
  estimateTime: number;
}

export type DeleteStatus = {
  deletedStatus: boolean;
}


export type Position = {
  id: number;
  positionName: string;
}

export type Skills = {
  id: number;
  skillName: string;
  iconPath: string;
}

export type Skill = {
  skillName: string;
  iconPath: string;
}









