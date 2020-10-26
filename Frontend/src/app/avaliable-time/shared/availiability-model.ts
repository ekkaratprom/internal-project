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

export type Skill = {
    skillName: string;
}