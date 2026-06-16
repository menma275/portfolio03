import Image from "next/image";

export default function QRPage() {
  return (
    <div className="h-full flex flex-col items-center justify-center p-4">
      <div className="relative aspect-square w-full max-w-48">
        <Image
          src="/qr.svg"
          alt="QR Code"
          fill
          className="object-contain"
          priority
        />
      </div>
    </div>
  );
}
