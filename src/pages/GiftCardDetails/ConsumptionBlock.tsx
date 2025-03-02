import clsx from "clsx";
import Card from "../../components/Card";
import ProgressBar from "../../components/ProgressBar";
import SquareIcon from "../../components/SquareIcon";
import UserEmoji from "../../components/UserEmoji";
import GiftCard from "../../types/GiftCard";

export type RightsHolderBlockProps = {
  beneficiaries: GiftCard["beneficiaries"];
};

const ConsumptionBlock = ({ beneficiaries }: RightsHolderBlockProps) => (
  <Card>
    <SquareIcon color="green" icon="chart" size="md" className="mb-4" />
    <span className="font-medium text-base text-slate-800">
      Suivi de consommation
    </span>
    <div className=" inline md:grid md:grid-cols-2 gap-4">
      {beneficiaries.map((beneficiary, idx) => (
        <div
          key={beneficiary.id}
          className={clsx("flex flex-row items-center gap-3 mt-4", {
            "col-span-2": idx === 0,
          })}
        >
          <UserEmoji type={beneficiary.type} />

          <div className="flex-1">
            <div className="text-sm text-slate-600">
              {beneficiary.type === "user"
                ? "Vous-même"
                : beneficiary.firstName}
              {` · ${beneficiary.consumption.consumedAmount} € / ${beneficiary.consumption.allowedAmount} €`}
            </div>

            <ProgressBar
              percent={
                (beneficiary.consumption.consumedAmount /
                  beneficiary.consumption.allowedAmount) *
                100
              }
            />
          </div>
        </div>
      ))}
    </div>
  </Card>
);

export default ConsumptionBlock;
