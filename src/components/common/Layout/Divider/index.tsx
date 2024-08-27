import { clsx } from 'clsx';
import React, { ComponentPropsWithoutRef, forwardRef } from 'react';

import * as styles from './Divider.css';

type DividerProps = {
  className?: string;
} & ComponentPropsWithoutRef<'div'>;

const Divider = forwardRef<HTMLHRElement, DividerProps>(({ className, ...props }, ref) => {
  return <hr ref={ref} className={clsx(styles.divider, className)} {...props} />;
});

export default Divider;
