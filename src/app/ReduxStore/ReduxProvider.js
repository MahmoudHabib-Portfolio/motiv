'use client'
import { Provider } from "react-redux";
import Store from "./Store";
import Preload from "../component/Preload";
import { Suspense, useEffect, useState } from "react";

const ReduxProvider = ({children}) => {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
        await new Promise(res => setTimeout(res, 3000));
        setLoading(false);
      }
      loadData();
}, []);

  return (
    <>
    {loading ? (<Preload />) : (
      <Provider store={Store}>
            <Suspense>
            {children}
            </Suspense>
        </Provider>
    )}
    </>
  )
}

export default ReduxProvider;