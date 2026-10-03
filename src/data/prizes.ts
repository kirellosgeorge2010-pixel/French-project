import { PrizeStep } from '../types/game';

export const PRIZE_LADDER: PrizeStep[] = [
  { level: 1, amount: 100, label: '100 €', isMilestone: false },
  { level: 2, amount: 200, label: '200 €', isMilestone: false },
  { level: 3, amount: 500, label: '500 €', isMilestone: false },
  { level: 4, amount: 1000, label: '1 000 €', isMilestone: false },
  { level: 5, amount: 2000, label: '2 000 €', isMilestone: true }, // 1er Palier garanti
  { level: 6, amount: 5000, label: '5 000 €', isMilestone: false },
  { level: 7, amount: 10000, label: '10 000 €', isMilestone: false },
  { level: 8, amount: 20000, label: '20 000 €', isMilestone: false },
  { level: 9, amount: 50000, label: '50 000 €', isMilestone: false },
  { level: 10, amount: 100000, label: '100 000 €', isMilestone: true }, // 2e Palier garanti
  { level: 11, amount: 200000, label: '200 000 €', isMilestone: false },
  { level: 12, amount: 300000, label: '300 000 €', isMilestone: false },
  { level: 13, amount: 500000, label: '500 000 €', isMilestone: false },
  { level: 14, amount: 750000, label: '750 000 €', isMilestone: false },
  { level: 15, amount: 1000000, label: '1 000 000 €', isMilestone: true }, // Le Million !
];

/**
 * Returns the guaranteed prize amount based on completed level.
 * If player fails on level 1-5: 0 €
 * If player fails on level 6-10: 2 000 € (milestone at level 5)
 * If player fails on level 11-15: 100 000 € (milestone at level 10)
 */
export function getGuaranteedPrize(currentLevelIndex: number): number {
  if (currentLevelIndex >= 10) {
    return 100000;
  }
  if (currentLevelIndex >= 5) {
    return 2000;
  }
  return 0;
}
