import React from 'react';
import { Container, Grid } from '@mui/material';
import Navegacao from './Navegacao';
import Typography from '@mui/material/Typography';
import '../App.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Button, CardActionArea, CardActions } from '@mui/material';
import AdicionarCompostagem from './Adicionar';

function Home() {

  return (
    <div className="home-app">
   <Navegacao />
      <Container>
        <div>
      
          <div className="quantidade">
            <h2 className="quantidade-numero">
              01 <span className="quantidade-desc"> Composteira</span>
            </h2>
        
          </div>
       
          <Grid container spacing={1}>
            <Grid item xs={8}>
              <Card sx={{ maxWidth: 500 }} className="card-recomendacoes">
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
                      Certifique-se de virar ou misturar regularmente sua pilha de compostagem. Isso promove a
                      oxigenação e acelera a decomposição dos resíduos orgânicos, resultando em composto de alta
                      qualidade em menos tempo. Lembre-se de manter a pilha úmida, mas não encharcada, para fornecer
                      o ambiente ideal para as atividades dos microorganismos decompositores. Com essa prática
                      simples, você obterá um composto saudável e nutritivo para o seu jardim.
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="success">
                    Ver mais
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={4} className="adicionar-compostagem-container">
              <AdicionarCompostagem />
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
}

export default Home;
