import { type VariantProps, tv } from 'tailwind-variants';
import Body from './table-body.svelte';
import Caption from './table-caption.svelte';
import Cell from './table-cell.svelte';
import Footer from './table-footer.svelte';
import Head from './table-head.svelte';
import Header from './table-header.svelte';
import Row from './table-row.svelte';
import Root from './table.svelte';

const tableCellVariants = tv({
  base: 'align-middle [&:has([role=checkbox])]:pr-0',
  variants: {
    size: {
      default: 'p-4',
      sm: 'px-4 py-2',
      xs: 'px-4 py-0.5',
      lg: 'p-6',
    },
  },
  defaultVariants: {
    size: 'default',
  },
});

type TableCellProps = {
  size?: VariantProps<typeof tableCellVariants>['size'];
};

export {
  Body,
  Caption,
  Cell,
  Footer,
  Head,
  Header,
  Root,
  Row,
  //
  Root as Table,
  Body as TableBody,
  Caption as TableCaption,
  Cell as TableCell,
  Footer as TableFooter,
  Head as TableHead,
  Header as TableHeader,
  Row as TableRow,
  tableCellVariants,
  type TableCellProps,
};
