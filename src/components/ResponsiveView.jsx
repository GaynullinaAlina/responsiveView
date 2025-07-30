import React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { CardView } from './CardView';
import { TableView } from './TableView';


export const ResponsiveView = ({ colums, data }) => {
  const matches = useMediaQuery('(min-width: 640px)');
  console.log(matches);

  return (
    <>
    {matches ? (
      <TableView colums={colums} data={data} />
    ) : (
      <CardView colums={colums} data={data} />
    )}
  </>
  )
};

