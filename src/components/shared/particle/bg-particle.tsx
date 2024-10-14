import dynamic from "next/dynamic";

const StarsCanvas = dynamic(() => import("@/components/shared/particle/star-canva"), { ssr: false });
export const BackgroundParticle = () => {
  return (
    <div className="fixed inset-0 flex justify-center items-center pointer-events-none -z-50">
      <StarsCanvas />
    </div>
  );
};
