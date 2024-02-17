import { useState } from "react"
import { Link,Outlet } from "react-router-dom"
import { Footer } from "./Footer"
import { Navbar } from "./Navbar"
import {Helmet} from "react-helmet";
const Layout=()=>{
    return(
        <>
          <Helmet>
        <meta
      name="description"
      content="The biggest assortment of indoor plants & planters in Yerevan. Soil & fertilizers, garden furniture, tools and decor for the cottage & garden."
    />
                <title>Garden Mall & Online-shop - all for home, country house & garden</title>
                
            </Helmet>
        <header>
            <Navbar />
        </header>
        <Outlet />

        <footer>
            <Footer/>
        </footer>
        </>
    )
}

export {Layout}