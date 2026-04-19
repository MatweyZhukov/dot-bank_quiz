export const getInitialTime = (timerKey: string | null): number => {
  if (!timerKey) return 60;

  const savedEnd = localStorage.getItem(timerKey);

  if (!savedEnd) {
    const newEnd = Date.now() + 60 * 1000;
    localStorage.setItem(timerKey, String(newEnd));
    return 60;
  }

  return Math.max(0, Math.floor((Number(savedEnd) - Date.now()) / 1000));
};
