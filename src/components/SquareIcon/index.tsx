import clsx from "clsx";

type SquareIconProps = {
  color: "pink" | "green";
  size: "sm" | "md" | "lg";
  icon: "gift" | "familly" | "chart";
  className?: string;
};

const SquareIcon = ({
  color = "pink",
  icon,
  size,
  className,
}: SquareIconProps) => (
  <div
    className={clsx(
      "flex items-center justify-center rounded-lg",
      {
        "bg-pink-100": color === "pink",
        "bg-green-100": color === "green",
        "h-8 w-8": size === "sm",
        "h-10 w-10": size === "md",
        "h-10 w-10 sm:h-16 sm:w-16": size === "lg",
      },
      className
    )}
  >
    <i
      className={clsx(`icon-${icon}`, {
        "text-pink-800": color === "pink",
        "text-green-800": color === "green",
        "text-xs": size === "sm",
        "text-sm": size === "md",
        "text-sm sm:text-xl": size === "lg",
      })}
    />
  </div>
);

export default SquareIcon;
