import React, { Fragment } from 'react';
import './css/style.css';

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
        <nav className='navigation'>
          <div className='navigation__nav-item'>Home</div>
          <div className='navigation__nav-item'>Creator Pages</div>
          <div className='navigation__nav-item'>Follow Us!</div>
        </nav>
        <main className='content'>
          <div className='heading-secondary'>Who are we?</div>
          <p className='paragraph paragraph--lined'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            fuga rem eligendi ea iste, qui ut quis animi doloribus atque modi!
            Porro vel rerum reprehenderit ratione, maiores ipsam voluptatum
            temporibus, perferendis deleniti minima laborum voluptatibus rem
            labore maxime quaerat iste molestiae, deserunt provident autem
            optio? Quo, at! Vitae provident doloribus nesciunt placeat
            perspiciatis fugit voluptatibus ea molestiae beatae animi sint quia
            tempora aut, quas ipsum voluptate iusto inventore, corporis totam?
            Qui mollitia praesentium explicabo tempore magnam velit accusamus.
            Doloremque nam placeat ab ducimus sint odio incidunt! Quae, incidunt
            id nisi maiores qui obcaecati inventore harum vero nobis doloremque
            consectetur, et a expedita impedit sequi repellat totam ducimus
            blanditiis praesentium, dolor dignissimos autem molestias?
            Consectetur aut, eius facilis modi unde tenetur, molestiae eos
            molestias mollitia amet error ut tempora. Error consequatur vitae ex
            esse maxime odio facilis accusantium iste enim alias est fugiat,
            perferendis expedita delectus porro eius assumenda laudantium sit
            saepe quo nulla eum. Est dolorem eligendi numquam culpa earum nulla
            beatae dolor vitae iure! Maiores, cumque corrupti. Laborum delectus
            corporis suscipit at perspiciatis quod architecto eaque, temporibus
            magnam non, dolorem tenetur facere maiores nam explicabo. Labore, at
            mollitia dolor adipisci, cumque ipsam nulla praesentium provident
            quaerat sint porro incidunt consequatur est quis quo quod!
          </p>
        </main>
        <footer className='footer'>Footer</footer>
      </Fragment>
    </div>
  );
}

export default App;
