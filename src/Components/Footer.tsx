import tmdb from "../assets/tmdb-logo.png";

const Footer = () => (
  <footer className="relative p-5 text-center">
    <p className="my-4">
      No commercial purposes intended, made only for showing web development
      techniques and to be included as a piece of portfolio.
      <br />
      This product uses the TMDb API but is not endorsed or certified by IMBd.
    </p>
    <img
      src={tmdb}
      alt="The Movie Db Logo"
      style={{
        overflowClipMargin: "content-box",
        overflow: "clip",
        display: "inline",
        width: 200,
      }}
    />
  </footer>
);

export default Footer;
