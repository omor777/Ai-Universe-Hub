const loadAiData = async () => {
  const res = await fetch(`https://openapi.programming-hero.com/api/ai/tools`);
  const data = await res.json();
  const aiData = data.data.tools;
  displayAiInfo(aiData);
};

const displayAiInfo = (aiData) => {
  const aiInfoContainer = document.getElementById("ai-info-container");
  aiData.forEach((data) => {
    console.log(data);
    const div = document.createElement("div");
    div.classList = ``;
    div.innerHTML = `
    <div class="rounded-2xl border border-[#1111111A] bg-[#FFFFFF] p-6 ">
    <figure class="">
      <img
        src="${data?.image}"
        alt=""
        class="rounded-2xl h-[300px] w-full object-cover bg-slate-300 "
      />
    </figure>
    <div class="mt-6">
      <h2 class="text-2xl font-semibold text-black/80">Features</h2>
      <ol id='list' class="leading-7 text-gray-500 list-decimal list-inside mt-4">
        ${data?.features.map((item) => `<li>${item}</li>`).join("")}
      </ol>
      <div class="divider"></div>
      <div class="flex items-center justify-between">
        <div>
          <h4 class="text-2xl font-semibold text-black/80">${data?.name}</h4>
          <p class='mt-4 space-y-x'>
            <span><i class="fa-solid fa-calendar-days"></i></span>
            <time>${data?.published_in}</time>
          </p>
        </div>
        <button class="size-12 bg-[#FEF7F7] rounded-full"><i class="fa-solid fa-arrow-right text-[#EB5757]"></i></button>
      </div>
    </div>
  </div>
    
    `;
    aiInfoContainer.appendChild(div);
  });
};

loadAiData();

