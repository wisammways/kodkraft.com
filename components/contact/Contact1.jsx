"use client";
import React from "react";

export default function Contact1() {
  return (
    <section className="wrapper !bg-[#ffffff] relative border-0 upper-end before:top-[-4rem] before:border-l-transparent before:border-r-[100vw] before:border-t-[4rem] before:border-[#fefefe] before:content-[''] before:block before:absolute before:z-0 before:border-y-transparent before:border-0 before:border-solid before:right-0">
      <div className="container pb-12">
        <div className="flex flex-wrap mx-[-15px] ">
          <div className="xl:w-10/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto !mt-[-9rem]">
            <div className="card">
              <div className="flex flex-wrap mx-0">
                <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] max-w-full !self-stretch">
                  <div className="map map-full rounded-t-[0.4rem] rounded-lg-start h-full min-h-[15rem]">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6623.078495867981!2d35.518543721650005!3d33.901518379165296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151f165fa151745b%3A0xc561979e3ea9772e!2sMar%20Mikhael%2C%20Beirut!5e0!3m2!1sen!2slb!4v1736446418214!5m2!1sen!2slb"
                      style={{ width: "100%", height: "100%", border: 0 }} allowFullScreen=""></iframe>
                  </div>
                  {/* /.map */}
                </div>
                {/*/column */}
                <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] max-w-full">
                  <div className="p-10 xl:!p-[4.5rem] lg:!p-[4.5rem] md:!p-12">
                    <div className="flex flex-row">
                      <div>
                        <div className="icon !text-[#605dba] xl:!text-[1.4rem] !text-[calc(1.265rem_+_0.18vw)] !mr-4 !mt-[-0.25rem]">
                          <i className="uil uil-location-pin-alt before:content-['\ebd8']" />
                        </div>
                      </div>
                      <div className="!self-start !justify-start">
                        <h5 className="!mb-1">Address</h5>
                        <address className="not-italic !leading-[inherit] !mb-4">
                          Mar Mekhael,
                          <br />
                          Beirut, Lebanon
                        </address>
                      </div>
                    </div>
                    {/*/div */}
                    <div className="flex flex-row">
                      <div>
                        <div className="icon !text-[#605dba] xl:!text-[1.4rem] !text-[calc(1.265rem_+_0.18vw)] !mr-4 !mt-[-0.25rem]">
                          <i className="uil uil-phone-volume before:content-['\ec50']" />
                        </div>
                      </div>
                      <div>
                        <h5 className="!mb-1">Phone</h5>
                        <p><a href="tel:+96181206923">+961 81 206 923</a></p>
                      </div>
                    </div>
                    {/*/div */}
                    <div className="flex flex-row">
                      <div>
                        <div className="icon !text-[#605dba] xl:!text-[1.4rem] !text-[calc(1.265rem_+_0.18vw)] !mr-4 !mt-[-0.25rem]">
                          <i className="uil uil-envelope before:content-['\eac8']" />
                        </div>
                      </div>
                      <div>
                        <h5 className="!mb-1">E-mail</h5>
                        <p className="!mb-0">
                          <a
                            href="mailto:info@kodkraft.com"
                            className="!text-[#60697b] hover:!text-[#ef3f6e]"
                          >
                            info@kodkraft.com
                          </a>
                        </p>
                      </div>
                    </div>
                    {/*/div */}
                  </div>
                  {/*/div */}
                </div>
                {/*/column */}
              </div>
              {/*/.row */}
            </div>
            {/* /.card */}
          </div>
          {/* /column */}
        </div>
        {/* /.row */}

      </div>
      {/* /.container */}
    </section>
  );
}
