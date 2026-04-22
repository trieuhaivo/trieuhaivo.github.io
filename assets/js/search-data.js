// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-news",
          title: "News",
          description: "Research milestones, publications, presentations, and academic announcements for Trieu Hai Vo, PhD Student in Computer Science at FIU.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/news/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "Peer-reviewed research by Trieu Hai Vo in deep learning for environmental time series, water-quality monitoring, and physics-informed machine learning.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-curriculum-vitae",
          title: "Curriculum Vitae",
          description: "Curriculum Vitae of Trieu Hai Vo — PhD Student in Computer Science at Florida International University. NSF AI2ES-supported environmental AI research.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "Research projects by Trieu Hai Vo: Depth-wise Multivariate Imputation (DMI) and physics-informed lake-temperature forecasting. NSF AI2ES-supported.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "news-started-phd-in-computer-science-at-florida-international-university-advised-by-prof-leonardo-bobadilla-and-prof-cuong-v-nguyen-doctoral-research-supported-in-part-by-the-nsf-ai-institute-for-research-on-trustworthy-ai-in-weather-climate-and-coastal-oceanography-ai2es-via-the-fiu-ai2es-expandai-partnership",
          title: 'Started PhD in Computer Science at Florida International University, advised by Prof. Leonardo...',
          description: "",
          section: "News",},{id: "news-co-presented-an-in-person-talk-learning-and-planning-for-water-quality-monitoring-with-prof-leonardo-bobadilla-at-the-fiu-ai-ml-and-modeling-collaboration-meeting-june-19-20-2024-fiu-international-center-for-tropical-botany-coconut-grove-fl-hosted-under-the-nsf-ai2es-expandai-partnership-the-two-day-program-brought-together-ai2es-researchers-and-external-partners-including-the-south-florida-water-management-district-sfwmd-and-texas-a-amp-amp-m-corpus-christi-for-talks-on-ai-for-sea-level-water-quality-and-climate-downscaling-research-and-a-day-2-field-visit-to-flood-monitoring-sites-in-hallandale-beach-and-a-coastal-resilience-tour-at-south-pointe-park-miami-beach-ai2es-collaboration-meeting-at-fiu-in-person-presentation-with-prof-leonardo-bobadilla-june-19-2024-fiu-international-center-for-tropical-botany-coconut-grove-fl",
          title: 'Co-presented an in-person talk, “Learning and Planning for Water Quality Monitoring,” with Prof....',
          description: "",
          section: "News",},{id: "news-research-paper-accepted-at-the-iclr-2025-workshop-on-tackling-climate-change-with-machine-learning-the-dedicated-climate-ai-workshop-co-located-with-the-international-conference-on-learning-representations-lake-water-temperature-modeling-using-physics-informed-neural-networks",
          title: 'Research paper accepted at the ICLR 2025 Workshop on Tackling Climate Change with...',
          description: "",
          section: "News",},{id: "news-presented-peer-reviewed-research-in-person-at-the-iclr-2025-workshop-on-tackling-climate-change-with-machine-learning-in-singapore-lake-water-temperature-modeling-using-physics-informed-neural-networks",
          title: 'Presented peer-reviewed research in person at the ICLR 2025 Workshop on Tackling Climate...',
          description: "",
          section: "News",},{id: "news-submitted-new-research-to-acm-sigkdd-2026-acm-sigkdd-conference-on-knowledge-discovery-and-data-mining-depth-wise-multivariate-imputation-for-environmental-time-series-currently-under-peer-review",
          title: 'Submitted new research to ACM SIGKDD 2026 (ACM SIGKDD Conference on Knowledge Discovery...',
          description: "",
          section: "News",},{id: "news-passed-the-phd-qualifying-examination-at-florida-international-university-in-computer-science-committee-prof-leonardo-bobadilla-chair-prof-jayantha-t-obeysekera-director-fiu-sea-level-solutions-center-and-prof-agoritsa-polyzou-knight-foundation-school-of-computing-and-information-sciences",
          title: 'Passed the PhD Qualifying Examination at Florida International University in Computer Science. Committee:...',
          description: "",
          section: "News",},{id: "projects-dmi",
          title: 'DMI',
          description: "Depth-wise Multivariate Imputation for Environmental Time Series",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-lake-temperature-forecasting",
          title: 'Lake Temperature Forecasting',
          description: "Physics-Informed Neural Networks for Multi-Depth Lake Water Temperature Modeling",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%74%76%6F%30%31%33@%66%69%75.%65%64%75", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/trieuhaivo", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/vhtrieu", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=d_CPjj8AAAAJ", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0009-0001-4281-8906", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
