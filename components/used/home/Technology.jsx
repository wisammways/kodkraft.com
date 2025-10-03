"use client";
import React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { t } from "@/utlis/translations";

export default function Technology() {
    const pathname = usePathname();

    return (
        <section className="wrapper bg-[#f7f7fd]">
            <div className="pt-[75px] md:pt-18 pb-[75px] md:pb-18">
                <div className="container flex flex-wrap mx-[-7.5px] items-center">
                    <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] max-w-full">
                        <figure className="m-0 p-0">
                            <Image
                                className="w-auto"
                                alt="image"
                                src="/assets/images/stack2.png"
                                width={800}
                                height={925}
                            />
                        </figure>
                    </div>
                    <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] px-[7.5px] max-w-full xl:!pl-[7%] lg:!pl-[7%]">
                        <h2 className="!text-[0.8rem] !tracking-[0.02rem] !leading-[1.35] uppercase text-gradient gradient-1 !mb-3">
                            {t(pathname, 'technology.title')}
                        </h2>
                        <h3 className="xl:!text-[1.9rem] !text-[calc(1.315rem_+_0.78vw)] font-semibold !leading-[1.25] !tracking-[normal] !mb-4">
                            {t(pathname, 'technology.subtitle')}
                        </h3>
                        <p className="!mb-6">
                            {t(pathname, 'technology.description')}
                        </p>
                        <div className="flex flex-wrap mx-[-15px] !mt-[-15px]">
                            <div className="xl:w-6/12 w-full flex-[0_0_auto] !mt-[15px] xl:!px-[20px] !px-[15px] max-w-full">
                                <ul className="pl-0 list-none bullet-bg bullet-soft-primary !mb-0">
                                    <li className="relative !pl-6">
                                        <span>
                                            <i className="uil uil-check w-4 h-4 text-[0.8rem] leading-none !tracking-[normal] !text-center flex justify-center items-center bg-secondary !text-white rounded-[100%] top-[0.2rem] before:content-['\e9dd'] before:align-middle before:table-cell absolute left-0" />
                                        </span>
                                        <span>{t(pathname, 'technology.features.futureProof')}</span>
                                    </li>
                                    <li className="relative !pl-6 !mt-3">
                                        <span>
                                            <i className="uil uil-check w-4 h-4 text-[0.8rem] leading-none !tracking-[normal] !text-center flex justify-center items-center bg-secondary !text-white rounded-[100%] top-[0.2rem] before:content-['\e9dd'] before:align-middle before:table-cell absolute left-0" />
                                        </span>
                                        <span>{t(pathname, 'technology.features.highPerformance')}</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="xl:w-6/12 w-full flex-[0_0_auto] !mt-[15px] xl:!px-[20px] !px-[15px] max-w-full">
                                <ul className="pl-0 list-none bullet-bg bullet-soft-primary !mb-0">
                                    <li className="relative !pl-6">
                                        <span>
                                            <i className="uil uil-check w-4 h-4 text-[0.8rem] leading-none !tracking-[normal] !text-center flex justify-center items-center bg-secondary !text-white rounded-[100%] top-[0.2rem] before:content-['\e9dd'] before:align-middle before:table-cell absolute left-0" />
                                        </span>
                                        <span>{t(pathname, 'technology.features.seamlessIntegration')}</span>
                                    </li>
                                    <li className="relative !pl-6 !mt-3">
                                        <span>
                                            <i className="uil uil-check w-4 h-4 text-[0.8rem] leading-none !tracking-[normal] !text-center flex justify-center items-center bg-secondary !text-white rounded-[100%] top-[0.2rem] before:content-['\e9dd'] before:align-middle before:table-cell absolute left-0" />
                                        </span>
                                        <span>{t(pathname, 'technology.features.crossPlatform')}</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
