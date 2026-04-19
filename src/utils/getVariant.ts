import { quizMap } from '../quizzes/index';
import type { StreamKey } from '../quizzes/types';

export const getVariant = (stream: StreamKey, variantIndex: number) => {
  const streamData = quizMap[stream];

  if (!streamData) throw new Error(`Unknown stream: ${stream}`);

  const variants = streamData.variants;

  if (!variants.length) {
    throw new Error(`No variants for stream: ${stream}`);
  }

  return variants[variantIndex % variants.length];
};
