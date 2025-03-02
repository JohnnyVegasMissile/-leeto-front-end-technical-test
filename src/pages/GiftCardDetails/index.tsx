import { useQuery } from "@tanstack/react-query";
import { getGiftCard } from "../../data";
import { useParams } from "react-router";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/fr";
import ProgressBar from "../../components/ProgressBar";
import SquareIcon from "../../components/SquareIcon";
import clsx from "clsx";
import BackButton from "../../components/ButtonBack";
import RightsHolderBlock from "./RightsHolderBlock";
import ConsumptionBlock from "./ConsumptionBlock";
dayjs.extend(relativeTime);

type LabelWithIconProps = {
  icon: "calendar" | "clock";
  children: string;
};

const LabelWithIcon = ({ icon, children }: LabelWithIconProps) => (
  <span className="text-sm">
    <i className={clsx(`icon-${icon}`, "mr-1")} />
    {children}
  </span>
);

const GiftCardDetails = () => {
  const { id } = useParams();
  const query = useQuery({
    queryKey: ["gift-cards", { id }],
    queryFn: () => getGiftCard(id as string),
  });

  if (query.isLoading) {
    return <div className="p-4 sm:p-10">Loading...</div>;
  }

  const detail = query.data;

  if (!detail) {
    return null;
  }

  return (
    <div className="p-4 sm:p-10">
      <BackButton to="/gift-cards" label="Retour vers les cartes cadeaux" />
      <SquareIcon color="pink" icon="gift" size="lg" className="mb-4 mt-8" />
      <h1 className="text-xl md:text-2xl font-semibold text-slate-800">
        {detail.name}
      </h1>

      <div className="flex flex-col gap-2 sm:flex-row justify-start mt-2 text-slate-600">
        <LabelWithIcon icon="calendar">{`${dayjs(detail.openingDate).format("DD MMM. YYYY")} - ${dayjs(detail.closingDate).format("DD MMM. YYYY")}`}</LabelWithIcon>
        <LabelWithIcon icon="clock">{`${
          dayjs(detail.closingDate).isAfter() ? "Se clôture " : "Clôturée "
        } ${dayjs(detail.closingDate).locale("fr").fromNow()}`}</LabelWithIcon>
      </div>

      <div className="flex items-end justtify-start gap-6 mt-4">
        <div className="text-slate-800">
          <span className="font-semibold text-xl md:text-2xl">{`${detail.allowedAmount - detail.consumedAmount} €`}</span>
          <br />
          <span className="font-medium text-xs md:text-sm">disponibles</span>
        </div>

        <div className="flex-1 max-w-96">
          <div className="text-sm text-slate-600">{`${detail.consumedAmount} € dépensés / ${detail.allowedAmount} €`}</div>
          <ProgressBar
            percent={(detail.consumedAmount / detail.allowedAmount) * 100}
          />
        </div>
      </div>

      <div className="p-4 bg-slate-50 rounded-lg mt-6">
        <span className="font-semibold text-sm text-slate-800">
          Description de la la carte-cadeau
        </span>
        <p className="text-sm text-slate-800 mt-1">{detail.description}</p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 mt-6">
        <RightsHolderBlock beneficiaries={detail.beneficiaries} />
        <ConsumptionBlock beneficiaries={detail.beneficiaries} />
      </div>
    </div>
  );
};

export default GiftCardDetails;
