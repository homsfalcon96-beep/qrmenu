"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const user = localStorage.getItem("user");
    
    if (!user) {
      router.push("/login");
      return;
    }

    try {
      const parsed = JSON.parse(user);
      if (parsed && parsed.username) {
        setIsAuthenticated(true);
      } else {
        router.push("/login");
      }
    } catch {
      router.push("/login");
    }
    
    setLoading(false);
  }, [router]);

  if (loading) {
    return (
      <div style={{ minHeight: "100vh", background: "#09090f", display: "flex", alignItems: "center", justifyContent: "center", color: "#f1f5f9", fontFamily: "'Cairo',sans-serif" }}>
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: 48, marginBottom: 16 }}>⏳</div>
          <div style={{ fontSize: "1.2rem", fontWeight: 700 }}>جارٍ التحميل...</div>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null;
  }

  return <>{children}</>;
}