export type Language = 'km' | 'en';

export interface Wish {
  id: string;
  name: string;
  attending: boolean;
  guestsCount?: number;
  message: string;
  createdAt: string;
  relation?: string;
}

export interface ProgrammeItem {
  time: string;
  timeEn: string;
  title: string;
  titleEn: string;
  desc: string;
  descEn: string;
  iconName?: string;
}
