import React, { useState } from "react";
import Wrapper from "../../components/wrapper";
import Head from "next/head";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
function Contact() {
  const [expanded, setExpanded] = useState(false);
  const [value, setValue] = useState();

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
        <div className="flex flex-col p-16 lg:flex-row justify-between gap-y-10 gap-x-20">
          <div className="w-full md:w-1/2 md:max-w-full nunito">
            <div className="p-6 ">
              <form method="POST" action="https://herotofu.com/start">
                <label className="block mb-6">
                  <span className="">Name</span>
                  <input
                    type="text"
                    name="name"
                    className="
            block
            w-full
            mt-1
            border-2
            border-[#EE7526]
            shadow-sm
            p-2
          "
                    placeholder="Enter Your Name"
                  />
                </label>
                <label className="block mb-6">
                  <span className="">Email</span>
                  <input
                    name="email"
                    type="email"
                    className="
            block
            w-full
            mt-1
            border-2
            border-[#EE7526]
            shadow-sm
            p-2
            "
                    placeholder="Enter Your Email"
                    required
                  />
                </label>
                <label className="block mb-6">
                  <span className="">Phone Number</span>
                  <div
                    className="
                    bg-white p-2           
                      border-2
                    border-[#EE7526]"
                  >
                    <PhoneInput
                      placeholder="Enter phone number"
                      value={value}
                      onChange={setValue}
                    />
                  </div>
                </label>
                <label className="block mb-6">
                  <span className="">Message</span>
                  <textarea
                    name="message"
                    className="
            block
            w-full
            mt-1
            border-2
            border-[#EE7526]
            shadow-sm
            p-2
            "
                    rows="3"
                    placeholder="Tell us what you're thinking about..."
                  ></textarea>
                </label>
                <label className="block mb-6">
                  <span className="">Services</span>
                </label>
                <ul className="grid grid-cols-2 ">
                  <li className="space-x-2">
                    <input type="checkbox" className='outline-amber-600 outline-1'/>
                    <label>Mascot Design</label>
                  </li>
                  <li className="space-x-2">
                    <input type="checkbox" className='outline-amber-600 outline-1' />
                    <label>T-Shirt and Merch</label>
                  </li>
                  <li className="space-x-2">
                    <input type="checkbox" className='outline-amber-600 outline-1' />
                    <label>Chibi Kawaii</label>
                  </li>
                  <li className="space-x-2">
                    <input type="checkbox" className='outline-amber-600 outline-1' />
                    <label>Cartoon and Comic</label>
                  </li>
                  <li className="space-x-2">
                    <input type="checkbox" className='outline-amber-600 outline-1' />
                    <label>Storybook</label>
                  </li>
                  <li className="space-x-2">
                    <input type="checkbox" className='outline-amber-600 outline-1' />
                    <label>Other</label>
                  </li>
                </ul>
                <div class="my-6">
                  <button
                    type="submit"
                    className="w-full bg-amber-600 text-white p-2"
                  >
                    <p className="font-semibold">Get Started</p>
                  </button>
                </div>
              </form>
              <div className="space-y-4">
                <h1 className="text-6xl font-semibold">Need to Talk?</h1>
                <p>You can reach us anytime via </p>
                <p className="text-amber-600">arkhanstudio@gmail.com</p>
                <p className="text-amber-600">+62 856-4040-5925</p>
              </div>
            </div>
          </div>
          <section className="w-1/2">
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
                    HOW MANY REVISIONS DO YOU OFFER IN YOUR DESIGN PROCESS?
                  </p>
                </AccordionSummary>
                <AccordionDetails>
                  <p className="w-4/5 text-gray-500">
                    {`I offer a premium custom design service and I guarantee full
                  satisfaction. Revisions will be the necessary in order to
                  achieve the objective set. <br /> My design process is
                  sequential so we’ll do the work in stages – briefing,
                  conceptualisation, sketch and final design – and we’ll make
                  all the revisions you need (within reason) but when one stage
                  is approved we can’t turn back again. If it happens I may
                  charge a fee.`}
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
                    WILL YOU REFUND MY MONEY IF I DON&apos;T LIKE YOUR WORK?
                  </p>
                </AccordionSummary>
                <AccordionDetails>
                  <p className="w-4/5 text-gray-500">
                    {`I offer a premium custom design service and I guarantee full
                  satisfaction. Revisions will be the necessary in order to
                  achieve the objective set. <br /> My design process is
                  sequential so we’ll do the work in stages – briefing,
                  conceptualisation, sketch and final design – and we’ll make
                  all the revisions you need (within reason) but when one stage
                  is approved we can’t turn back again. If it happens I may
                  charge a fee.`}
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
                    {`I offer a premium custom design service and I guarantee full
                  satisfaction. Revisions will be the necessary in order to
                  achieve the objective set. <br /> My design process is
                  sequential so we’ll do the work in stages – briefing,
                  conceptualisation, sketch and final design – and we’ll make
                  all the revisions you need (within reason) but when one stage
                  is approved we can’t turn back again. If it happens I may
                  charge a fee.`}
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
                    {`I offer a premium custom design service and I guarantee full
                  satisfaction. Revisions will be the necessary in order to
                  achieve the objective set. <br /> My design process is
                  sequential so we’ll do the work in stages – briefing,
                  conceptualisation, sketch and final design – and we’ll make
                  all the revisions you need (within reason) but when one stage
                  is approved we can’t turn back again. If it happens I may
                  charge a fee.`}
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
                    {`I offer a premium custom design service and I guarantee full
                  satisfaction. Revisions will be the necessary in order to
                  achieve the objective set. <br /> My design process is
                  sequential so we’ll do the work in stages – briefing,
                  conceptualisation, sketch and final design – and we’ll make
                  all the revisions you need (within reason) but when one stage
                  is approved we can’t turn back again. If it happens I may
                  charge a fee.`}
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
                    WHICH PAYMENT METHODS CAN I USE TO ORDER MY COMPANY
                    BRANDING?
                  </p>
                </AccordionSummary>
                <AccordionDetails>
                  <p className="w-4/5 text-gray-500">
                    {`I offer a premium custom design service and I guarantee full
                  satisfaction. Revisions will be the necessary in order to
                  achieve the objective set. <br /> My design process is
                  sequential so we’ll do the work in stages – briefing,
                  conceptualisation, sketch and final design – and we’ll make
                  all the revisions you need (within reason) but when one stage
                  is approved we can’t turn back again. If it happens I may
                  charge a fee.`}
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
                    I CAN&apos;T AFFORD YOUR SERVICES... CAN YOU OFFER ME MORE
                    AFFORDABLE SOLUTIONS?
                  </p>
                </AccordionSummary>
                <AccordionDetails>
                  <p className="w-4/5 text-gray-500">
                    {`I offer a premium custom design service and I guarantee full
                  satisfaction. Revisions will be the necessary in order to
                  achieve the objective set. <br /> My design process is
                  sequential so we’ll do the work in stages – briefing,
                  conceptualisation, sketch and final design – and we’ll make
                  all the revisions you need (within reason) but when one stage
                  is approved we can’t turn back again. If it happens I may
                  charge a fee.`}
                  </p>
                </AccordionDetails>
              </Accordion>
            </div>
            <div className="flex flex-col space-y-8 my-12">
              <h1 className="text-center font-semibold text-xl">
                Still have questions?
              </h1>
              <p className="text-center text-gray-500">
                Can&apos;t find the answer you&apos;re looking for? Please chat
                to our friendly team.
              </p>
              <button className="bg-[#EE7526] mx-auto rounded-full px-4 py-2 text-white">
                Contact Us
              </button>
            </div>
          </section>
        </div>
      </Wrapper>
    </>
  );
}

export default Contact;
