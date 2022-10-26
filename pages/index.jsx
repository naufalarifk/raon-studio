import Head from "next/head";
import Wrapper from "../components/wrapper";
import Image from "next/image";
import ReactStars from "react-rating-stars-component";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
export default function Home() {
  return (
    <>
      <Head>
        <title>Raon Studio</title>
        <link rel="icon" href="/logos/raon-logo.png" />
      </Head>
      <Wrapper>
        <section className="flex lg:flex-row flex-col-reverse justify-center mt-12 gap-y-10 max-w-7xl">
          <div className="lg:w-1/2 w-full lg:space-y-12 space-y-8">
            <h1 className="lg:text-4xl text-xl font-extrabold w-full lg:w-3/4 text-center lg:text-left lg:p-0 p-2">
              Raon Studio does illustration works with heart. We produce only
              top-quality works.
            </h1>
            <p className="text-gray-600 lg:text-left text-center">
              Our mission is becoming the first choice <br /> graphic design and
              illustration company{" "}
            </p>
            <div className="lg:w-3/4 w-full flex lg:justify-start justify-center space-x-6">
              <button className="bg-[#EE7526] text-white lg:py-4 lg:px-10 py-3 px-4 rounded-full">
                SEE OUR WORKS
              </button>
              <button className="border border-[#EE7526] text-[#EE7526] rounded-full lg:py-4 lg:px-10 py-3 px-4 font-bold">
                GET IN TOUCH
              </button>
            </div>
          </div>
          <Image
            height={347}
            width={263}
            src="/static/home/home-1.png"
            alt=""
            priority
          />
        </section>
        <section className="mt-12 max-w-7xl">
          <div className="text-center space-y-4">
            <h1 className="font-bold text-4xl">What We Are Crafting</h1>
            <p className="text-gray-600 px-10">
              We make design and illustration with our big hearts
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 text-center mt-5 p-4 lg:p-12">
            <div className="lg:border-r border-b border-gray-300 p-8 space-y-4 flex flex-col">
              <div>
                <Image
                  src="/static/home/headphones-3 1.png"
                  height={64}
                  width={64}
                />
              </div>
              <h1 className="text-lg font-bold">NFT Art Illustration</h1>
              <p>
                Bored Ape NFT becoming a trend in recent days. We’ve been
                working with NFT creators for the past 2 years and this is
                something that we’re good at.
              </p>
            </div>
            <div className="border-b border-gray-300 p-8 space-y-4 flex flex-col">
              <div>
                <Image
                  src="/static/home/chart-bar-33 1.png"
                  height={64}
                  width={64}
                />
              </div>
              <h1 className="text-lg font-bold">NFT Art Illustration</h1>
              <p>
                Bored Ape NFT becoming a trend in recent days. We’ve been
                working with NFT creators for the past 2 years and this is
                something that we’re good at.
              </p>
            </div>
            <div className="border-b lg:border-l border-gray-300 p-8 space-y-4 flex flex-col">
              <div>
                <Image
                  src="/static/home/board-2 1.png"
                  height={64}
                  width={64}
                />
              </div>
              <h1 className="text-lg font-bold">
                T-Shirt & Merch Illustration
              </h1>
              <p>
                Illustration can be applied to a t-shirt and merchandise. we can
                help you create an outstanding illustration for your clothing
                brand, band, etc.
              </p>
            </div>
            <div className="border-b lg:border-b-0 lg:border-r border-gray-300 p-8 space-y-4 flex flex-col">
              <div>
                <Image
                  src="/static/home/archive-content 1.png"
                  height={64}
                  width={64}
                />
              </div>
              <h1 className="text-lg font-bold">Anime Illustration</h1>
              <p>
                Anime is one of a kind of illustration style. The influence of
                Japanese culture and cartoon characters, it makes your character
                alive.
              </p>
            </div>
            <div className="border-b lg:border-b-0 p-8 space-y-4 flex flex-col">
              <div>
                <Image
                  src="/static/home/folder-favorite 1.png"
                  height={64}
                  width={64}
                />
              </div>
              <h1 className="text-lg font-bold">
                Banner, Brochure, and User Interface Design
              </h1>
              <p>
                Designing things can be very difficult for some people, we’re
                helping with graphic design works for your needs
              </p>
            </div>
            <div className="lg:border-l border-gray-300 p-8 space-y-4 flex flex-col">
              <div>
                <Image
                  src="/static/home/chart-3 1.png"
                  height={64}
                  width={64}
                />
              </div>
              <h1 className="text-lg font-bold">
                Presentation and Infographic Design
              </h1>
              <p>
                Presentation and infographic design is something that we are
                good at. We help small and big company desigining their deck
              </p>
            </div>
          </div>
        </section>
        <section className="max-w-7xl">
          <h1 className="font-bold text-4xl text-center">See Our Works</h1>
          <div className="w-full lg:w-3/4 grid grid-cols-4 gap-y-1 -gap-x-10 mx-auto p-16 lg:p-16">
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
        <section className="max-w-7xl flex items-center flex-col space-y-4">
          <p className="">Here are some of our best clients</p>
          <div className="grid grid-cols-3 lg:grid-cols-5 gap-4">
            <div className="font-bold text-lg justify-evenly flex row gap-2">
              <Image src="/static/home/layers.png" height={32} width={32} />
              Layers
            </div>
            <div className="font-bold text-lg justify-evenly flex row gap-2">
              <Image src="/static/home/sisyphus.png" height={32} width={32} />
              Sisyphus
            </div>{" "}
            <div className="font-bold text-lg justify-evenly flex row gap-2">
              <Image src="/static/home/circooles.png" height={32} width={32} />
              Circooles
            </div>{" "}
            <div className="font-bold text-lg justify-evenly flex row gap-2">
              <Image src="/static/home/catalog.png" height={32} width={32} />
              Catalog
            </div>{" "}
            <div className="font-bold text-lg justify-evenly flex row gap-2">
              <Image src="/static/home/quotient.png" height={32} width={32} />
              Quotient
            </div>
          </div>
        </section>
        <section className="max-w-7xl mt-20">
          <h1 className="text-4xl font-bold text-center">
            Our Happy CLients Say About Us
          </h1>
          <div
            style={{
              backgroundImage: "url(/static/home/Shadow.png)",
              backgroundSize: "66% 150%",
              backgroundRepeat: "no-repeat",
              backgroundPositionX: "center",
            }}
            className="grid grid-cols-1 lg:grid-cols-3 w-full h-[1200px] lg:h-[400px]  mx-auto items-center"
          >
            <div className="bg-white mx-auto shadow-2xl space-y-4 p-4 w-4/5 h-4/5">
              <ReactStars count={5} value={5} size={24} edit={false} />
              <p>
                Absolutely SENSATIONAL. She understood the brief, asked
                clarifying questions, set a reasonable timeline then
                over-delivered brilliantly. I am 100% comfortable recommending
                Raon Studio for any contract she offers{" "}
              </p>
              <div className="flex flex-row space-x-2">
                <div className="flex items-center">
                  <Image
                    src="/static/home/prof_ph.png"
                    width={32}
                    height={32}
                    className="rounded-full border-2 border-black"
                  />
                </div>
                <div>
                  <h1 className="font-bold">Andrew Cox</h1>
                  <p className="text-gray-600">Entrepreneur</p>
                </div>
              </div>
            </div>{" "}
            <div className="bg-white mx-auto shadow-2xl space-y-4 p-4 w-4/5 h-4/5">
              <ReactStars count={5} value={5} size={24} edit={false} />
              <p>
                Absolutely SENSATIONAL. She understood the brief, asked
                clarifying questions, set a reasonable timeline then
                over-delivered brilliantly. I am 100% comfortable recommending
                Raon Studio for any contract she offers{" "}
              </p>
              <div className="flex flex-row space-x-2">
                <div className="flex items-center">
                  <Image
                    src="/static/home/prof_ph.png"
                    width={32}
                    height={32}
                    className="rounded-full border-2 border-black"
                  />
                </div>
                <div>
                  <h1 className="font-bold">Andrew Cox</h1>
                  <p className="text-gray-600">Entrepreneur</p>
                </div>
              </div>
            </div>{" "}
            <div className="bg-white mx-auto shadow-2xl space-y-4 p-4 w-4/5 h-4/5">
              <ReactStars count={5} value={5} size={24} edit={false} />
              <p>
                Absolutely SENSATIONAL. She understood the brief, asked
                clarifying questions, set a reasonable timeline then
                over-delivered brilliantly. I am 100% comfortable recommending
                Raon Studio for any contract she offers{" "}
              </p>
              <div className="flex flex-row space-x-2">
                <div className="flex items-center">
                  <Image
                    src="/static/home/prof_ph.png"
                    width={32}
                    height={32}
                    className="rounded-full border-2 border-black"
                  />
                </div>
                <div>
                  <h1 className="font-bold">Andrew Cox</h1>
                  <p className="text-gray-600">Entrepreneur</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="max-w-7xl flex flex-row justify-center mt-24 gap-x-4">
          <div className="w-1/2 flex justify-end">
            <Image
              src="/static/home/home-2.png"
              height={350}
              width={350}
              alt=""
            />
          </div>
          <div className="w-1/2 space-y-8">
            <h1 className="text-4xl font-bold w-1/2">
              Pandemic is Reshaping How People Work
            </h1>
            <p className="w-3/4">
              Raon Studio was built when the pandemic is coming. It turns 3 now!
              I know the pandemic is reshaping the way people work and it’s
              totally reshaping me. I started freelancing on 2019 and build my
              own studio on 2020 and currently working with 10+ team members
            </p>
            <button>
              Know More <ArrowRightAltIcon />
            </button>
          </div>
        </section>
        <section className="max-w-7xl mt-24">
          <h1 className="font-bold text-3xl text-center">
            See Some of Interesting Numbers
          </h1>
          <p className="text-gray-600 text-center">
            The numbers shows how we interacting with our clients
          </p>
          <div className="grid grid-cols-3 my-12">
            <div className="flex flex-col mx-auto justify-center text-center">
              <h1 className="font-bold text-[#EE7526] text-4xl">40+</h1>
              <p>Happy Clients</p>
            </div>
            <div className="flex flex-col mx-auto justify-center text-center">
              <h1 className="font-bold text-[#EE7526] text-4xl">90%</h1>
              <p>Returning Clients</p>
            </div>
            <div className="flex flex-col mx-auto justify-center text-center">
              <h1 className="font-bold text-[#EE7526] text-4xl">40+</h1>
              <p>Years of Experience</p>
            </div>
          </div>
        </section>
      </Wrapper>
    </>
  );
}
