import * as React from 'react';
import {Container, Grid, Paper} from '@mui/material';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import '../App.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Button, CardActionArea, CardActions } from '@mui/material';


function Home(){
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    return(
        
        <div className="home-app">
            
    <div className="navegacao">
                <hi className="saudacoes-home">Olá!</hi>
    <React.Fragment >
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <Typography sx={{ minWidth: 100 }}>Compostagem</Typography>
        <Typography sx={{ minWidth: 100 }}>Parceiros</Typography>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={handleClose}>
          <Avatar /> Perfil
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Avatar /> Minha Conta
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Outra Conta
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Configurações
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Sair
        </MenuItem>
      </Menu>
    </React.Fragment>
    </div>
        <Container>
        <div>
            <div className="quantidade">
            <h2 className="quantidade-numero">01 <span className="quantidade-desc"> Composteira</span></h2>
            </div>
            <Card sx={{ maxWidth: 500}} className="card-recomendacoes">
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://mir-s3-cdn-cf.behance.net/project_modules/1400/cd0024170729797.6463433846a73.png"
          alt="green food"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Recomendação
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Certifique-se de virar ou misturar regularmente sua pilha de compostagem. Isso promove a oxigenação e acelera a decomposição dos resíduos orgânicos, resultando em composto de alta qualidade em menos tempo. Lembre-se de manter a pilha úmida, mas não encharcada, para fornecer o ambiente ideal para as atividades dos microorganismos decompositores. Com essa prática simples, você obterá um composto saudável e nutritivo para o seu jardim.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="success">
          Ver mais
        </Button>
      </CardActions>
    </Card>
        </div>
        </Container>
       
        </div>
    );
}

export default Home;