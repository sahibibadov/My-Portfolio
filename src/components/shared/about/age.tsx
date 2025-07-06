"use client";
import React from "react";

interface AgeProps {
  birth: string;
}

const Age: React.FC<AgeProps> = ({ birth }) => {
  const [age, setAge] = React.useState<number | null>(null);

  React.useEffect(() => {
    const now = new Date();
    const birthDate = new Date(birth);
    let yas = now.getFullYear() - birthDate.getFullYear();
    const monthDif = now.getMonth() - birthDate.getMonth();
    const dayDif = now.getDate() - birthDate.getDate();
    if (monthDif < 0 || (monthDif === 0 && dayDif < 0)) {
      yas--;
    }
    setAge(yas);
  }, [birth]);

  if (age === null) return null;
  return <>{age}</>;
};

export default Age;
