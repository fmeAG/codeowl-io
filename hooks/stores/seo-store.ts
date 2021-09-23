import create from 'zustand';

interface ISeoStore {
  description: string;
  title: string;
  additionalHeader?: JSX.Element;
  setSeo: (
    title: string,
    description: string,
    additionalHeader?: JSX.Element
  ) => void;
}

export const useSeoStore = create<ISeoStore>((set) => ({
  description: 'Software Reviews',
  title: 'fme',
  setSeo: (title, description, additionalHeader) =>
    set({
      title,
      description,
      additionalHeader,
    }),
}));
