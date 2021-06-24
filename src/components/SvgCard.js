import React from 'react';
import Grid from '@material-ui/core/Grid';
import './SvgCard.css';



export default function SvgCard() {


  return (
    <div className="svg_card">
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={3}>
          <Grid item xs={12} lg={3} md={6}>
            <div className="svg-container">
            <img className="Svg1" src="images/Svg/svg3.svg" width="250px"></img>
            </div>
            <h3 className="svg-text">Public Intrection</h3>
          </Grid>
          <Grid item xs={12} lg={3} md={6}>
          <div className="svg-container">
            <img className="Svg2" src="images/Svg/svg2.svg" width="300px"></img>
            </div>
            <h3 className="svg-text">Summer Holiday</h3>
          </Grid>
          <Grid item xs={12} lg={3} md={6}>
          <div className="svg-container">
            <img className="Svg3" src="images/Svg/svg4.svg" width="200px"></img>
            </div>
            <h3 className="svg-text">Walking Tour</h3>
          </Grid>
          <Grid item xs={12} lg={3} md={6}>
          <div className="svg-container">
            <img className="Svg4" src="images/Svg/svg1.svg" width="150px"></img>
            </div>
            <h3 className="svg-text">Treaking Trip</h3>
          </Grid>
        </Grid>

      </Grid>
    </div>
  );
}