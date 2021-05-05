 import './App.css';

function App() {
  return (
    <div className="container">
      <article class="content">
        <h1>Learn to code by <br />watching others</h1>
        <p class="content-paragraph">
          See how experienced developers solve problems in real-time. Watching
          scripted tutorials is great, but understanding how developers think is
          invaluable.
        </p>
      </article>
      <div class="form-container">
        <div class="form-heading">
          <h3>Try it free 7 days <span>then $20/mo thereafter</span></h3>
        </div>
        <form action="#">
          <input
            type="text"
            name="first-name"
            id="first-name"
            placeholder="First Name"
            required
          />
          <input
            type="text"
            name="last-name"
            id="last-name"
            placeholder="Last Name"
            required
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            required
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            required
          />         

          <button type="submit">CLAIM YOUR FREE TRIAL</button>
          <label for=""
            >By clicking the button you are agreeing to our
            <span class="terms-span">Terms and Services</span></label
          >
        </form>
      </div>
      </div>    
  );
}

export default App;
