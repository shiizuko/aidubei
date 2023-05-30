import React from 'react';
import {
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
  List,
  ListItem,
  ListItemText,
  Divider,
  Paper,
  ListItemIcon ,

} from '@mui/material';
import { VideoLibrary, Assignment, Event } from '@mui/icons-material';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import BubbleChartIcon from '@mui/icons-material/BubbleChart';
import '../App.css';
import Navegacao from './Navegacao';

function Compostagem () {
  const activeCompostings = [
    { id: 1, name: 'Compostagem 1', progress: 75 },
    { id: 2, name: 'Compostagem 2', progress: 50 },
    { id: 3, name: 'Compostagem 3', progress: 20 },
  ];


  return (
    <div className="App-Compostagem">
       <Navegacao />
    <Container maxWidth="lg">
      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12}>
        <Typography
          variant="h4"
          style={{
            marginBottom: '-26px',
            marginTop: '10px'
          }}>
        
        Compostagem
        </Typography>
        <Typography
         sx={{ borderRadius: '20px'}}
              variant="h4"
              component="div"
              align="center"
              style={{
                backgroundImage: 'url("https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/d696b8122789467.616e78d27c812.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                color: '#ffffff', // Cor do texto
                padding: '20px',
                height: '200px',
                marginTop: '20px',
               
              }}
            >
              
            </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
          <Card sx={{ borderRadius: '16px'}}>
            <CardContent>
              <Typography variant="h6" component="h2">
                Notícias
              </Typography>
              <List>
                <ListItem>
                  <ListItemText primary="Brasil desperdiça cerca de 27 milhões de toneladas de alimentos por ano; 60% vêm do consumo de famílias" />
                </ListItem>
                <Divider />
                <ListItem>
                    
                  <ListItemText primary="Desperdício de comida coloca em xeque a segurança alimentar" />
                </ListItem>
              </List>
            </CardContent>
            <CardActions>
              <Button variant="contained" color="success">
                <NewspaperIcon />Ver mais notícias
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
        <Card sx={{ borderRadius: '16px'}}>
            <CardContent>
              <Typography variant="h6" component="h2">
                Vídeos de Tutorial
              </Typography>
              {/* Aqui você pode exibir os vídeos tutoriais relacionados à compostagem */}
              <List>
                <ListItem>
                  <ListItemIcon>
                    <VideoLibrary />
                  </ListItemIcon>
                  <ListItemText primary="Composteira doméstica - Como fazer" />
                </ListItem>
                <Divider />
                <ListItem>
                  <ListItemIcon>
                    <VideoLibrary />
                  </ListItemIcon>
                  <ListItemText primary="Como fazer composteira termofílica utilizando caixa d'água" />
                </ListItem>
              </List>
            </CardContent>
            <CardActions>
              <Button variant="contained" color="success">
                Ver mais vídeos
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
        <Card sx={{ borderRadius: '16px'}}>
            <CardContent>
              <Typography variant="h6" component="h2">
                To-Do
              </Typography>
              {/* Aqui você pode exibir a lista de tarefas pendentes relacionadas à compostagem */}
              <List>
                <ListItem>
                  <ListItemIcon>
                    <Assignment />
                  </ListItemIcon>
                  <ListItemText primary="Coletar os resíduos orgânicos: restos de alimentos" />
                </ListItem>
                <Divider />
                <ListItem>
                  <ListItemIcon>
                    <Assignment />
                  </ListItemIcon>
                  <ListItemText primary="Camadas e mistura da compostagem 5" />
                </ListItem>
              </List>
              <Button>Adicionar tarefa</Button>
            </CardContent>
            <CardActions>
              <Button variant="contained" color="success">
                Ver todas as tarefas
              </Button>
            </CardActions>
          </Card>
        </Grid>
      
        <Grid item xs={12} sm={6} md={4}>
        <Card sx={{ borderRadius: '16px'}}>
            <CardContent>
              <Typography variant="h6" component="h2">
                Relatórios
              </Typography>
              {/* Aqui você pode exibir os relatórios e estatísticas relacionados à compostagem */}
              <List>
                <ListItem>
                  <ListItemIcon>
                    <BubbleChartIcon/>
                  </ListItemIcon>
                  <ListItemText primary="Relatório 1" />
                </ListItem>
                <Divider />
                <ListItem>
                  <ListItemIcon>
                  <BubbleChartIcon/>
                  </ListItemIcon>
                  <ListItemText primary="Relatório 2" />
                </ListItem>
              </List>
            </CardContent>
            <CardActions>
              <Button variant="contained" color="success">
                Ver todos os relatórios
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
        <Card sx={{ borderRadius: '16px'}}>
            <CardContent>
              <Typography variant="h6" component="h2">
                Lembretes
              </Typography>
              {/* Aqui você pode exibir os lembretes relacionados à compostagem */}
              <List>
                <ListItem>
                  <ListItemIcon>
                    <Event />
                  </ListItemIcon>
                  <ListItemText primary="Lembrete 1" />
                </ListItem>
                <Divider />
                <ListItem>
                  <ListItemIcon>
                    <Event />
                  </ListItemIcon>
                  <ListItemText primary="Lembrete 2" />
                </ListItem>
              </List>
            </CardContent>
            <CardActions>
              <Button variant="contained" color="success">
              <AccessAlarmIcon />
               Adicionar Lembrete
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
            <Card sx={{ borderRadius: '16px' }}>
              <CardContent>
                <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
                  <Typography variant="h6">Progresso das Compostagens</Typography>
                  <BarChart width={500} height={300} data={activeCompostings}>
  <XAxis dataKey="name" />
  <YAxis />
  <Tooltip />
  <Legend />
  <Bar dataKey="progress" fill="#004643" />
</BarChart>
                </Paper>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
    </Container>
    </div>
  );
};

export default  Compostagem;


  
  
