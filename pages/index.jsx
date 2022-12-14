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
        <section className="flex lg:flex-row flex-col-reverse justify-center mt-12 gap-y-10">
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
        <section className="mt-28">
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
                  alt=""
                />
              </div>
              <h1 className="text-lg font-bold">NFT Art Illustration</h1>
              <p className="text-xs leading-loose">
                Bored Ape NFT becoming a trend in recent days. We&apos;ve been
                working with NFT creators for the past 2 years and this is
                something that we&apos;re good at.
              </p>
            </div>
            <div className="border-b border-gray-300 p-8 space-y-4 flex flex-col">
              <div>
                <Image
                  src="/static/home/chart-bar-33 1.png"
                  height={64}
                  width={64}
                  alt=""
                />
              </div>
              <h1 className="text-lg font-bold">NFT Art Illustration</h1>
              <p className="text-xs leading-loose">
                Bored Ape NFT becoming a trend in recent days. We&apos;ve been
                working with NFT creators for the past 2 years and this is
                something that we&apos;re good at.
              </p>
            </div>
            <div className="border-b lg:border-l border-gray-300 p-8 space-y-4 flex flex-col">
              <div>
                <Image
                  src="/static/home/board-2 1.png"
                  height={64}
                  width={64}
                  alt=""
                />
              </div>
              <h1 className="text-lg font-bold">
                T-Shirt & Merch Illustration
              </h1>
              <p className="text-xs leading-loose">
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
                  alt=""
                />
              </div>
              <h1 className="text-lg font-bold">Anime Illustration</h1>
              <p className="text-xs leading-loose">
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
                  alt=""
                />
              </div>
              <h1 className="text-lg font-bold">
                Banner, Brochure, and User Interface Design
              </h1>
              <p className="text-xs leading-loose">
                Designing things can be very difficult for some people,
                we&apos;re helping with graphic design works for your needs
              </p>
            </div>
            <div className="lg:border-l border-gray-300 p-8 space-y-4 flex flex-col">
              <div>
                <Image
                  src="/static/home/chart-3 1.png"
                  height={64}
                  width={64}
                  alt=""
                />
              </div>
              <h1 className="text-lg font-bold">
                Presentation and Infographic Design
              </h1>
              <p className="text-xs leading-loose">
                Presentation and infographic design is something that we are
                good at. We help small and big company desigining their deck
              </p>
            </div>
          </div>
        </section>
        <section className=" ">
          <h1 className="font-bold text-4xl text-center">See Our Works</h1>
          <div className="w-full lg:w-3/4 grid grid-cols-2 lg:grid-cols-4 gap-y-1 -gap-x-10 mx-auto p-4 lg:p-16">
            <div className="h-[164px] w-[164px] lg:h-[200px] lg:w-[200px] bg-gray-300" />
            <div className="h-[164px] w-[164px] lg:h-[200px] lg:w-[200px] bg-gray-300" />
            <div className="h-[164px] w-[164px] lg:h-[200px] lg:w-[200px] bg-gray-300" />
            <div className="h-[164px] w-[164px] lg:h-[200px] lg:w-[200px] bg-gray-300" />
            <div className="h-[164px] w-[164px] lg:h-[200px] lg:w-[200px] bg-gray-300" />
            <div className="h-[164px] w-[164px] lg:h-[200px] lg:w-[200px] bg-gray-300" />
            <div className="h-[164px] w-[164px] lg:h-[200px] lg:w-[200px] bg-gray-300" />
            <div className="h-[164px] w-[164px] lg:h-[200px] lg:w-[200px] bg-gray-300" />
            <div className="h-[164px] w-[164px] lg:h-[200px] lg:w-[200px] bg-gray-300" />
            <div className="h-[164px] w-[164px] lg:h-[200px] lg:w-[200px] bg-gray-300" />
            <div className="h-[164px] w-[164px] lg:h-[200px] lg:w-[200px] bg-gray-300" />
            <div className="h-[164px] w-[164px] lg:h-[200px] lg:w-[200px] bg-gray-300" />
          </div>
        </section>
        <section className="flex items-center flex-col space-y-4">
          <p className="">Here are some of our best clients</p>
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
            <div className="font-bold text-lg justify-evenly flex row gap-2">
              <Image
                alt=""
                src="/static/home/layers.png"
                height={32}
                width={32}
              />
              Layers
            </div>
            <div className="font-bold text-lg justify-evenly flex row gap-2">
              <Image
                alt=""
                src="/static/home/sisyphus.png"
                height={32}
                width={32}
              />
              Sisyphus
            </div>{" "}
            <div className="font-bold text-lg justify-evenly flex row gap-2">
              <Image
                alt=""
                src="/static/home/circooles.png"
                height={32}
                width={32}
              />
              Circooles
            </div>{" "}
            <div className="font-bold text-lg justify-evenly flex row gap-2">
              <Image
                alt=""
                src="/static/home/catalog.png"
                height={32}
                width={32}
              />
              Catalog
            </div>{" "}
            <div className="font-bold text-lg justify-evenly flex row gap-2">
              <Image
                alt=""
                src="/static/home/quotient.png"
                height={32}
                width={32}
              />
              Quotient
            </div>
          </div>
        </section>
        <section className="mt-20">
          <h1 className="text-4xl font-bold text-center my-16">
            Our Happy CLients Say About Us
          </h1>
          <div
            style={{
              backgroundImage: "url(/static/home/Shadow.png)",
              backgroundSize: "66% 150%",
              backgroundRepeat: "no-repeat",
              backgroundPositionX: "center",
            }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-5 w-4/5 h-[1200px] lg:h-[400px]  mx-auto items-center"
          >
            <div className="bg-white mx-auto shadow-2xl space-y-2 p-4 w-full h-4/5 flex flex-col justify-evenly">
              <ReactStars count={5} value={5} size={24} edit={false} />
              <p className="text-xs leading-loose">
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
            <div className="bg-white mx-auto shadow-2xl space-y-2 p-4 w-full h-4/5 flex flex-col justify-evenly">
              <ReactStars count={5} value={5} size={24} edit={false} />
              <p className="text-xs leading-loose">
                An extremely talented graphics designer who hand draws all their
                designs! Very impressive and will make any changes you might
                need. Exceptional communication skills and aims to deliver!{" "}
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
                  <h1 className="font-bold">Alec Johnson</h1>
                  <p className="text-gray-600">Digital Marketer</p>
                </div>
              </div>
            </div>{" "}
            <div className="bg-white mx-auto shadow-2xl space-y-2 p-4 w-full h-4/5 flex flex-col justify-evenly">
              <ReactStars count={5} value={5} size={24} edit={false} />
              <p className="text-xs leading-loose">
                Raon Studio was a wonderful asset to our project. She is not
                only very talented, but she listens to your needs and executes
                your vision rather quickly. She was always available to make the
                needed changes and was a pleasure to work with.{" "}
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
                  <h1 className="font-bold">Rochelle Willians</h1>
                  <p className="text-gray-600">1-800 Flowers Founder</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="flex flex-col items-center text-center lg:text-left lg:flex-row justify-center mt-24 gap-x-20">
          <div className="w-full lg:w-1/2 flex kg:flex-row justify-end">
            <Image
              src="/static/home/home-2.png"
              height={350}
              width={350}
              alt=""
            />
          </div>
          <div className="w-full lg:w-1/2 space-y-8 mx-auto">
            <h1 className="text-4xl font-bold w-full lg:w-1/2">
              Pandemic is Reshaping How People Work
            </h1>
            <p className="w-full lg:w-3/4">
              Raon Studio was built when the pandemic is coming. It turns 3 now!
              I know the pandemic is reshaping the way people work and it&apos;s
              totally reshaping me. I started freelancing on 2019 and build my
              own studio on 2020 and currently working with 10+ team members
            </p>
            <button>
              Know More <ArrowRightAltIcon />
            </button>
          </div>
        </section>
        <section className="  mt-24">
          <h1 className="font-bold text-3xl text-center">
            See Some of Interesting Numbers
          </h1>
          <p className="text-gray-600 text-center">
            The numbers shows how we interacting with our clients
          </p>
          <div className="grid grid-cols-3 my-12 lg:w-3/5 mx-auto">
            <div className="flex flex-col mx-auto justify-center text-center">
              <h1 className="font-bold text-[#EE7526] text-5xl">40+</h1>
              <p>Happy Clients</p>
            </div>
            <div className="flex flex-col mx-auto justify-center text-center">
              <h1 className="font-bold text-[#EE7526] text-5xl">90%</h1>
              <p>Returning Clients</p>
            </div>
            <div className="flex flex-col mx-auto justify-center text-center">
              <h1 className="font-bold text-[#EE7526] text-5xl">4+</h1>
              <p>Years of Experience</p>
            </div>
          </div>
        </section>
      </Wrapper>
    </>
  );
}
