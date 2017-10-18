export class Address {
    consignee: string;
    phoneNo: string;
    asDefault: boolean;
    province: string;
    city: string;
    region: string;
    detailAddr: string;

    constructor(
        consignee: string,
        phoneNo: string,
        asDefault: boolean,
        province: string,
        city: string,
        region: string,
        detailAddr: string
    ) {
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
