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
        <main className='content'>
          <nav className='navigation'>Nav</nav>
          <div className='heading-secondary'>Who are we?</div>
          <p className='paragraph'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis tempora iusto modi asperiores praesentium in dolor
            quibusdam veritatis, quasi dolorem vel, aspernatur, eligendi
            deleniti odio. Quod rem accusantium quae amet molestiae odit
            dignissimos! Corporis expedita non molestiae rem nobis? Impedit
            error perferendis nobis, alias ad ab maiores a delectus vel aut
            nostrum quis eligendi id dignissimos quod fugit debitis, dolores
            labore vero eos aspernatur tempora. Veritatis architecto, optio
            laborum accusantium consectetur placeat ducimus rerum quos at natus,
            maiores, fugit magnam nesciunt est quia mollitia libero aliquam?
            Libero temporibus vero voluptas nemo provident necessitatibus ullam
            inventore ut officia quaerat adipisci modi iste, unde nulla
            voluptates nihil! Repudiandae perferendis dignissimos quas, totam
            nam incidunt voluptatibus magnam nobis itaque possimus veniam minima
            amet vero nisi deleniti molestiae pariatur deserunt quidem! Porro
            sit recusandae ipsam tenetur voluptate quae fuga quisquam fugit
            ullam maiores sunt obcaecati tempore, dolorem error, necessitatibus
            molestias nobis deserunt minima nisi optio! Quaerat quos fugit iste
            in illo provident, laborum ipsam sed, blanditiis nihil sint
            assumenda, fuga officia quidem porro dolorum sapiente! Nemo
            dignissimos odit vitae fugiat sequi ut velit omnis. Atque deleniti
            assumenda hic quasi accusantium ipsam dicta officiis esse ullam
            magni ut repudiandae voluptatibus, accusamus cumque ipsa alias
            reiciendis.
          </p>
        </main>
        <footer className='footer'>Footer</footer>
      </Fragment>
    </div>
  );
}

export default App;
