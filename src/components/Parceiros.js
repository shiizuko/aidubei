import { Container, Grid, Typography, Button, Card, CardMedia, CardContent } from '@mui/material';
import Navegacao from './Navegacao';
import '../App.css';
function Parceiros () {
    return (
        <div className='App-Parceiros'>
        <Navegacao />
        <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h4" component="h1" align="center" className="titulo-parceiros">
              Parceiros
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6" component="h2">
              
            </Typography>
          </Grid>
          {productList.map((product) => (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
              <Card>
                <CardMedia
                  component="img"
                  height="200"
                  image={product.image}
                  alt={product.title}
                />
                <CardContent>
                  <Typography variant="h6" component="h3">
                    {product.title}
                  </Typography>
                  <Typography variant="body1" color="textSecondary">
                    Troca: {product.troca}
                  </Typography>
                </CardContent>
                <Container className="troca-button">
                <Button variant="contained" color="warning">
            Trocar
            </Button>
            </Container>
              </Card>
            </Grid>
          ))}
         
        </Grid>
      </Container>
      </div>
    );
}

export default Parceiros;
const productList = [
    {
      id: 1,
      title: 'Fazenda dos animais',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZysmkoVO9RSy85i5tH1JNB0g3_XuIW8_h_A&usqp=CAU',
      troca: 'bananas',
    },
    {
      id: 2,
      title: 'Fazenda Cascata',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIAMguTy6rjZNoQEhB6SAi5rSfto7WMC9SJQ&usqp=CAU',
      troca: 'cenouras',
    },
    {
      id: 3,
      title: 'Fazenda Solar',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh8S9sNbDpPRR88VVvu_8h3yJ4vy_IHGPM_Q&usqp=CAU',
      troca: 'alfaces ou batatas',
    },
  ];