import { useState, useEffect } from "react";
import youtube from "../apis/youtube";

const useVideos = (defaultSearchTerm) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    search(defaultSearchTerm);
  }, [defaultSearchTerm]);

  const search = (term) => {
    youtube
      .get("/search", {
        params: {
          q: term,
        },
      })
      .then((resp) => {
        setVideos(resp.data.items);
      });
  };

  return [videos, search];
};

export default useVideos;
