export const createTimer = (TIMER_KEY: string | null) => {
  if (!TIMER_KEY) return;

  const endTime = Date.now() + 60 * 1000;
  localStorage.setItem(TIMER_KEY, String(endTime));
  return endTime;
};
