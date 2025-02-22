
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div 
      className="min-h-screen flex flex-col items-center justify-center p-4 relative overflow-hidden"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1469474968028-56623f02e42e')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/40" />
      
      <div className="relative z-10 text-center animate-fade-in">
        <h1 className="text-6xl md:text-7xl font-bold text-white mb-6">
          PeakPath
        </h1>
        <p className="text-xl text-white/90 mb-8 max-w-md">
          Your personalized guide to mountain adventures
        </p>
        <Button
          onClick={() => navigate("/input")}
          className="button-hover bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-6 text-lg"
        >
          Begin Your Journey
        </Button>
      </div>
    </div>
  );
};

export default Index;
