import type { StreamKey } from '../quizzes/types';

const getVariantCursorKey = (stream: StreamKey) => `quiz-variant-cursor-${stream}`;

export const getNextVariantIndex = (stream: StreamKey) => {
  const key = getVariantCursorKey(stream);

  const current = Number(localStorage.getItem(key) || 0);

  const next = current;

  localStorage.setItem(key, String(current + 1));

  return next;
};
