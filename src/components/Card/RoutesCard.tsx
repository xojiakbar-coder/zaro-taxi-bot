import type { RoutesCardProps } from './types';

const RoutesCard: React.FC<RoutesCardProps> = ({ start, finish, onClick, selected = false, className = '' }) => {
  return (
    <div
      onClick={onClick}
      className={`flex flex-col sm:flex-row items-center sm:justify-between gap-2 px-6 py-3 rounded-2xl shadow-md bg-[#785443] text-white hover:bg-[#916a59] transition-colors cursor-pointer h-max ${
        selected && 'border border-red-500'
      } ${className}`}
    >
      {/* Start Location */}
      <div className="flex flex-col gap-y-1 text-left w-full mt-2 sm:w-auto">
        <span className="text-sm text-zinc-200">Jo‘nash manzili</span>
        <span className="text-lg font-semibold break-words">{start}</span>
      </div>

      {/* Arrow */}
      <div className="hidden sm:flex text-xl font-bold text-zinc-200">→</div>

      {/* Finish Location */}
      <div className="flex flex-col gap-y-1 text-right w-full sm:w-auto">
        <span className="text-sm text-zinc-200">Borish manzili</span>
        <span className="text-lg font-semibold break-words">{finish}</span>
        {selected && 'Tanlangan'}
      </div>
    </div>
  );
};

export default RoutesCard;
