export class User {
    name: string;
    id: string;
    portrait: URL;
    addressList: Array<string>;

    constructor(
        iName: string,
        iId: string,
        iPortrait: URL
    ) {
        this.name = iName;
        this.id = iId;
        this.portrait = iPortrait;
        this.addressList = new Array<string> ();
    }

    public addAddress(address: string) {
    }
}
