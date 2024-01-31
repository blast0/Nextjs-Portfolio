import React, { Fragment, useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import { IoMdAppstore } from "react-icons/io";

import { AppsData } from "@/constants";
import { ThemeContext } from "@/context/themeContext";

const Apps = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Fragment>
      <section id="apps">
        <div className="shadow-zinc-300 pt-[60px] mt-[-60px] dark:shadow-zinc-700 shadow-sm">
          <h3 className="text-3xl font-bold text-center pb-8 flex justify-center items-center gap-3">
            <span className="mr-3">
              <IoMdAppstore />
            </span>
            Apps
          </h3>
          <div className="md:flex hidden justify-center mx-8 gap-5 content-center">
            {AppsData.map((app, key) => (
              <div className="overflow-hidden" key={key}>
                <Link href={`/${app.linkName}`}>
                  <Image
                    alt="app"
                    className="object-cover rounded md:rounded-[30px] w-full"
                    height={500}
                    src={theme === "dark" ? app.imageUrl : app.imageLight}
                    width={250}
                    key={key}
                  />
                </Link>
              </div>
            ))}
          </div>
          <MobileScreenApps />
        </div>
      </section>
    </Fragment>
  );
};

export default Apps;

const MobileScreenApps = () => {
  return (
    <div className="md:hidden gap-3 flex flex-wrap flex-cols-2 justify-center px-8 pb-10">
      {AppsData.map((app, key) => (
        <div key={key}>
          <Link href={`/${app.linkName}`}>
            <div className="p-3 rounded-xl bg-[pink] dark:bg-[aqua]">
              <Image
                alt={app.name}
                className="object-cover"
                height={150}
                src={app.iconUrl}
                width={150}
                key={key}
                loader={() => app.iconUrl}
              />
            </div>
          </Link>
          <p className="text-center text-xs py-1">{app.name}</p>
        </div>
      ))}
    </div>
  );
};
