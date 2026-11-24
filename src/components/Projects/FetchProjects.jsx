import { createClient } from "contentful";
import { useState, useEffect } from "react";
import { fallbackProjects } from "../../data";

const apiKey = import.meta.env.VITE_API_KEY;

const client = apiKey
  ? createClient({
      space: "j7eawbkwg202",
      environment: "master",
      accessToken: apiKey,
    })
  : null;

const useFetchProjects = (type) => {
  const [loading, setLoading] = useState(Boolean(client));
  const [error, setError] = useState(null);
  const [projects, setProjects] = useState(client ? [] : fallbackProjects);

  useEffect(() => {
    if (!client) {
      setProjects(fallbackProjects);
      setLoading(false);
      return;
    }

    let active = true;

    const getData = async () => {
      try {
        const response = await client.getEntries({ content_type: type });
        if (!active) return;

        const items = response.items.map((data) => {
          const { title, url, image, description, tags } = data.fields;
          return {
            id: data.sys.id,
            title,
            url,
            description,
            tags: Array.isArray(tags) ? tags : [],
            img: image?.fields?.file?.url,
          };
        });

        setProjects(items.length > 0 ? items : fallbackProjects);
      } catch (err) {
        if (active) {
          setError(err);
          setProjects(fallbackProjects);
        }
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
