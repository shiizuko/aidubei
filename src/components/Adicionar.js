import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContentText from '@mui/material/DialogContentText';
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import MultipleSelectChip from './Chip';
import '../App.css';
import Stack from '@mui/material/Stack';
export default function FormDialog() {
  const [aberto, setOpen] = React.useState(false);




  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      
      <Fab color="success" variant="extended" aria-label="add" onClick={handleClickOpen}>
        <AddIcon sx={{ mr: 1 }} />
        Compostagem
      </Fab>
      <Stack spacing={1}>
      <Dialog open={aberto} onClose={handleClose}>
      
        <DialogTitle>Adicionar Compostagem</DialogTitle>
        
        <DialogContent>
        <DialogContentText sx={{mb: 2}}>
        Lembre-se de que cada sistema de compostagem pode ter variações e técnicas específicas, mas esses são os elementos gerais envolvidos no processo de uma compostagem.
        </DialogContentText>
        <MultipleSelectChip className="residuos-adicionar-compostagem" margin="normal" />
        </DialogContent>
        <DialogContent>
        <InputLabel id="demo-simple-select-label">Odor</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    label="Odor"
    sx={{ width: 400 }}
  >
    <MenuItem value={10}>Floral</MenuItem>
    <MenuItem value={20}>Cítrico</MenuItem>
    <MenuItem value={30}>Amadeirado</MenuItem>
    <MenuItem value={30}>Herbal</MenuItem>
    <MenuItem value={30}>Frutado</MenuItem>
    <MenuItem value={30}>Doce</MenuItem>
    <MenuItem value={30}>Picante</MenuItem>
    <MenuItem value={30}>Terroso</MenuItem>
    <MenuItem value={30}>Almiscarado</MenuItem>
    <MenuItem value={30}>Aromático</MenuItem>
    <MenuItem value={30}>Mofo</MenuItem>
    <MenuItem value={30}>Podre</MenuItem>
    <MenuItem value={30}>Azedo</MenuItem>
  </Select>
  </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button onClick={handleClose}>Adicionar</Button>
        </DialogActions>
      </Dialog>
      </Stack>
    </div>
  );
}

