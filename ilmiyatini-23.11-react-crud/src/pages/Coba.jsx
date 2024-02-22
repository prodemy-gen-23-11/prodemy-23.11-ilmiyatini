import axios from "axios";
import React, { useEffect, useState } from "react";

function Coba() {
  const [data, setData] = useState([]);
  const getData = async () => {
    const resp = await axios.get("https://dummyjson.com/products");
    console.log(resp.data);
    setData(resp.data.products);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      {data.map((item) => (
        <>
          <p>{item.title}</p>
          <img src={item.thumbnail} />
        </>
      ))}
    </div>
  );
}

export default Coba;
