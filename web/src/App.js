import React, {useState, useEffect} from 'react';
import { Button, Icon, IconButton, Grid, List, ListItem, ListItemText } from '@material-ui/core';

//Componente
//Estado
//Propriedade

function App() {
  const [contador, setContador] = useState(0);
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);

  const WrappedIcon = props => <Icon {...props} />;
  WrappedIcon.muiName = Icon.muiName;

  useEffect(()=>{
    navigator.geolocation.getCurrentPosition((position)=>{
      console.log(position);
      const {latitude, longitude} = position.coords;
      setLatitude(latitude);
      setLongitude(longitude);
    },
    (err)=>{
      console.log(err)
    });
  },[])


  function incrementCounter(){
    setContador(contador +1);


  }
  return (
    <>
    
    <Grid>
    <IconButton>
  <Icon>alarm</Icon>
</IconButton>
<IconButton>
  <WrappedIcon>alarm</WrappedIcon>
</IconButton>

<List component="nav">
  <ListItem button>
    <ListItemText primary="Trash" />
  </ListItem>
  <ListItem button>
    <ListItemText primary="Spam" />
  </ListItem>
</List>

    <h1>Contador: {contador}</h1>
    <h1>Longitude: {longitude} </h1>
    <h1>Latitude: {latitude} </h1>
    <Button variant="contained" color="primary" onClick={incrementCounter}>Incrementar</Button>
    </Grid>
    </>
  );
}

export default App;
