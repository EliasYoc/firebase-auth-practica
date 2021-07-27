import { db } from "../../firebase/firebaseConfig";
import { types } from "../../types";
//usando firebase firestore

export const getCountriesFirestore = async (dispatchCountries, uid) => {
  const data = [];
  await db
    .collection(uid)
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        const objCountry = {
          id: doc.id,
          ...doc.data(),
        };
        data.push(objCountry);
        console.log(doc.data());
        // console.log("obj nuevo", objCountry);
      });
    });
  dispatchCountries({ type: types.GET_COUNTRIES, payload: data });
};

export const addCountryFirestore = async (
  uid,
  objCountry,
  dispatchCountries
) => {
  try {
    const el = await db.collection(`${uid}`).add(objCountry);
    const newCountryAdded = (await el.get()).data();
    const country = {
      id: el.id,
      ...newCountryAdded,
    };
    alert("agregado");
    console.log(newCountryAdded);
    dispatchCountries({ type: types.ADD_COUNTRY, payload: country });
  } catch (err) {
    console.log("error añadiendo documento", err);
  }
};
export const deleteCountryFirestore = async (uid, id, dispatchCountries) => {
  try {
    await db.collection(uid).doc(id).delete();
    dispatchCountries({ type: types.DELETE_COUNTRY, payload: id });
  } catch (err) {
    console.log("error al borrar registro", err);
  }
};
