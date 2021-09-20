import Link from 'next/link';
import React from 'react';
import { MaybeAsyncAction, WithForcedChildren } from '../../global/interfaces';
import { classNames } from '../../utils/classnames';

type BaseProps = {
  className?: string;
};

type Props = WithForcedChildren<
  BaseProps &
    (
      | { type: 'ActionButton'; action: MaybeAsyncAction }
      | { type: 'LinkButton'; href: string }
    )
>;

export function Button(props: Props): JSX.Element {
  const classes = classNames(
    props.className,
    'block px-4 py-2 border border-gray-600 text-base font-medium rounded-md text-gray-600 bg-white hover:bg-gray-100 hover:border-gray-700'
  );

  switch (props.type) {
    case 'ActionButton':
      return (
        <button onClick={() => props.action()} className={classes}>
          {props.children}
        </button>
      );
    case 'LinkButton':
      return (
        <Link href={props.href}>
          <a className={classes}>{props.children}</a>
        </Link>
      );
  }
}
