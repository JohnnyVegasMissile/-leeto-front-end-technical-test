import clsx from "clsx";

export type UserEmojiProps = {
  type: "user" | "companion" | "child";
  className?: string;
};

const EmojiUsers = {
  user: "🙋‍♂️",
  companion: "💙",
  child: "👶",
};

const UserEmoji = ({ type, className }: UserEmojiProps) => (
  <div
    className={clsx(
      "bg-slate-100 rounded-full h-8 w-8 border-2 border-white flex items-center justify-center text-sm",
      className
    )}
  >
    {EmojiUsers[type]}
  </div>
);

export default UserEmoji;
