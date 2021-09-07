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
    { label: 'Services', href: '/#services' },
    { label: 'Company', href: 'https://fme.de' },
  ],
}));
