const colorMap = {
  red: "bg-red-100 text-red-800",
  blue: "bg-blue-100 text-blue-800",
  green: "bg-green-100 text-green-800",
  yellow: "bg-yellow-100 text-yellow-800",
  orange: "bg-orange-100 text-orange-800",
  purple: "bg-purple-100 text-purple-800"
};

export const projects = [
  {
    id: 1,
    img: "src/assets/vex-platform.png",
    title: "VEx - Video Experience Platform",
    description: "A modern video streaming platform that allows users to browse, search, and watch videos from YouTube and Vimeo, with features like favorites, autoplay, theme toggle and responsive design.",
    url: "https://vexplatform.netlify.app/",
    stack: [
      {
        name: "TypeScript",
        color: colorMap.blue
      },
      {
        name: "Next.js",
        color: colorMap.green
      },
      {
        name: "Tailwind",
        color: colorMap.purple
      }
    ]
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    title: "Shop at Home API",
    description: "A backend application for an e-commerce platform, which includes user authentication, product registration, cart functionality, and payment processing.",
    url: "https://github.com/Cleysond10/shop-at-home-api",
    stack: [
      {
        name: "TypeScript",
        color: colorMap.blue
      },
      {
        name: "NestJS",
        color: colorMap.red
      },
      {
        name: "TypeORM",
        color: colorMap.orange
      },
      {
        name: "PostgreSQL",
        color: colorMap.green
      }
    ]
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Photo Processing API",
    description: "A backend microsservice application responsible for post-processing digital images using computational statistics, which includes image classification, histogram generation and quantil equalization.",
    url: "https://github.com/Cleysond10/photo-processing-api",
    stack: [
      {
        name: "Python",
        color: colorMap.orange
      },
      {
        name: "FastAPI",
        color: colorMap.green
      },
      {
        name: "Matplotlib",
        color: colorMap.red
      },
      {
        name: "Numpy",
        color: colorMap.blue
      },
      {
        name: "Opencv",
        color: colorMap.purple
      }
    ]
  },
]
