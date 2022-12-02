import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  password = '';
  includeLetters = false;
  includeMayus = false;
  includeNumbers = false;
  includeSymbols = false;
  length = 0;
  validInclude = true;
  totalOptions = 0;

  canGenerate() {
    return this.length && this.totalOptions;
  }

  calculateValidOptions() {
    this.totalOptions =
      Number(this.includeLetters) +
      Number(this.includeMayus) +
      Number(this.includeNumbers) +
      Number(this.includeSymbols);

    this.validInclude = this.length > this.totalOptions;
  }

  onLengthChange(event: Event) {
    const parsedValue = parseInt((event.target as HTMLInputElement).value);
    if (!isNaN(parsedValue)) this.length = parsedValue;
    this.calculateValidOptions();
  }

  onUseLettersChange() {
    this.includeLetters = !this.includeLetters;
    this.calculateValidOptions();
  }

  onUseMayusChange() {
    this.includeMayus = !this.includeMayus;
    this.calculateValidOptions();
  }

  onUseNumbersChange() {
    this.includeNumbers = !this.includeNumbers;
    this.calculateValidOptions();
  }

  onUseSymbolsChange() {
    this.includeSymbols = !this.includeSymbols;
    this.calculateValidOptions();
  }

  onButtonClick(): void {
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const mayus = letters.toUpperCase();
    const numbers = '1234567890';
    const symbols = '!@#$%^&*()';
    let validChars = '';
    let generatedPassword = '';

    if (this.includeLetters) validChars += letters;
    if (this.includeLetters) validChars += mayus;
    if (this.includeNumbers) validChars += numbers;
    if (this.includeSymbols) validChars += symbols;

    for (let i = 0; i < this.length; i++) {
      const index = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[index];
    }

    this.password = generatedPassword;
  }
}
