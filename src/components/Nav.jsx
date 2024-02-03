import whiteLogo from "../assets/tinder_logo_white.png";
import colorLogo from "../assets/color-logo-tinder.png";
import freightLogo from "../assets/freigterfriendslogo.png"

function Nav ({ authToken, minimal, setShowModal, showModal, setIsSignUp }) {
  const handleClick = () => {
    setShowModal(true);
    setIsSignUp(false);
  };

  return (
    <nav>
      <div className="logo-container">
        <img
          className="logo"
          src={minimal ? colorLogo : colorLogo}
          alt="logo"
        />
      </div>
      {!authToken && !minimal && (
        <button
          className="nav-button"
          onClick={handleClick}
          disabled={showModal}
        >
          Log in
        </button>
      )}
    </nav>
  );
};
export default Nav;