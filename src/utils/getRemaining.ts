export const getRemaining = (TIMER_KEY: string | null) => {
  if (!TIMER_KEY) return 60;

  const saved = localStorage.getItem(TIMER_KEY);
  if (!saved) return 60;

  const diff = Math.ceil((Number(saved) - Date.now()) / 1000);
  return diff > 0 ? diff : 0;
};
