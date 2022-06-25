export const digitMonth = m => {
   const monthsToDig = {
      Jan: '01', Feb: '02', Mar: '03', Apr: '04',
      May: '05', Jun: '06', Jul: '07', Aug: '08',
      Sep: '09', Oct: '10', Nov: '11', Dec: '12',
      '': m
   }

   return monthsToDig[m];
}
export const getHtmlDate = s => {
   const dateRgx = /\b(\d\d?)[-/ ]([A-Za-z]{3}|\d\d?),?[-/ ](\d{4})\b/;
   return s.replace(dateRgx, (m, day, month, year) => {
      month = digitMonth(month);
      return `${year}-${month}-${day}`;
   });
}