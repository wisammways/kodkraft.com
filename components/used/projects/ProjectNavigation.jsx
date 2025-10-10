import React from "react";

export default function ProjectNavigation() {
  return (
    <div className="wrapper !bg-[#ffffff]">
      <div className="container py-10">
        <div className="flex flex-wrap mx-[-15px] md:mx-[-15px] !mt-[-15px] xl:!mt-0 lg:!mt-0 md:!mt-0">
          <div className="xl:w-8/12 lg:w-8/12 md:w-8/12 w-full flex-[0_0_auto] !px-[15px] max-w-full self-center text-center xl:text-left rtl:xl:text-right lg:text-left rtl:lg:text-right md:text-left rtl:md:text-right navigation">
            <a
              href=""
              className="btn btn-soft-ash !rounded-[50rem] btn-icon btn-icon-start !mb-0 !mr-[.25rem] rtl:!mr-0 rtl:!ml-[.25rem] hover:translate-y-[-0.15rem]"
            >
              <i className="uil uil-arrow-left before:content-['\e949']" />
              Prev Post
            </a>
            <a
              href=""
              className="btn btn-soft-ash !rounded-[50rem] btn-icon btn-icon-end hover:translate-y-[-0.15rem] !mb-0"
            >
              Next Post
              <i className="uil uil-arrow-right before:content-['\e94c']" />
            </a>
          </div>
        </div>
        {/*/.row */}
      </div>
      {/* /.container */}
    </div>
  );
}
