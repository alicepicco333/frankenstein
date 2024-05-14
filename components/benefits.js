import Image from "next/image";
import React from "react";
import Container from "./container";

const Benefits = (props) => {
  const { data } = props;
  return (
    <>
      <Container className="flex flex-wrap mb-20 lg:gap-10 lg:flex-nowrap ">
        <div className="w-full lg:w-1/2 flex items-center justify-center lg:justify-start">
          <div>
            <Image
              src={data.image}
              width="auto"
              height="750"
              alt="Benefits"
              className={"object-cover"}
              placeholder="blur"
              blurDataURL={data.image.src}
            />
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex flex-col items-center justify-center lg:items-start">
          <div className="max-w-2xl mt-4 text-center lg:text-left">
            <h3 className="text-5xl font-bold leading-snug tracking-tight text-gray-800 lg:text-5xl dark:text-white">
              {data.title}
            </h3>
            <p className="py-4 text-xsm leading-normal text-gray-500 lg:text-xsm xl:text-sm dark:text-gray-300">
              {data.desc}
            </p>
          </div>

          <div className="w-full mt-5">
            {data.bullets.map((item, index) => (
              <Benefit key={index} title={item.title}>
                {item.desc}
              </Benefit>
            ))}
          </div>
        </div>
      </Container>
    </>
  );
};

function Benefit(props) {
  return (
    <div className="flex items-start mt-8 space-x-3">
    
      <div>
        <h4 className="text-xl font-medium text-gray-800 dark:text-gray-200">
          {props.title}
        </h4>
        <p className="mt-1 text-gray-500 dark:text-gray-400">{props.children}</p>
      </div>
    </div>
  );
}

export default Benefits;
