import React, { useState } from "react";
import Wrapper from "../../components/wrapper";
import Head from "next/head";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import Image from "next/image";

function About() {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <>
      <Head>
        <title>Raon Studio</title>
        <link rel="icon" href="/logos/raon-logo.png" />
      </Head>
      <Wrapper>
      <section className="flex lg:flex-row flex-col-reverse justify-center mt-12 gap-y-10  ">
          <div className="lg:w-1/2 w-full lg:space-y-12 space-y-8">
            <h1 className="lg:text-4xl text-xl font-extrabold w-full lg:w-3/4 text-center lg:text-left lg:p-0 p-2">
              Raon Studio does illustration works with heart. We produce only
              top-quality works.
            </h1>
            <p className="text-gray-600 lg:text-left text-center">
              Our mission is becoming the first choice <br /> graphic design and
              illustration company
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
            height={350}
            width={400}
            src="/static/about/about-1.png"
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
        <section className="my-12 py-4 space-y-4">
          <h1 className="text-[#EE7526] text-center">RAON STUDIO</h1>
          <p className="text-center font-bold text-4xl">
            Why Clients Loves <br /> Working With Us
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-3/4 mx-auto">
            <div className="flex flex-row rounded-lg border border-gray-300 p-8">
              <CheckCircleIcon className="text-blue-600" />
              <p>
                <b>Unlimited Components</b>: Clarity gives you the blocks &
                components you need to create a website.
              </p>
            </div>
            <div className="flex flex-row rounded-lg border border-gray-300 p-8">
              <CheckCircleIcon className="text-blue-600" />
              <p>
                <b>Release Fast</b>: Clarity gives you the blocks &
                components you need to create a website.
              </p>
            </div>
            <div className="flex flex-row rounded-lg border border-gray-300 p-8">
              <CheckCircleIcon className="text-blue-600" />
              <p>
                <b>Build Website</b>: Clarity gives you the blocks &
                components you need to create a website.
              </p>
            </div>
            <div className="flex flex-row rounded-lg border border-gray-300 p-8">
              <CheckCircleIcon className="text-blue-600" />
              <p>
                <b>Easy Analytics</b>: Clarity gives you the blocks &
                components you need to create a website.
              </p>
            </div>
          </div>
        </section>
        <section>
          <div className="space-y-4">
            <h1 className="text-center text-4xl font-bold">
              Frequently Asked Questions
            </h1>
            <p className="text-center text-gray-600 w-3/4 mx-auto">
              Everything you need to know about the service and products.
            </p>
          </div>
          <div className="w-3/4 mx-auto my-12">
            <Accordion
              expanded={expanded === "panel1"}
              onChange={handleChange("panel1")}
            >
              <AccordionSummary
                expandIcon={
                  expanded === "panel1" ? (
                    <RemoveCircleOutlineIcon className="text-[#EE7526]" />
                  ) : (
                    <AddCircleOutlineIcon className="text-[#EE7526]" />
                  )
                }
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <p className="font-bold">
                How many revisions do you offer in your design process?
                </p>
              </AccordionSummary>
              <AccordionDetails>
                <p className="w-4/5 text-gray-500">
                 I offer a premium custom design service and I guarantee full
                  satisfaction. Revisions will be the necessary in order to
                  achieve the objective set. <br /> My design process is
                  sequential so we&apos;ll do the work in stages – briefing,
                  conceptualisation, sketch and final design – and we&apos;ll make
                  all the revisions you need (within reason) but when one stage
                  is approved we can&apos;t turn back again. If it happens I may
                  charge a fee.
                </p>
              </AccordionDetails>
            </Accordion>{" "}
            <Accordion
              expanded={expanded === "panel2"}
              onChange={handleChange("panel2")}
            >
              <AccordionSummary
                expandIcon={
                  expanded === "panel2" ? (
                    <RemoveCircleOutlineIcon className="text-[#EE7526]" />
                  ) : (
                    <AddCircleOutlineIcon className="text-[#EE7526]" />
                  )
                }
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <p className="font-bold">
                Will you refund my money if I don&apos;t like your work?
                </p>
              </AccordionSummary>
              <AccordionDetails>
                <p className="w-4/5 text-gray-500">
                  I offer a premium custom design service and I guarantee full
                  satisfaction. Revisions will be the necessary in order to
                  achieve the objective set. <br /> My design process is
                  sequential so we&apos;ll do the work in stages – briefing,
                  conceptualisation, sketch and final design – and we&apos;ll make
                  all the revisions you need (within reason) but when one stage
                  is approved we can&apos;t turn back again. If it happens I may
                  charge a fee.
                </p>
              </AccordionDetails>
            </Accordion>{" "}
            <Accordion
              expanded={expanded === "panel3"}
              onChange={handleChange("panel3")}
            >
              <AccordionSummary
                expandIcon={
                  expanded === "panel3" ? (
                    <RemoveCircleOutlineIcon className="text-[#EE7526]" />
                  ) : (
                    <AddCircleOutlineIcon className="text-[#EE7526]" />
                  )
                }
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <p className="font-bold">
                Who owns the copyright of my designs?
                </p>
              </AccordionSummary>
              <AccordionDetails>
                <p className="w-4/5 text-gray-500">
                  I offer a premium custom design service and I guarantee full
                  satisfaction. Revisions will be the necessary in order to
                  achieve the objective set. <br /> My design process is
                  sequential so we&apos;ll do the work in stages – briefing,
                  conceptualisation, sketch and final design – and we&apos;ll make
                  all the revisions you need (within reason) but when one stage
                  is approved we can&apos;t turn back again. If it happens I may
                  charge a fee.
                </p>
              </AccordionDetails>
            </Accordion>{" "}
            <Accordion
              expanded={expanded === "panel4"}
              onChange={handleChange("panel4")}
            >
              <AccordionSummary
                expandIcon={
                  expanded === "panel4" ? (
                    <RemoveCircleOutlineIcon className="text-[#EE7526]" />
                  ) : (
                    <AddCircleOutlineIcon className="text-[#EE7526]" />
                  )
                }
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <p className="font-bold">
                Can you keep my design project confidential?
                </p>
              </AccordionSummary>
              <AccordionDetails>
                <p className="w-4/5 text-gray-500">
                  I offer a premium custom design service and I guarantee full
                  satisfaction. Revisions will be the necessary in order to
                  achieve the objective set. <br /> My design process is
                  sequential so we&apos;ll do the work in stages – briefing,
                  conceptualisation, sketch and final design – and we&apos;ll make
                  all the revisions you need (within reason) but when one stage
                  is approved we can&apos;t turn back again. If it happens I may
                  charge a fee.
                </p>
              </AccordionDetails>
            </Accordion>{" "}
            <Accordion
              expanded={expanded === "panel5"}
              onChange={handleChange("panel5")}
            >
              <AccordionSummary
                expandIcon={
                  expanded === "panel5" ? (
                    <RemoveCircleOutlineIcon className="text-[#EE7526]" />
                  ) : (
                    <AddCircleOutlineIcon className="text-[#EE7526]" />
                  )
                }
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <p className="font-bold">
                Can I make modifications to my design?
                </p>
              </AccordionSummary>
              <AccordionDetails>
                <p className="w-4/5 text-gray-500">
                  I offer a premium custom design service and I guarantee full
                  satisfaction. Revisions will be the necessary in order to
                  achieve the objective set. <br /> My design process is
                  sequential so we&apos;ll do the work in stages – briefing,
                  conceptualisation, sketch and final design – and we&apos;ll make
                  all the revisions you need (within reason) but when one stage
                  is approved we can&apos;t turn back again. If it happens I may
                  charge a fee.
                </p>
              </AccordionDetails>
            </Accordion>{" "}
            <Accordion
              expanded={expanded === "panel6"}
              onChange={handleChange("panel6")}
            >
              <AccordionSummary
                expandIcon={
                  expanded === "panel6" ? (
                    <RemoveCircleOutlineIcon className="text-[#EE7526]" />
                  ) : (
                    <AddCircleOutlineIcon className="text-[#EE7526]" />
                  )
                }
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <p className="font-bold">
                Which payment methods can I use to order my company branding?
                </p>
              </AccordionSummary>
              <AccordionDetails>
                <p className="w-4/5 text-gray-500">
                  I offer a premium custom design service and I guarantee full
                  satisfaction. Revisions will be the necessary in order to
                  achieve the objective set. <br /> My design process is
                  sequential so we&apos;ll do the work in stages – briefing,
                  conceptualisation, sketch and final design – and we&apos;ll make
                  all the revisions you need (within reason) but when one stage
                  is approved we can&apos;t turn back again. If it happens I may
                  charge a fee.
                </p>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel7"}
              onChange={handleChange("panel7")}
            >
              <AccordionSummary
                expandIcon={
                  expanded === "panel7" ? (
                    <RemoveCircleOutlineIcon className="text-[#EE7526]" />
                  ) : (
                    <AddCircleOutlineIcon className="text-[#EE7526]" />
                  )
                }
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <p className="font-bold">
                I can&apos;t afford your services... can you offer me more affordable solutions?
                </p>
              </AccordionSummary>
              <AccordionDetails>
                <p className="w-4/5 text-gray-500">
                  I offer a premium custom design service and I guarantee full
                  satisfaction. Revisions will be the necessary in order to
                  achieve the objective set. <br /> My design process is
                  sequential so we&apos;ll do the work in stages – briefing,
                  conceptualisation, sketch and final design – and we&apos;ll make
                  all the revisions you need (within reason) but when one stage
                  is approved we can&apos;t turn back again. If it happens I may
                  charge a fee.
                </p>
              </AccordionDetails>
            </Accordion>
          </div>
          <div className="flex flex-col space-y-8 my-12">
            <h1 className="text-center font-semibold text-xl">Still have questions?</h1>
            <p className="text-center text-gray-500">Can&apos;t find the answer you&apos;re looking for? Please chat to our friendly team.</p>
            <button className="bg-[#EE7526] mx-auto rounded-full px-4 py-2 text-white">Contact Us</button>
          </div>
        </section>
      </Wrapper>
    </>
  );
}

export default About;
