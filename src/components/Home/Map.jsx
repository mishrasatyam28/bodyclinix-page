import React from "react";

function Map() {
  return (
    <section className="bg-gray-100">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
        <div className="max-w-3xl lg:max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-gray-900">
            Visit Our Location
          </h2>
        </div>
        <div className="mt-16 lg:mt-20">
          <div className="grid grid-cols-1 md:grid-row-2 gap-8">
            <div className="rounded-lg overflow-hidden">
              <iframe
                src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=Body+Clinix+(Body%20Clinix)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
                width="100%"
                height="480"
                allowfullscreen=""
                loading="lazy"
              ></iframe>
            </div>
            <div>
              <div className="grid max-w-full mx-auto rounded-lg overflow-hidden lg:grid-cols-2">
                <div className="px-6 py-4">
                  <h3 className="text-xl font-medium text-gray-900">
                    Our Address
                  </h3>
                  <p className="mt-1 text-gray-600">New Delhi, India</p>
                </div>
                <div className="px-6 py-4">
                  <h3 className="text-xl font-medium text-gray-900">Contact</h3>

                  <p className="mt-1 text-gray-600">
                    Phone: +91-7303335036 +91-7055305030
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Map;
