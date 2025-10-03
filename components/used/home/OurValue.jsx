"use client";
import React from "react";
import Image from "next/image";
import ProgressCircle from "../../common/CircularProgress";
import { usePathname } from "next/navigation";
import { t } from "@/utlis/translations";

export default function OurValue() {
    const pathname = usePathname();

    return (
        <section className="wrapper !bg-[#ffffff]">
            <div className="container pt-[75px] md:pt-25 pb-[75px] md:pb-25">
                <div className="flex flex-wrap mx-[-7.5px] items-center">
                    <div className="flex flex-wrap xl:mx-[-20px] lg:mx-[-20px] md:mx-[-20px] !mt-[-50px] items-center">
                        <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] xl:!px-[20px] lg:!px-[20px] md:!px-[20px] !px-[15px] max-w-full xl:!ml-[8.33333333%] lg:!ml-[8.33333333%] xl:!order-2 lg:!order-2 !relative !mt-[50px]">
                            <figure className="rounded-[0.4rem]">
                                <Image
                                    className="max-w-full h-auto rounded-[0.4rem]"
                                    alt="image"
                                    src="/assets/images/laptop.jpg"
                                    width={625}
                                    height={590}
                                />
                            </figure>
                            <div
                                className="card !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] !absolute xl:block lg:block md:block max-sm:!hidden"
                                style={{ top: "15%", left: "-7%" }}
                            >
                                <div className="card-body py-4 px-5">
                                    <div className="flex flex-row items-center">
                                        <div>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 256 234.66"
                                                data-inject-url="https://sandbox-tailwind-template.netlify.app/assets/img/icons/solid/cloud-group.svg"
                                                className="svg-inject icon-svg !w-[2.2rem] !h-[2.2rem] solid-duo text-grape-fuchsia mr-3"
                                            >
                                                <circle
                                                    className="fill-secondary"
                                                    cx={128}
                                                    cy="149.33"
                                                    r="21.33"
                                                />
                                                <path
                                                    className="fill-secondary"
                                                    d="M162.67 234.66H93.34a8 8 0 01-8-8v-16a29.36 29.36 0 0129.33-29.33h26.67a29.35 29.35 0 0129.33 29.33v16a8 8 0 01-8 8zm32-64h-14.19a55.46 55.46 0 0116.85 40v2.67H216a8.06 8.06 0 008-8V200a29.32 29.32 0 00-29.33-29.34zm-133.34 0A29.31 29.31 0 0032 200v5.35a8.06 8.06 0 008 8h18.67v-2.67a55.46 55.46 0 0116.85-40z"
                                                />
                                                <circle
                                                    className="fill-secondary"
                                                    cx="74.67"
                                                    cy="138.66"
                                                    r="21.33"
                                                />
                                                <circle
                                                    className="fill-secondary"
                                                    cx="181.33"
                                                    cy="138.66"
                                                    r="21.33"
                                                />
                                                <path
                                                    className="fill-primary"
                                                    d="M27.2 162.94a52.21 52.21 0 018.8-6.56A42.48 42.48 0 01107.73 112a41 41 0 0140.54 0A42.48 42.48 0 01220 156.38a55.09 55.09 0 015.83 4 64.4 64.4 0 00-26.65-118.49A81.31 81.31 0 00128 0C90.19 0 57.39 26.3 49.1 62.18 21.54 65.07 0 88.22 0 116.26c0 19.93 11 37.21 27.2 46.68z"
                                                />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="!text-[1.25rem] counter !leading-[1.4] !mb-0 whitespace-nowrap">
                                                100+
                                            </h3>
                                            <p className="!text-[0.8rem] leading-normal !mb-0 whitespace-nowrap">
                                                {t(pathname, 'ourValue.happyClients')}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                {/*/.card-body */}
                            </div>
                            {/*/.card */}
                            <div
                                className="card !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] !absolute !text-center xl:block lg:block md:block max-sm:!hidden"
                                style={{ bottom: "10%", left: "-10%" }}
                            >
                                <div className="card-body p-6">
                                    <div className="progressbar semi-circle fuchsia !relative !mb-3 !m-[0_auto_1rem] !w-[8.5rem] !h-[4.25rem]">
                                        <ProgressCircle max={80} />
                                    </div>
                                    <h4 className="!mb-0">{t(pathname, 'ourValue.creativity')}</h4>
                                </div>
                                {/*/.card-body */}
                            </div>
                            {/*/.card */}
                        </div>
                        {/*/column */}
                        <div className="xl:w-5/12 lg:w-5/12 w-full flex-[0_0_auto] xl:!px-[20px] lg:!px-[20px] md:!px-[20px] !px-[15px] max-w-full !mt-[50px]">
                            <h2 className="!text-[0.8rem] !tracking-[0.02rem] !leading-[1.35] uppercase text-gradient gradient-1 !mb-3">
                                {t(pathname, 'ourValue.title')}
                            </h2>
                            <h3 className="xl:!text-[1.9rem] !text-[calc(1.315rem_+_0.78vw)] font-semibold !leading-[1.25] !tracking-[normal] !mb-4 xl:mr-[-1.25rem] lg:mr-[-1.25rem]">
                                {t(pathname, 'ourValue.subtitle')}<br />
                                {t(pathname, 'ourValue.subtitleLine2')}
                            </h3>
                            <p className="!mb-6">
                                {t(pathname, 'ourValue.description')}
                            </p>
                            <ul className="pl-0 list-none bullet-bg bullet-soft-primary">
                                <li className="relative !pl-6">
                                    <i className="uil uil-check absolute left-0 w-4 h-4 text-[0.8rem] leading-none !tracking-[normal] !text-center flex items-center justify-center bg-secondary !text-white rounded-[100%] top-[0.2rem] before:content-['\e9dd'] before:align-middle before:table-cell" />
                                    {t(pathname, 'ourValue.features.masterpiece')}
                                </li>
                                <li className="relative !pl-6">
                                    <i className="uil uil-check absolute left-0 w-4 h-4 text-[0.8rem] leading-none !tracking-[normal] !text-center flex items-center justify-center bg-secondary !text-white rounded-[100%] top-[0.2rem] before:content-['\e9dd'] before:align-middle before:table-cell" />
                                    {t(pathname, 'ourValue.features.details')}
                                </li>
                                <li className="relative !pl-6">
                                    <i className="uil uil-check absolute left-0 w-4 h-4 text-[0.8rem] leading-none !tracking-[normal] !text-center flex items-center justify-center bg-secondary !text-white rounded-[100%] top-[0.2rem] before:content-['\e9dd'] before:align-middle before:table-cell" />
                                    {t(pathname, 'ourValue.features.intuitive')}
                                </li>
                            </ul>
                        </div>
                        {/*/column */}
                    </div>
                </div>
            </div>
        </section>
    );
}
