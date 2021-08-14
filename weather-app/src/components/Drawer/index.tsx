import React, { useCallback, useEffect, useRef, useState } from "react";
import { IoClose } from "react-icons/io5";
import { BiSearch } from "react-icons/bi";
import { GoChevronRight } from "react-icons/go";
import { useRouter } from "next/router";

import Link from "next/link";

import { Container } from "./styles";
import api from "../../service/api";

type DrawerProps = {
  setDrawer(bool: boolean): void;
};

type Countries = {
  woeid: number;
  title: string;
};

export default function Drawer({ setDrawer }: DrawerProps) {
  const [search, setSearch] = useState<string>("");
  const [countries, setCountries] = useState<Countries[] | null>(null);
  const [error, setError] = useState<boolean>(false);

  const handleSubmit = async () => {
    setError(false);
    try {
      const { data } = await api.get(`api/location/search/?query=${search}`);
      setCountries(data);
    }catch(err) {
      setError(true);
    }
  };

  return (
    <Container>
      <div className="drawer-close">
        <IoClose
          onClick={() => setDrawer(false)}
          className="drawer-close-icon"
          size={40}
          color="white"
        />
      </div>
      <div className="drawer-search">
        <div className="drawer-search-wrap">
          <BiSearch color="gray" size={23} />
          <input
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            placeholder="seach location"
            className="drawer-search-wrap-input"
          />
        </div>
        <button onClick={handleSubmit} className="drawer-search-button">
          Search
        </button>
      </div>
      {countries?.map((country) => (
        <Link key={country.woeid} href={`?query=${country.woeid}`}>
          <a onClick={() => setDrawer(false)}>
            <div className="drawer-location">
              <article className="drawer-location-country">
                {country.title}
              </article>
              <GoChevronRight size={25} color="gray" />
            </div>
          </a>
        </Link>
      ))}

      {error && (
        <h1>No city found</h1>
      )}
    </Container>
  );
}
