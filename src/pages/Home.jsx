import React from 'react';
    import '../App.css';
    import coffeeBeans from '../images/coffee-beans.jpg';

    function Home() {
      return (
        &lt;div className="home"&gt;
          &lt;header&gt;
            &lt;h1&gt;The Daily Grind&lt;/h1&gt;
            &lt;nav&gt;
              &lt;a href="/"&gt;Home&lt;/a&gt;
              &lt;a href="/menu"&gt;Menu&lt;/a&gt;
              &lt;a href="/about"&gt;About&lt;/a&gt;
              &lt;a href="/contact"&lt;/a&gt;
            &lt;/nav&gt;
          &lt;/header&gt;
          &lt;section className="hero"&gt;
            &lt;img src={coffeeBeans} alt="Coffee Beans" /&gt;
            &lt;div&gt;
              &lt;h2&gt;Your Daily Dose of Happiness&lt;/h2&gt;
              &lt;p&gt;Start your day with our expertly crafted coffee blends. We use only the finest beans, ethically sourced and roasted to perfection.&lt;/p&gt;
            &lt;/div&gt;
          &lt;/section&gt;
          &lt;section className="features"&gt;
            &lt;div&gt;
              &lt;i className="fas fa-mug-hot"&gt;&lt;/i&gt;
              &lt;h3&gt;Premium Coffee&lt;/h3&gt;
              &lt;p&gt;Experience the rich aroma and smooth taste of our premium coffee.&lt;/p&gt;
            &lt;/div&gt;
            &lt;div&gt;
              &lt;i className="fas fa-cookie-bite"&gt;&lt;/i&gt;
              &lt;h3&gt;Delicious Pastries&lt;/h3&gt;
              &lt;p&gt;Pair your coffee with our selection of freshly baked pastries.&lt;/p&gt;
            &lt;/div&gt;
            &lt;div&gt;
              &lt;i className="fas fa-map-marker-alt"&gt;&lt;/i&gt;
              &lt;h3&gt;Convenient Location&lt;/h3&gt;
              &lt;p&gt;Find us in the heart of the city.&lt;/p&gt;
            &lt;/div&gt;
          &lt;/section&gt;
        &lt;/div&gt;
      );
    }

    export default Home;
