import { useMemo } from "react";
import clsx from "clsx";

export type TabBarProps = {
  activeTab: string;
  onTabChange: (key: string) => void;
  items: {
    key: string;
    label: string;
    children: React.ReactNode;
  }[];
};

const TabBar = ({ items, activeTab, onTabChange }: TabBarProps) => {
  const activeTabChildren = useMemo(() => {
    return items.find((item) => item.key === activeTab)?.children;
  }, [activeTab, items]);

  return (
    <div className="flex flex-col">
      <div className="border-b h-fit border-slate-300 flex mb-2">
        {items?.map((item) => (
          <div
            key={`tab-${item.key}`}
            onClick={() => onTabChange(item.key)}
            className={clsx(
              "font-semibold px-4 py-2 text-sm cursor-pointer -mb-px flex-1 sm:flex-none text-center transition-all border-b-2",
              {
                "border-leeto text-leeto": item.key === activeTab,
                "text-slate-600 border-transparent hover:opacity-75":
                  item.key !== activeTab,
              }
            )}
          >
            {item.label}
          </div>
        ))}
      </div>

      <div className="flex-1 pt-2">
        {items.map((item) => (
          <div
            key={`list-${item.key}`}
            className={clsx({ hidden: item.key !== activeTab })}
          >
            {activeTabChildren}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TabBar;
