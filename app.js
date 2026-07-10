const { useState, useMemo, useEffect } = React;

const jobs = [
  {
    id: 1,
    title: "Software Engineer",
    company: "TCS",
    location: "Karnataka",
    role: "Software Engineer",
    experience: "3-5 years",
    salary: "$110k - $130k",
    tags: ["Java", "Spring", "SQL"],
    requiredSkills: ["Java", "Spring Boot", "SQL", "Microservices"],
    description: "Work on enterprise applications and scalable systems for a global IT leader.",
  },
  {
    id: 2,
    title: "Frontend Engineer",
    company: "Infosys",
    location: "Maharashtra",
    role: "Frontend Engineer",
    experience: "2-4 years",
    salary: "$95k - $115k",
    tags: ["React", "JavaScript", "HTML"],
    requiredSkills: ["React", "JavaScript", "CSS", "Responsive Design"],
    description: "Build polished web interfaces for large-scale enterprise products.",
  },
  {
    id: 3,
    title: "Backend Engineer",
    company: "Amazon",
    location: "Delhi",
    role: "Backend Engineer",
    experience: "4-6 years",
    salary: "$145k - $170k",
    tags: ["Node.js", "AWS", "API"],
    requiredSkills: ["Node.js", "AWS", "REST APIs", "Database Design"],
    description: "Develop backend services powering high-traffic consumer applications.",
  },
  {
    id: 4,
    title: "Developer",
    company: "Wipro",
    location: "Tamil Nadu",
    role: "Developer",
    experience: "2-4 years",
    salary: "$90k - $110k",
    tags: ["Python", "Django", "Web"],
    requiredSkills: ["Python", "Django", "REST", "Version Control"],
    description: "Deliver business applications and internal platforms for enterprise customers.",
  },
  {
    id: 5,
    title: "Machine Learning Engineer",
    company: "Google",
    location: "Karnataka",
    role: "Data Scientist",
    experience: "4-7 years",
    salary: "$170k - $200k",
    tags: ["TensorFlow", "Python", "ML"],
    requiredSkills: ["TensorFlow", "Python", "Machine Learning", "Data Modeling"],
    description: "Design machine learning models and productionize analytics for large datasets.",
  },
  {
    id: 6,
    title: "Frontend Developer",
    company: "Accenture",
    location: "Gujarat",
    role: "Frontend Engineer",
    experience: "1-3 years",
    salary: "$85k - $100k",
    tags: ["React", "CSS", "HTML"],
    requiredSkills: ["React", "CSS", "JavaScript", "UI Development"],
    description: "Create responsive interfaces for digital transformation initiatives.",
  },
  {
    id: 7,
    title: "Full-Stack Engineer",
    company: "Cognizant",
    location: "Punjab",
    role: "Full-Stack Engineer",
    experience: "3-5 years",
    salary: "$120k - $140k",
    tags: ["JavaScript", "Node.js", "React"],
    requiredSkills: ["React", "Node.js", "Express", "SQL"],
    description: "Own both frontend and backend delivery for enterprise projects.",
  },
  {
    id: 8,
    title: "Software Engineer",
    company: "HCL",
    location: "Kerala",
    role: "Software Engineer",
    experience: "2-4 years",
    salary: "$95k - $115k",
    tags: ["Java", "Spring", "Microservices"],
    requiredSkills: ["Java", "Spring Boot", "Microservices", "REST"],
    description: "Build cloud-ready backend systems for clients across industries.",
  },
];

const indiaStates = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
];

const roleOptions = [
  "Software Engineer",
  "Developer",
  "Frontend Engineer",
  "Backend Engineer",
  "Full-Stack Engineer",
  "Product Manager",
  "Data Scientist",
];

const skillOptions = [
  "React",
  "Node.js",
  "Python",
  "AWS",
  "Django",
  "JavaScript",
  "TypeScript",
  "Machine Learning",
  "UI/UX",
  "SQL",
];

