import Card from "@/components/ui/Card";
import BigCard from "@/components/ui/BigCard";

export default function DashboardPage() {
  return (
    <>
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

      <div className="grid md:grid-cols-3 gap-6">
        <Card title="Total Members" value="1200" />
        <Card title="Active Plans" value="320" />
        <Card title="Revenue" value="₹45,000" />
      </div>

      <div className="grid md:grid-cols-2 gap-6 mt-6">
        <BigCard title="Workout Plan Generator" />
        <BigCard title="Diet Plan Calculator" />
      </div>
    </>
  );
}