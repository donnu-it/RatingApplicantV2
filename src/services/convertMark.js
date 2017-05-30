const convertMark = (markValue) => {
  if (markValue > 0 && markValue <= 2) return 100;
  if (markValue > 2 && markValue <= 3) return 100 + (markValue - markValue.toFixed(2));
  if (markValue > 0 && markValue <= 2) return 100;
  if (markValue > 0 && markValue <= 2) return 100;
  if (markValue > 0 && markValue <= 2) return 100;
  if (markValue > 0 && markValue <= 2) return 100;
  if (markValue > 0 && markValue <= 2) return 100;
//  switch (true) {
//    case (ball_12 > 0) && (ball_12 <= 2):
//      return 100;
//    case ball_12 > 2 && ball_12 < 3:
//      return 100 + (ball_12 - parseInt(ball_12, 10)) * 10;
//    case ball_12 >= 3 && ball_12 < 4:
//      return 110 + (ball_12 - parseInt(ball_12, 10)) * 10;
//    case ball_12 >= 4 && ball_12 < 5:
//      return 120 + (ball_12 - parseInt(ball_12, 10)) * 10;
//    case ball_12 >= 5 && ball_12 < 6:
//      return 130 + (ball_12 - parseInt(ball_12, 10)) * 10;
//    case ball_12 >= 6 && ball_12 < 7:
//      return 140 + (ball_12 - parseInt(ball_12, 10)) * 10;
//    case ball_12 >= 7 && ball_12 < 8:
//      return 150 + (ball_12 - parseInt(ball_12, 10)) * 10;
//    case ball_12 >= 8 && ball_12 < 9:
//      return 160 + (ball_12 - parseInt(ball_12, 10)) * 10;
//    case ball_12 >= 9 && ball_12 < 10:
//      return 170 + (ball_12 - parseInt(ball_12, 10)) * 10;
//    case ball_12 >= 10 && ball_12 < 11:
//      return 180 + (ball_12 - parseInt(ball_12, 10)) * 10;
//    case ball_12 >= 11 && ball_12 < 12:
//      return 190 + (ball_12 - parseInt(ball_12, 10)) * 10;
//    case ball_12 === 12:
//      return 200;
//    default:
//      return 0;
//  }
};

export default convertMark;