export type ProgressBarProps = {
  percent: number;
};

const ProgressBar = ({ percent }: ProgressBarProps) => (
  <div className="flex flex-row items-center gap-2">
    <div className="bg-slate-300 rounded flex-1">
      <div
        className="bg-leeto h-2 rounded"
        style={{
          width: `${percent}%`,
        }}
      ></div>
    </div>
    <div className="font-medium text-sm text-slate-800">{`${Math.round(percent)}%`}</div>
  </div>
);

export default ProgressBar;
