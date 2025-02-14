import { Icon, IconBase, IconWeight } from '@phosphor-icons/react';
import { ReactElement, forwardRef } from 'react';

const weights = new Map<IconWeight, ReactElement>([
  [
    'regular',
    <path
      d="M9.58189 12.7998L7.38534 9.47553L7.3797 9.48699C7.32338 9.40675 7.23327 9.35517 7.13189 9.35517H6.85591C6.75453 9.35517 6.66442 9.40102 6.6081 9.48699L4.41154 12.8112C4.36649 12.88 4.29327 12.9201 4.20879 12.9201H3.4766C3.38649 12.9201 3.302 12.8685 3.25695 12.7826C3.21189 12.6966 3.22315 12.5992 3.26821 12.5247L5.14936 9.68186C5.19442 9.61882 5.20005 9.53857 5.16062 9.46407C5.12683 9.38956 5.05925 9.34944 4.97476 9.34944H2.10235C1.96154 9.34944 1.85453 9.23481 1.85453 9.09725V8.47826C1.85453 8.33497 1.96718 8.22607 2.10235 8.22607H2.12488H11.8967C12.0375 8.22607 12.1445 8.3407 12.1445 8.47826V9.09725C12.1445 9.24054 12.0319 9.34944 11.8967 9.34944H9.02993C8.95108 9.34944 8.8835 9.39529 8.84407 9.46407C8.80465 9.53857 8.81028 9.61881 8.85534 9.68759L10.7309 12.5247C10.7815 12.5992 10.7872 12.7023 10.7421 12.7826C10.6971 12.8628 10.6126 12.9144 10.5225 12.9144H9.79028C9.71143 12.9144 9.62695 12.8743 9.58189 12.7998Z"
      fill="#0C0C0D"
    />,
  ],
]);

const MicroStxIcon: Icon = forwardRef((props, ref) => (
  <IconBase ref={ref} {...props} weights={weights} viewBox={'0 0 14 15'} />
));

MicroStxIcon.displayName = 'MicroStxIcon';

export default MicroStxIcon;
