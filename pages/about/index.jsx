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
            height={350}
            width={400}
            src="/static/about/about-1.png"
            alt=""
            priority
          />
        </section>
        <section className="my-12 py-4 space-y-4">
          <h1 className="text-[#EE7526] text-center">RAON STUDIO</h1>
          <p className="text-center font-bold text-4xl">
            Why Clients Loves <br /> Working With Us
          </p>
          <div className="grid grid-cols-2 gap-4 w-3/4 mx-auto">
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
                <b>Unlimited Components</b>: Clarity gives you the blocks &
                components you need to create a website.
              </p>
            </div>
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
                <b>Unlimited Components</b>: Clarity gives you the blocks &
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
            <p className="text-center text-gray-600">
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
                HOW MANY REVISIONS DO YOU OFFER IN YOUR DESIGN PROCESS?
                </p>
              </AccordionSummary>
              <AccordionDetails>
                <p className="w-4/5 text-gray-500">
                  I offer a premium custom design service and I guarantee full
                  satisfaction. Revisions will be the necessary in order to
                  achieve the objective set. <br /> My design process is
                  sequential so we’ll do the work in stages – briefing,
                  conceptualisation, sketch and final design – and we’ll make
                  all the revisions you need (within reason) but when one stage
                  is approved we can’t turn back again. If it happens I may
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
                WILL YOU REFUND MY MONEY IF I DON'T LIKE YOUR WORK?
                </p>
              </AccordionSummary>
              <AccordionDetails>
                <p className="w-4/5 text-gray-500">
                  I offer a premium custom design service and I guarantee full
                  satisfaction. Revisions will be the necessary in order to
                  achieve the objective set. <br /> My design process is
                  sequential so we’ll do the work in stages – briefing,
                  conceptualisation, sketch and final design – and we’ll make
                  all the revisions you need (within reason) but when one stage
                  is approved we can’t turn back again. If it happens I may
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
                WHO OWNS THE COPYRIGHT OF MY DESIGNS?
                </p>
              </AccordionSummary>
              <AccordionDetails>
                <p className="w-4/5 text-gray-500">
                  I offer a premium custom design service and I guarantee full
                  satisfaction. Revisions will be the necessary in order to
                  achieve the objective set. <br /> My design process is
                  sequential so we’ll do the work in stages – briefing,
                  conceptualisation, sketch and final design – and we’ll make
                  all the revisions you need (within reason) but when one stage
                  is approved we can’t turn back again. If it happens I may
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
                CAN YOU KEEP MY DESIGN PROJECT CONFIDENTIAL?
                </p>
              </AccordionSummary>
              <AccordionDetails>
                <p className="w-4/5 text-gray-500">
                  I offer a premium custom design service and I guarantee full
                  satisfaction. Revisions will be the necessary in order to
                  achieve the objective set. <br /> My design process is
                  sequential so we’ll do the work in stages – briefing,
                  conceptualisation, sketch and final design – and we’ll make
                  all the revisions you need (within reason) but when one stage
                  is approved we can’t turn back again. If it happens I may
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
                CAN I MAKE MODIFICATIONS TO MY DESIGN?
                </p>
              </AccordionSummary>
              <AccordionDetails>
                <p className="w-4/5 text-gray-500">
                  I offer a premium custom design service and I guarantee full
                  satisfaction. Revisions will be the necessary in order to
                  achieve the objective set. <br /> My design process is
                  sequential so we’ll do the work in stages – briefing,
                  conceptualisation, sketch and final design – and we’ll make
                  all the revisions you need (within reason) but when one stage
                  is approved we can’t turn back again. If it happens I may
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
                WHICH PAYMENT METHODS CAN I USE TO ORDER MY COMPANY BRANDING?
                </p>
              </AccordionSummary>
              <AccordionDetails>
                <p className="w-4/5 text-gray-500">
                  I offer a premium custom design service and I guarantee full
                  satisfaction. Revisions will be the necessary in order to
                  achieve the objective set. <br /> My design process is
                  sequential so we’ll do the work in stages – briefing,
                  conceptualisation, sketch and final design – and we’ll make
                  all the revisions you need (within reason) but when one stage
                  is approved we can’t turn back again. If it happens I may
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
                I CAN'T AFFORD YOUR SERVICES... CAN YOU OFFER ME MORE AFFORDABLE SOLUTIONS?
                </p>
              </AccordionSummary>
              <AccordionDetails>
                <p className="w-4/5 text-gray-500">
                  I offer a premium custom design service and I guarantee full
                  satisfaction. Revisions will be the necessary in order to
                  achieve the objective set. <br /> My design process is
                  sequential so we’ll do the work in stages – briefing,
                  conceptualisation, sketch and final design – and we’ll make
                  all the revisions you need (within reason) but when one stage
                  is approved we can’t turn back again. If it happens I may
                  charge a fee.
                </p>
              </AccordionDetails>
            </Accordion>
          </div>
          <div className="flex flex-col space-y-8 my-12">
            <h1 className="text-center font-semibold text-xl">Still have questions?</h1>
            <p className="text-center text-gray-500">Can’t find the answer you’re looking for? Please chat to our friendly team.</p>
            <button className="bg-[#EE7526] mx-auto rounded-full px-4 py-2 text-white">Contact Us</button>
          </div>
        </section>
      </Wrapper>
    </>
  );
}

export default About;
