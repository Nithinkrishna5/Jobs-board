const jobs = [
  {
    id: 1,
    title: "AI Product Manager",
    company: "Nova Labs",
    location: "Remote",
    type: "Product",
    salary: "$160k - $190k",
    tags: ["AI", "Product", "Remote"],
    description: "Lead product strategy for AI-enabled experiences at a fast-growing startup.",
  },
  {
    id: 2,
    title: "Senior Frontend Engineer",
    company: "LaunchPad",
    location: "USA",
    type: "Frontend",
    salary: "$140k - $165k",
    tags: ["React", "Remote", "Startup"],
    description: "Build modern web apps with high performance and delightful UI.",
  },
  {
    id: 3,
    title: "Backend Engineer",
    company: "Pulse AI",
    location: "Remote",
    type: "Backend",
    salary: "$150k - $170k",
    tags: ["Node", "AWS", "AI"],
    description: "Design reliable backend services for AI-powered product pipelines.",
  },
  {
    id: 4,
    title: "Product Designer",
    company: "Orbit Studio",
    location: "Europe",
    type: "Product",
    salary: "$120k - $145k",
    tags: ["Design", "Startup", "Remote"],
    description: "Craft interface design and product experiences for fast-moving teams.",
  },
  {
    id: 5,
    title: "Machine Learning Engineer",
    company: "Neuron Works",
    location: "Remote",
    type: "AI",
    salary: "$155k - $185k",
    tags: ["TensorFlow", "Python", "Remote"],
    description: "Build scalable ML systems, experimentation pipelines, and model deployment.",
  },
  {
    id: 6,
    title: "Growth Product Lead",
    company: "SparkFlow",
    location: "Remote",
    type: "Product",
    salary: "$135k - $160k",
    tags: ["Product", "Strategy", "Remote"],
    description: "Own growth initiatives and product-led revenue experiments.",
  },
];

const jobList = document.getElementById("jobList");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const themeToggle = document.getElementById("themeToggle");
const scrollJobs = document.getElementById("scrollJobs");
const scrollHire = document.getElementById("scrollHire");

let themeIsDark = false;

function renderJobs(jobItems) {
  jobList.innerHTML = jobItems
    .map(
      (job) => `
      <article class="job-card" data-job-id="${job.id}">
        <div>
          <span class="eyebrow">${job.type}</span>
          <h3>${job.title}</h3>
          <p class="job-meta">${job.company} · ${job.location}</p>
        </div>
        <div class="job-tags">
          ${job.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
        </div>
        <p>${job.description}</p>
        <p class="job-meta"><strong>${job.salary}</strong></p>
        <div class="job-actions">
          <button class="btn btn-secondary" onclick="saveJob(${job.id})">Save Job</button>
          <button class="btn btn-primary" onclick="applyJob(${job.id})">Apply Now</button>
        </div>
      </article>
    `,
    )
    .join("");
}

function saveJob(id) {
  const job = jobs.find((item) => item.id === id);
  alert(`Saved ${job.title} at ${job.company} to your job list.`);
}

function applyJob(id) {
  const job = jobs.find((item) => item.id === id);
  alert(`Applied to ${job.title} at ${job.company}. Good luck!`);
}

function filterJobs() {
  const searchValue = searchInput.value.trim().toLowerCase();
  const categoryValue = categoryFilter.value;

  const filtered = jobs.filter((job) => {
    const matchesCategory = categoryValue === "All" || job.type === categoryValue;
    const matchesSearch =
      searchValue === "" ||
      job.title.toLowerCase().includes(searchValue) ||
      job.company.toLowerCase().includes(searchValue) ||
      job.tags.some((tag) => tag.toLowerCase().includes(searchValue));

    return matchesCategory && matchesSearch;
  });

  renderJobs(filtered);
}

function toggleTheme() {
  themeIsDark = !themeIsDark;
  document.documentElement.classList.toggle("dark-theme", themeIsDark);
  themeToggle.textContent = themeIsDark ? "Light" : "Dark";
}

function wireEvents() {
  searchInput.addEventListener("input", filterJobs);
  categoryFilter.addEventListener("change", filterJobs);
  themeToggle.addEventListener("click", toggleTheme);
  scrollJobs.addEventListener("click", () => document.getElementById("jobs").scrollIntoView({ behavior: "smooth" }));
  scrollHire.addEventListener("click", () => document.getElementById("dashboard").scrollIntoView({ behavior: "smooth" }));
}

renderJobs(jobs);
wireEvents();
