import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';

function MultipleSelectChip() {


  const theme = useTheme();
  const [residuo, setresiduo] = React.useState([]);

  const handleChange = (event) => {
   
    const {
      target: { value },
    } = event;
    setresiduo(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value
    );
  };

  return (
    <div>
      
<FormControl fullWidth>
  <InputLabel id="demo-multiple-chip-label" htmlFor="demo-multiple-chip">Resíduos</InputLabel>
  <Select
    labelId="demo-multiple-chip-label"
    margin="normal"
    color="success"
    id="demo-multiple-chip"
    multiple
    value={residuo}
    onChange={handleChange}
    input={<OutlinedInput id="select-multiple-chip" label="Resíduos" />}
    renderValue={(selected) => (
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.2 }}>
        {selected.map((value) => (
          <Chip key={value} label={value} />
        ))}
      </Box>
    )}
    MenuProps={MenuProps}
    helperText="Selecione todos os resíduos orgânicos que você está compostando"
  >
    {names.map((name) => (
      <MenuItem
        key={name}
        value={name}
        style={getStyles(name, residuo, theme)}
      >
        {name}
      </MenuItem>
    ))}
  </Select>

</FormControl>


    </div>
  );
}

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  'Restos de frutas e legumes',
  'Cascas de ovos',
  'Borra de café e filtros de papel',
  'Folhas secas',
  'Grama cortada',
  'Resíduos de jardim',
  'Restos de alimentos cozidos',
  'Casca de nozes',
  'Sobras de chá',
  'Cascas de vegetais',
  'Flores murchas',
  'Restos de plantas de casa',
  'Palha',
  'Papel não impresso',
  'Restos de madeira',
  'Outros',
];

function getStyles(name, residuo, theme) {
  return {
    fontWeight:
      residuo.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default MultipleSelectChip;
