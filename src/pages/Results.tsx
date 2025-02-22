
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Results = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { skillLevel, timeFrame } = location.state || {};

  const steps = [
    { title: "Preparation", content: "Gather necessary equipment and check weather conditions" },
    { title: "Training", content: "Complete recommended physical conditioning exercises" },
    { title: "Planning", content: "Map out your route and establish checkpoints" },
    { title: "Execution", content: "Begin your journey with proper pacing and awareness" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-mountain-800 to-mountain-900 p-4">
      <div className="max-w-4xl mx-auto py-8 animate-fade-in">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">Your Mountain Path</h1>
          <p className="text-mountain-100">
            Based on your {skillLevel} skill level and {timeFrame} time frame
          </p>
        </div>

        <div className="space-y-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="glassmorphism rounded-lg p-6 animate-fade-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <h3 className="text-xl font-semibold text-white mb-2">
                {index + 1}. {step.title}
              </h3>
              <p className="text-mountain-100">{step.content}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <Button
            onClick={() => navigate("/input")}
            className="button-hover bg-mountain-500 text-white hover:bg-mountain-600"
          >
            Plan Another Adventure
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Results;
