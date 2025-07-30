import React from 'react';
import {
  Table, TableHead, TableBody, TableRow, TableCell, Paper, TableContainer
} from '@mui/material';

export const TableView = ({ colums, data }) => {
return (
  <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            {colums.map(col => (
              <TableCell key={col.key}>{col.label}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.code}>
              {colums.map(col => (
                <TableCell key={col.key}>
                  {row[col.key]}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
     </TableContainer>
    );
  }

