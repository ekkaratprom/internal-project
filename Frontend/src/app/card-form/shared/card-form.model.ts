export class CardForm {
    constructor(
        // public id: number,
        // public projectId: number,
        public assignee: string,
        public description: string,
        public projectName: string,
        public referenceLink: string,
        public estimateTime: number,
        public actualTime: number,
        public billableTime: number,
        public timeStamp: string) { }

}
