import { backendVariants } from './backend';
import { dataVariants } from './data';
import { frontendVariants } from './frontend';
import { generalVariant1 } from './general/variant1';
import { productVariant1 } from './product/variant1';
import type { QuizMap } from './types';

export const quizMap: QuizMap = {
  backend: { variants: backendVariants },
  product: { variants: [productVariant1] },
  data: { variants: dataVariants },
  frontend: { variants: frontendVariants },
  general: { variants: [generalVariant1] },
};
