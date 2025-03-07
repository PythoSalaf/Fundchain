const Progressbar = ({ totalAmount, donatedAmount }) => {
  const percentage = (donatedAmount / totalAmount) * 100;

  let progressColor = "bg-red-500";
  if (percentage >= 50) progressColor = "bg-yellow-500";
  if (percentage >= 75) progressColor = "bg-green-500";

  return (
    <div className="w-full bg-gray-200 rounded-full h-3.5 overflow-hidden">
      <div
        className={`${progressColor} h-full text-xs text-white font-bold flex items-center justify-center transition-all duration-500`}
        style={{ width: `${percentage}%` }}
      >
        {Math.round(percentage)}%
      </div>
    </div>
  );
};

export default Progressbar;
