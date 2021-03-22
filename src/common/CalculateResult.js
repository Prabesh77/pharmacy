export const percentage = (correct, length) => {
  return Math.ceil((correct * 100) / length);
};

export const remarks = percent => {
  if (percent >= 80) {
    return "Excellent!!";
  } else if (percent >= 60 && percent < 80) {
    return "Good!!";
  } else if (percent < 60 && percent >= 40) {
    return "Not Good!";
  } else {
    return "Failed!";
  }
};
