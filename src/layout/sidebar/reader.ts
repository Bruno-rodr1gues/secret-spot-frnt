import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-sidebar',
  imports: [ButtonModule],
  templateUrl: './reader.html',
  styleUrl: './reader.scss',
})
export class Reader {}
