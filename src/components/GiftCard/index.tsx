import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import GiftCard from "../../types/GiftCard";
import Card from "../Card";
import ProgressBar from "../ProgressBar";
import SquareIcon from "../SquareIcon";
import "dayjs/locale/fr";

dayjs.extend(relativeTime);

type GiftCardProps = {
  item: GiftCard;
};

const GiftCardItem = ({ item }: GiftCardProps) => (
  <Card className="hover:shadow-md transition-all">
    <SquareIcon color="pink" icon="gift" size="sm" className="mb-4" />
    <div className="text-xs text-slate-600">
      {`${
        dayjs(item.closingDate).isAfter() ? "Se clôture " : "Clôturée "
      } ${dayjs(item.closingDate).locale("fr").fromNow()}`}
    </div>
    <div className="font-medium text-base mb-2 text-slate-800">{item.name}</div>

    <div className="text-sm text-slate-600 mb-1">{`${item.consumedAmount} € dépensés / ${item.allowedAmount} €`}</div>

    <ProgressBar percent={(item.consumedAmount / item.allowedAmount) * 100} />
  </Card>
);

export default GiftCardItem;
