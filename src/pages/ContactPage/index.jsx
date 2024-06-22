import React, { useEffect } from 'react'
import { Helmet } from "react-helmet";
import NotMeanBox from '../../components/NotMeanBox';
import HeaderFromContact from '../../components/ContactComponents/HeaderFromContact';
import OpenContact from '../../components/ContactComponents/OpenContact';
import Loading from '../../components/Loading';

function ContactPage({ setloading, loading }) {
  useEffect(() => {
    setTimeout(() => {
      setloading(false)
    }, 1000)

    setloading(true)
  }, [])

  return (
    <>
      {
        loading ? (
          <Loading />
        ) : (
          <>
            <NotMeanBox />
            <Helmet>
              <meta charSet="utf-8" />
              <title>Contact</title>
            </Helmet>
            <HeaderFromContact />
            <OpenContact />
          </>
        )
      }
    </>
  )
}

export default ContactPage