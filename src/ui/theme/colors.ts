export const COLORS = {
  black: { value: '#0C0C0D' },
  blackAlpha: {
    50: { value: 'rgba(0, 0, 0, 0.04)' },
    100: { value: 'rgba(0, 0, 0, 0.06)' },
    200: { value: 'rgba(0, 0, 0, 0.08)' },
    300: { value: 'rgba(0, 0, 0, 0.16)' },
    400: { value: 'rgba(0, 0, 0, 0.24)' },
    500: { value: 'rgba(0, 0, 0, 0.36)' },
    600: { value: 'rgba(0, 0, 0, 0.48)' },
    700: { value: 'rgba(0, 0, 0, 0.64)' },
    800: { value: 'rgba(0, 0, 0, 0.80)' },
    900: { value: 'rgba(0, 0, 0, 0.92)' },
  },
  slate: {
    50: { value: '#FCFCFD' },
    100: { value: '#F9F9FB' },
    150: { value: '#F0F0F3' },
    200: { value: '#E8E8EC' },
    250: { value: '#E0E1E6' },
    300: { value: '#D9D9E0' },
    400: { value: '#CDCED6' },
    500: { value: '#B9BBC6' },
    600: { value: '#8B8D98' },
    700: { value: '#737680' },
    800: { value: '#60646C' },
    850: { value: '#3E4248' },
    900: { value: '#1C2024' },
  },
  red: {
    100: { value: '#FEEBEC' },
    200: { value: '#FBECEC' },
    300: { value: '#F4C0BF' },
    400: { value: '#DE9392' },
    500: { value: '#D45453' },
    600: { value: '#C83532' },
  },
  orange: {
    100: { value: '#FEFCFB' },
    200: { value: '#FDF7EE' },
    300: { value: '#FCEFD9' },
    400: { value: '#FFDFAF' },
    500: { value: '#FFBD7A' },
    600: { value: '#F59300' },
  },
  green: {
    100: { value: '#F1F9F1' },
    200: { value: '#E9F6EC' },
    300: { value: '#D9EDD4' },
    400: { value: '#9CCCAC' },
    500: { value: '#23A978' },
    600: { value: '#008051' },
  },
  purple: {
    50: { value: '#F7F8FD' },
    100: { value: '#EEF2FB' },
    200: { value: '#E5EBFA' },
    300: { value: '#CEDAFA' },
    400: { value: '#7F97F1' },
    500: { value: '#5C6CF2' },
    600: { value: '#5546FF' },
    700: { value: '#2323C7' },
    800: { value: '#0F0FA9' },
    850: { value: '#2D2294' },
    900: { value: '#0B0A63' },
  },
  white: { value: '#ffffff' },
  whiteAlpha: {
    50: { value: 'rgba(255, 255, 255, 0.04)' },
    100: { value: 'rgba(255, 255, 255, 0.06)' },
    200: { value: 'rgba(255, 255, 255, 0.08)' },
    300: { value: 'rgba(255, 255, 255, 0.16)' },
    400: { value: 'rgba(255, 255, 255, 0.24)' },
    500: { value: 'rgba(255, 255, 255, 0.36)' },
    600: { value: 'rgba(255, 255, 255, 0.48)' },
    700: { value: 'rgba(255, 255, 255, 0.64)' },
    800: { value: 'rgba(255, 255, 255, 0.80)' },
    900: { value: 'rgba(255, 255, 255, 0.92)' },
  },
  others: {
    lilac: { value: '#9985FF' },
    limeGreen: { value: '#C1D21B' },
  },
  sand: {
    150: '#EAE8E6',
    400: '#95918C',
    500: '#777470',
    800: '#2D2C2A',
    1000: '#0C0C0D',
  },
};

