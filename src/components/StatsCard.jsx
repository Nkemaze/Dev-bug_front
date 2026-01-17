const StatsCard = ({ icon: Icon, label, value }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <Icon className="text-indigo-600 mb-2" />
      <h3 className="text-2xl font-bold">{value}</h3>
      <p className="text-gray-600">{label}</p>
    </div>
  );
};

export default StatsCard;
