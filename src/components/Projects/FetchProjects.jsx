import { createClient } from "contentful";
import { useState, useEffect } from "react";

const client = createClient({
  space: "j7eawbkwg202",
  environment: "master",
  accessToken: import.meta.env.VITE_API_KEY,
});

const useFetchProjects = (type) => {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  const getData = async () => {
    try {
      const response = await client.getEntries({
        content_type: type,
      });
      const projects = response.items.map((data) => {
        const { title, url, image } = data.fields;
        const id = data.sys.id;
        const img = image?.fields?.file?.url;
        return { id, title, url, img };
      });
      setProjects(projects);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return { loading, projects };
};

export default useFetchProjects;
