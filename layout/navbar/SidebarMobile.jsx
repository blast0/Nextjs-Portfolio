import React, { Fragment } from "react";
import Link from "next/link";
import { IoMdClose } from "react-icons/io";
import { DiTechcrunch } from "react-icons/di";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";

// import { NavbarMenu } from "./NavbarItems";
import { BlogsData } from "@/constants";
const themes = {
  light: {
    sidebar: {
      backgroundColor: "#ffffff",
      color: "#607489",
    },
    menu: {
      menuContent: "#fbfcfd",
      icon: "#0098e5",
      hover: {
        backgroundColor: "#c5e4ff",
        color: "#44596e",
      },
      disabled: {
        color: "#9fb6cf",
      },
    },
  },
  dark: {
    sidebar: {
      backgroundColor: "#0b2948",
      color: "#8ba1b7",
    },
    menu: {
      menuContent: "#082440",
      icon: "#59d0ff",
      hover: {
        backgroundColor: "#00458b",
        color: "#b6c8d9",
      },
      disabled: {
        color: "#3e5e7e",
      },
    },
  },
};

const hexToRgba = (hex, alpha) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);

  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

const MobileSidebar = ({ showMenu, setShowMenu, theme }) => {
  return (
    <Fragment>
      <div
        className={`w-full h-screen bg-[rgba(255,255,255,0.3)] dark:bg-[rgba(0,0,0,0.3)] fixed ${
          showMenu ? null : "hidden"
        } top-0 left-0 z-10 `}
        // onClick={() => setShowMenu(!showMenu)}
      >
        {/* Sidebar */}
        <div
          className={`w-[250px] h-screen bg-white dark:bg-[rgba(15,16,53,0.9)] shadow-sm shadow-gray-600 dark:shadow-gray-300 ${
            showMenu ? null : " translate-x-[-450px] "
          } transition-all duration-500`}
        >
          <div className="p-3 bg-gray-200 dark:bg-gray-800 flex justify-between items-center gap-3">
            {/* Name Logo */}
            <div className="flex items-center gap-2">
              <div className="text-white w-8 h-8 bg-[#c72c6c] dark:bg-[#07d0e5] rounded-full flex justify-center items-center">
                B
              </div>
              <p className="text-gray-400 flex">
                <span className="text-lg font-bold">BISHAL</span>{" "}
                <DiTechcrunch />
              </p>
            </div>

            {/* Sidebar Close button */}
            <button
              className="text-black dark:text-white text-3xl font-bold"
              onClick={() => setShowMenu(!showMenu)}
            >
              <IoMdClose />
            </button>
          </div>
          {showMenu ? (
            <Sidebar
              rootStyles={{
                top: "55px",
                background: "rgba(0,69,139,0.1)",
                color: "",
                zIndex: 2,
                height: "100vh",
                position: "fixed",
                paddingBottom: "50px",
              }}
              backgroundColor="transparent"
            >
              <Menu
                menuItemStyles={{
                  root: {
                    fontSize: "13px",
                    fontWeight: 400,
                  },
                  icon: {
                    color: themes[theme].menu.icon,
                  },
                  SubMenuExpandIcon: {
                    color: "#b6b7b9",
                  },
                  subMenuContent: ({ level }) => ({
                    backgroundColor:
                      level === 0
                        ? hexToRgba(
                            themes[theme].menu.menuContent,
                            // hasImage
                            false && !collapsed ? 0.4 : 1
                          )
                        : "transparent",
                  }),
                  button: {
                    "&:hover": {
                      backgroundColor: hexToRgba(
                        themes[theme].menu.hover.backgroundColor,
                        // hasImage
                        false ? 0.8 : 1
                      ),
                      color: themes[theme].menu.hover.color,
                    },
                  },
                  label: ({ open }) => ({
                    fontWeight: open ? 600 : undefined,
                  }),
                }}
              >
                <MenuItem component={<Link href="/#home" />}>Home</MenuItem>
                <MenuItem component={<Link href="/#about" />}> About</MenuItem>
                <MenuItem component={<Link href="/#techStack" />}>
                  Tech Stack
                </MenuItem>
                <MenuItem component={<Link href="/#education" />}>
                  Education
                </MenuItem>
                <MenuItem component={<Link href="/#experience" />}>
                  Experience
                </MenuItem>
                <SubMenu
                  rootStyles={{
                    [`&.active`]: {
                      backgroundColor: "red",
                      color: "green",
                    },
                  }}
                  title="Sub Component 1"
                  prefix="Blogs"
                >
                  <MenuItem component={<Link href="/blogs" />}>
                    All Blogs
                  </MenuItem>
                  {BlogsData.map((BlogData) => (
                    <MenuItem
                      component={<Link href={"/blogs/" + BlogData.linkName} />}
                    >
                      {BlogData.name}
                    </MenuItem>
                  ))}
                </SubMenu>
                <MenuItem component={<Link href="/#apps" />}>Apps</MenuItem>
              </Menu>
            </Sidebar>
          ) : null}
        </div>
      </div>
    </Fragment>
  );
};

export default MobileSidebar;
