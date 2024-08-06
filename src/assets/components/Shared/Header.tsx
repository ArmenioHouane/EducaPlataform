import React, { FC, useState } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  Card,
  IconButton,
} from "@material-tailwind/react";
import {
  CubeTransparentIcon,
  UserCircleIcon,
  CodeBracketSquareIcon,
  Square3Stack3DIcon,
  ChevronDownIcon,
  Cog6ToothIcon,
  InboxArrowDownIcon,
  LifebuoyIcon,
  PowerIcon,
  RocketLaunchIcon,
  Bars2Icon,
} from "@heroicons/react/24/solid";
import ThemePlugin from "./theme-plugin";
import { Link, useNavigate } from 'react-router-dom';
import { signOut } from "firebase/auth";
import { authentication } from "../../../firebase/config";

const ProfileMenu: FC<HomeProps> = (props): JSX.Element => {
  const navigate = useNavigate();

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  function goToProfile() {
    navigate("/profile");
  }

  function signOutUser(){
    signOut(authentication);
  }

  // profile menu component
  const profileMenuItems = [
    {
      label: "Meu Perfil",
      icon: UserCircleIcon,
      action: goToProfile,
    },
    {
      label: "Editar Perfil",
      icon: Cog6ToothIcon,
      action: closeMenu,
    },
    {
      label: "Inbox",
      icon: InboxArrowDownIcon,
      action: closeMenu,
    },
    {
      label: "Ajuda",
      icon: LifebuoyIcon,
      action: closeMenu,
    },
    {
      label: "Sign Out",
      icon: PowerIcon,
      action: signOutUser,
    },
  ];



  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
      <MenuHandler>
        <Button
          variant="text"
          color="blue-gray"
          className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
        >
          <Avatar
            variant="circular"
            size="sm"
            alt="tania andrew"
            className="border border-gray-900 p-0.5"
            src={(props.user != null) ? (props.user.photoURL) : ""}
          />
          <ChevronDownIcon
            strokeWidth={2.5}
            className={`h-3 w-3 transition-transform ${isMenuOpen ? "rotate-180" : ""
              }`}
          />
        </Button>
      </MenuHandler>
      <MenuList className="p-1">
        {profileMenuItems.map(({ label, icon, action }, key) => {
          const isLastItem = key === profileMenuItems.length - 1;
          return (
            <MenuItem
              key={label}
              onClick={action}
              className={`flex items-center gap-2 rounded ${isLastItem
                ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                : ""
                }`}
            >
              {React.createElement(icon, {
                className: `h-4 w-4 ${isLastItem ? "text-red-500" : ""}`,
                strokeWidth: 2,
              })}
              <Typography
                as="span"
                variant="small"
                className="font-normal"
                color={isLastItem ? "red" : "inherit"}
              >
                {label}
              </Typography>
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
}

// nav list menu

const navListMenuItems = [
  {
    title: "Cursos",
    description: "Navegue pelos nossos cursos",
    link: "/cursos",
  },
  {
    title: "Dashboard",
    description: "Entre no Dashboard",
    link: "/dashboard",
  },
  {
    title: "Sobre Nos",
    description: "Saiba mais sobre a nossa plataforma e nossa equipe.",
    link: "/sobre-nos",
  },
];

function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const renderItems = navListMenuItems.map(({ title, description, link }) => (
    <a href={link} key={title}>
      <MenuItem>
        <Typography variant="h6" color="blue-gray" className="mb-1">
          {title}
        </Typography>
        <Typography variant="small" color="gray" className="font-normal">
          {description}
        </Typography>
      </MenuItem>
    </a>
  ));

  return (
    <React.Fragment>
      <Menu allowHover open={isMenuOpen} handler={setIsMenuOpen}>
        <MenuHandler>
          <Typography as="a" href="#" variant="small" className="font-normal">
            <MenuItem className="hidden items-center gap-2 font-medium text-blue-gray-900 lg:flex lg:rounded-full">
              <Square3Stack3DIcon className="h-[18px] w-[18px] text-blue-gray-500" />{" "}
              Paginas{" "}
              <ChevronDownIcon
                strokeWidth={2}
                className={`h-3 w-3 transition-transform ${isMenuOpen ? "rotate-180" : ""
                  }`}
              />
            </MenuItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden w-[36rem] grid-cols-7 gap-3 overflow-visible lg:grid">
          <Card
            color="blue"
            shadow={false}
            variant="gradient"
            className="col-span-3 grid h-full w-full place-items-center rounded-md"
          >
            <RocketLaunchIcon strokeWidth={1} className="h-28 w-28" />
          </Card>
          <ul className="col-span-4 flex w-full flex-col gap-1">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
      <MenuItem className="flex items-center gap-2 font-medium text-blue-gray-900 lg:hidden">
        <Square3Stack3DIcon className="h-[18px] w-[18px] text-blue-gray-500" />{" "}
        Pages{" "}
      </MenuItem>
      <ul className="ml-6 flex w-full flex-col gap-1 lg:hidden">
        {renderItems}
      </ul>
    </React.Fragment>
  );
}

// nav list component
const navListItems = [
  {
    label: "Quizes",
    icon: CubeTransparentIcon,
  },
  {
    label: "Docs",
    icon: CodeBracketSquareIcon,
    to: "/cursos",
  },
];

function NavList() {
  return (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center ">
      <NavListMenu />
      {navListItems.map(({ label, icon, to }, key) => (
        <Link key={label} to={to} className="font-medium text-blue-gray-500">
          <MenuItem className="flex items-center gap-2 lg:rounded-full">
            {React.createElement(icon, { className: "h-[18px] w-[18px]" })}{" "}
            <span className="text-gray-900"> {label}</span>
          </MenuItem>
        </Link>
      ))}
    </ul>
  );
}

function AuthButtons() {
  return (<>
    <Link to="/login">
      <Button size="sm" variant="text">
        <span>Login</span>
      </Button>
    </Link>
    <Link to="/signup">
      <Button size="sm" variant="gradient" className="hidden lg:inline-block">
        <span>Regista-te</span>
      </Button>
    </Link>
  </>
  )
}

interface HomeProps {
  user : User | null
}

export const ComplexNavbar : FC<HomeProps> = (props) => {
  const [isNavOpen, setIsNavOpen] = React.useState(false);

  const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setIsNavOpen(false),
    );

  }, []);

  return (
    <Navbar className="fixed top-0 left-0 right-0 z-50 max-w-full w-full p-2 lg:pl-6">
      <div className="relative w-full max-w-full flex items-center justify-between text-blue-gray-900">
        <ThemePlugin initialTheme="light" />
        <Typography
          as="a"
          href="/"
          className="mr-4 ml-2 cursor-pointer py-1.5 font-medium 
          hover:text-bgHoverlm dark:hover:text-bgHoverlm 
          hover:font-bold 
          transform hover:scale-105 transition duration-300 ease-in-out"
        >
          &nbsp;&nbsp;
          <span>Moz Educa</span>
        </Typography>
        <div className="hidden lg:block ">
          <NavList />
        </div>
        <IconButton
          size="sm"
          color="blue-gray"
          variant="text"
          onClick={toggleIsNavOpen}
          className="ml-auto mr-2 lg:hidden"
        >
          <Bars2Icon className="h-6 w-6" />
        </IconButton>
        {props.user == null ? <AuthButtons /> : <ProfileMenu user={props.user}/>}
      </div>
      <MobileNav open={isNavOpen}>
        <NavList />
      </MobileNav>
    </Navbar>
  );
}

export default ComplexNavbar;
