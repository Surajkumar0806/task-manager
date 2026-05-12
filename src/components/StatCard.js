export default function StatCard({ title, number }) {
  return (
    <div className="bg-[#0E1422] border border-[#1B2332] rounded-3xl p-6">
      <p className="text-gray-400 mb-3">
        {title}
      </p>

      <h2 className="text-4xl font-bold">
        {number}
      </h2>
    </div>
  );
}