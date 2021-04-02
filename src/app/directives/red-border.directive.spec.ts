import { RedBorderDirective } from './red-border.directive';
import { Directive, ElementRef, Renderer2, Input } from '@angular/core';


describe('RedBorderDirective', () => {
  const el = new ElementRef({});

  it('should create an instance', () => {
    const directive = new RedBorderDirective(el);
    expect(directive).toBeTruthy();
  });
});
