import React from "react";
import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Elimage from "../elements/Elimage";
import styled from "styled-components";


const Cards = (props) => {
    return (
      <React.Fragment>
        <button>
        <Card sx={{ maxWidth: 220, maxHeight: 350 }}>
          <CardGrid>
            <ImgGrid>
              <Elimage
                shape="cardImg"
                src="https://image.yes24.com/goods/73031896/XL"
              />
            </ImgGrid>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardGrid>
        </Card>

        <div>
          <Elimage
            shape="cardImg"
            src="https://image.yes24.com/goods/73031896/XL"
          />
        </div>
        </button>
      </React.Fragment>
    );
};

const CardGrid = styled.div`
  padding: 5px 11px 6px 11px;
`
const ImgGrid = styled.div`
  margin: auto;
  width:193px;
  height: 193px;
`

export default Cards;