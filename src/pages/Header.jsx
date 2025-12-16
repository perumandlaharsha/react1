import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,} from "@headlessui/react";
import {
  Bars3Icon,
  BellIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const navigation = [
  { name: "Dashboard", path: "/home", current: false },
  { name: "Projects", path: "/projects", current: false },
  { name: "Product", path: "/product", current: false },
  { name: "Users", path: "/users", current: false },
  { name: "Cart", path: "/cart", current: false },
  { name: "Form", path: "/", current: true },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  return (
    <Disclosure as="nav" className="w-full bg-gray-800 fixed top-0 left-0 z-50">
      <div className="w-full flex items-center justify-between h-16 px-4">
        <div className="sm:hidden">
          <DisclosureButton className="p-2 text-gray-400 hover:text-white hover:bg-gray-700 rounded-md">
            <Bars3Icon className="block h-6 w-6 data-open:hidden" />
            <XMarkIcon className="hidden h-6 w-6 data-open:block" />
          </DisclosureButton>
        </div>
        <div className="flex items-center flex-1">
          <img
            src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
            className="h-8 w-auto"
            alt="logo"
          />
          <div className="hidden sm:flex sm:space-x-4 ml-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={classNames(
                  item.current
                    ? "bg-gray-900 text-white"
                    : "text-gray-300 hover:text-white hover:bg-gray-700",
                  "px-3 py-2 rounded-md text-sm font-medium"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <button className="text-gray-400 hover:text-white">
            <BellIcon className="h-6 w-6" />
          </button>

          <Menu as="div" className="relative">
            <MenuButton>
              <img
                className="h-8 w-8 rounded-full"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
                alt="user"
              />
            </MenuButton>

            <MenuItems className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1">
              <MenuItem>
                <Link
                  to="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Your Profile
                </Link>
              </MenuItem>
              <MenuItem>
                <Link
                  to="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Settings
                </Link>
              </MenuItem>
              <MenuItem>
                <Link
                  to="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Sign out
                </Link>
              </MenuItem>
            </MenuItems>
          </Menu>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden bg-gray-800">
        <div className="px-4 pt-2 pb-3 space-y-1">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as={Link}
              to={item.path}
              className={classNames(
                item.current
                  ? "bg-gray-900 text-white"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white",
                "block px-3 py-2 rounded-md text-base font-medium"
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
