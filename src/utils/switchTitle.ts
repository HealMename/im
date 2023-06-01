const title:any = {
  zh_cn: 'it学霸',
  en: 'IT Web-IM',
};
export function switchTitle(locale:string) {
  return document.title = title[locale];
}
