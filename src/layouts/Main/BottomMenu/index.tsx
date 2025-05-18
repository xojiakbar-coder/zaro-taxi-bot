import { NavLink } from 'react-router-dom';
import { LuCirclePlus, LuCircleUser, LuShoppingCart } from 'react-icons/lu';

const navItems = [
  { value: '/', icon: LuCirclePlus, label: 'Yangi buyurtma' },
  { value: 'my-orders', icon: LuShoppingCart, label: 'Buyurtmalarim' },
  { value: 'profile', icon: LuCircleUser, label: 'Profile' }
];

const BottomMenu = () => {
  return (
    <div className="sticky bottom-0 z-[999] w-full bg-[#28211d] h-[80px] border-t border-zinc-700 flex items-center gap-4 justify-around">
      {navItems.map(({ value, icon: Icon, label }) => (
        <NavLink
          key={value}
          to={value}
          className={({ isActive }: { isActive: boolean }) =>
            `${
              isActive ? 'text-sky-400' : 'text-white'
            } flex flex-col items-center gap-1 w-full hover:text-sky-400 select-none cursor-pointer whitespace-nowrap md:text-sm font-medium text-xs focus:outline-none`
          }
        >
          <Icon className="text-[20px]" />
          <span className="text-group text-[11px]">{label}</span>
        </NavLink>
      ))}
    </div>
  );
};

export default BottomMenu;
