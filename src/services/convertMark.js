const convertMark = (markValue) => {
  if (markValue >= 1 && markValue <= 2) return 100;
  if (markValue > 2 && markValue < 3) return 100 + (markValue - parseInt(markValue, 10)) * 10;
  if (markValue >= 3 && markValue < 4) return 110 + (markValue -parseInt(markValue, 10)) * 10;
  if (markValue >= 4 && markValue < 5) return 120 + (markValue - parseInt(markValue, 10)) * 10;
  if (markValue >= 5 && markValue < 6) return 130 + (markValue - parseInt(markValue, 10)) * 10;
  if (markValue >= 6 && markValue < 7) return 140 + (markValue - parseInt(markValue, 10)) * 10;
  if (markValue >= 7 && markValue < 8) return 150 + (markValue - parseInt(markValue, 10)) * 10;
  if (markValue >= 8 && markValue < 9) return 160 + (markValue - parseInt(markValue, 10)) * 10;
  if (markValue >= 9 && markValue < 10) return 170 + (markValue - parseInt(markValue, 10)) * 10;
  if (markValue >= 10 && markValue < 11) return 180 + (markValue - parseInt(markValue, 10)) * 10;
  if (markValue >= 11 && markValue < 12) return 190 + (markValue - parseInt(markValue, 10)) * 10;
  if (+markValue === 12) return 200;
};

export default convertMark;