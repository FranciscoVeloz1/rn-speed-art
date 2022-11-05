import { StyleSheet } from 'react-native';

export const flex = StyleSheet.create({
  //Directions
  flex_row: {
    flexDirection: 'row',
  },
  flex_row_reverse: {
    flexDirection: 'row-reverse',
  },
  flex_column: {
    flexDirection: 'column',
  },
  flex_column_reverse: {
    flexDirection: 'column-reverse',
  },

  //Align items
  align_items_center: {
    alignItems: 'center',
  },
  align_items_start: {
    alignItems: 'flex-start',
  },
  align_items_end: {
    alignItems: 'flex-end',
  },

  //Justify content
  justify_content_center: {
    justifyContent: 'center',
  },
  justify_content_start: {
    justifyContent: 'flex-start',
  },
  justify_content_end: {
    justifyContent: 'flex-end',
  },
  justify_content_between: {
    justifyContent: 'space-between',
  },
  justify_content_around: {
    justifyContent: 'space-around',
  },
});
