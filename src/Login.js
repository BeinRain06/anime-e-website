import "./Login.css";

function Login() {
  return (
    <div className="login_container">
      <span className="motto">Fly With You</span>
      <div className="events-show">
        <h3 className="event-title">EVENTS</h3>
        <ul className="event_list">
          <li className="event">
            <h4>saloon Anime Emeraude barcelona</h4>
            <p>
              <i>26th August ...</i>
            </p>
          </li>
          <li className="event">
            <h4>Everest sword art Petrova</h4>
            <p>
              <i>10th November ...</i>
            </p>
          </li>
        </ul>
      </div>
      <div className="login_content">
        <h3 className="title_form">animeOSLibrary</h3>
        <form className="form_container">
          <label htmlFor="Name">Name</label>
          <input type="text" id="name" className="name" />
          <label htmlFor="Email">Email</label>
          <input type="text" id="email" className="email" />
          <label htmlFor="password"> password</label>
          <input type="password" id="password" className="password" />
          <label htmlFor="confirm_password">confirm password</label>
          <input
            type="password"
            id="confirm_password"
            className="confirm_password"
          />
          <div className="submit_container">
            <button className="submit">Submit</button>
            <p className="account_registered">
              Already have an Account Sign In
            </p>
            <button className="sign_in"></button>
          </div>
        </form>

        <div className="home">
          <p>Home</p>
        </div>
      </div>
    </div>
  );
}

export default Login;
