import React, { useState, useCallback, useEffect } from "react";
import debounce from "lodash/debounce";
import "./Autocomplete.css";
import { Image } from "../../types/images";
import searchImages from "../../service/api";

export default function Autocomplete() {
  const [searchTerm, setSearchTerm] = useState("");
  const [images, setImages] = useState<Image[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = useCallback(
    debounce(async (term: string) => {
      setLoading(true);
      try {
        const response = await searchImages(term);
        setImages(response);
      } catch (error) {
        console.error("Error fetching images:", error);
      } finally {
        setLoading(false);
      }
    }, 300),
    []
  );

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    handleSearch(value);
  };

  useEffect(() => {
    if (!searchTerm) {
      setImages([]);
    }
  }, [searchTerm]);

  return (
    <div className="autocomplete">
      <label htmlFor="search">Autocomplete:</label>
      <input
        type="text"
        placeholder="Type to search..."
        value={searchTerm}
        onChange={onChange}
      />
      {loading && <div className="loading">Loading...</div>}{" "}
      <div className="autocomplete-suggestions">
        <ul>
          {images?.map((image) => (
            <li key={image.id}>{image.slug}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
