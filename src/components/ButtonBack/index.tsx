import { Link } from "react-router";

type BackButtonProps = {
  label?: string;
  to: string;
};

const BackButton = ({ label = "Retour", to }: BackButtonProps) => (
  <Link
    to={to}
    className="text-slate-800 border sm:border-0 px-3 py-2 sm:p-0 border-slate-300 rounded-xl sm:text-leeto hover:opacity-75 transition-opacity"
  >
    <i className="icon-back text-xs sm:mr-2" />
    <span className="hidden sm:inline">{label}</span>
  </Link>
);

export default BackButton;
