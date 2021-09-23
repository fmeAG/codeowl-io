import create from 'zustand';

interface NavItem {
  label: string;
  href: string;
}

interface INavStore {
  topNav: NavItem[];
}

export const useNavStore = create<INavStore>((set) => ({
  topNav: [
    { label: 'Leistungen', href: '/#services' },
    { label: 'Pakete', href: '/#plans' },
    { label: 'Unternehmen', href: 'https://fme.de' },
  ],
}));
