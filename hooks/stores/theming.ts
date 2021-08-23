import create from 'zustand';

interface IThemingStore {
  browserColor: string;
  setBrowserColor: (browserColor: string) => void;
}

export const useThemingStore = create<IThemingStore>((set) => ({
  browserColor: 'rgb(152,0,0)',
  setBrowserColor: (browserColor) => set({ browserColor }),
}));
