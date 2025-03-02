import { useState } from "react";
import TabBar from "../../components/TabBar";
import { getGiftCards } from "../../data";
import { useQuery } from "@tanstack/react-query";
import GiftCard from "../../types/GiftCard";
import { Link, useSearchParams } from "react-router";
import GiftCardItem from "../../components/GiftCard";

type GiftCardGridProps = {
  items: GiftCard[] | undefined;
};

const GiftCardGrid = ({ items }: GiftCardGridProps) => {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {items?.map((item) => (
        <Link key={item.id} to={`/gift-cards/${item.id}`} className="">
          <GiftCardItem item={item} />
        </Link>
      ))}
    </div>
  );
};

const GiftCardList = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeTab, setActiveTab] = useState(
    searchParams.get("state") === "archived" ? "archived" : "active"
  );

  const query = useQuery({ queryKey: ["gift-cards"], queryFn: getGiftCards });

  const activeGiftCards = query.data?.filter(
    (giftCard) => giftCard.state === "active"
  );
  const archivedGiftCards = query.data?.filter(
    (giftCard) => giftCard.state === "archived"
  );

  const onTabChange = (tab: string) => {
    setActiveTab(tab);
    setSearchParams({ state: tab });
  };

  return (
    <div className="p-4 sm:p-10">
      <h1 className="text-xl md:text-2xl font-semibold mb-4 text-slate-800">
        Cartes cadeaux
      </h1>

      {query.isFetched && (
        <TabBar
          activeTab={activeTab}
          onTabChange={onTabChange}
          items={[
            {
              key: "active",
              label: `Actives (${activeGiftCards?.length})`,
              children: <GiftCardGrid items={activeGiftCards} />,
            },
            {
              key: "archived",
              label: `Clôturées (${archivedGiftCards?.length})`,
              children: <GiftCardGrid items={archivedGiftCards} />,
            },
          ]}
        />
      )}

      {query.isLoading && <div>Chargement...</div>}
      {query.isError && <div>Erreur lors du chargement des cartes cadeaux</div>}
    </div>
  );
};

export default GiftCardList;
