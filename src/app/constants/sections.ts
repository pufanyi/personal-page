import { Lang } from '../services/language.service';

export interface TocEntry {
  id: string;
  number: number | null;
  title: Record<Lang, string>;
}

export const SECTION_TITLES = {
  abstract: { en: 'Abstract', zh: '摘要', ja: '概要' },
  education: { en: 'Education', zh: '教育经历', ja: '学歴' },
  publications: {
    en: 'Publications & Research Projects',
    zh: '论文与研究项目',
    ja: '論文・研究プロジェクト',
  },
  experience: { en: 'Experience', zh: '工作经历', ja: '経歴' },
  competitions: { en: 'Competitions', zh: '竞赛', ja: 'コンテスト' },
  teaching: { en: 'Teaching & Activities', zh: '教学与活动', ja: '教育・活動' },
  miscellaneous: { en: 'Miscellaneous', zh: '其他', ja: 'その他' },
} satisfies Record<string, Record<Lang, string>>;

export const SECTIONS: TocEntry[] = [
  { id: 'abstract', number: null, title: SECTION_TITLES.abstract },
  { id: 'education', number: 1, title: SECTION_TITLES.education },
  { id: 'publications-research-projects', number: 2, title: SECTION_TITLES.publications },
  { id: 'experience', number: 3, title: SECTION_TITLES.experience },
  { id: 'competitions', number: 4, title: SECTION_TITLES.competitions },
  { id: 'teaching-activities', number: 5, title: SECTION_TITLES.teaching },
  { id: 'miscellaneous', number: 6, title: SECTION_TITLES.miscellaneous },
];
