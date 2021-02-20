import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-search1',
  templateUrl: './search1.component.html',
  styleUrls: ['./search1.component.css']
})
export class Search1Component implements OnInit {

  @Output() searchEvent = new EventEmitter<string>()

  constructor() { }

  ngOnInit(): void {
  }

  emitSearchTerm = (form: NgForm) => {
    console.log(form);
    this.searchEvent.emit(form.form.value.search)
  }
}
