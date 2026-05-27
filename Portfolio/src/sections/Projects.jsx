import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import medinest from "../assets/medinest-h.png";
import quickgpt from "../assets/quickgpt-h.png";
import resumecraft from "../assets/resume-h.png";

const projects = [
  {
    title: "Multi-Agent Financial Intelligence System ",
    description:
      "A multi-agent AI system where two autonomous LLM agents collaborate one scouring the web via DuckDuckGo, the other pulling real-time market data from Yahoo Finance  to deliver source-cited stock analysis, analyst recommendations, and breaking financial news in seconds.",
    image: medinest,
    live: "",
    github: "https://github.com/akshaypcr7/Financial-AI-Agent-Stocks.git",
    tech: [
      "Agentic AI",
      "Prompt Engineering",
      "Multi-Agent Systems",
      "Agent Orchestration",
      "Autonomous AI Agents",
      "Agent Collaboration",
      "YFinance",
      "DuckDuckGo Search API",
      "Financial Data APIs",
      "Real-Time Web Search",
      "Stock Market APIs",
      "News Aggregation",
    ],
  },
  {
    title: "Enterprise RAG, Supercharged by NVIDIA NIM",
    description:
      "Built an end-to-end Retrieval-Augmented Generation (RAG) system powered by NVIDIA NIM and Meta LLaMA-3 70B Instruct that turns static PDFs into a conversational knowledge base. Documents are chunked, embedded via NVIDIA Embeddings, and indexed in FAISS for lightning-fast semantic search. Every answer comes with transparent source chunks making it audit ready for enterprise use.",
    image: quickgpt,
    live: "",
    github: "https://github.com/akshaypcr7/NVIDIA-NIM-RAG-Application.git",
    tech: [
      "Retrieval-Augmented Generation (RAG)",
      "Semantic Search",
      "Vector Embeddings",
      "Meta LLaMA-3 70B Instruct",
      "NVIDIA Embeddings",
      "OpenAI AP",
      "FAISS",
      "LangChain",
    ],
  },
  {
    title: "Built the AI Playground OpenAI, Anthropic & Google Forgot to Make.",
    description:
      "Built an end-to-end multimodal AI interface supporting Text, Image, Audio transformations across OpenAI, Anthropic, and Google models via LangChain. Demonstrates LLM orchestration, tool binding, and real-world GenAI integration in a clean Streamlit UI.",
    image: resumecraft,
    live: "",
    github: "https://github.com/akshaypcr7/llms.git",
    tech: [
      "OpenAI (GPT-4o, GPT-5-nano)",
      "Anthropic Claude (Haiku 4.5)",
      "Google Gemini 2.5 Flash",
      "OpenRouter",
      "Hugging Face",
      "Image Generation",
      "Text Generation",
      "Speech-to-Text (STT)",
      "Text-to-Speech (TTS)",
      "REST APIs",
    ],
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative bg-black text-white py-24 px-6 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[400px] h-[400px] rounded-full bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302b63] opacity-20 blur-[140px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2] opacity-20 blur-[140px]" />
      </div>

      {/* Heading */}
      <motion.h2
        className="text-4xl sm:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302b63]"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Projects
      </motion.h2>

      <motion.p
        className="text-center text-gray-300 mt-4 mb-16 max-w-2xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Some things I’ve built using modern AI technologies
      </motion.p>

      {/* Cards */}
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 relative z-10">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="group rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 shadow-xl overflow-hidden hover:border-[#1cd8d2]/40"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.03 }}
          >
            {/* Image */}
            <div className="overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="h-48 w-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-sm text-gray-300 mb-4">
                {project.description}
              </p>

              {/* Tech */}
              <div className="flex flex-wrap gap-2 mb-5">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 rounded-full bg-gradient-to-r from-[#1cd8d2]/20 to-[#00bf8f]/20 border border-[#1cd8d2]/30"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-4">
                <a
                  href={project.live}
                  target="_blank"
                  className="flex items-center gap-2 px-4 py-2 text-sm rounded-full bg-gradient-to-r from-[#1cd8d2] to-[#00bf8f] text-black font-medium hover:opacity-90"
                >
                  <FaExternalLinkAlt /> View Project
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  className="flex items-center gap-2 px-4 py-2 text-sm rounded-full border border-white/30 hover:border-[#1cd8d2]"
                >
                  <FaGithub /> GitHub
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
