import Wrapper from "../../components/wrapper"
import Head from "next/head"
function Works() {
  return (
    <>
    <Head>
    <title>Raon Studio</title>
    <link rel="icon" href="/logos/raon-logo.png"/>
  </Head>
    <Wrapper>
        <section className="space-y-12 flex flex-col">
          <h1 className="font-bold text-center text-4xl w-1/2 mx-auto">Crafting The Idea Into Visual, We Believe a Good Visual is a Good Business</h1>
          <p className="text-gray-600 text-center w-1/2 mx-auto">Our mission is becoming the first choice graphic design and illustration company </p>
          <button className="bg-[#EE7526] rounded-full px-4 py-2 text-white font-semibold mx-auto">BOOK A SERVICE</button>
        </section>
        <section className="my-12">
          <div className="w-4/5 flex flex-row justify-center space-x-2 max-w-7xl mx-auto">
          <button className="bg-white border-2 border-[#EE7526] rounded-full px-2 py-1 text-[#EE7526]">NFT ART</button>
          <button className="bg-white border-2 border-[#EE7526] rounded-full px-2 py-1 text-[#EE7526]">MASCOT & CARTOON</button>
          <button className="bg-white border-2 border-[#EE7526] rounded-full px-2 py-1 text-[#EE7526]">T-SHIRT & MERCH</button>
          <button className="bg-white border-2 border-[#EE7526] rounded-full px-2 py-1 text-[#EE7526]">ANIME</button>
          <button className="bg-white border-2 border-[#EE7526] rounded-full px-2 py-1 text-[#EE7526]">GRAPHIC</button>
          <button className="bg-white border-2 border-[#EE7526] rounded-full px-2 py-1 text-[#EE7526]">PRESENTATION</button>
          </div>
          <div className="w-full lg:w-3/4 grid grid-cols-4 gap-y-1 mx-auto p-16 lg:p-16">
            <div className="h-[200px] w-[200px] bg-gray-300" />
            <div className="h-[200px] w-[200px] bg-gray-300" />
            <div className="h-[200px] w-[200px] bg-gray-300" />
            <div className="h-[200px] w-[200px] bg-gray-300" />
            <div className="h-[200px] w-[200px] bg-gray-300" />
            <div className="h-[200px] w-[200px] bg-gray-300" />
            <div className="h-[200px] w-[200px] bg-gray-300" />
            <div className="h-[200px] w-[200px] bg-gray-300" />
            <div className="h-[200px] w-[200px] bg-gray-300" />
            <div className="h-[200px] w-[200px] bg-gray-300" />
            <div className="h-[200px] w-[200px] bg-gray-300" />
            <div className="h-[200px] w-[200px] bg-gray-300" />
          </div>
        </section>
    </Wrapper>
    </>
  )
}

export default Works