export const NEW_COLORS = {
  neutral: {
    white: { value: '#ffffff' },
    'sand-50': { value: '#f7f6f5' },
    'sand-100': { value: '#f3f2f0' },
    'sand-150': { value: '#eae8e6' },
    'sand-200': { value: '#d5d3d1' },
    'sand-300': { value: '#bfbdba' },
    'sand-400': { value: '#95918c' },
    'sand-500': { value: '#777470' },
    'sand-600': { value: '#595754' },
    'sand-700': { value: '#3c3a38' },
    'sand-800': { value: '#2d2c2a' },
    'sand-900': { value: '#211f1f' },
    'sand-950': { value: '#181716' },
    'sand-1000': { value: '#0f0f0e' },
    black: { value: '#000000' },
  },
  accent: {
    'stacks-100': { value: '#FFDFD1' },
    'stacks-200': { value: '#FFC2A8' },
    'stacks-300': { value: '#FFA57F' },
    'stacks-400': { value: '#FF8761' },
    'stacks-500': { value: '#FC6432' },
    'stacks-600': { value: '#CC4900' },
    'stacks-700': { value: '#9C310D' },
    'bitcoin-100': { value: '#FFDFC1' },
    'bitcoin-200': { value: '#FFD1A7' },
    'bitcoin-300': { value: '#FFC288' },
    'bitcoin-400': { value: '#FFAD65' },
    'bitcoin-500': { value: '#FF9835' },
    'bitcoin-600': { value: '#E17C18' },
    'bitcoin-700': { value: '#FF8B00' },
    'testnet-100': { value: '#E7E5FF' },
    'testnet-200': { value: '#DDD9FF' },
    'testnet-300': { value: '#BBADFF' },
    'testnet-400': { value: '#9985FF' },
    'testnet-500': { value: '#765BFF' },
    'testnet-600': { value: '#593FE0' },
  },
  contract: {
    // TODO: remove
    call: { value: '#BDC2A6' },
    deploy: { value: '#D4E523' },
  },
  alpha: {
    'sand-alpha-50': { value: 'rgba(243, 242, 240, 0.04)' },
    'sand-alpha-100': { value: 'rgba(243, 242, 240, 0.06)' },
    'sand-alpha-200': { value: 'rgba(243, 242, 240, 0.08)' },
    'sand-alpha-300': { value: 'rgba(243, 242, 240, 0.16)' },
    'sand-alpha-400': { value: 'rgba(243, 242, 240, 0.24)' },
    'sand-alpha-500': { value: 'rgba(243, 242, 240, 0.36)' },
    'sand-alpha-600': { value: 'rgba(243, 242, 240, 0.48)' },
    'sand-alpha-700': { value: 'rgba(243, 242, 240, 0.64)' },
    'sand-alpha-800': { value: 'rgba(243, 242, 240, 0.80)' },
    'sand-alpha-900': { value: 'rgba(243, 242, 240, 0.92)' },
    'black-alpha-50': { value: 'rgba(20, 20, 20, 0.04)' },
    'black-alpha-100': { value: 'rgba(20, 20, 20, 0.06)' },
    'black-alpha-200': { value: 'rgba(20, 20, 20, 0.08)' },
    'black-alpha-300': { value: 'rgba(20, 20, 20, 0.16)' },
    'black-alpha-400': { value: 'rgba(20, 20, 20, 0.24)' },
    'black-alpha-500': { value: 'rgba(20, 20, 20, 0.36)' },
    'black-alpha-600': { value: 'rgba(20, 20, 20, 0.48)' },
    'black-alpha-700': { value: 'rgba(20, 20, 20, 0.64)' },
    'black-alpha-800': { value: 'rgba(20, 20, 20, 0.80)' },
    'black-alpha-900': { value: 'rgba(20, 20, 20, 0.92)' },
  },
  feedback: {
    'green-100': { value: '#0070dd' },
    'green-200': { value: '#adddc0' },
    'green-300': { value: '#8ECEAA' },
    'green-400': { value: '#5bb98b' },
    'green-500': { value: '#30a46c' },
    'green-600': { value: '#218358' },
    'green-900': { value: '#174832' },
    'blue-100': { value: '#e9f3ff' },
    'blue-200': { value: '#dbecff' },
    'blue-300': { value: '#b5d5ff' },
    'blue-400': { value: '#75acf3' },
    'blue-500': { value: '#2c8dff' },
    'blue-600': { value: '#0070dd' },
    'red-100': { value: '#ffe9e9' },
    'red-200': { value: '#ffcaca' },
    'red-300': { value: '#ff9da0' },
    'red-400': { value: '#f06e76' },
    'red-500': { value: '#e32a35' },
    'red-600': { value: '#b01425' },
    'red-900': { value: '#e32a35' },
    'yellow-100': { value: '#fefce9' },
    'yellow-200': { value: '#fff9b7' },
    'yellow-300': { value: '#fff394' },
    'yellow-400': { value: '#f9e972' },
    'yellow-500': { value: '#f3dc00' },
    'yellow-600': { value: '#dbc600' },
    'yellow-700': { value: '#a99100' },
    'yellow-900': { value: '#6b5c05' },
    'bronze-200': { value: '#ffdfc1' },
    'bronze-600': { value: '#e17c18' },
    'bronze-900': { value: '#e17c18' },
  },
  secondary: {
    'moss-200': { value: '#d3d6c4' },
    'moss-400': { value: '#bdc2a6' },
    'lime-200': { value: '#e6f07f' },
    'lime-400': { value: '#d4e523' },
    'pink-200': { value: '#df8ed4' },
    'pink-400': { value: '#d977cb' },
    'peach-200': { value: '#ffa57f' },
    'peach-400': { value: '#ff8761' },
    'butter-200': { value: '#faf884' },
    'butter-400': { value: '#f8f65b' },
    'blood-orange-600': { value: '#fc6432' },
    'blood-orange-900': { value: '#cc4900' },
  },
};
