"use client";
import {
  InstagramOutlined,
  LinkedinOutlined,
  MailOutlined,
  PhoneFilled,
  WhatsAppOutlined,
} from "@ant-design/icons";
import { Input } from "antd";
import React, { useEffect, useState } from "react";

const { TextArea } = Input;

const Page = () => {
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    setShouldAnimate(true);
    return () => {
      setShouldAnimate(false);
    };
  }, []);

  return (
    <div
      className={`w-full flex ${
        shouldAnimate
          ? "page-enter page-enter-active"
          : "page-exit page-exit-active"
      }`}
    >
      <div className=" w-[70%] m-auto flex">
        <div className="w-[50%]">
          <div className="font-semibold text-[42px] mb-4">Me Unveiled</div>
          <div className="font-light mt-10 mb-6  text-[20px] font-semibold">
            Collaborate with Me?
          </div>
          <div className="mb-4 flex items-center">
            {" "}
            <MailOutlined />
            <div className="font-light ml-[6px]">
              <a
                href="mailto:sivasaikrishna.nekkalapu@sjsu.edu"
                className="text-inherit no-underline hover:text-blue-500"
                target="_top"
              >
                sivasaikrishna.nekkalapu@sjsu.edu
              </a>
            </div>
          </div>
          <div className="mb-4 flex items-center">
            {" "}
            <MailOutlined />
            <div className="font-light ml-[6px]">
              <a
                href={`mailto:${"sivasaikrishna.ms@gmail.com"}`}
                className="text-inherit no-underline hover:text-blue-500"
                target="_top"
              >
                sivasaikrishna.ms@gmail.com
              </a>
            </div>
          </div>
          <div className="flex items-center">
            <div className="mb-4 flex items-center">
              {" "}
              <LinkedinOutlined />
              <div className="font-light ml-[6px]">
                <a
                  href={`https://bit.ly/nsśk`}
                  className="text-inherit no-underline hover:text-blue-500"
                  target="_blank"
                >
                  https://bit.ly/nsśk
                </a>
              </div>
            </div>
            <div className="mb-4 flex items-center ml-4">
              <InstagramOutlined />
              <div className="font-light ml-[6px]">nssk.253</div>
            </div>
          </div>
          <div className="mb-4 flex items-center">
            <PhoneFilled /> <WhatsAppOutlined className="ml-[6px]" />
            <div className="font-light ml-[6px]">408 210 4147</div>
          </div>
        </div>
        <div className="w-[50%]">
          Hey there! 👋
          <p>
            I&apos;m just a developer who finds immense satisfaction and joy
            from user appreciation for the products I&apos;ve developed.
            I&apos;m irresistibly drawn to playing with trending and impactful
            technologies, constantly exploring new avenues for product
            development.
          </p>
          <p>
            When I&apos;m not coding, you&apos;ll find me with my headphones on,
            grooving to music. I&apos;m also the guy who&apos;s always up for a
            chat about cricket, movies and memes ❤️️. I have a serious passion
            for good food, and I try to balance it out with a bit of exercise –
            or at least, I attempt to! 😄
          </p>{" "}
          <p>
            I&apos;m currently residing in downtown San Jose, I am pursuing my
            graduate studies at San José State, majoring in Software
            Engineering. Actively seeking summer internships and open to
            contributing to intriguing open-source projects.
          </p>
          <p>
            Ready to team up and create something cool? Let&apos;s chat! 🚀✨
          </p>
          <div className="mt-10">
            {'"'}Ah, Now You Know Me Better!{'"'}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
