import { Link, useLocation } from "react-router-dom";
import { menus } from "../../constants/navbar";

type IMenus = {
  handleClick?: () => void;
};
function Menus({ handleClick }: IMenus) {
  const handleRoute = (id: string) => {
    handleClick?.();
    let link = document.getElementById(id);
    link &&
      window.scrollTo({
        top: link.offsetTop - 110,
        behavior: "smooth",
      });
  };

  const location = useLocation();
  return (
    <div className="grid lg:flex gap-5 text-sm uppercase font-medium">
      {menus?.map((sElement) => (
        <Link
          to={"#" + sElement}
          key={sElement}
          onClick={(e) => {
            handleRoute(sElement);
          }}
          className={`${
            sElement === "home" && !location.hash
              ? "border-b-2 border-purple-500"
              : location.hash.includes(sElement) && "border-b-2 border-purple-500"
          } hover:border-b-2 hover:border-purple-500 inline-block px-4 py-2 rounded-full dark:text-white text-gray-600`}
        >
          {sElement}
        </Link>
      ))}
    </div>
  );
}

export default Menus;
