import React, { useState, useEffect } from "react";
import { db } from "../../config/firebase";
import { collection, addDoc } from "firebase/firestore";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
  });

  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    const { name, email, mobile } = formData;
    setIsFormValid(
      name.trim() !== "" && email.trim() !== "" && mobile.trim() !== ""
    );
  }, [formData]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, mobile } = formData;

    if (!isFormValid) {
      alert("All fields are required!");
      return;
    }
    const timestamp = new Date();
    try {
      await addDoc(collection(db, "skincontacts"), {
        name: name.trim(),
        email: email.trim(),
        mobile: mobile.trim(),
        timestamp,
      });
      alert("Form submitted successfully!");
      setFormData({
        name: "",
        email: "",
        mobile: "",
      });
    } catch (e) {
      console.error("Error adding document: ", e);
      alert("Error submitting form");
    }
  };

  return (
    <div>
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-7xl py-12 md:py-24">
          <div className="grid items-center justify-items-center gap-x-4 gap-y-10 lg:grid-cols-2">
            {/* contact form */}
            <div className="flex items-center justify-center">
              <div className="px-2 md:px-10">
                <p className="text-2xl font-bold text-gray-900 md:text-3xl">
                  Sign Up Now & Avail A 50% Discount,
                  <br />
                  Limited-Period Offer!
                </p>
                <p className="mt-4 text-lg text-gray-600">
                  Get Free Expert Dermatologist Consultation.
                </p>
                <form onSubmit={handleSubmit} className="mt-8 space-y-4">
                  <div className="grid w-full items-center gap-1.5">
                    <label
                      className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      htmlFor="name"
                    >
                      Name
                    </label>
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-5 
                      text-black"
                      type="text"
                      id="name"
                      placeholder="Name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="grid w-full items-center gap-1.5">
                    <label
                      className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 text-black "
                      type="text"
                      id="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="grid w-full items-center gap-1.5">
                    <label
                      className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      htmlFor="mobile"
                    >
                      Mobile
                    </label>
                    <input
                      className="text-black flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 "
                      type="tel"
                      id="mobile"
                      placeholder="Mobile"
                      value={formData.mobile}
                      onChange={handleChange}
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center justify-center py-3 text-base font-medium text-center bg-blue-600 text-white border border-transparent rounded-md px-7 bg-primary hover:bg-green-500 w-full"
                    disabled={!isFormValid}
                  >
                    Submit
                  </button>
                  <a
                    href="tel:+917303335036"
                    className="inline-flex items-center justify-center py-3 text-base font-medium text-center hover:bg-blue-600 text-white border-black rounded-md px-7 bg-green-600 w-full"
                  >
                    Call Us
                  </a>
                </form>
              </div>
            </div>
            <img
              alt="Contact us"
              className="hidden max-h-full w-full rounded-lg object-cover lg:block"
              src="https://www.enrichclinic.com.au/wp-content/uploads/2021/06/doctor-performing-facial-injections.jpg"
            />
          </div>
        </div>
      </div>
      <hr className="" />
    </div>
  );
}
