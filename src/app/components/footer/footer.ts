import { Component, inject, computed } from '@angular/core';
import { LanguageService } from '../../services/language.service';

const LOCALE_MAP = { en: 'en-US', zh: 'zh-CN', ja: 'ja-JP' } as const;
const PREFIX = { en: 'Last updated: ', zh: '最后更新：', ja: '最終更新：' } as const;

@Component({
  selector: 'app-footer',
  templateUrl: './footer.html',
})
export class FooterComponent {
  private readonly lang = inject(LanguageService).current;

  readonly lastUpdated = computed(() => {
    const l = this.lang();
    const date = new Date().toLocaleDateString(LOCALE_MAP[l], { month: 'long', year: 'numeric' });
    return PREFIX[l] + date;
  });
}
