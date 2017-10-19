export class Address {
    id: string;
    consignee: string;
    phoneNo: string;
    asDefault: boolean;
    province: string;
    city: string;
    region: string;
    detailAddr: string;

    constructor(
        id: string,
        consignee: string,
        phoneNo: string,
        asDefault: boolean,
        province: string,
        city: string,
        region: string,
        detailAddr: string
    ) {
        this.id = id;
        this.consignee = consignee;
        this.phoneNo = phoneNo;
        this.asDefault = asDefault;
        this.province = province;
        this.city = city;
        this.region = region;
        this.detailAddr = detailAddr;
    }

    public toDisplayAddr(): string {
        return this.province.concat(this.city, this.region, this.detailAddr);
    }

    public setAsDefault(asDefault: boolean): void {
        this.asDefault = asDefault;
    }
}
