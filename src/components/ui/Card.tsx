"use client";

type CardProps = {
  title: string;
  value: string;
};

export default function Card({ title, value }: CardProps) {
  return (
    <div className="bg-[#0b1220] border border-white/5 rounded-2xl p-5 hover:shadow-lg hover:shadow-orange-500/10 transition-all">
      <p className="text-gray-400 text-sm">{title}</p>

      <h2 className="text-2xl font-bold mt-2 text-white">{value}</h2>
    </div>
  );
}