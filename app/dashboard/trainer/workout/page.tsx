"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  Dumbbell,
  Plus,
  Clock,
  Users,
  Activity,
  Trash2,
  X,
} from "lucide-react";

export default function WorkoutPage() {
  const router = useRouter();

  const [plans, setPlans] = useState([
    { id: 1, name: "Chest Day", exercises: 6, duration: "60 min", assigned: 12 },
    { id: 2, name: "Back & Biceps", exercises: 5, duration: "50 min", assigned: 8 },
  ]);

  const [open, setOpen] = useState(false);

  const [form, setForm] = useState({
    name: "",
    exercises: "",
    duration: "",
    assigned: "",
  });

  // ✅ CREATE PLAN
  const handleCreate = () => {
    if (!form.name) return;

    const newPlan = {
      id: Date.now(),
      name: form.name,
      exercises: Number(form.exercises),
      duration: form.duration,
      assigned: Number(form.assigned),
    };

    setPlans([newPlan, ...plans]);

    setForm({
      name: "",
      exercises: "",
      duration: "",
      assigned: "",
    });

    setOpen(false);
  };

  // ✅ DELETE PLAN
  const handleDelete = (id: number) => {
    setPlans(plans.filter((p) => p.id !== id));
  };

  return (
    <div className="space-y-6">

      {/* HEADER */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl md:text-2xl font-bold flex items-center gap-2">
            <Dumbbell className="text-orange-500" />
            Workout Plans
          </h1>
          <p className="text-gray-400 text-sm mt-1">
            Manage all workout plans
          </p>
        </div>

        <button
          onClick={() => setOpen(true)}
          className="flex items-center gap-2 bg-orange-500 px-4 py-2 rounded-xl hover:opacity-90"
        >
          <Plus size={16} />
          Create Plan
        </button>
      </div>

      {/* LIST */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">

        {plans.map((plan) => (
          <div
            key={plan.id}
            className="relative group bg-gradient-to-br from-[#0f172a] to-[#020617] p-5 rounded-2xl border border-white/5 hover:scale-[1.02] transition"
          >
            {/* DELETE BTN */}
            <button
              onClick={() => handleDelete(plan.id)}
              className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition p-1 bg-red-500/20 rounded-lg"
            >
              <Trash2 size={14} className="text-red-400" />
            </button>

            {/* CLICK AREA */}
            <div
              onClick={() =>
                router.push(`/dashboard/trainer/workout/${plan.id}`)
              }
              className="cursor-pointer"
            >
              <h2 className="text-lg font-semibold">{plan.name}</h2>

              <div className="mt-4 space-y-2 text-sm text-gray-400">

                <div className="flex items-center gap-2">
                  <Activity size={14} />
                  {plan.exercises} Exercises
                </div>

                <div className="flex items-center gap-2">
                  <Clock size={14} />
                  {plan.duration}
                </div>

                <div className="flex items-center gap-2">
                  <Users size={14} />
                  {plan.assigned} Members
                </div>

              </div>

              <button className="mt-4 w-full bg-orange-500/10 text-orange-400 py-2 rounded-lg">
                View Details
              </button>
            </div>
          </div>
        ))}

      </div>

      {/* MODAL */}
      {open && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4">

          <div className="bg-[#0b1220] w-full max-w-md p-6 rounded-2xl border border-white/10">

            {/* HEADER */}
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Create Workout Plan</h2>
              <button onClick={() => setOpen(false)}>
                <X />
              </button>
            </div>

            {/* FORM */}
            <div className="space-y-3">

              <input
                placeholder="Plan Name"
                className="w-full bg-[#020617] p-2 rounded-lg border border-white/10"
                value={form.name}
                onChange={(e) =>
                  setForm({ ...form, name: e.target.value })
                }
              />

              <input
                placeholder="Exercises Count"
                type="number"
                className="w-full bg-[#020617] p-2 rounded-lg border border-white/10"
                value={form.exercises}
                onChange={(e) =>
                  setForm({ ...form, exercises: e.target.value })
                }
              />

              <input
                placeholder="Duration (e.g. 60 min)"
                className="w-full bg-[#020617] p-2 rounded-lg border border-white/10"
                value={form.duration}
                onChange={(e) =>
                  setForm({ ...form, duration: e.target.value })
                }
              />

              <input
                placeholder="Assigned Members"
                type="number"
                className="w-full bg-[#020617] p-2 rounded-lg border border-white/10"
                value={form.assigned}
                onChange={(e) =>
                  setForm({ ...form, assigned: e.target.value })
                }
              />

              <button
                onClick={handleCreate}
                className="w-full bg-orange-500 py-2 rounded-lg mt-2"
              >
                Create Plan
              </button>

            </div>

          </div>
        </div>
      )}

    </div>
  );
}