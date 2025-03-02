import clsx from "clsx";

export type CardProps = {
  className?: string;
  children: React.ReactNode;
};

const Card = ({ className, children }: CardProps) => (
  <div className={clsx("border border-slate-300 p-6 rounded-xl", className)}>
    {children}
  </div>
);

export default Card;
