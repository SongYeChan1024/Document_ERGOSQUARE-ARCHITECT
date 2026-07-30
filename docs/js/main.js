const body = document.body;
const menuButton = document.querySelector(".menu-button");
const navLinks = [...document.querySelectorAll(".side-nav nav a")];
const navCloseTargets = document.querySelectorAll("[data-nav-close]");

function closeNavigation() {
  body.classList.remove("nav-open");
  menuButton?.setAttribute("aria-expanded", "false");
  menuButton?.setAttribute("aria-label", "메뉴 열기");
}

menuButton?.addEventListener("click", () => {
  const isOpen = body.classList.toggle("nav-open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.setAttribute("aria-label", isOpen ? "메뉴 닫기" : "메뉴 열기");
});

navCloseTargets.forEach((target) => target.addEventListener("click", closeNavigation));
navLinks.forEach((link) => link.addEventListener("click", closeNavigation));

const sections = navLinks
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

const sectionObserver = new IntersectionObserver(
  (entries) => {
    const visible = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

    if (!visible) return;

    navLinks.forEach((link) => {
      link.classList.toggle("active", link.getAttribute("href") === `#${visible.target.id}`);
    });
  },
  { rootMargin: "-20% 0px -65% 0px", threshold: [0.05, 0.2, 0.5] }
);

sections.forEach((section) => sectionObserver.observe(section));

const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    });
  },
  { threshold: 0.08, rootMargin: "0px 0px -40px" }
);

document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));

const frameData = {
  vanguard: {
    title: "뱅가드",
    resource: "RESOURCE / IMPULSE",
    role: "전방 방어 · 접근 차단",
    description:
      "플레이어 전방에 넓은 청사진을 펼쳐 팀의 방어선을 만듭니다. 강한 구조물을 설치하지만 전개 방향과 느린 설치 속도가 약점입니다.",
    traits: ["전방 3×5 격자", "높은 구조물 내구도", "임펄스 기반 근접 충격 출력"],
    size: "3 × 5 / FRONT",
    columns: 5,
    rows: 5,
    active: [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
    core: 17,
  },
  gunner: {
    title: "거너",
    resource: "RESOURCE / FOCUS",
    role: "원거리 사격 · 약점 타격",
    description:
      "자신을 중심으로 작은 사격 진지를 전개합니다. 즉각적인 화력 전환이 쉽지만, 코어가 플레이어와 가까워 함께 위험에 노출됩니다.",
    traits: ["자기 중심 3×3 격자", "표준 설치 속도", "집중 기반 위상 탄환 출력"],
    size: "3 × 3 / SELF",
    columns: 5,
    rows: 5,
    active: [6, 7, 8, 11, 12, 13, 16, 17, 18],
    core: 12,
  },
  reactor: {
    title: "리액터",
    resource: "RESOURCE / PHASE",
    role: "원격 전개 · 범위 제어",
    description:
      "플레이어와 떨어진 위치에 에르고스퀘어를 투사해 전장을 나눕니다. 빠른 설치와 강한 범위 제어를 얻는 대신 코어와 거리가 벌어집니다.",
    traits: ["2m 이상 원격 전개", "빠른 설치 속도", "위상 에너지 기반 범위 출력"],
    size: "3 × 3 / REMOTE",
    columns: 5,
    rows: 5,
    active: [1, 2, 3, 6, 7, 8, 11, 12, 13],
    core: 7,
  },
  linker: {
    title: "링커",
    resource: "RESOURCE / RESONANCE",
    role: "분할 전개 · 연결 지원",
    description:
      "메인 청사진의 자원을 보조 노드로 분배해 팀원의 에르고스퀘어를 수리하거나 보호합니다. 메인 코어가 무너지면 연결된 노드가 모두 정지합니다.",
    traits: ["메인 3×3 + 보조 2×2", "수리·보호막 연결", "메인 코어 의존 관계"],
    size: "MAIN + SUB / LINK",
    columns: 5,
    rows: 5,
    active: [1, 2, 5, 6, 7, 10, 11, 12, 18, 19, 23, 24],
    core: 6,
  },
};

const frameButtons = document.querySelectorAll("[data-frame]");
const frameGrid = document.querySelector("[data-frame-grid]");
const frameTitle = document.querySelector("[data-frame-title]");
const frameResource = document.querySelector("[data-frame-resource]");
const frameRole = document.querySelector("[data-frame-role]");
const frameDescription = document.querySelector("[data-frame-description]");
const frameTraits = document.querySelector("[data-frame-traits]");
const frameSize = document.querySelector("[data-frame-size]");

function renderFrame(key) {
  const frame = frameData[key];
  if (!frame || !frameGrid) return;

  frameButtons.forEach((button) => {
    button.setAttribute("aria-selected", String(button.dataset.frame === key));
  });

  frameTitle.textContent = frame.title;
  frameResource.textContent = frame.resource;
  frameRole.textContent = frame.role;
  frameDescription.textContent = frame.description;
  frameSize.textContent = frame.size;
  frameTraits.replaceChildren(
    ...frame.traits.map((trait) => {
      const item = document.createElement("li");
      item.textContent = trait;
      return item;
    })
  );

  frameGrid.style.gridTemplateColumns = `repeat(${frame.columns}, 1fr)`;
  frameGrid.replaceChildren(
    ...Array.from({ length: frame.columns * frame.rows }, (_, index) => {
      const cell = document.createElement("i");
      if (frame.active.includes(index)) cell.classList.add("active");
      if (index === frame.core) cell.classList.add("core");
      return cell;
    })
  );
}

frameButtons.forEach((button) => {
  button.addEventListener("click", () => renderFrame(button.dataset.frame));
});
renderFrame("vanguard");

const tooltip = document.querySelector(".tooltip");
document.querySelectorAll("[data-tip]").forEach((cell) => {
  const show = (event) => {
    tooltip.textContent = cell.dataset.tip;
    tooltip.classList.add("show");
    const point = event.touches?.[0] || event;
    tooltip.style.left = `${point.clientX}px`;
    tooltip.style.top = `${point.clientY}px`;
  };

  cell.addEventListener("pointerenter", show);
  cell.addEventListener("pointermove", show);
  cell.addEventListener("focus", () => {
    const rect = cell.getBoundingClientRect();
    tooltip.textContent = cell.dataset.tip;
    tooltip.style.left = `${rect.right}px`;
    tooltip.style.top = `${rect.top}px`;
    tooltip.classList.add("show");
  });
  cell.addEventListener("pointerleave", () => tooltip.classList.remove("show"));
  cell.addEventListener("blur", () => tooltip.classList.remove("show"));
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeNavigation();
});
