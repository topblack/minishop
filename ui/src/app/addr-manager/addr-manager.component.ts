import { Component, OnInit, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Params } from '@angular/router';

import { ToptipsComponent } from 'ngx-weui/toptips';
import { PopupComponent } from 'ngx-weui/popup';

import { User } from '../models/user';
import { Address } from '../models/address';
import { UserService } from '../service/user.service';
import { InfiniteLoaderComponent } from 'ngx-weui';
import { Observable } from 'rxjs/Observable';

const MODE_ADD = 0;
const MODE_EDIT = 1;

@Component({
  selector: 'app-addr-manager',
  templateUrl: './addr-manager.component.html',
  styleUrls: ['./addr-manager.component.css']
})
export class AddrManagerComponent implements OnInit {


  @ViewChild('editorPop') editorPop: PopupComponent;
  @ViewChild('toptips') toptips: ToptipsComponent;

  userId: string;
  user: User;
  addressList: Address[];
  edittingAddr: Address;
  tempAddr: Address;

  counter = 1;
  loadedAddrCount = 0;
  variety: number;
  addrIdCounter: number;

  // 0 for add, 1 for edit
  editMode = MODE_ADD;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private userService: UserService) {
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => this.userId = params['uid']);
    this.userService.getUser(this.userId).then(usr => this.user = usr);
    this.getAddrList();
    this.variety = this.userService.getAddrVariety();
    this.addrIdCounter = this.variety + 1;
    this.tempAddr = new Address('00' + this.addrIdCounter.toString(), '姓名', '联系电话', false, '请选择省', '', '', '详细地址');
    this.edittingAddr = this.tempAddr;
  }

  // 获取 addrStepper * counter 数量的收货地址列表； 如果大于所有收货地址量，则返回全部
  getAddrList() {
    this.userService.getAddrList(this.userId, this.counter).then(addrs => this.addressList = addrs);
  }

  // 返回上个页面，返回之前保存修改过的收货地址；
  goBack(): void {
    this.location.back();
  }

  // 下拉获取更多收货地址
  onLoadMoreAddr(addrMComp: InfiniteLoaderComponent) {
    Observable.timer(1500).subscribe(() => {
      this.counter++;
      this.getAddrList();
      if (this.addressList.length === this.variety) {
        addrMComp.setFinished();
        return;
      }
      addrMComp.resolveLoading();
    });
  }

  // 用户双击一个地址，则返回上级页面
  onSelectAddr(selectAddr: Address): void {
    // this.location.back();
  }

  onEditAddr(selectAddr: Address): void {
    this.editMode = MODE_EDIT;
    this.edittingAddr = selectAddr;
    this.editorPop.show();
  }

  onDeleteAddr(selectAddr: Address): void {
    if (selectAddr.asDefault) {
      this.toptips.type = 'warn';
      this.toptips.text = ' 不能删除默认收货地址! ';
      this.toptips.onShow();
    } else {
      this.userService.deleteAddr(selectAddr);
      this.getAddrList();
    }
  }

  onAddAddr(): void {
    this.editMode = MODE_ADD;
    this.edittingAddr = this.tempAddr;
    this.editorPop.show();
  }

  confirmEditting(): void {
    this.userService.editAddr(this.edittingAddr);

    if (this.editMode === MODE_ADD) {
      this.addrIdCounter++;
      this.tempAddr = new Address(this.addrIdCounter.toString(), '姓名', '联系电话', false, '', '', '', '详细地址');
    }

    this.getAddrList();
    this.edittingAddr = this.tempAddr;
    this.editMode = MODE_ADD;
  }

  cancelEditting(): void {
    this.edittingAddr = this.tempAddr;
    this.editMode = MODE_ADD;
  }

  setDefaultAddr(addr: Address) {
    this.userService.clearDefaultFlag();
    addr.setAsDefault(true);
    this.userService.editAddr(addr);
  }
}
