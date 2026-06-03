"use client";

type BigCardProps = {
  title: string;
};

export default function BigCard({ title }: BigCardProps) {
  return (
    <div className="bg-gradient-to-br from-[#0f172a] to-[#020617] border border-white/5 rounded-2xl p-6 hover:scale-[1.02] transition-all cursor-pointer">
      
      <h2 className="text-lg font-semibold text-white">{title}</h2>

      <p className="text-gray-400 text-sm mt-2">
        Click to explore and generate smart results using AI 🚀
      </p>

      <button className="mt-4 px-4 py-2 bg-orange-500 text-white rounded-lg text-sm hover:bg-orange-600 transition">
        Open
      </button>
    </div>
  );
}