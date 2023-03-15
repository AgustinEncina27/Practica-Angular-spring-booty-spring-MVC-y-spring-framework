export class Notes{
    _id:number;
    title: String;
    content: String;
    lastDate: Date;
    archived: boolean

    constructor(_id:number,title: String,content: String,lastDate: Date,archived: boolean){
        this._id=_id,
        this.title=title;
        this.content=content;
        this.lastDate=lastDate;
        this.archived=archived
    }
    

}