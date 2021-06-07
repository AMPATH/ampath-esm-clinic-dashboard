import dayjs from 'dayjs';

export const toDateFormat = (date: string | Date) => {
  return date === null ? '' : dayjs(date).format('DD-MM-YYYY');
};
