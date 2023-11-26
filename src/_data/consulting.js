const CONSULTING_STATUS = {
  AVAILABLE: "AVAILABLE",
  UNAVAILABLE: "UNAVAILABLE",
};

const consulting = {
  status: CONSULTING_STATUS.UNAVAILABLE,
  clear_status_after: 1704091020,
  timezone: "UTC+7",
  hours_per_week: 25,
};

module.exports = () => {
  return consulting;
};
