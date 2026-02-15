import { Component, ViewEncapsulation } from '@angular/core';
import { HeaderComponent } from './components/header/header';
import { AbstractComponent } from './components/abstract/abstract';
import { EducationComponent } from './components/education/education';
import { PublicationsComponent } from './components/publications/publications';
import { ExperienceComponent } from './components/experience/experience';
import { CompetitionsComponent } from './components/competitions/competitions';
import { TeachingComponent } from './components/teaching/teaching';
import { MiscellaneousComponent } from './components/miscellaneous/miscellaneous';
import { FooterComponent } from './components/footer/footer';
import { ThemeToggleComponent } from './components/theme-toggle/theme-toggle';
import { TableOfContentsComponent } from './components/table-of-contents/table-of-contents';
import { PrintButtonComponent } from './components/print-button/print-button';
import { LanguageSwitcherComponent } from './components/language-switcher/language-switcher';

@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    AbstractComponent,
    EducationComponent,
    PublicationsComponent,
    ExperienceComponent,
    CompetitionsComponent,
    TeachingComponent,
    MiscellaneousComponent,
    FooterComponent,
    ThemeToggleComponent,
    TableOfContentsComponent,
    PrintButtonComponent,
    LanguageSwitcherComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
  encapsulation: ViewEncapsulation.None,
})
export class App {}
