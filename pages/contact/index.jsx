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
        <div className="flex flex-col p-8 lg:p-16 lg:flex-row justify-between gap-y-10 gap-x-20">
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
            border
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
            border
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
                      border
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
            border
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
                <ul className="grid grid-cols-2 gap-4">
                  <li className="space-x-2">
                    <input type="checkbox" className='outline-amber-600 outline-1'/>
                    <label className='text-xs'>Mascot Design</label>
                  </li>
                  <li className="space-x-2">
                    <input type="checkbox" className='outline-amber-600 outline-1' />
                    <label className='text-xs'>T-Shirt and Merch</label>
                  </li>
                  <li className="space-x-2">
                    <input type="checkbox" className='outline-amber-600 outline-1' />
                    <label className='text-xs'>Chibi Kawaii</label>
                  </li>
                  <li className="space-x-2">
                    <input type="checkbox" className='outline-amber-600 outline-1' />
                    <label className='text-xs'>Cartoon and Comic</label>
                  </li>
                  <li className="space-x-2">
                    <input type="checkbox" className='outline-amber-600 outline-1' />
                    <label className='text-xs'>Storybook</label>
                  </li>
                  <li className="space-x-2">
                    <input type="checkbox" className='outline-amber-600 outline-1' />
                    <label className='text-xs'>Other</label>
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
          <section className="w-full lg:w-1/2">
            <div className=" w-full lg:w-3/4 mx-auto my-10">
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
                  Please, talk to me.
                  </p>
                </AccordionSummary>
                <AccordionDetails>
                  <p className="w-4/5 text-gray-500">
                  Let me know who you are and how can I help you.
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
                  Looking for cheap Design?
                  </p>
                </AccordionSummary>
                <AccordionDetails>
                  <p className="w-4/5 text-gray-500">
                  Creating custom graphics is time consuming and requires a lot of work, so I charge accordingly.
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
                  Looking for quick design?
                  </p>
                </AccordionSummary>
                <AccordionDetails>
                  <p className="w-4/5 text-gray-500">
                  Booking your order a couple of weeks upfront will result in a better price.
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
                  50% payment in advance is required
                  </p>
                </AccordionSummary>
                <AccordionDetails>
                  <p className="w-4/5 text-gray-500">
                  Working for free is the last thing I would like to do in my free time, a down payment helps me to discriminate serious job offers from the rest.
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
                  About confidentiality
                  </p>
                </AccordionSummary>
                <AccordionDetails>
                  <p className="w-4/5 text-gray-500">
                  My portfolio is my marketing tool, otherwise stated I reserve the right to publish any work made by order. Please, contact me to discuss your needs.
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
                  please have a look to my portfolio
                  </p>
                </AccordionSummary>
                <AccordionDetails>
                  <p className="w-4/5 text-gray-500">
                  Please have a look to my portfolio before requesting a quote and make sure that I’m the right designer for your project.
                  </p>
                </AccordionDetails>
              </Accordion>
            </div>
              <button className="mt-2 bg-[#EE7526] mx-auto w-full px-4 py-2 text-white">
                Contact Us
              </button>
          </section>
        </div>
      </Wrapper>
    </>
  );
}

export default Contact;
