export class AddACleanlinessComplaint{
    location : string;
    levelOfDustiness: number;
    detail : string;
    constructor(location : string,levelOfDustiness:number,detail:string)
    {
        this.location=location;
        this.levelOfDustiness=levelOfDustiness;
        this.detail=detail;
    }
}