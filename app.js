import express from "express";

const app = express();
const PORT = 3000;

// Middleware
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
// View engine
app.set("view engine", "ejs");
app.set("views", "./views");

// Dummy jobs
const jobs = [
  { id: 1, title: "Build Website", budget: 5000 },
  { id: 2, title: "Logo Design", budget: 1000 }
];

// 🔥 SERVICES DATA (MOVE UP)
const services = [
  {
    title: "Professional Website Development",
    price: "₹5,000 – ₹15,000",
    desc: "Build modern, responsive, and high-performance websites tailored to your business needs.",
    img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
    link: "/web"
  },
  {
    title: "Creative Video Editing",
    price: "₹2,000 – ₹8,000",
    desc: "High-quality video editing for YouTube, reels, ads, and professional content.",
    img: "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
    link: "/video"
  },

  // 👇 बाकी सब coming soon
  {
    title: "UI/UX Design Services",
    price: "₹3,000 – ₹10,000",
    desc: "Design intuitive and engaging user experiences for apps and websites.",
    img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0",
    link: "/coming"
  },
  {
    title: "Search Engine Optimization (SEO)",
    price: "₹2,500 – ₹12,000",
    desc: "Improve your website ranking and visibility on search engines like Google.",
    img: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07",
    link: "/coming"
  },
  {
    title: "Content Writing",
    price: "₹1,000 – ₹5,000",
    desc: "Professional blog, website, and marketing content written by experts.",
    img: "https://images.unsplash.com/photo-1455390582262-044cdead277a",
    link: "/coming"
  },
  {
    title: "Logo & Branding Design",
    price: "₹1,500 – ₹6,000",
    desc: "Unique and creative brand identity designs to make your business stand out.",
    img: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e",
    link: "/coming"
  },
  {
    title: "Digital Marketing",
    price: "₹4,000 – ₹20,000",
    desc: "Grow your business with targeted marketing strategies and campaigns.",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    link: "/coming"
  },
  {
    title: "Mobile App Development",
    price: "₹8,000 – ₹50,000",
    desc: "Develop powerful Android and iOS apps with modern technologies.",
    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    link: "/coming"
  }
];
// Routes
app.get("/", (req, res) => {
  res.render("index", { jobs });
});

app.get("/post-job", (req, res) => {
  res.render("postJob");
});

app.get("/job/:id", (req, res) => {
  const job = jobs.find(j => j.id == req.params.id);
  if (!job) return res.send("Job not found");
  res.render("jobDetails", { job });
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.get("/register", (req, res) => {
  res.render("register");
});

// 🔥 ONLY ONE HOME ROUTE
app.get("/home", (req, res) => {
  res.render("home", { services });
});

// Extra pages
app.get("/web", (req, res) => res.render("web"));
app.get("/video", (req, res) => res.render("video"));

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

app.get("/coming", (req, res) => {
  res.send("<h1 style='color:white;background:black;height:100vh;display:flex;align-items:center;justify-content:center;'>🚧 Coming Soon / Under Construction</h1>");
});

app.get("/about", (req, res) => {
    res.render("about");
});