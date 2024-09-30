import React, { useState, useEffect } from "react";
import {
  Button,
  Menu,
  MenuItem,
  ListItemText,
} from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import { styled } from "@mui/material/styles";
import './RecipeDropdown'

const CustomizedButton = styled(Button)(({ theme }) => ({
    textTransform: 'none',
        color: theme.palette.common.white,
        backgroundColor: theme.palette.primary.main,
        padding: theme.spacing(1, 2),
        '&:hover': {
            backgroundColor: theme.palette.primary.dark,
        },
    }));
    
const RecipeDropdown = ({ onSelectRecipe }) => {
    const [recipes, setRecipes] = useState([]);
    const [anchorEl, setAnchorEl] = useState(null);
    const [selectedRecipeName, setSelectedRecipeName] = useState('Select a Recipe');
  
    useEffect(() => {
      fetch('https://dummyjson.com/recipes?select=name')
        .then(response => response.json())
        .then(data => setRecipes(data.recipes))
        .catch(error => console.error('Error fetching recipes:', error));
    }, []);
  

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
      };
    
      const handleMenuItemClick = (recipe) => {
        setAnchorEl(null);
        setSelectedRecipeName(recipe.name);
        onSelectRecipe(recipe.id); 
      };
    
      const handleClose = () => {
        setAnchorEl(null);
      };
    


  return (
    <div>
      <CustomizedButton
        aria-controls="recipe-menu"
        aria-haspopup="true"
        onClick={handleClick}
        variant="contained"
        endIcon={<ExpandMore />}
      >
        {selectedRecipeName}
      </CustomizedButton>
      <Menu
        id="recipe-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {recipes.map((recipe) => (
          <MenuItem key={recipe.id} onClick={() => handleMenuItemClick(recipe)}>
            <ListItemText primary={recipe.name} />
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default RecipeDropdown;
