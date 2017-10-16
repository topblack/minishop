import { Component, OnInit, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { PopupComponent } from 'ngx-weui/popup';

@Component({
  selector: 'app-addr-manager',
  templateUrl: './addr-manager.component.html',
  styleUrls: ['./addr-manager.component.css']
})
export class AddrManagerComponent implements OnInit {

  // @ViewChild('editorPop') editorPop: PopupComponent;

  constructor(
    private location: Location) { }

  ngOnInit() {
    // this.editorPop.hide();
  }

  goBack(): void {
    this.location.back();
  }

  // 取消地址创建或者编辑
  cancelEdit(): void {
    // this.editorPop.hide();
  }

  onSave(): void { }
}
