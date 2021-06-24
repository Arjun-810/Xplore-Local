import React from 'react';
import './AboutUs.css';
import Footer from '../Footer';
import Grid from '@material-ui/core/Grid';

export default function AboutJs() {
  return (
    <div>
      <div className='AboutUs'>
        <h1 className="head-text">Xplore Local</h1>
        <h2 className="head-text2 main-border">India's First Community providing</h2>
        <h2 className="head-text2">Free city walking tour</h2>
      </div>
      <div className="About-content">
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={3}>
        <Grid item xs={12} md={2}></Grid>
          <Grid item xs={12} md={4}>
          <h1 className="about-content-heading">Who are we ?</h1>
            <p className="about-content-parah">We are a team of young and spirited individuals who love exploring India and are mightily excited about sharing our insights! We believe that travel isn’t and can’t be just about ticking some destinations off the bucket list. Hence, with Roobaroo Walks, we help you colour your travel by letting you get under the skin of a city and step deeper into its culture, history, and traditions.  Our primary endeavour is to craft unforgettable travel memories by making you feel like an insider, even if for just a few hours 🙂</p>
          </Grid>
          <Grid item xs={12} md={4}>
            <img className="about-img" src="images/about/pexels-athena-1963622.jpg"></img>
          </Grid>
          <Grid item xs={12} md={2}></Grid>
          <Grid item xs={12} md={2}></Grid>
          <Grid item xs={12} md={4}>
            <img className="about-img" src="images/about/pexels-maor-attias-5176005.jpg"></img>
          </Grid>
          <Grid item xs={12} md={4}>
    <h1 className="about-content-heading">How do we do it?</h1>
            <p className="about-content-parah">We will lead you to fascinating places - both popular and offbeat. Our fun and insightful Storytellers will let you in on the city’s best kept secrets. You will relish delicious food - from the streets and homes, engage with local artforms and artists, even teach a skill to an interested audience. And our location-aware mobile app is an informed local friend in your pocket! We believe in Sustainable Tourism that involves and benefits the local community, and facilitates genuine cultural exchange.</p>
          </Grid>
          <Grid item xs={12} md={2}></Grid>
          <Grid item xs={12} md={2}></Grid>
          <Grid item xs={12} md={4}>
            <h1 className="about-content-heading">Where are we?</h1>
            <p className="about-content-parah">We took our first steps in Varanasi, India, in June 2015 and are now extending to other destinations. Our Delhi chapter was launched in February 2018, Lucknow, Amritsar, Agra and Allahabad in 2019. The Himalayas and Dehradun chapters are in the pipeline. We have conducted 1,600+ Heritage Walks and have made to the memories of over 5,000 travellers from 45+ nationalities. We have received the Trip Advisor’s Certificate of Excellence for 2 consecutive years and have gained more than 550 valuable reviews, mostly 5 stars (95% of them!). The second version of our Mobile App is under testing with the travellers in Varanasi from June 2018 and has shown encouraging results. In time, we plan to cover all of India and other countries to continue leaving the trails with memorable experiences 🙂</p>
          </Grid>
          <Grid item xs={12} md={4}>
            <img className="about-img" src="images/about/pexels-brett-sayles-1149632.jpg"></img>
          </Grid>
          <Grid item xs={12} md={2}></Grid>
          <Grid item xs={12} md={2}></Grid>
          
          <Grid item xs={12} md={4}>
            <img className="about-img" src="images/about/pexels-ritesh-arya-3079978.jpg"></img>
          </Grid>
          <Grid item xs={12} md={4}>
            <p className="about-content-parah">We are a registered company (Reg. No. - UPSA43707842), with a team that's keen on sharing the Indian heritage with the world. We all come from different educational and industrial backgrounds, held together by a common philosophy rather than a formal networks. GSTIN - 09AKRPR7800A1Z0</p>
          </Grid>
          <Grid item xs={12} md={2}></Grid>
        </Grid>
      </Grid>
      </div>

      <div className="count">
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={3}>
          <Grid item xs={12} lg={3} md={6}>
            <h1>70+</h1>
            <h3 className="count-text">City Tour</h3>
          </Grid>
          <Grid item xs={12} lg={3} md={6}>
            <h1>120+</h1>
            <h3 className="count-text">Walking Tour</h3>
          </Grid>
          <Grid item xs={12} lg={3} md={6}>
            <h1>15+</h1>
            <h3 className="count-text">Customize Trip</h3>
          </Grid>
          <Grid item xs={12} lg={3} md={6}>
            <h1>19+</h1>
            <h3 className="count-text">Treaking Trip</h3>
          </Grid>
        </Grid>
      </Grid>
      </div>
      
      <Footer />
    </div>
  )
}
