"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const nav = [
  { label: "Início", href: "/" },
  {
    label: "Áreas de Atuação",
    href: "#",
    children: [
      { label: "Atendimento Infantil", href: "/otorrino-pediatrica-sao-paulo/" },
      { label: "Cirurgia de Adenoide e Amígdala", href: "/cirurgia-adenoide-amigdala-crianca-sao-paulo/" },
      { label: "Otite Infantil", href: "/otite-infantil-sao-paulo/" },
      { label: "Rinite Alérgica", href: "/rinite-alergica-sao-paulo/" },
      { label: "Zumbido no Ouvido", href: "/zumbido-no-ouvido-sao-paulo/" },
      { label: "Ronco e Apneia do Sono", href: "/ronco-apneia-sono-sao-paulo/" },
    ],
  },
  { label: "Sobre", href: "/sobre/" },
  { label: "Blog", href: "/blog/" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header style={{
      background: "#fff",
      borderBottom: "1px solid #EDE8E2",
      position: "sticky",
      top: 0,
      zIndex: 100,
    }}>
      <div className="container" style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0.85rem 2rem",
      }}>
        {/* Logo */}
        <Link href="/" style={{ display: "flex", alignItems: "center" }}>
          <Image
            src="/logo-horizontal.png"
            alt="Dra. Mariana Fischer — Otorrinolaringologista"
            width={260}
            height={60}
            style={{ height: "48px", width: "auto" }}
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav style={{
          display: "flex",
          alignItems: "center",
          gap: "2rem",
          fontFamily: "var(--font-sans)",
          fontSize: "0.78rem",
          letterSpacing: "0.08em",
          textTransform: "uppercase",
        }} className="hidden md:flex">
          {nav.map((item) =>
            item.children ? (
              <div
                key={item.label}
                style={{ position: "relative" }}
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <button style={{
                  color: "#6B6B6B",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "0.78rem",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  fontFamily: "var(--font-sans)",
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                }}>
                  {item.label}
                  <span style={{ fontSize: "0.55rem", opacity: 0.6 }}>▼</span>
                </button>
                {dropdownOpen && (
                  <div style={{
                    position: "absolute",
                    top: "calc(100% + 12px)",
                    left: "50%",
                    transform: "translateX(-50%)",
                    background: "#fff",
                    borderRadius: "4px",
                    boxShadow: "0 12px 40px rgba(0,0,0,0.1)",
                    minWidth: "280px",
                    zIndex: 200,
                    padding: "0.75rem 0",
                    border: "1px solid #EDE8E2",
                  }}>
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        style={{
                          display: "block",
                          padding: "0.6rem 1.5rem",
                          color: "#6B6B6B",
                          fontSize: "0.75rem",
                          letterSpacing: "0.06em",
                          textTransform: "uppercase",
                          fontFamily: "var(--font-sans)",
                          transition: "color 0.15s",
                        }}
                        onMouseEnter={e => {
                          e.currentTarget.style.color = "#C4A07A";
                          e.currentTarget.style.background = "#FAF7F3";
                        }}
                        onMouseLeave={e => {
                          e.currentTarget.style.color = "#6B6B6B";
                          e.currentTarget.style.background = "transparent";
                        }}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                style={{ color: "#6B6B6B", transition: "color 0.15s" }}
                onMouseEnter={e => e.currentTarget.style.color = "#C4A07A"}
                onMouseLeave={e => e.currentTarget.style.color = "#6B6B6B"}
              >
                {item.label}
              </Link>
            )
          )}

          <a
            href="https://wa.me/5511918780808?text=Olá%2C%20gostaria%20de%20agendar%20uma%20consulta."
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: "transparent",
              color: "#C4A07A",
              padding: "0.5rem 1.25rem",
              border: "1px solid #C4A07A",
              borderRadius: "2px",
              fontSize: "0.72rem",
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              fontFamily: "var(--font-sans)",
              transition: "all 0.2s",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = "#C4A07A";
              e.currentTarget.style.color = "#fff";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.color = "#C4A07A";
            }}
          >
            Agendar Consulta
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{
            background: "none",
            border: "none",
            color: "#6B6B6B",
            fontSize: "1.4rem",
            cursor: "pointer",
            lineHeight: 1,
          }}
        >
          {mobileOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div style={{
          background: "#FAF7F3",
          borderTop: "1px solid #EDE8E2",
          padding: "1.5rem 2rem 2rem",
          fontFamily: "var(--font-sans)",
        }} className="md:hidden">
          {nav.map((item) =>
            item.children ? (
              <div key={item.label} style={{ marginBottom: "1rem" }}>
                <div style={{
                  color: "#C4A07A",
                  fontSize: "0.7rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  fontWeight: 600,
                  marginBottom: "0.5rem",
                }}>
                  {item.label}
                </div>
                {item.children.map((child) => (
                  <Link
                    key={child.href}
                    href={child.href}
                    onClick={() => setMobileOpen(false)}
                    style={{
                      display: "block",
                      color: "#6B6B6B",
                      fontSize: "0.8rem",
                      letterSpacing: "0.05em",
                      padding: "0.4rem 0.75rem",
                      textTransform: "none",
                    }}
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                style={{
                  display: "block",
                  color: "#6B6B6B",
                  fontSize: "0.8rem",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  padding: "0.6rem 0",
                  borderBottom: "1px solid #EDE8E2",
                  marginBottom: "0.25rem",
                }}
              >
                {item.label}
              </Link>
            )
          )}
          <a
            href="https://wa.me/5511918780808?text=Olá%2C%20gostaria%20de%20agendar%20uma%20consulta."
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              marginTop: "1.25rem",
              background: "#C4A07A",
              color: "#fff",
              padding: "0.75rem 1.5rem",
              borderRadius: "2px",
              fontWeight: 600,
              fontSize: "0.75rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            Agendar Consulta
          </a>
        </div>
      )}
    </header>
  );
}
