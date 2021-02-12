const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  const sampleActivityNumber = +sampleActivity;
  if (typeof sampleActivity !== "string" ||
    sampleActivity == null ||
    isNaN(sampleActivityNumber) ||
    sampleActivityNumber <= 0 ||
    sampleActivityNumber > MODERN_ACTIVITY) {

    return false;
  }

  return Math.ceil(Math.log(MODERN_ACTIVITY / +sampleActivity) * HALF_LIFE_PERIOD / 0.693);
};
