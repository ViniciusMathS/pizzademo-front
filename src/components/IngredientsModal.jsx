import {
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import GrainIcon from '@mui/icons-material/Grain';

function IngredientsModal({ open, onClose, pizza }) {
  if (!pizza) return null;

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="xs">
      <DialogTitle>
        <Typography variant="h6">Ingredientes de {pizza.sabor}</Typography>
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent dividers>
        <List>
          {pizza.ingredientes?.map((ingrediente) => (
            <ListItem key={ingrediente.id}>
              <ListItemIcon>
                <GrainIcon color="primary" />
              </ListItemIcon>
              <ListItemText
                primary={ingrediente.ingrediente}
                secondary={ingrediente.quantidade}
              />
            </ListItem>
          ))}
        </List>
      </DialogContent>
    </Dialog>
  );
}

export default IngredientsModal; 