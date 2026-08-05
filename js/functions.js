const checkLength = (str, num) => str.length <= num;

checkLength('проверяемая строка', 20);
checkLength('проверяемая строка', 18);
checkLength('проверяемая строка', 10);

const palindrom = (str) => {
  const normalized = str.toLowerCase().replaceAll(/\s/g, '');
  const reversed = normalized.split('').reverse().join('');

  return normalized === reversed;
};

palindrom(' топот ');
palindrom('ДовОд');
palindrom('Кекс');
palindrom('Лёша на полке клопа нашёл ');

const getNumber = (data) => {
  const str = String(data);
  const digits = str.match(/\d/g);

  if (!digits) {
    return NaN;
  }

  return Number(digits.join(''));
};

getNumber('2023 год');
getNumber('ECMAScript 2022');
getNumber('1 кефир, 0.5 батона');
getNumber('агент 007');
getNumber('а я томат');
getNumber(2023);
getNumber(-1);
getNumber(1.5);

const timeToMinutes = (time) => {
  const [hours, minutes] = time.split(':').map(Number);

  return hours * 60 + minutes;
};

const isWithinWorkingHours = (workStart, workEnd, meetingStart, meetingDuration) => {
  const startMinutes = timeToMinutes(workStart);
  const endMinutes = timeToMinutes(workEnd);
  const meetingStartMinutes = timeToMinutes(meetingStart);
  const meetingEndMinutes = meetingStartMinutes + meetingDuration;

  return meetingStartMinutes >= startMinutes && meetingEndMinutes <= endMinutes;
};

isWithinWorkingHours('08:00', '17:30', '14:00', 90);
isWithinWorkingHours('8:0', '10:0', '8:0', 120);
isWithinWorkingHours('08:00', '14:30', '14:00', 90);
isWithinWorkingHours('14:00', '17:30', '08:0', 90);
isWithinWorkingHours('8:00', '17:30', '08:00', 900);
