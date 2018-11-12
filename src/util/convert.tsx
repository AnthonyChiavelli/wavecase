import { ISettings } from '../types/settings';

function getIndexIgnoringCrud(str: string, index: number): number {
  return index - str.substring(0, index).split('').filter(c => /[^\w]/.test(c)).length;
}

export default function(input: string, settings: ISettings): string {
  if (settings.mode === 'alternating') {
    const getTrueIndex = (i: number) => settings.ignoreCrud ? getIndexIgnoringCrud(input, i) : i;
    return input.split('').map((l, i) => (getTrueIndex(i) % 2 === 0) ? l.toLocaleUpperCase() : l.toLocaleLowerCase()).join('');
  }
  if (settings.mode === 'randomized') {
    return input.split('').map(l => (Math.random() < settings.upperCaseBias) ? l.toLocaleUpperCase() : l.toLocaleLowerCase()).join('');
  }
  return input.toUpperCase();
};