import React from 'react';
import {
  Card, CardContent, Typography
} from '@mui/material';

export const CardView = ({ colums, data }) => {
     return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {data.map((row) => (
            <Card key={row.code} variant="outlined">
              <CardContent>
                {colums.map(col => (
                  <Typography key={col.key} variant="body2">
                    <strong>{col.label}:</strong> {row[col.key]}
                  </Typography>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      );
}