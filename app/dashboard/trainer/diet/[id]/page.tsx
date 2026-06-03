"use client";

import { useParams, useRouter } from "next/navigation";
import {
  ArrowLeft,
  Utensils,
  CheckCircle,
  XCircle,
  Flame,
  Edit,
  Trash2,
  UserPlus,
} from "lucide-react";

type Meal = {
  meal: string;
  items: string;
  calories: number;
  taken: boolean;
};

export default function DietDetailsPage() {
  const { id } = useParams();
  const router = useRouter();

  const diet: Meal[] = [
    {
      meal: "Breakfast",
      items: "Oats + Banana + Milk",
      calories: 350,
      taken: true,
    },
    {
      meal: "Lunch",
      items: "Brown Rice + Chicken + Salad",
      calories: 600,
      taken: true,
    },
    {
      meal: "Evening Snack",
      items: "Boiled Eggs + Green Tea",
      calories: 200,
      taken: false,
    },
    {
      meal: "Dinner",
      items: "Chapati + Paneer + Veggies",
      calories: 450,
      taken: false,
    },
  ];

  const totalCalories = diet.reduce((acc, d) => acc + d.calories, 0);
  const takenMeals = diet.filter((d) => d.taken).length;
  const progress = (takenMeals / diet.length) * 100;

  return (
    <div className="space-y-6">

      {/* BACK */}
      <button
        onClick={() => router.back()}
        className="flex items-center gap-2 text-sm text-gray-400 hover:text-white"
      >
        <ArrowLeft size={16} />
        Back
      </button>

      {/* HEADER */}
      <div className="bg-gradient-to-r from-[#0f172a] to-[#020617] p-6 rounded-2xl border border-white/10">
        <h1 className="text-2xl font-bold flex items-center gap-3">
          <Utensils className="text-green-500" />
          Diet Plan #{id}
        </h1>

        <p className="text-gray-400 text-sm mt-2">
          Daily nutrition & calorie tracking
        </p>

        <div className="flex items-center gap-2 mt-3 text-orange-400">
          <Flame size={18} />
          {totalCalories} kcal
        </div>

        {/* PROGRESS */}
        <div className="mt-4">
          <div className="flex justify-between text-xs mb-1 text-gray-400">
            <span>Progress</span>
            <span>{takenMeals}/{diet.length}</span>
          </div>

          <div className="w-full h-2 bg-gray-800 rounded-full">
            <div
              className="h-2 bg-green-500 rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>

      {/* MEALS */}
      <div className="bg-[#0b1220] p-5 rounded-2xl border border-white/10">
        <h2 className="text-lg font-semibold mb-4">Meals</h2>

        <div className="space-y-3">
          {diet.map((d, i) => (
            <div
              key={i}
              className="flex justify-between items-center bg-[#020617] p-4 rounded-xl border border-white/5"
            >
              <div>
                <p className="font-medium">{d.meal}</p>
                <p className="text-xs text-gray-400">{d.items}</p>
                <p className="text-xs text-orange-400 mt-1">
                  {d.calories} kcal
                </p>
              </div>

              {d.taken ? (
                <CheckCircle className="text-green-500" size={18} />
              ) : (
                <XCircle className="text-red-500" size={18} />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* ACTIONS */}
      <div className="grid md:grid-cols-3 gap-4">

        <button className="flex items-center justify-center gap-2 bg-green-500/10 text-green-400 p-4 rounded-xl">
          <UserPlus size={18} />
          Assign Diet
        </button>

        <button className="flex items-center justify-center gap-2 bg-blue-500/10 text-blue-400 p-4 rounded-xl">
          <Edit size={18} />
          Edit
        </button>

        <button className="flex items-center justify-center gap-2 bg-red-500/10 text-red-400 p-4 rounded-xl">
          <Trash2 size={18} />
          Delete
        </button>

      </div>

    </div>
  );
}