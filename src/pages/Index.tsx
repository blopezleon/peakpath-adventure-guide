
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div 
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "1rem",
        position: "relative",
        overflow: "hidden",
        backgroundImage: "url('https://images.unsplash.com/photo-1469474968028-56623f02e42e')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div 
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0, 0, 0, 0.4)",
        }}
      />
      
      <div 
        style={{
          position: "relative",
          zIndex: 10,
          textAlign: "center",
          animation: "fadeIn 0.5s ease-out",
        }}
      >
        <h1 
          style={{
            fontSize: "4rem",
            fontWeight: "bold",
            color: "white",
            marginBottom: "1.5rem",
          }}
        >
          PeakPath
        </h1>
        <p 
          style={{
            fontSize: "1.25rem",
            color: "rgba(255, 255, 255, 0.9)",
            marginBottom: "2rem",
            maxWidth: "28rem",
          }}
        >
          Your personalized guide to mountain adventures
        </p>
        <a
          href="/input"
          style={{
            display: "inline-block",
            padding: "1.5rem 2rem",
            fontSize: "1.125rem",
            color: "white",
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(8px)",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            borderRadius: "0.5rem",
            cursor: "pointer",
            textDecoration: "none",
            transition: "all 0.3s ease",
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = "scale(1.05)";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = "scale(1)";
          }}
          onMouseDown={(e) => {
            e.currentTarget.style.transform = "scale(0.95)";
          }}
          onMouseUp={(e) => {
            e.currentTarget.style.transform = "scale(1.05)";
          }}
        >
          Begin Your Journey
        </a>
      </div>

      <style>
        {`
          @media (min-width: 768px) {
            h1 {
              font-size: 5rem;
            }
          }
          
          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Index;
