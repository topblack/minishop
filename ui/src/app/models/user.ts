import { Address } from './address';

export class User {
    name: string;
    id: string;
    portrait: string;

    constructor(
        iName: string,
        iId: string,
        iPortrait: string
    ) {
        this.name = iName;
        this.id = iId;
        this.portrait = iPortrait;
    }
}
