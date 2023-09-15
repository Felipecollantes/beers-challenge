import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { debounce, debounceTime, distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'custom-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit {
  @Input() controlName: string = '';
  @Input() public form: FormGroup;
  @Output() param = new EventEmitter<string>();

  constructor() {
    this.form = new FormGroup({
      search: new FormControl(''),
    });
  }
  ngOnInit(): void {
    this.form.controls['search']?.valueChanges.pipe(debounceTime(500), distinctUntilChanged()).subscribe((response) => {
      this.param.emit(response);
    });
  }
}
