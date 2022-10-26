import Footer from "./footer/Footer"
import Header from "./header/Header"

const Wrapper = ({children}) => {
  return (
    <>
    <Header/>
    {children}
    <Footer/>
    </>
  )
}

export default Wrapper