const experienceOptions = [
  "0-2 years",
  "3-5 years",
  "5-8 years",
  "8+ years",
];

function JobCard({ job, onSave, onApply }) {
  return (
    <article className="job-card">
      <div>
        <span className="eyebrow">{job.role}</span>
        <h3>{job.title}</h3>
        <p className="job-meta">{job.company} · {job.location}</p>
      </div>
      <div className="job-metadata">
        <span>{job.experience}</span>
        <span>{job.salary}</span>
      </div>
      <div className="job-tags">
        {job.tags.map((tag) => (
          <span key={tag} className="tag">{tag}</span>
        ))}
      </div>
      <p>{job.description}</p>
      <div className="job-requirements">
        <strong>Required skills:</strong>
        <div className="required-skills">
          {job.requiredSkills.map((skill) => (
            <span key={skill} className="tag required-tag">{skill}</span>
          ))}
        </div>
      </div>
      <div className="job-actions">
        <button className="btn btn-secondary" onClick={() => onSave(job)}>
          Save Job
        </button>
        <button className="btn btn-primary" onClick={() => onApply(job)}>
          Apply Now
        </button>
      </div>
    </article>
  );
}

function AuthForm({ onSwitch, onSubmit, mode, values, setValues, message }) {
  return (
    <div className="auth-box">
      <div className="auth-logo">JFY</div>
      <h1>{mode === "login" ? "Login" : "Create Account"}</h1>
      <p className="auth-subtitle">
        {mode === "login"
          ? "Sign in to continue to Jobs For You."
          : "Enter your details to create a new account."}
      </p>

      <form onSubmit={onSubmit} className="auth-form">
        {mode === "signup" && (
          <label>
            Username
            <input
              type="text"
              value={values.username}
              onChange={(e) => setValues({ ...values, username: e.target.value })}
              placeholder="Enter your name"
              required
            />
          </label>
        )}

        <label>
          Email
          <input
            type="email"
            value={values.email}
            onChange={(e) => setValues({ ...values, email: e.target.value })}
            placeholder="Enter your email"
            required
          />
        </label>

        <label>
          {mode === "signup" ? "Create Password" : "Password"}
          <input
            type="password"
            value={values.password}
            onChange={(e) => setValues({ ...values, password: e.target.value })}
            placeholder={mode === "signup" ? "Create your password" : "Enter your password"}
            required
          />
        </label>

        {mode === "signup" && (
          <label>
            Retype Password
            <input
              type="password"
              value={values.confirmPassword}
              onChange={(e) => setValues({ ...values, confirmPassword: e.target.value })}
              placeholder="Retype your password"
              required
            />
          </label>
        )}

        {message && <div className="auth-message">{message}</div>}

        <button className="btn btn-primary auth-submit" type="submit">
          {mode === "login" ? "Login" : "Create account"}
        </button>
      </form>

      <div className="auth-footer">
        {mode === "login" ? (
          <span>
            Don’t have an account? <button className="link-button" onClick={() => onSwitch("signup")}>Sign up</button>
          </span>
        ) : (
          <span>
            Already have an account? <button className="link-button" onClick={() => onSwitch("login")}>Sign in</button>
          </span>
        )}
      </div>
    </div>
  );
}

