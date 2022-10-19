import "./footer.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LanguageIcon from "@mui/icons-material/Language";
const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="socials">
          <div className="social">
            <a href="https://github.com/Novecento201" target="_/blank">
              <GitHubIcon />
            </a>
          </div>
          <div className="social">
            <a
              href="https://www.linkedin.com/in/marco-lovato-3816a3229/"
              target="/_blank"
            >
              <LinkedInIcon />
            </a>
          </div>
          <div className="social">
            <a
              href="https://talent.start2impact.it/profile/marco-lovato-a869"
              target="_/blank"
            >
              <LanguageIcon />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
