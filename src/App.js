import './App.css';
import profileImg from './assets/my-image.jpg';

const App = () => {
  return (
    <main className='main'>
      <img src={profileImg} alt='Isaiah Ernest Ovie' id='profile__img' />
      <h1 id='twitter'>Isaiah Ernest Ovie</h1>
      <h2 id='slack'>ernestechie</h2>

      <div className='links'>
        <a
          href='https://twitter.com/ernestechie'
          id='twitter'
          target='_blank'
          rel='noreferrer'
        >
          Twitter Link
        </a>
        <a
          href='https://training.zuri.team/'
          id='btn__zuri'
          target='_blank'
          rel='noreferrer'
        >
          Zuri Team
        </a>
        <a
          href='https://books.zuri.team'
          id='books'
          target='_blank'
          rel='noreferrer'
        >
          Zuri Books
        </a>
        <a
          href='https://books.zuri.team/python-for-beginners?ref_id=ernestechie'
          id='book__python'
          target='_blank'
          rel='noreferrer'
        >
          Python Books
        </a>
        <a
          href='https://background.zuri.team'
          id='pitch'
          target='_blank'
          rel='noreferrer'
        >
          Background Check for Coders
        </a>
        <a
          href='https://books.zuri.team/design-rules'
          id='book__design'
          target='_blank'
          rel='noreferrer'
        >
          Design Books
        </a>
      </div>
    </main>
  );
};

export default App;