function NavBar({ user, onLogout, onUserMenuClick, activeView }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleMenuClick = (view) => {
    onUserMenuClick(view);
    setDropdownOpen(false);
  };

  return (
    <header className="nav-bar">
      <div className="nav-brand">Jobs For You</div>
      <div className="nav-user">
        <div className="user-menu-container">
          <button className="user-profile-btn" onClick={() => setDropdownOpen(!dropdownOpen)}>
            <span className="user-icon">{user.username.charAt(0).toUpperCase()}</span>
            <span>{user.username}</span>
          </button>
          {dropdownOpen && (
            <div className="user-dropdown">
              <button className="dropdown-item" onClick={() => handleMenuClick("applied-jobs")}>
                Applied Jobs
              </button>
              <button className="dropdown-item" onClick={() => handleMenuClick("user-info")}>
                User Info
              </button>
              <button className="dropdown-item" onClick={() => handleMenuClick("update-info")}>
                Update Info
              </button>
              <hr className="dropdown-divider" />
              <button className="dropdown-item logout-item" onClick={onLogout}>
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

function FilterSection({ title, subTitle, isOpen, count, onToggle, children }) {
  return (
    <div className="filter-section-box">
      <button className="filter-header" type="button" onClick={onToggle}>
        <div>
          <strong>{title}</strong>
          <p>{subTitle}</p>
        </div>
        <span>{isOpen ? "↑" : `↓ ${count}`}</span>
      </button>
      {isOpen && <div className="filter-options">{children}</div>}
    </div>
  );
}

function UserProfile({ user, appliedJobs, onBack, onUpdateInfo, userProfileData, setUserProfileData }) {
  const [editMode, setEditMode] = useState(false);
  const [updateValues, setUpdateValues] = useState(userProfileData);

  const handleSaveUpdate = () => {
    setUserProfileData(updateValues);
    setEditMode(false);
  };

  return (
    <div className="user-profile-section">
      <div className="profile-header">
        <button className="btn btn-secondary" onClick={onBack}>← Back to Jobs</button>
      </div>

      <div className="profile-tabs">
        <div className="profile-tab-content">
          <h2>User Information</h2>
          <div className="user-info-card">
            <div className="info-item">
              <label>Name</label>
              <p>{user.username}</p>
            </div>
            <div className="info-item">
              <label>Email</label>
              <p>{user.email}</p>
            </div>
            <div className="info-item">
              <label>Place</label>
              <p>{userProfileData.place || "Not updated"}</p>
            </div>
            <div className="info-item">
              <label>College</label>
              <p>{userProfileData.college || "Not updated"}</p>
            </div>
          </div>

          <h2>Update Information</h2>
          {!editMode ? (
            <button className="btn btn-primary" onClick={() => setEditMode(true)}>Edit Information</button>
          ) : (
            <form className="update-form" onSubmit={(e) => { e.preventDefault(); handleSaveUpdate(); }}>
              <label>
                Place
                <input
                  type="text"
                  value={updateValues.place}
                  onChange={(e) => setUpdateValues({ ...updateValues, place: e.target.value })}
                  placeholder="Enter your place/city"
                />
              </label>
              <label>
                College
                <input
                  type="text"
                  value={updateValues.college}
                  onChange={(e) => setUpdateValues({ ...updateValues, college: e.target.value })}
                  placeholder="Enter your college name"
                />
              </label>
              <div className="form-actions">
                <button type="submit" className="btn btn-primary">Save</button>
                <button type="button" className="btn btn-secondary" onClick={() => { setEditMode(false); setUpdateValues(userProfileData); }}>Cancel</button>
              </div>
            </form>
          )}

          <h2>Applied Jobs</h2>
          {appliedJobs.length === 0 ? (
            <p className="no-data">You haven't applied to any jobs yet.</p>
          ) : (
            <div className="applied-jobs-list">
              {appliedJobs.map((job, index) => (
                <div key={index} className="applied-job-card">
                  <div>
                    <h4>{job.title}</h4>
                    <p className="company-info">{job.company} · {job.location}</p>
                    <p className="applied-date">Applied on: {job.appliedOn}</p>
                  </div>
                  <div className="application-details">
                    <small>
                      <strong>Phone:</strong> {job.applicationDetails.phone}<br />
                      <strong>Gender:</strong> {job.applicationDetails.gender}<br />
                      <strong>State:</strong> {job.applicationDetails.state}
                    </small>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function App() {
  const [mode, setMode] = useState("login");
  const [user, setUser] = useState(null);
  const [accounts, setAccounts] = useState([]);
  const [authValues, setAuthValues] = useState({ username: "", email: "", password: "", confirmPassword: "" });
  const [message, setMessage] = useState("");
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [selectedLocations, setSelectedLocations] = useState([]);
  const [selectedRoles, setSelectedRoles] = useState([]);
  const [selectedExperiences, setSelectedExperiences] = useState([]);
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [openLocation, setOpenLocation] = useState(false);
  const [openRoles, setOpenRoles] = useState(false);
  const [openExperience, setOpenExperience] = useState(false);
  const [openSkills, setOpenSkills] = useState(false);
  const [applyingJob, setApplyingJob] = useState(null);
  const [applicationValues, setApplicationValues] = useState({ 
    fullName: "", 
    email: "", 
    phone: "", 
    resume: "", 
    gender: "", 
    state: "" 
  });
  const [applicationMessage, setApplicationMessage] = useState("");
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [activeView, setActiveView] = useState("jobs");
  const [userProfileData, setUserProfileData] = useState({ 
    place: "", 
    college: "" 
  });

  const toggleSelection = (value, selected, setter) => {
    if (selected.includes(value)) {
      setter(selected.filter((item) => item !== value));
    } else {
      setter([...selected, value]);
    }
  };

  const filteredJobs = useMemo(() => {
    const term = search.trim().toLowerCase();
    return jobs.filter((job) => {
      const matchCategory =
        category === "All" ||
        job.role.toLowerCase().includes(category.toLowerCase()) ||
        job.title.toLowerCase().includes(category.toLowerCase());
      const matchSearch =
        term === "" ||
        job.title.toLowerCase().includes(term) ||
        job.company.toLowerCase().includes(term) ||
        job.tags.some((tag) => tag.toLowerCase().includes(term));
      const matchLocation = selectedLocations.length === 0 || selectedLocations.includes(job.location);
      const matchRole = selectedRoles.length === 0 || selectedRoles.includes(job.role);
      const matchExperience = selectedExperiences.length === 0 || selectedExperiences.includes(job.experience);
      const matchSkills = selectedSkills.length === 0 || selectedSkills.every((skill) => job.tags.includes(skill));
      return matchCategory && matchSearch && matchLocation && matchRole && matchExperience && matchSkills;
    });
  }, [search, category, selectedLocations, selectedRoles, selectedExperiences, selectedSkills]);

  useEffect(() => {
    document.body.style.background = user ? "#ffffff" : "#f3f4f6";
  }, [user]);

  const handleSwitch = (nextMode) => {
    setMode(nextMode);
    setMessage("");
    setAuthValues({ username: "", email: "", password: "", confirmPassword: "" });
  };

  const handleLogin = (event) => {
    event.preventDefault();
    const account = accounts.find((acc) => acc.email === authValues.email.toLowerCase());
    if (!account) {
      setMessage("No account found with that email.");
      return;
    }
    if (account.password !== authValues.password) {
      setMessage("Password is incorrect.");
      return;
    }
    setUser(account);
    setMessage("");
  };

  const handleSignup = (event) => {
    event.preventDefault();
    if (authValues.password !== authValues.confirmPassword) {
      setMessage("Passwords do not match.");
      return;
    }
    if (accounts.some((acc) => acc.email === authValues.email.toLowerCase())) {
      setMessage("This email is already registered.");
      return;
    }
    const newAccount = {
      username: authValues.username || authValues.email.split("@")[0],
      email: authValues.email.toLowerCase(),
      password: authValues.password,
    };
    setAccounts([...accounts, newAccount]);
    setMode("login");
    setMessage("Account created successfully. Please log in.");
    setAuthValues({ username: "", email: "", password: "", confirmPassword: "" });
  };

  const handleLogout = () => {
    setUser(null);
    setMode("login");
    setMessage("");
    setAuthValues({ username: "", email: "", password: "", confirmPassword: "" });
  };

  const handleSave = (job) => {
    window.alert(`Saved ${job.title} at ${job.company}.`);
  };

  const handleApply = (job) => {
    setApplyingJob(job);
    setApplicationMessage("");
    setApplicationValues({ fullName: "", email: user.email, phone: "", resume: "", gender: "", state: "" });
  };

  const submitApplication = (event) => {
    event.preventDefault();
    if (!applicationValues.fullName || !applicationValues.email || !applicationValues.phone || !applicationValues.resume || !applicationValues.gender || !applicationValues.state) {
      setApplicationMessage("Please fill all fields before submitting.");
      return;
    }
    setApplicationMessage(`Application submitted for ${applyingJob.title}.`);
    
    // Add to applied jobs
    setAppliedJobs([...appliedJobs, {
      ...applyingJob,
      appliedOn: new Date().toLocaleDateString(),
      applicationDetails: { ...applicationValues }
    }]);
    
    setTimeout(() => {
      setApplyingJob(null);
      setApplicationMessage("");
    }, 1400);
  };

  const closeApplication = () => {
    setApplyingJob(null);
    setApplicationMessage("");
  };

  if (!user) {
    return (
      <div className="auth-page">
        <AuthForm
          onSwitch={handleSwitch}
          onSubmit={mode === "login" ? handleLogin : handleSignup}
          mode={mode}
          values={authValues}
          setValues={setAuthValues}
          message={message}
        />
      </div>
    );
  }

  if (activeView !== "jobs") {
    return (
      <div className="app-shell">
        <NavBar user={user} onLogout={handleLogout} onUserMenuClick={setActiveView} activeView={activeView} />
        <main className="main-content">
          <UserProfile 
            user={user} 
            appliedJobs={appliedJobs} 
            onBack={() => setActiveView("jobs")}
            onUpdateInfo={() => setActiveView("update-info")}
            userProfileData={userProfileData}
            setUserProfileData={setUserProfileData}
          />
        </main>
      </div>
    );
  }

  return (
    <div className="app-shell">
      <NavBar user={user} onLogout={handleLogout} onUserMenuClick={setActiveView} activeView={activeView} />
      <main className="main-content">
        <div className="page-heading">
          <h2>Find your dream with Jobs For You</h2>
        </div>
        <section className="home-hero">
          <div>
            <span className="eyebrow">Welcome back</span>
            <h1>Find your next opportunity on Jobs For You</h1>
            <p>Explore remote, AI, startup, and product roles curated for your career.</p>
          </div>
          <div className="hero-quick-stats">
            <div>
              <strong>250K+</strong>
              <span>Jobs listed</span>
            </div>
            <div>
              <strong>50K+</strong>
              <span>Hiring companies</span>
            </div>
          </div>
        </section>

        <section className="jobs-section">
          <div className="filters-layout">
            <aside className="filter-panel">
              <FilterSection
                title="Locations"
                subTitle="Select states"
                isOpen={openLocation}
                count={indiaStates.length}
                onToggle={() => setOpenLocation((prev) => !prev)}
              >
                {indiaStates.map((state) => (
                  <label key={state} className="filter-option">
                    <input
                      type="checkbox"
                      checked={selectedLocations.includes(state)}
                      onChange={() => toggleSelection(state, selectedLocations, setSelectedLocations)}
                    />
                    {state}
                  </label>
                ))}
              </FilterSection>

              <FilterSection
                title="Years of Experience"
                subTitle="Type your experience"
                isOpen={openExperience}
                count={experienceOptions.length}
                onToggle={() => setOpenExperience((prev) => !prev)}
              >
                {experienceOptions.map((option) => (
                  <label key={option} className="filter-option">
                    <input
                      type="checkbox"
                      checked={selectedExperiences.includes(option)}
                      onChange={() => toggleSelection(option, selectedExperiences, setSelectedExperiences)}
                    />
                    {option}
                  </label>
                ))}
              </FilterSection>

              <FilterSection
                title="Role"
                subTitle="Choose job roles"
                isOpen={openRoles}
                count={roleOptions.length}
                onToggle={() => setOpenRoles((prev) => !prev)}
              >
                {roleOptions.map((option) => (
                  <label key={option} className="filter-option">
                    <input
                      type="checkbox"
                      checked={selectedRoles.includes(option)}
                      onChange={() => toggleSelection(option, selectedRoles, setSelectedRoles)}
                    />
                    {option}
                  </label>
                ))}
              </FilterSection>

              <FilterSection
                title="Skills"
                subTitle="Pick required skills"
                isOpen={openSkills}
                count={skillOptions.length}
                onToggle={() => setOpenSkills((prev) => !prev)}
              >
                {skillOptions.map((skill) => (
                  <label key={skill} className="filter-option">
                    <input
                      type="checkbox"
                      checked={selectedSkills.includes(skill)}
                      onChange={() => toggleSelection(skill, selectedSkills, setSelectedSkills)}
                    />
                    {skill}
                  </label>
                ))}
              </FilterSection>
            </aside>

            <div className="job-list-area">
              <div className="jobs-header">
                <div>
                  <span className="eyebrow">Live Roles</span>
                  <h2>Available positions</h2>
                </div>
                <div className="job-controls">
                  <input
                    value={search}
                    onChange={(event) => setSearch(event.target.value)}
                    type="text"
                    placeholder="Search jobs, companies or tags"
                  />
                  <select value={category} onChange={(event) => setCategory(event.target.value)}>
                    <option value="All">All categories</option>
                    <option value="Frontend">Frontend</option>
                    <option value="Backend">Backend</option>
                    <option value="Product">Product</option>
                    <option value="AI">AI</option>
                  </select>
                </div>
              </div>

              <div className="job-grid">
                {filteredJobs.map((job) => (
                  <JobCard key={job.id} job={job} onSave={handleSave} onApply={handleApply} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {applyingJob && (
          <div className="application-modal-overlay">
            <div className="application-modal">
              <div className="application-header">
                <div>
                  <h3>Apply for {applyingJob.title}</h3>
                  <p>{applyingJob.company} · {applyingJob.location}</p>
                </div>
                <button className="btn btn-ghost" onClick={closeApplication}>X</button>
              </div>
              <form className="application-form" onSubmit={submitApplication}>
                <label>
                  Full Name
                  <input
                    type="text"
                    value={applicationValues.fullName}
                    onChange={(e) => setApplicationValues({ ...applicationValues, fullName: e.target.value })}
                    placeholder="Enter your full name"
                    required
                  />
                </label>
                <label>
                  Phone Number
                  <input
                    type="tel"
                    value={applicationValues.phone}
                    onChange={(e) => setApplicationValues({ ...applicationValues, phone: e.target.value })}
                    placeholder="Enter your phone number"
                    required
                  />
                </label>
                <label>
                  Email
                  <input
                    type="email"
                    value={applicationValues.email}
                    onChange={(e) => setApplicationValues({ ...applicationValues, email: e.target.value })}
                    placeholder="Enter your email"
                    required
                  />
                </label>
                <label>
                  Resume (URL or File Name)
                  <input
                    type="text"
                    value={applicationValues.resume}
                    onChange={(e) => setApplicationValues({ ...applicationValues, resume: e.target.value })}
                    placeholder="Enter resume file name or URL"
                    required
                  />
                </label>
                <label>
                  Gender
                  <select
                    value={applicationValues.gender}
                    onChange={(e) => setApplicationValues({ ...applicationValues, gender: e.target.value })}
                    required
                  >
                    <option value="">Select gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </label>
                <label>
                  State
                  <select
                    value={applicationValues.state}
                    onChange={(e) => setApplicationValues({ ...applicationValues, state: e.target.value })}
                    required
                  >
                    <option value="">Select state</option>
                    {indiaStates.map((state) => (
                      <option key={state} value={state}>{state}</option>
                    ))}
                  </select>
                </label>

                {applicationMessage && <div className="application-message">{applicationMessage}</div>}

                <button type="submit" className="btn btn-primary">Submit Application</button>
              </form>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
