import Image from "next/image"

export const Loader = () => {
  return (
    <div className="h-full flex flex-col gap-y-4 items-center justify-center">
      <div className="w-12 h-12 relative animate-bounce">
        <Image
          alt="Logo"
          src="/pulsarMainIcon.svg"
          fill
        />
      </div>
      <p className="text-muted-foreground text-sm">
        Pulsar is contemplating . . .
      </p>
    </div>
  );
};