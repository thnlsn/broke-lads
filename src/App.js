import React, { Fragment } from 'react';
import './css/style.css';

// SVGs
import Skyline from './images/skyline.svg';

// Logo image for the header
const headerLogo = '';

function App() {
  return (
    <div className='App'>
      <Fragment>
        <header className='header'>
          <div className='title'>
            <div className='title__logo-box'>
              <img src={headerLogo} alt='Logo' className='header__logo' />
            </div>
            <div className='title__text-box'>
              <h1 className='heading-primary'>
                <span className='heading-primary--main'>Broke Lads</span>
                <span className='heading-primary--sub'>
                  "Savages with empty pockets"
                </span>
              </h1>
            </div>
          </div>
        </header>
        <nav className='navigation nav-text'>
          <div className='navigation__tab'>
            <input
              type='radio'
              id='home-tab'
              name='tab-nav'
              value='home-tab'
              className='navigation__nav-radio'
              defaultChecked // "defaultChecked" and not "checked," otherwise it will check this tab inbetween every attempt to check
            />
            <label htmlFor='home-tab' className='navigation__tab-button'>
              Home
            </label>
          </div>
          <div className='navigation__tab'>
            <input
              type='radio'
              id='creator-tab'
              name='tab-nav'
              value='creator-tab'
              className='navigation__nav-radio'
            />
            <label htmlFor='creator-tab' className='navigation__tab-button'>
              Creators
            </label>
          </div>
          <div className='navigation__tab'>
            <input
              type='radio'
              id='follow-tab'
              name='tab-nav'
              value='follow-tab'
              className='navigation__nav-radio'
            />
            <label htmlFor='follow-tab' className='navigation__tab-button'>
              Follow Us!
            </label>
          </div>
        </nav>
        <main className='content'>
          <div className='heading-secondary u-margin-bottom-medium'>
            Who are we <span className='emphasis'>?</span>
          </div>
          <p className='paragraph paragraph--lined'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            fuga rem eligendi ea iste, qui ut quis animi doloribus atque modi!
            Porro vel rerum reprehenderit ratione, maiores ipsam voluptatum
            temporibus, perferendis deleniti minima laborum voluptatibus rem
            labore maxime quaerat iste molestiae, deserunt provident autem
            optio? Quo, at! Vitae provident doloribus nesciunt placeat
            perspiciatis fugit voluptatibus ea molestiae beatae animi sint quia
            <span className='emphasis'> tempora </span> aut, quas ipsum
            voluptate iusto inventore, corporis totam? Qui mollitia praesentium
            explicabo tempore magnam velit accusamus. Doloremque nam placeat ab
            ducimus sint odio incidunt! Quae, incidunt id nisi maiores qui
            obcaecati inventore harum vero nobis doloremque consectetur, et a
            expedita impedit sequi <span className='emphasis'> repellat </span>
            totam ducimus blanditiis praesentium, dolor dignissimos autem
            molestias? Error consequatur vitae ex esse maxime odio facilis
            accusantium iste enim alias est fugiat, perferendis expedita
            delectus porro eius assumenda laudantium sit saepe quo nulla eum.
            Est dolorem eligendi numquam culpa earum nulla beatae dolor vitae
            iure! Maiores, cumque corrupti. Laborum delectus corporis suscipit
            at perspiciatis quod architecto eaque, temporibus magnam non,
            dolorem tenetur facere maiores nam explicabo. Labore, at mollitia
            dolor adipisci, cumque ipsam nulla praesentium provident quaerat
            sint porro incidunt consequatur est quis quo quod!
          </p>
        </main>
        <div className='quotes'>
          <div className='quote'>"These dudes are hilarous!" - Joe Smith</div>
          <div className='quote'>"These dudes are hilarous!" - Joe Smith</div>
          <div className='quote'>"These dudes are hilarous!" - Joe Smith</div>
        </div>
        <footer className='footer'>
          <img
            className='footer__skyline'
            src={Skyline}
            alt='Skyline Footer Art'
          />
          <div className='footer__copyright'>
            &copy; 2020 by Broke Lads. All rights reserved.
          </div>
        </footer>
      </Fragment>
    </div>
  );
}

export default App;

/* 

// Notes of things I've learned while coding this page

Use em as a more responsive and future proof way of increasing or decreasing sizes for things that are dependant on the parent, like subtitles or emphasis classes on fonts

*/
