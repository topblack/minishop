import { Component, OnInit, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { PopupComponent } from 'ngx-weui/popup';
import { User } from '../models/user';
import { Address } from '../models/address';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-addr-manager',
  templateUrl: './addr-manager.component.html',
  styleUrls: ['./addr-manager.component.css']
})
export class AddrManagerComponent implements OnInit {

  @ViewChild('editorPop') editorPop: PopupComponent;

  user: User;
  addressList: Address[];
  selectAddr: Address;
  edittingAddr: Address;
  tempAddr: Address;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private userService: UserService) {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.userService.getUser(params.get('uid')))
      .subscribe(user => this.user = user);
    this.addressList = [new Address('张三', '13548977604', true, '', '上海市', '浦东新区', '荷泽路828弄6号601市'),
    new Address('李四', '13548974604', false, '四川省', '成都市', '武侯区', '荷泽路828弄6号601市'),
    new Address('王麻子', '13546977604', false, '', '上海市', '浦东新区', '荷泽路828弄6号601市')];
    this.selectAddr = this.addressList[0];
    this.tempAddr = new Address('姓名', '联系电话', false, '请选择省', '', '', '详细地址');
    this.edittingAddr = this.tempAddr;
  }

  ngOnInit() {
  }

  goBack(): void {
    this.location.back();
  }


  onSelectAddr(selectAddr: Address): void {
    this.location.back();
  }

  onEditAddr(selectAddr: Address): void {
    this.edittingAddr = selectAddr;
    this.editorPop.show();
  }

  onDeleteAddr(selectAddr: Address): void {
    const index = this.addressList.indexOf(selectAddr);
    this.addressList.splice(index, 1);
  }

  onAddAddr(): void {
    this.edittingAddr = new Address('姓名', '联系电话', false, '请选择省', '', '', '详细地址');
    this.editorPop.show();
  }

  confirmEditting(): void {
    this.edittingAddr = this.tempAddr;
  }

  cancelEditting(): void {
    this.edittingAddr = this.tempAddr;
  }
}
