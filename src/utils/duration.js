const getHours = (duration) => {
  const hours = Math.floor(duration / 60);
  if (hours === 0) {
    return '';
  } else 
  return hours;
}

const getMinutes = (duration, hours) => {
  const minutes = duration - (hours * 60);
  if (minutes === 0) {
    return '';
  } else
    return minutes;
}

const hours = getHours();
const minutes = getMinutes();

const getHoursTitle = (hours) => {
  let hoursTitle;

  if (hours === '') {
    hoursTitle = '';
  } else
    if (
      hours.toString().endsWith('11')
      ||
      hours.toString().endsWith('12')
      ||
      hours.toString().endsWith('13')
      ||
      hours.toString().endsWith('14')
      ||
      hours.toString().endsWith('15')
      ||
      hours.toString().endsWith('16')
      ||
      hours.toString().endsWith('17')
      ||
      hours.toString().endsWith('18')
      ||
      hours.toString().endsWith('19')
      ||
      hours.toString().endsWith('5')
      ||
      hours.toString().endsWith('6')
      ||
      hours.toString().endsWith('7')
      ||
      hours.toString().endsWith('8')
      ||
      hours.toString().endsWith('9')
      ||
      hours.toString().endsWith('0')
    ) {
      hoursTitle = 'часов';
    } else
      if (
        hours.toString().endsWith('2')
        ||
        hours.toString().endsWith('3')
        ||
        hours.toString().endsWith('4')
      ) {
        hoursTitle = 'часа';
      } else
        if (hours.toString().endsWith('1')) {
          hoursTitle = 'час';
        }
  return hoursTitle;
}

const getMinutesTitle = (minutes) => {
  let minutesTitle;

  if (minutes === '') {
    minutesTitle = 'ровно';
  } else
    if (
      minutes.toString().endsWith('11')
      ||
      minutes.toString().endsWith('12')
      ||
      minutes.toString().endsWith('13')
      ||
      minutes.toString().endsWith('14')
      ||
      minutes.toString().endsWith('15')
      ||
      minutes.toString().endsWith('16')
      ||
      minutes.toString().endsWith('17')
      ||
      minutes.toString().endsWith('18')
      ||
      minutes.toString().endsWith('19')
      ||
      minutes.toString().endsWith('5')
      ||
      minutes.toString().endsWith('6')
      ||
      minutes.toString().endsWith('7')
      ||
      minutes.toString().endsWith('8')
      ||
      minutes.toString().endsWith('9')
      ||
      minutes.toString().endsWith('0')
    ) {
      minutesTitle = 'минут';
    } else
      if (
        minutes.toString().endsWith('2')
        ||
        minutes.toString().endsWith('3') 
        ||
        minutes.toString().endsWith('4')
      ) {
        minutesTitle = 'минуты';
      } else
        if (minutes.toString().endsWith('1')) {
          minutesTitle = 'минута'
        }
  return minutesTitle;
}

export { getHoursTitle, getMinutesTitle, getHours, getMinutes };