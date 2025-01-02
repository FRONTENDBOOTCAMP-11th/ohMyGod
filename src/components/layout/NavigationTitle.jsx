export default function NavigationTitle() {
  return (
    <nav class="w-full bg-background-color min-h-[83px] flex justify-between items-center tracking-tighter mx-4">
      <div class="gap-x-1 mx-4">
        <img src="../../assets/back-icon.svg" class="hidden" />
        <h1 class="font-laundry font-bold text-primary-500 text-[28px]">
          오는길에
        </h1>
      </div>

      <div class="gap-x-1 mx-4 flex items-center flex-reverse">
        <img src="../../assets/map.svg" class="size-5" />
        <a class="font-laundry text-gray-700 text-toggle-text">
          종로구 종로3길
        </a>
      </div>
    </nav>
  );
}
