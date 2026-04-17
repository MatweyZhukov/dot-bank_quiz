import { quizMap } from './index';
import type { StreamKey } from './types';

export const getVariant = (stream: StreamKey) => {
  const streamData = quizMap[stream];

  if (!streamData) {
    throw new Error(`Unknown stream: ${stream}`);
  }

  const variants = streamData.variants;

  if (!variants.length) {
    throw new Error(`No variants for stream: ${stream}`);
  }

  const storageKey = `quiz-${stream}`;
  const saved = localStorage.getItem(storageKey);

  if (saved !== null) return variants[Number(saved)];

  const randomIndex = Math.floor(Math.random() * variants.length);

  localStorage.setItem(storageKey, String(randomIndex));

  return variants[randomIndex];
};
