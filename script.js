document.addEventListener("DOMContentLoaded", () => {
  const articleData = {
    "featured": {
      tag: "TECHNOLOGY",
      title: "How emerging technologies are shaping modern businesses",
      meta: "By Softrate Editorial Team  ·  5 min read  ·  Published Nov 2026",
      content: `
        <p>Technology is fundamentally reshaping how modern companies operate, innovate, and connect with their customers. From automated backend workflows to cloud-native scalability, emerging platforms are solving long-standing business bottlenecks.</p>
        <h4>1. Cloud Platforms & Scalability</h4>
        <p>Modern cloud architectures eliminate the need for expensive physical server management. Teams can scale resources up or down on demand, ensuring 99.9% uptime and faster global application delivery.</p>
        <h4>2. Artificial Intelligence & Smart Automation</h4>
        <p>AI is moving beyond experimentation into daily production workflows. From automated customer support chatbots to intelligent recommendation engines, businesses are utilizing machine learning to analyze large datasets and make informed, data-driven decisions.</p>
        <h4>3. Human-Centric Innovation</h4>
        <p>The most successful digital transformations keep people at the center. Tools should empower engineers and employees rather than complicate their day-to-day operations.</p>
      `
    },
    "clean-code": {
      tag: "SOFTWARE DEVELOPMENT",
      title: "5 good practices for writing clean code",
      meta: "By Softrate Engineering  ·  6 min read  ·  Development Standards",
      content: `
        <p>Writing code that compiles is only half the battle. Clean code is code that is easy to read, simple to test, and effortless for a teammate to maintain two years from now.</p>
        <h4>1. Meaningful & Searchable Variable Names</h4>
        <p>Avoid single-letter variables like <code>x</code>, <code>d</code>, or <code>temp</code>. Always prefer clear, descriptive identifiers like <code>userAccountList</code> or <code>activeOrderCount</code>.</p>
        <h4>2. Functions Should Do One Thing Well</h4>
        <p>Keep functions small and focused, ideally under 25 lines. If a function fetches data, validates it, and sends an email, break it down into 3 modular functions.</p>
        <h4>3. Eliminate Dead Code Immediately</h4>
        <p>Never leave blocks of commented-out code in your repository branches. Git history exists to recover past code whenever needed.</p>
        <h4>4. Write Tests for Edge Cases</h4>
        <p>Always test for null references, empty lists, and network failure responses before pushing to production branches.</p>
      `
    },
    "ai-intro": {
      tag: "ARTIFICIAL INTELLIGENCE",
      title: "Artificial intelligence: a beginner-friendly introduction",
      meta: "By Softrate AI Hub  ·  4 min read  ·  AI & Emerging Trends",
      content: `
        <p>Artificial Intelligence (AI) refers to computer software designed to perform cognitive tasks that historically required human intelligence, such as visual perception, natural speech processing, and decision-making.</p>
        <h4>Where is AI Used Today?</h4>
        <ul>
          <li><strong>Natural Language Processing (NLP):</strong> Powering language translation tools, conversational bots, and summarization engines.</li>
          <li><strong>Computer Vision:</strong> Enabling facial recognition, medical diagnostic imaging, and autonomous vehicle safety sensors.</li>
          <li><strong>Recommendation Systems:</strong> Personalizing content and product catalogs on platforms like Netflix, Spotify, and Amazon.</li>
        </ul>
        <h4>Responsible AI</h4>
        <p>AI models work best when combined with human review and transparent auditing to ensure privacy, fairness, and safety.</p>
      `
    },
    "web-design": {
      tag: "WEB DEVELOPMENT",
      title: "What makes a website user-friendly?",
      meta: "By Softrate Design Studio  ·  3 min read  ·  UI/UX Design",
      content: `
        <p>A website’s success is judged in the first 5 seconds. Visitors want straightforward access to information without cognitive friction or confusing layouts.</p>
        <h4>Key Pillars of Great Web Usability:</h4>
        <ul>
          <li><strong>Clear & Intuitive Navigation:</strong> Users should never wonder where to click next. Menus and buttons should be prominently placed.</li>
          <li><strong>Mobile Responsiveness:</strong> Over 60% of web traffic originates from mobile devices. Layouts must adjust seamlessly across all screen sizes.</li>
          <li><strong>Fast Loading Times:</strong> Optimize image formats (WebP) and minimize blocking scripts to maintain sub-second loading speeds.</li>
          <li><strong>High-Contrast Typography:</strong> Dark text on light backgrounds ensures readable content across varying lighting conditions.</li>
        </ul>
      `
    },
    "cloud-computing": {
      tag: "TECHNOLOGY TRENDS",
      title: "Understanding the role of cloud computing",
      meta: "By Cloud Architecture Team  ·  5 min read  ·  Cloud & Infrastructure",
      content: `
        <p>Cloud computing provides on-demand computing services—including servers, storage, databases, networking, and software—over the internet with pay-as-you-go pricing.</p>
        <h4>Core Benefits for Companies:</h4>
        <ul>
          <li><strong>Cost Efficiency:</strong> Eliminates large upfront capital expenditures for on-premise hardware and dedicated server rooms.</li>
          <li><strong>Global Elasticity:</strong> Automatically scale bandwidth and compute power during peak hours and scale down when traffic subsides.</li>
          <li><strong>High Availability & Disaster Recovery:</strong> Automated backups and distributed multi-region data replication ensure business continuity.</li>
        </ul>
      `
    }
  };
  const readerModal = document.getElementById("readerModal");
  const readerTag = document.getElementById("readerTag");
  const readerTitle = document.getElementById("readerTitle");
  const readerMeta = document.getElementById("readerMeta");
  const readerBody = document.getElementById("readerBody");
  const closeReaderBtn = document.getElementById("closeReaderBtn");
  const doneReaderBtn = document.getElementById("doneReaderBtn");
  const searchInput = document.getElementById("searchInput");
  const searchBtn = document.getElementById("searchBtn");
  const emptyMessage = document.getElementById("emptyMessage");
  const categoryBtns = document.querySelectorAll(".category");
  const postCards = document.querySelectorAll(".post");
  const featuredArticle = document.getElementById("featuredArticle");
  const featuredReadBtn = document.getElementById("featuredReadBtn");

  let selectedCategory = "All";
  function openReader(articleKey) {
    const data = articleData[articleKey];
    if (!data || !readerModal) return;

    if (readerTag) readerTag.innerText = data.tag;
    if (readerTitle) readerTitle.innerText = data.title;
    if (readerMeta) readerMeta.innerText = data.meta;
    if (readerBody) readerBody.innerHTML = data.content;

    readerModal.style.display = "flex";
    document.body.style.overflow = "hidden";
  }
  function closeReader() {
    if (readerModal) {
      readerModal.style.display = "none";
      document.body.style.overflow = "auto";
    }
  }
  if (closeReaderBtn) closeReaderBtn.addEventListener("click", closeReader);
  if (doneReaderBtn) doneReaderBtn.addEventListener("click", closeReader);

  if (readerModal) {
    readerModal.addEventListener("click", (e) => {
      if (e.target === readerModal) closeReader();
    });
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeReader();
  });
  if (featuredArticle) {
    featuredArticle.addEventListener("click", () => openReader("featured"));
  }
  if (featuredReadBtn) {
    featuredReadBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      openReader("featured");
    });
  }
  postCards.forEach(card => {
    const key = card.dataset.article;
    card.addEventListener("click", () => openReader(key));
    const btn = card.querySelector(".read-link");
    if (btn) {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        openReader(key);
      });
    }
  });
  function filterPosts() {
    const term = searchInput ? searchInput.value.toLowerCase().trim() : "";
    let visibleCount = 0;

    postCards.forEach(card => {
      const textMatches = card.innerText.toLowerCase().includes(term);
      const categoryMatches = selectedCategory === "All" || card.dataset.category === selectedCategory;

      if (textMatches && categoryMatches) {
        card.style.display = "flex";
        visibleCount++;
      } else {
        card.style.display = "none";
      }
    });

    if (emptyMessage) {
      emptyMessage.style.display = visibleCount === 0 ? "block" : "none";
    }
  }

  if (searchInput) searchInput.addEventListener("input", filterPosts);
  if (searchBtn) searchBtn.addEventListener("click", filterPosts);
  categoryBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      categoryBtns.forEach(b => b.classList.remove("selected"));
      btn.classList.add("selected");
      selectedCategory = btn.dataset.cat || "All";
      filterPosts();
    });
  });
});