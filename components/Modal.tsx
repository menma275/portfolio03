import BackArea from "@/components/BackArea";

function Modal({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BackArea />
      <div
        className="fixed z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-0 md:rounded-2xl overflow-hidden flex flex-col md:grid md:grid-cols-2 border-0 md:border-[0.5px] md:border-none h-full md:h-[70dvh] w-full max-w-4xl bg-background-transparent backdrop-blur-2xl ring-4 ring-background-transparent/75">
        {children}
      </div>
    </>
  )
}

export default Modal;
