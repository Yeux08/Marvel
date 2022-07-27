import axios from "axios";
import React from "react";

const personajesFun = async (state) => {
  const personajesUrl = await axios.get(
    "https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=91dbe2a12d78c82041cd263e49619acc&hash=fe0901aaf4845cd58b6cd8ae01d073e4"
  );
  state(personajesUrl.data.data.results);
};

const personajesFunlen = async (state) => {
  const lengUrl = await axios.get(
    "https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=91dbe2a12d78c82041cd263e49619acc&hash=fe0901aaf4845cd58b6cd8ae01d073e4"
  );
  state(lengUrl.data.data.results.length);
  console.log(lengUrl.data.data.results.length);
};

const comicsFun = async (state) => {
  const comicsUrl = await axios.get(
    "https://gateway.marvel.com:443/v1/public/comics?ts=1&apikey=91dbe2a12d78c82041cd263e49619acc&hash=fe0901aaf4845cd58b6cd8ae01d073e4"
  );
  state(comicsUrl.data.data.results);
};

const comicsFunLen = async (state) => {
  const comicsLenUrl = await axios.get(
    "https://gateway.marvel.com:443/v1/public/comics?ts=1&apikey=91dbe2a12d78c82041cd263e49619acc&hash=fe0901aaf4845cd58b6cd8ae01d073e4"
  );
  state(comicsLenUrl.data.data.results.length);
};

const cratorsFun = async (state) => {
  const cratorsUrl = await axios.get(
    "https://gateway.marvel.com:443/v1/public/creators?ts=1&apikey=91dbe2a12d78c82041cd263e49619acc&hash=fe0901aaf4845cd58b6cd8ae01d073e4"
  );
  state(cratorsUrl.data.data.results);
};

const cratorsFunLen = async (state) => {
  const cratorsLenUrl = await axios.get(
    "https://gateway.marvel.com:443/v1/public/creators?ts=1&apikey=91dbe2a12d78c82041cd263e49619acc&hash=fe0901aaf4845cd58b6cd8ae01d073e4"
  );
  state(cratorsLenUrl.data.data.results.length);
};

const eventosFun = async (state) => {
  const eventosUrl = await axios.get(
    "https://gateway.marvel.com:443/v1/public/events?ts=1&apikey=91dbe2a12d78c82041cd263e49619acc&hash=fe0901aaf4845cd58b6cd8ae01d073e4"
  );
  state(eventosUrl.data.data.results);
};

const eventosFunLen = async (state) => {
  const eventosLenUrl = await axios.get(
    "https://gateway.marvel.com:443/v1/public/events?ts=1&apikey=91dbe2a12d78c82041cd263e49619acc&hash=fe0901aaf4845cd58b6cd8ae01d073e4"
  );
  state(eventosLenUrl.data.data.results.length);
};

export {
  personajesFun,
  comicsFun,
  personajesFunlen,
  comicsFunLen,
  cratorsFun,
  cratorsFunLen,
  eventosFun,
  eventosFunLen,
};
