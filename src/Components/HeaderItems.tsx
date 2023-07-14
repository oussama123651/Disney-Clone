import type { IconType } from "react-icons";
import { Link } from "react-router-dom";

interface HeaderItemsProps {
  name: string;
  Icon: IconType;
  path: string | null;
}

const HeaderItems = ({ name, Icon, path }: HeaderItemsProps) => {
  if (path === null)
    return (
      <a className="flex items-center gap-3 mb-2 lg:text-xl font-semibold cursor-pointer hover:underline underline-offset-8 text-base">
        <Icon />
        <h2>{name}</h2>
      </a>
    );
  else
    return (
      <Link
        to={path}
        className="flex items-center gap-3 mb-2 lg:text-xl font-semibold cursor-pointer hover:underline underline-offset-8 text-base"
      >
        <Icon />
        <h2>{name}</h2>
      </Link>
    );
};

export default HeaderItems;
