import { Popover, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/solid';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { Fragment, useEffect } from 'react';
import { useNavStore } from '../../hooks/stores/nav-store';
import { useThemingStore } from '../../hooks/stores/theming-store';
import { classNames } from '../../utils/classnames';
import { Logo } from './Logo';

export function Navbar(): JSX.Element {
  const { topNav } = useNavStore();
  const { setBrowserColor } = useThemingStore();
  const { route } = useRouter();

  useEffect(() => {
    setBrowserColor('rgb(255,255,255)');
  }, []);

  return (
    <Popover as="header" className="relative">
      <div className="bg-white pt-6 pb-3">
        <nav
          className="relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6"
          aria-label="Global"
        >
          <div className="flex justify-between flex-1">
            <div className="flex items-center justify-between w-full md:w-auto">
              <div className="h-full w-48 relative">
                <Link href="/">
                  <a title="Homepage">
                    <span className="sr-only">Rapid Review</span>
                    <Logo colorClass="text-gray-600 hover:text-gray-800" />
                  </a>
                </Link>
              </div>
              <div className="-mr-2 flex items-center md:hidden">
                <Popover.Button className="bg-gray-900 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-800 focus:outline-none focus:ring-2 focus-ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  <MenuIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
            </div>
            <div className="flex items-center space-x-3 hidden md:flex md:ml-10 space-x-8 ">
              {topNav.map((item) => (
                <Link key={item.label} href={item.href}>
                  <a
                    className={classNames(
                      route === item.href
                        ? 'text-gray-800 hover:text-gray-900 font-bold'
                        : 'text-gray-700 hover:text-gray-800',
                      'text-base font-medium'
                    )}
                  >
                    {item.label}
                  </a>
                </Link>
              ))}
              <Link href={'/contact'}>
                <a className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700">
                  Contact us
                </a>
              </Link>
            </div>
          </div>
        </nav>
      </div>

      <Transition
        as={Fragment}
        enter="duration-150 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute top-0 inset-x-0 p-2 transition transform origin-top md:hidden"
        >
          <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
            <div className="px-5 pt-4 flex items-center justify-between">
              <div>
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/workflow-mark-teal-500-cyan-600.svg"
                  alt=""
                />
              </div>
              <div className="-mr-2">
                <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-600">
                  <span className="sr-only">Close menu</span>
                  <XIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
            </div>
            <div className="pt-5 pb-6">
              <div className="px-2 space-y-1">
                {topNav.map((item) => (
                  <Link key={item.label} href={item.href}>
                    <a
                      className={classNames(
                        route === item.href ? 'text-red-700' : '',
                        'block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50'
                      )}
                    >
                      {item.label}
                    </a>
                  </Link>
                ))}
              </div>
              <div className="mt-6 px-5">
                <Link href="/contact">
                  <a className="block text-center w-full py-3 px-4 rounded-md shadow bg-gradient-to-r from-teal-500 to-cyan-600 text-white font-medium hover:from-teal-600 hover:to-cyan-700">
                    Contact us
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
