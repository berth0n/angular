import { NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { sanitizeIdentifier } from '@angular/compiler';

export class Article{
    title:string;
    link:string;
    vote:number;
constructor(title:string, link:string, vote?:number){
    this.title=title;
    this.link=link;
    this.vote=vote || 0;
}

votePlus():void{
    ++this.vote;
}
voteMoins():void{
    --this.vote;
}

}
