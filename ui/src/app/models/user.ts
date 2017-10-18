import { Address } from './address';

export class User {
    name: string;
    id: string;
    portrait: string;
    addressList: Array<Address>;

    constructor(
        iName: string,
        iId: string,
        iPortrait: string
    ) {
        this.name = iName;
        this.id = iId;
        this.portrait = iPortrait;
        this.addressList = new Array<Address>();
    }

    // 添加新的送货地址
    public addAddress(address: Address): void {
        this.addressList.fill(address);
    }

    // 删除送货地址
    public removeAddress(addAddress: Address): void {
        const index = this.addressList.indexOf(addAddress);
        if (index !== -1) {
            this.addressList.splice(index, 1);
        }
    }

    // 编辑送货地址
    public editAddress(oldAddr: Address, newAddr: Address): void {
        const index = this.addressList.indexOf(oldAddr);
        if (index !== -1) {
            this.addressList.splice(index, 1, newAddr);
        } else {
            this.addressList.fill(newAddr);
        }
    }

    // 获取默认送货地址
    public getDefaultAddress(): Address {
        return this.addressList.find(address => address.asDefault === true);
    }
}
