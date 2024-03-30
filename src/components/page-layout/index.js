import {memo} from 'react';
import cn from '../../utils/classnames.ts';
import './style.css';

function PageLayout({head, footer, body}) {
const className = 'PageLayout';
  return (
    <div className={className}>
      <div className={cn(className, 'head')}>
        {head}
      </div>
      <div className={cn(className, 'body')}>
        {body}
      </div>
      <div className={cn(className, 'footer')}>
        {footer}
      </div>
    </div>
  );
}

export default memo(PageLayout);
