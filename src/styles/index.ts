import { StyleSheet } from 'react-native';
import { margin } from './margin';
import { padding } from './padding';
import { flex } from './flex';
import { sizes } from './sizes';
import { background } from './background';
import { border } from './border';
import { text } from './text';
import { cols } from './cols';

export const s = StyleSheet.create({
  ...margin,
  ...padding,
  ...flex,
  ...sizes,
  ...background,
  ...border,
  ...text,
  ...cols,
});
