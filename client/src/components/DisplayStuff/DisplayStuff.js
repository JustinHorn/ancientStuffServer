import React, { useState, useEffect } from "react";

import Entry from "components/Enrtry";
import styles from "./displaystuff.module.css";

import { useParams } from "react-router-dom";

import fetchFromContentful, { getItemsArray } from "helper/fetchFromContentful";

export default function DisplayStuff() {
  const { stuff, name } = useParams();
  const { entries } = useStuff(stuff);
  return (
    <>
      <h1>Ancient {name}</h1>

      <div className={styles.entries}>
        {entries &&
          entries.map((entry, index) => <Entry key={index} {...entry} />)}
      </div>
    </>
  );
}

function useStuff(type) {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    fetch("/stuff/" + type)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);

        const items = response.map((item) => {
          return {
            name: item.name,
            description: item.description,
            stats: JSON.parse(item.stats),
            url: item.img,
          };
        });

        setEntries(items);
      });
  }, [type]);

  return { entries, setEntries };
}

function getStuffQuery(stuff) {
  return `
    {
      ${stuff}Collection {
        total
        items {
          name
          image {
            url
          }
          stats 
          description
        }
      }
    }`;
}
