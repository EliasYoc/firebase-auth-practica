import { useEffect, useState, useContext } from "react";
import FormAddCountry from "../components/FormAddCountry";
import Header from "../components/Header";
import TableCountries from "../components/TableCountries";
import { getCountriesFirestore } from "../reducers/actions/actionCountry";
import { Context } from "../store/ContextProvider";
import "./Home.css";
export const initialFormCountry = {
  pais: "",
  clave: "",
  numero: "",
};

const Home = () => {
  const [formCountry, setFormCountry] = useState(initialFormCountry);
  const { stateCountries, dispatchCountries, user } = useContext(Context);

  useEffect(() => {
    // dispatchCountries({ type: types.CLEAN_DATA });
    if (user.uid) getCountriesFirestore(dispatchCountries, user.uid);
  }, [dispatchCountries, user.uid]);
  return (
    <>
      <Header />
      <main className="main-container">
        <h1>Registros</h1>

        <FormAddCountry
          formCountry={formCountry}
          setFormCountry={setFormCountry}
          initialFormCountry={initialFormCountry}
        />

        {stateCountries.length > 0 ? (
          <TableCountries stateCountries={stateCountries} />
        ) : (
          <div className="content-not-data">
            <h2>No hay datos</h2>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/practica-yoc.appspot.com/o/Clippy-256px-15.gif?alt=media&token=30c7fc8c-713a-4175-8fb3-6f0edb2dcf58"
              alt=""
            />
          </div>
        )}
      </main>
    </>
  );
};

export default Home;
