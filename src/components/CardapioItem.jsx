import {
  Card,
  CardContent,
  CardActions,
  Typography,
  IconButton,
  Button,
  Box,
  Chip,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';

// The item object structure from the API:
// {
//   "id": 0,
//   "valor": 0,
//   "tamanho": "string",
//   "pizza": {
//     "id": 0,
//     "sabor": "string",
//     "ingredientes": [
//       {
//         "id": 0,
//         "ingrediente": "string",
//         "quantidade": "string"
//       }
//     ]
//   }
// }

function CardapioItem({ item, onDelete, onEdit, onShowIngredients }) {
  const { id, pizza, tamanho, valor } = item;

  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100%',
        boxShadow: 3,
        borderRadius: 2,
      }}
    >
      <Box
        onClick={() => onShowIngredients(pizza)}
        sx={{ cursor: 'pointer', '&:hover': { bgcolor: 'action.hover' } }}
      >
        <CardContent>
          <Typography variant="h5" component="div" gutterBottom>
            {pizza?.sabor || 'Sabor não definido'}
          </Typography>
          <Chip label={tamanho} color="primary" variant="outlined" sx={{ mb: 2 }} />
          <Typography variant="h6" color="text.secondary">
            R$ {valor.toFixed(2)}
          </Typography>
        </CardContent>
      </Box>
      <CardActions sx={{ justifyContent: 'space-between', px: 2, pb: 2 }}>
        <Button
          size="small"
          startIcon={<RestaurantMenuIcon />}
          onClick={() => onShowIngredients(pizza)}
        >
          Ingredientes
        </Button>
        <Box>
          <IconButton aria-label="edit" onClick={() => onEdit(item)}>
            <EditIcon />
          </IconButton>
          <IconButton aria-label="delete" onClick={() => onDelete(id)}>
            <DeleteIcon />
          </IconButton>
        </Box>
      </CardActions>
    </Card>
  );
}

export default CardapioItem; 