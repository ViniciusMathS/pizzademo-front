import { useState, useEffect } from 'react';
import {
  deleteCardapio,
  createCardapio,
  updateCardapio,
  getPizzas,
} from '../services/api';
import {
  Typography,
  Button,
  Grid,
  CircularProgress,
  Alert,
  Box,
  Snackbar,
  IconButton,
  Tooltip,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import CardapioItem from '../components/CardapioItem';
import CardapioForm from '../components/CardapioForm';
import IngredientsModal from '../components/IngredientsModal';
import ConfirmationModal from '../components/ConfirmationModal';

function CardapioPage() {
  const [pizzas, setPizzas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Form Modal State
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  
  // Ingredients Modal State
  const [isIngredientsModalOpen, setIsIngredientsModalOpen] = useState(false);
  const [selectedPizza, setSelectedPizza] = useState(null);

  // Confirmation Modal State
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [itemToDeleteId, setItemToDeleteId] = useState(null);

  // Snackbar State
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });

  const fetchPizzas = async () => {
    try {
      setLoading(true);
      const response = await getPizzas();
      setPizzas(response.data);
      setError(null);
    } catch (err) {
      setError('Não foi possível carregar o cardápio. Tente novamente mais tarde.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPizzas();
  }, []);

  // Form handlers
  const handleOpenForm = (item = null) => {
    setEditingItem(item);
    setIsFormOpen(true);
  };
  const handleCloseForm = () => setIsFormOpen(false);

  // Ingredients modal handlers
  const handleShowIngredients = (pizza) => {
    setSelectedPizza(pizza);
    setIsIngredientsModalOpen(true);
  };
  const handleCloseIngredients = () => setIsIngredientsModalOpen(false);

  // Delete confirmation handlers
  const handleOpenDeleteModal = (id) => {
    setItemToDeleteId(id);
    setIsDeleteModalOpen(true);
  };
  const handleCloseDeleteModal = () => setIsDeleteModalOpen(false);
  
  // Snackbar handler
  const handleCloseSnackbar = () => setSnackbar({ ...snackbar, open: false });

  // CRUD Operations
  const handleSubmit = async (formData) => {
    try {
      const message = editingItem ? 'Item atualizado com sucesso!' : 'Item adicionado com sucesso!';
      if (editingItem) {
        await updateCardapio(editingItem.id, formData);
      } else {
        await createCardapio(formData);
      }
      handleCloseForm();
      await fetchPizzas();
      setSnackbar({ open: true, message, severity: 'success' });
    } catch (err) {
      setError('Erro ao salvar o item. Verifique os dados e tente novamente.');
      console.error(err);
    }
  };

  const handleDeleteConfirm = async () => {
    try {
      await deleteCardapio(itemToDeleteId);
      handleCloseDeleteModal();
      await fetchPizzas();
      setSnackbar({ open: true, message: 'Item excluído com sucesso!', severity: 'success' });
    } catch (err) {
      setError('Erro ao deletar item do cardápio.');
      console.error(err);
      handleCloseDeleteModal();
    }
  };

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
        <Typography variant="h4" component="h1">
          Cardápio
        </Typography>
        <Tooltip title="Adicionar Novo Item">
          <IconButton
            color="primary"
            onClick={() => handleOpenForm()}
            sx={{
              border: '1px solid',
              borderColor: 'primary.main',
              '&:hover': {
                backgroundColor: 'primary.main',
                color: 'common.white',
              },
            }}
          >
            <AddIcon />
          </IconButton>
        </Tooltip>
      </Box>

      {loading && <Grid container justifyContent="center" sx={{ my: 4 }}><CircularProgress /></Grid>}
      {error && <Alert severity="error" sx={{ my: 2 }} onClose={() => setError(null)}>{error}</Alert>}

      {!loading && !error && (
        <Grid container spacing={4}>
          {pizzas.flatMap((pizza) =>
            pizza.cardapio.map((cardapioItem) => (
              <Grid item key={cardapioItem.id} xs={12} sm={6} md={4}>
                <CardapioItem
                  item={{ ...cardapioItem, pizza }}
                  onDelete={handleOpenDeleteModal}
                  onEdit={handleOpenForm}
                  onShowIngredients={handleShowIngredients}
                />
              </Grid>
            ))
          )}
        </Grid>
      )}

      <CardapioForm open={isFormOpen} onClose={handleCloseForm} onSubmit={handleSubmit} item={editingItem} pizzas={pizzas} />
      <IngredientsModal open={isIngredientsModalOpen} onClose={handleCloseIngredients} pizza={selectedPizza} />
      <ConfirmationModal
        open={isDeleteModalOpen}
        onClose={handleCloseDeleteModal}
        onConfirm={handleDeleteConfirm}
        title="Confirmar Exclusão"
        message="Tem certeza de que deseja excluir este item do cardápio? Esta ação não pode ser desfeita."
      />
      <Snackbar open={snackbar.open} autoHideDuration={6000} onClose={handleCloseSnackbar} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
        <Alert onClose={handleCloseSnackbar} severity={snackbar.severity} sx={{ width: '100%' }}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
}

export default CardapioPage; 