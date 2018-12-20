import { Component, OnInit, Output,EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-partModal',
  templateUrl: './partModal.component.html',
  styleUrls: ['./partModal.component.css']
})
export class PartModalComponent implements OnInit {
  @Input() partType: string;
  @Output() modalStat = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  closeModal(){
    this.modalStat.emit('none');
  }

}
