import { StarsCanvas } from "./star-canva";

export const BackgroundParticle = () => {
  return (
    <div className="fixed inset-0 flex justify-center items-center pointer-events-none -z-50">
      <StarsCanvas />
    </div>
  );
};
