export type UserResponse = {
    userId: number;
    fullName: string;
    position: string;
    skills: Skill[];
    cards: Cards[];
}

export type Cards = {
    totalActualTime: number;
    cardDate: string;
    card: Card[];
}

export type Card = {
    cardName: string;
    actualTime: number;
    cardId: number;
    createDate: string;
}




export type Actual = {
    actualTime: number;
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
