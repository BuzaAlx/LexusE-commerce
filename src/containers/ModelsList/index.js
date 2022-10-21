import React, { useState, useEffect } from "react";
import "./styles.scss";
import IconMenu from "images/logo.png";
import Card from "../../components/card";
import {
  AiOutlineCar,
  AiOutlineSliders,
  AiFillPhone,
  AiOutlineSearch,
} from "react-icons/ai";
import Layout from "../../components/layout";
import { useParams } from "react-router-dom";
import firebase from "../../services/firebase";
import getListOfModifications from "../../helpers/getListOfModifications";

export default function ModelsList() {
  const [automobiles, setAllAutomobiles] = useState([]);

  const fetchAutomobiles = async () => {
    const docs = await firebase.getAutomobiles();
    setAllAutomobiles(docs.products);
  };

  useEffect(() => {
    if (automobiles.length === 0) {
      fetchAutomobiles();
    }
  }, []);

  let modList = getListOfModifications(automobiles);

  // const { series } = useParams();
  // console.log(series);
  return (
    <div className="cards-container">
      {modList.map((modification, i) => (
        <Card key={i} modification={modification} automobiles={automobiles} />
      ))}

      {/* <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card /> */}
    </div>
  );
}

// ...export default function ModelsList() {
//   return (
//     <Layout>
//       <main className="main-carList">
//         <nav>
//           <ul className="navigation">
//             <li className="navigation-item active">
//               <a href="/">Всі</a>
//             </li>
//             <li className="navigation-item">
//               <a href="/">Седани</a>
//             </li>
//             <li className="navigation-item">
//               <a href="/">Купе</a>
//             </li>
//             <li className="navigation-item">
//               <a href="/">Кросовери</a>
//             </li>
//             <li className="navigation-item">
//               <a href="/">Позашляховики</a>
//             </li>
//             <li className="navigation-item">
//               <a href="/">Гібриди</a>
//             </li>
//             <li className="navigation-item">
//               <a href="/">F Sport</a>
//             </li>
//           </ul>
//         </nav>
//         <div className="cards-container">
//           <Card />
//           <Card />
//           <Card />
//           <Card />
//           <Card />
//           <Card />
//           <Card />
//         </div>
//       </main>
//     </Layout>
//   );
// }
