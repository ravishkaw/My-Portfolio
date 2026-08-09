import { useEffect } from "react";

const SITE = "https://ravishka.me";

const setMeta = (selector, attr, value) => {
  const tag = document.head.querySelector(selector);
  if (tag) tag.setAttribute(attr, value);
};

/**
 * Keeps the document title, description and canonical URL in step with the
 * current route. Without this every route reports the homepage's metadata,
 * which is what search engines and link previews would index.
 */
const usePageMeta = ({ title, description, path }) => {
  useEffect(() => {
    document.title = title;

    if (description) {
      setMeta('meta[name="description"]', "content", description);
      setMeta('meta[property="og:description"]', "content", description);
      setMeta('meta[name="twitter:description"]', "content", description);
    }

    setMeta('meta[property="og:title"]', "content", title);
    setMeta('meta[name="twitter:title"]', "content", title);

    if (path) {
      const url = `${SITE}${path}`;
      setMeta('link[rel="canonical"]', "href", url);
      setMeta('meta[property="og:url"]', "content", url);
    }
  }, [title, description, path]);
};

export default usePageMeta;
