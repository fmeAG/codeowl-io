import create from 'zustand';

interface IThemingStore {
  browserColor: string;
  setBrowserColor: (browserColor: string) => void;
}

export const useThemingStore = create<IThemingStore>((set) => ({
  browserColor: 'rgb(17, 24, 39)',
  setBrowserColor: (browserColor) => set({ browserColor }),
}));
