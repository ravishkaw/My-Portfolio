import { createClient } from "contentful";
import { useState, useEffect } from "react";

const client = createClient({
  space: "j7eawbkwg202",
  environment: "master",
  accessToken: import.meta.env.VITE_API_KEY,
});

const useFetchProjects = (type) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    let active = true;

    const getData = async () => {
      try {
        const response = await client.getEntries({ content_type: type });
        if (!active) return;

        setProjects(
          response.items.map((data) => {
            const { title, url, image, description, tags } = data.fields;
            return {
              id: data.sys.id,
              title,
              url,
              description,
              tags: Array.isArray(tags) ? tags : [],
              img: image?.fields?.file?.url,
            };
          })
        );
      } catch (err) {
        if (active) setError(err);
      } finally {
        if (active) setLoading(false);
      }
    };

    getData();
    return () => {
      active = false;
    };
  }, [type]);

  return { loading, error, projects };
};

export default useFetchProjects;
