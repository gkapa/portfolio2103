interface IMenuItem {
  name: string;
  link?: string;
  links?: IMenuItem[];
  scroll?: string;
}

export const menuItems: IMenuItem[] = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Profile",
    link: "/profile",
  },
  {
    name: "Protected",
    link: "/protected",
  },
  {
    name: "Pro-cl-Route",
    link: "/protected-client-route",
  },
  {
    name: "Register",
    link: "/join/register",
  },
];
