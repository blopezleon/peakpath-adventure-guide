
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Select } from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Input = () => {
  const navigate = useNavigate();
  const [skillLevel, setSkillLevel] = useState("");
  const [timeFrame, setTimeFrame] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/results", { state: { skillLevel, timeFrame } });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gradient-to-b from-mountain-800 to-mountain-900">
      <div className="w-full max-w-md space-y-8 animate-fade-in">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-2">PeakPath</h1>
          <p className="text-mountain-100">Your journey to the summit begins here</p>
        </div>

        <Card className="glassmorphism">
          <CardHeader>
            <CardTitle className="text-white">Plan Your Adventure</CardTitle>
            <CardDescription className="text-mountain-100">
              Tell us about your experience and availability
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-white">
                  Skill Level
                </label>
                <select
                  value={skillLevel}
                  onChange={(e) => setSkillLevel(e.target.value)}
                  className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white"
                  required
                >
                  <option value="" disabled>Select your skill level</option>
                  <option value="beginner">Beginner</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="advanced">Advanced</option>
                  <option value="expert">Expert</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-white">
                  Time Frame
                </label>
                <select
                  value={timeFrame}
                  onChange={(e) => setTimeFrame(e.target.value)}
                  className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white"
                  required
                >
                  <option value="" disabled>Select your time frame</option>
                  <option value="half-day">Half Day</option>
                  <option value="full-day">Full Day</option>
                  <option value="weekend">Weekend</option>
                  <option value="week">Week</option>
                </select>
              </div>

              <Button
                type="submit"
                className="w-full button-hover bg-mountain-500 text-white hover:bg-mountain-600"
              >
                Generate Path
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Input;
