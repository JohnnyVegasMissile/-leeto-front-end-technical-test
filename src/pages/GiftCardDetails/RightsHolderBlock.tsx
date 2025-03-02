import Card from "../../components/Card";
import SquareIcon from "../../components/SquareIcon";
import UserEmoji from "../../components/UserEmoji";
import GiftCard from "../../types/GiftCard";

export type RightsHolderBlockProps = {
  beneficiaries: GiftCard["beneficiaries"];
};

const RightsHolderBlock = ({ beneficiaries }: RightsHolderBlockProps) => (
  <Card>
    <SquareIcon color="green" icon="familly" size="md" className="mb-4" />
    <span className="font-medium text-base text-slate-800">
      Quel(s) ayant(s)-droit validés bénéficient de cette cagnotte ?
    </span>

    <div className="flex flex-row gap-2 mt-4 items-center">
      <div className="flex">
        {beneficiaries.map((beneficiary) => (
          <UserEmoji type={beneficiary.type} className="-m-1" />
        ))}
      </div>

      <span className="text-sm text-slate-600">
        {beneficiaries.map((beneficiary, idx) => {
          let prefix = "";
          if (idx === beneficiaries.length - 1 && beneficiaries.length > 1) {
            prefix = " et ";
          } else if (idx > 0) {
            prefix = ", ";
          }

          if (beneficiary.type === "user") {
            return prefix + "Vous-même";
          } else {
            return prefix + beneficiary.firstName;
          }
        })}
        {` ${beneficiaries.length > 1 ? "sont" : "êtes"} éligibles.`}
      </span>
    </div>
  </Card>
);

export default RightsHolderBlock;
