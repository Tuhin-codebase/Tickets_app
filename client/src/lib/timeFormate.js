const timeFormeate = (minutes) => {
  const hours = Math.floor(minutes / 60);
  const minutesRemainder = minutes % 60;
  return ` h ${hours} m ${minutesRemainder}`;
};

export default timeFormeate;
