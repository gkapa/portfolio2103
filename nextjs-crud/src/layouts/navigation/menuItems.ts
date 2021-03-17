interface IMenuItem {
  name: string;
  link?: string;
  links?: IMenuItem[];
  scroll?: string;
  func?: string;
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
  {
    name: "Login",
    link: "/join/login",
  },
];

export const authedMenuItems: IMenuItem[] = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Logout",
    func: "logout",
  },
];
