import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  password = '';
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;
  length = 0;

  canGenerate() {
    return (
      this.length &&
      (this.includeLetters || this.includeNumbers || this.includeSymbols)
    );
  }

  onLengthChange(event: Event) {
    const parsedValue = parseInt((event.target as HTMLInputElement).value);
    if (!isNaN(parsedValue)) this.length = parsedValue;
  }

  onUseLettersChange() {
    this.includeLetters = !this.includeLetters;
  }

  onUseNumbersChange() {
    this.includeNumbers = !this.includeNumbers;
  }

  onUseSymbolsChange() {
    this.includeSymbols = !this.includeSymbols;
  }

  onButtonClick(): void {
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '1234567890';
    const symbols = '!@#$%^&*()';
    let validChars = '';
    let generatedPassword = '';

    if (this.includeLetters) validChars += letters;
    if (this.includeNumbers) validChars += numbers;
    if (this.includeSymbols) validChars += symbols;

    for (let i = 0; i < this.length; i++) {
      const index = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[index];
    }

    this.password = generatedPassword;
  }
}
