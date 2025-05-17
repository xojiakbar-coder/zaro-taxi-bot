import { NavLink } from "react-router-dom";
import { LuCirclePlus, LuCircleUser, LuShoppingCart } from "react-icons/lu";

const navItems = [
  { value: "new-order", icon: LuCirclePlus, label: "Yangi buyurtma" },
  { value: "orders", icon: LuShoppingCart, label: "Buyurtmalarim" },
  { value: "profile", icon: LuCircleUser, label: "Profile" },
];

const BottomMenu = () => {
  return (
    <div className="sticky bottom-0 z-[999]  w-full bg-[#28211d] h-[80px] border-t border-zinc-700 flex items-center justify-around">
      {navItems.map(({ value, icon: Icon, label }) => (
        <NavLink
          key={value}
          to={value}
          className={({ isActive }: { isActive: boolean }) =>
            `${
              isActive ? "text-sky-400" : "text-white"
            } flex flex-col items-center gap-1 w-max hover:text-sky-400 select-none cursor-pointer whitespace-nowrap md:text-sm font-medium text-xs focus:outline-none`
          }
        >
          <Icon className="text-xl" />
          <span className="text-group">{label}</span>
        </NavLink>
      ))}
    </div>
  );
};

export default BottomMenu;
