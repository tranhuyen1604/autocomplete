import React, { useState, useEffect, useRef } from "react";
import { fromEvent } from "rxjs";
import {
  debounceTime,
  distinctUntilChanged,
  switchMap,
  map,
  catchError,
} from "rxjs/operators";
import searchImages from "../../service/api";
import { Image } from "../../types/images";
import "./EnhancedAutocomplete.css";

const DebounceTime = 500;

export default function SearchBar() {
  const [images, setImages] = useState<Image[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const searchInput = searchInputRef.current;
    if (!searchInput) return;

    const subscription = fromEvent<Event>(searchInput, "input")
      .pipe(
        map((event: Event) => (event.target as HTMLInputElement).value),
        debounceTime(DebounceTime),
        distinctUntilChanged(),
        switchMap(async (searchTerm: string) => {
          if (!searchTerm.trim()) {
            setImages([]);
            return [];
          }

          setIsLoading(true);

          try {
            const response = await searchImages(searchTerm);
            setImages(response);
            return response;
          } catch (err) {
            console.error("Error fetching search images:", err);
            setImages([]);
            return [];
          } finally {
            setIsLoading(false);
          }
        }),
        catchError((err) => {
          setIsLoading(false);
          console.error("Error in search stream:", err);
          return [];
        })
      )
      .subscribe();

    return () => subscription.unsubscribe();
  }, [DebounceTime]);

  return (
    <div className="enhanced-autocomplete">
      <input
        type="text"
        ref={searchInputRef}
        placeholder="Type to search..."
        className="search-input"
      />

      {isLoading && <div className="loading">Searching...</div>}
      <div className="images">
        {images?.length > 0 ? (
          <ul>
            {images?.map((item) => (
              <li key={item.id}>
                <h3>{item.slug}</h3>
              </li>
            ))}
          </ul>
        ) : (
          !isLoading && <div className="no-images">No available</div>
        )}
      </div>
    </div>
  );
}
