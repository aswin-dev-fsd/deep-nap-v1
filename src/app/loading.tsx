export default function Loading() {
  return (
    <div className="w-full min-h-[60vh] flex flex-col pt-32 px-gutter md:px-gutter-tablet lg:px-gutter-desktop max-w-[1280px] mx-auto animate-in fade-in duration-500">
      
      {/* Skeleton Header Area */}
      <div className="w-2/3 md:w-1/3 h-12 bg-[#EFE5D7]/60 rounded-lg mb-6 animate-pulse"></div>
      <div className="w-full md:w-1/2 h-6 bg-[#EFE5D7]/40 rounded-md mb-12 animate-pulse"></div>

      {/* Skeleton Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        <div className="w-full aspect-[4/3] bg-[#EFE5D7]/30 rounded-2xl animate-pulse"></div>
        <div className="w-full aspect-[4/3] bg-[#EFE5D7]/30 rounded-2xl animate-pulse hidden md:block"></div>
        <div className="w-full aspect-[4/3] bg-[#EFE5D7]/30 rounded-2xl animate-pulse hidden lg:block"></div>
      </div>
      
    </div>
  );
}
