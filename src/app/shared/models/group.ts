export class Group {

  public $key:string;

  constructor(public name:string, public ownerId:string, public userIds:string[]) {

  }

}
