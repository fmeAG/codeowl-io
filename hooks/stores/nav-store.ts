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
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/#services' },
    { label: 'Team', href: '/team' },
    { label: 'Company', href: 'https://fme.de' },
  ],
}));
