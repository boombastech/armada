import {Component, Input, OnInit} from '@angular/core';
import {ValidationResults} from '../fleet-builder/fleet-validation.service';

@Component({
  selector: 'app-validation-results',
  templateUrl: './validation-results.component.html',
  styleUrls: ['./validation-results.component.css']
})
export class ValidationResultsComponent implements OnInit {

  @Input()
  public validationResults: ValidationResults;

  constructor() { }

  ngOnInit() {
  }
}
