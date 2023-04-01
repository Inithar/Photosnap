import { ReactNode } from 'react';
import classNames from 'classnames/bind';

import styles from './Grid.module.scss';

type Cols = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

interface GridPops extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  container?: boolean;
  item?: boolean;
  xs?: Cols;
  sm?: Cols;
  md?: Cols;
  lg?: Cols;
  xl?: Cols;
  xxl?: Cols;
  spacing?: 'sm' | 'md' | 'lg';
  justifyContent?: 'flex-start' | 'center' | 'flex-end' | 'space-between';
  alignItems?: 'flex-start' | 'center' | 'flex-end';
}

const Grid = ({ children, container, item, xs, sm, md, lg, xl, xxl, spacing, justifyContent, alignItems, ...props }: GridPops) => {
  const cx = classNames.bind(styles);

  const className = cx(props.className, {
    grid_container: container,
    grid_item: item,
    [`grid_xs_${xs}`]: xs,
    [`grid_sm_${sm}`]: sm,
    [`grid_md_${md}`]: md,
    [`grid_lg_${lg}`]: lg,
    [`grid_xl_${xl}`]: xl,
    [`grid_xxl_${xxl}`]: xxl,
    [`grid_spacing_${spacing}`]: spacing,
    [`grid_justify_content_${justifyContent}`]: justifyContent,
    [`grid_align_items_${alignItems}`]: alignItems
  });

  return (
    <div {...props} className={className}>
      {children}
    </div>
  );
};

export default Grid;
