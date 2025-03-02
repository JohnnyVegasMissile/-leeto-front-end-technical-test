type GiftCard = {
  id: number;
  description: string;
  name: string;
  openingDate: string;
  closingDate: string;
  state: "active" | "archived";
  allowedAmount: number;
  consumedAmount: number;
  beneficiaries: {
    id: number;
    type: "user" | "companion" | "child";
    firstName: string;
    consumption: {
      allowedAmount: number;
      consumedAmount: number;
    };
  }[];
};

export default GiftCard;
