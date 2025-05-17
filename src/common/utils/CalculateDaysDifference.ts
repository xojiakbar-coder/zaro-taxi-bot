import dayjs from 'dayjs';

export function CalculateDaysDifference(date: dayjs.Dayjs) {
  if (!dayjs(date).isValid()) {
    return { title: '---', isDelay: false };
  }

  const today = dayjs();
  const targetDate = dayjs(date).toString();

  const diff = today.diff(targetDate, 'second');

  if (diff < 0) {
    return { title: `${Math.ceil(Math.abs(diff / 60 / 60 / 24))} kun qoldi`, isDelay: false };
  } else if (Math.abs(diff / 24 / 60 / 60) > 1) {
    return { title: `${Math.floor(Math.abs(diff / 24 / 60 / 60))} kun kechikdi`, isDelay: true };
  } else {
    return { title: 'Bugun', isDelay: true };
  }
}
