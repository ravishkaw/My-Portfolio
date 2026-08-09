import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import usePageMeta from "../../hooks/usePageMeta";
import "./NotFound.css";

const NotFound = () => {
  usePageMeta({ title: "Page not found - Ravishka Wijerathne" });

  return (
    <section className="section notfound">
      <div className="container notfound-inner">
        <p className="notfound-code gradient-text">404</p>
        <h1 className="section-title">This page doesn&apos;t exist</h1>
        <p className="section-subtitle notfound-text">
          The link may be outdated, or the page has moved. Let&apos;s get you
          back on track.
        </p>
        <Link to="/" className="btn btn-primary">
          <FaArrowLeft /> Back home
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
