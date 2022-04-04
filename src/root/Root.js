import React, { useEffect } from "react";
import GlobalStyle from "../globalStyles/GlobalStyles";
import Router from "../routing/Router";
import { ThemeProvider } from "styled-components";
import { mainTheme } from "../globalStyles/themes/mainTheme";
import { useDispatch, useSelector } from "react-redux";
import {
  filterProducts,
  handlePriceRangeProductInput,
} from "../redux/actions/productsActions";
import { localData } from "../localData";
import { auth } from "../firebase/config";
import { usersCollection } from "../firebase/firestoreUtils";
import { setCurrentUser } from "../redux/actions/usersActions";

const Root = () => {
  const dispatch = useDispatch();
  const { selectedProductCategory, searchedPhrase, maxPrice } = useSelector(
    ({ productsReducer }) => productsReducer
  );
  const { currentUser } = useSelector(({ usersReducer }) => usersReducer);

  useEffect(() => {
    const maxPrice = Math.max(...localData.map((item) => item.price));

    dispatch(handlePriceRangeProductInput(maxPrice));
  }, []);

  useEffect(() => {
    dispatch(filterProducts());
  }, [selectedProductCategory, searchedPhrase, maxPrice]);

  useEffect(() => {
    auth.onAuthStateChanged((observ) => {
      if (observ?.uid) {
        usersCollection
          .doc(observ.uid)
          .get()
          .then((res) => {
            dispatch(setCurrentUser({ userId: observ.uid, ...res.data() }));
          })
          .catch((err) => console.log(err));
      } else {
        dispatch(setCurrentUser(null));
      }
    });
  }, []);

  useEffect(() => {
    const subscribe = usersCollection.onSnapshot((snapshot) => {
      if (currentUser) {
        snapshot.docs.forEach((doc) => {
          if (doc.data().email === currentUser?.email) {
            dispatch(setCurrentUser(doc.data()));
          }
        });
      }
    });
    return () => subscribe;
  }, []);

  return (
    <div>
      <ThemeProvider theme={mainTheme}>
        <GlobalStyle />
        <Router />
      </ThemeProvider>
    </div>
  );
};

export default Root;
