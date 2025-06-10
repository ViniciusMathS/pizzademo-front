import { useState, useEffect } from 'react';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Button,
  Grid,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  InputAdornment,
  IconButton,
  Box,
  DialogContentText,
} from '@mui/material';
import LocalPizzaIcon from '@mui/icons-material/LocalPizza';
import StraightenIcon from '@mui/icons-material/Straighten';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import CloseIcon from '@mui/icons-material/Close';

const emptyItem = {
  tamanho: '',
  valor: '',
  pizza: { id: '' },
};

const tamanhos = ['Pequena', 'Média', 'Grande'];

function CardapioForm({ open, onClose, onSubmit, item, pizzas = [] }) {
  const [formData, setFormData] = useState(emptyItem);

  useEffect(() => {
    if (item) {
      // Ensure we have a consistent pizza object structure
      setFormData({ ...item, pizza: item.pizza || { id: '' } });
    } else {
      setFormData(emptyItem);
    }
  }, [item, open]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePizzaChange = (e) => {
    const { value } = e.target;
    // Find the full pizza object from the list
    const selectedPizza = pizzas.find((p) => p.id === value);
    setFormData((prev) => ({
      ...prev,
      pizza: selectedPizza || { id: '' },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ensure the valor is a number
    onSubmit({ ...formData, valor: parseFloat(formData.valor) });
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          {item ? 'Editar Item do Cardápio' : 'Adicionar Novo Item'}
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>
      <form onSubmit={handleSubmit}>
        <DialogContent>
          <DialogContentText sx={{ mb: 3 }}>
            Selecione a pizza, o tamanho e defina o preço para adicionar um novo item ao cardápio.
          </DialogContentText>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <FormControl fullWidth required>
                <InputLabel id="pizza-select-label">Pizza</InputLabel>
                <Select
                  labelId="pizza-select-label"
                  name="pizza"
                  value={formData.pizza?.id || ''}
                  onChange={handlePizzaChange}
                  label="Pizza"
                  startAdornment={
                    <InputAdornment position="start">
                      <LocalPizzaIcon />
                    </InputAdornment>
                  }
                >
                  {pizzas.map((p) => (
                    <MenuItem key={p.id} value={p.id}>
                      {p.sabor}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth required>
                <InputLabel id="tamanho-select-label">Tamanho</InputLabel>
                <Select
                  labelId="tamanho-select-label"
                  name="tamanho"
                  value={formData.tamanho}
                  onChange={handleChange}
                  label="Tamanho"
                  startAdornment={
                    <InputAdornment position="start">
                      <StraightenIcon />
                    </InputAdornment>
                  }
                >
                  {tamanhos.map((t) => (
                    <MenuItem key={t} value={t}>
                      {t}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <TextField
                name="valor"
                label="Valor"
                type="number"
                fullWidth
                variant="outlined"
                value={formData.valor}
                onChange={handleChange}
                required
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AttachMoneyIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions sx={{ p: '16px 24px' }}>
          <Button onClick={onClose} variant="outlined">Cancelar</Button>
          <Button type="submit" variant="contained">
            {item ? 'Salvar Alterações' : 'Adicionar ao Cardápio'}
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}

export default CardapioForm; 