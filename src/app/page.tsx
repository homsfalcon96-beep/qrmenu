"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

export default function Home() {
  const [faqOpen, setFaqOpen] = useState<number | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const faqs = [
    { q: "هل يحتاج الزبون لتنزيل تطبيق لرؤية القائمة؟", a: "لا على الإطلاق. القائمة تفتح مباشرة في متصفح الهاتف عند مسح كود QR. لا يوجد تطبيق، لا تسجيل دخول، لا انتظار." },
    { q: "كيف يبدو الرابط المخصص لمطعمي؟", a: "ستحصل على رابط خاص بمطعمك بالشكل: menu.qrmenu.com/اسم-مطعمك — ويمكنك مشاركته على السوشيال ميديا وخرائط جوجل والواتساب." },
    { q: "هل يمكنني تغيير الأسعار والأصناف بنفسي؟", a: "نعم بالكامل. لوحة التحكم مصممة لتكون سهلة جداً خصوصاً من الجوال. يمكنك إضافة وتعديل وحذف أي صنف أو قسم في ثوانٍ، والتغييرات تظهر فوراً للزبائن." },
    { q: "ماذا يحدث لو غيّرت اسم مطعمي؟", a: "رمز QR الذي طبعته سيظل يعمل بشكل طبيعي. الكودات مرتبطة بحسابك وليس بالاسم، لذا لا حاجة لإعادة الطباعة." },
    { q: "هل الشهر التجريبي مجاني تماماً؟", a: "نعم 100%. لا نطلب بيانات بطاقة بنكية للتسجيل. تستمتع بكامل مميزات المنصة لمدة 30 يوماً دون أي التزام." },
  ];

  const features = [
    { icon: "📱", title: "تجربة موبايل استثنائية", desc: "لوحة التحكم مصممة أولاً للهاتف. إدارة قائمتك بلمسات بسيطة حيثما كنت." },
    { icon: "🔗", title: "Subdomain مخصص", desc: "كل مطعم يحصل على رابطه الخاص: مطعمك.qrmenu.com واضح وسهل التذكر." },
    { icon: "✏️", title: "تعديل فوري", desc: "غيّر سعراً، أخفِ صنفاً، أضف قسماً جديداً. التعديلات تظهر للزبائن لحظياً." },
    { icon: "🖼️", title: "صور جذابة للأصناف", desc: "أضف صوراً احترافية لكل صنف. الصور تزيد من شهية الزبائن وتحسّن المبيعات." },
    { icon: "🌐", title: "دعم اللغات المتعددة", desc: "اعرض قائمتك بالعربية والإنجليزية وأكثر، لخدمة الزوار الأجانب بشكل أفضل." },
    { icon: "📊", title: "لوحة تحكم المشرف", desc: "إدارة كاملة للعملاء والاشتراكات والحسابات من لوحة تحكم مركزية احترافية." },
  ];

  const testimonials = [
    { name: "محمد العمري", role: "مطعم الواحة - الرياض", text: "سهولة الاستخدام لا تصدق. أضفت قائمة كاملة في أقل من 20 دقيقة والزبائن يحبونها جداً.", avatar: "👨‍🍳" },
    { name: "نورة السالم", role: "كافيه لافيستا - جدة", text: "وفّرت تكاليف الطباعة وأصبحت أغيّر الأسعار والعروض بدقيقة واحدة. أفضل قرار اتخذته لمطعمي.", avatar: "👩‍💼" },
    { name: "خالد المنصور", role: "مطعم الأصيل - دبي", text: "القائمة الرقمية رفعت متوسط الطلب عندي. الصور تلعب دور كبير في إقناع الزبون يطلب أكثر.", avatar: "🧑‍🍽" },
  ];

  return (
    <main style={{ fontFamily: "'Cairo', 'Tajawal', sans-serif", background: "#09090f", color: "#f1f5f9", minHeight: "100vh" }}>

      {/* ── NAV ── */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "16px 5%",
        background: scrolled ? "rgba(9,9,15,0.97)" : "rgba(9,9,15,0.85)",
        backdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        transition: "all 0.3s",
        boxShadow: scrolled ? "0 4px 30px rgba(0,0,0,0.4)" : "none"
      }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <svg height="28" viewBox="0 0 1297.13 245.57" xmlns="http://www.w3.org/2000/svg">
              <path fill="#f97316" d="m78.67,101.53H22.87c-12.61,0-22.87-10.26-22.87-22.87V22.87C0,10.26,10.26,0,22.87,0h55.8c12.61,0,22.87,10.26,22.87,22.87v55.8c0,12.61-10.26,22.87-22.87,22.87ZM22.87,19.24c-2,0-3.63,1.63-3.63,3.62v55.8c0,2,1.63,3.63,3.63,3.63h55.8c2,0,3.62-1.63,3.62-3.63V22.87c0-2-1.63-3.62-3.62-3.62H22.87Z"/>
              <path fill="#f97316" d="m161.15,67.1h-19.24V19.24h-31.81V0h32.18c10.41,0,18.87,8.47,18.87,18.87v48.23Z"/>
              <path fill="#f97316" d="m226.69,76.72h-38.98c-10.41,0-18.87-8.47-18.87-18.87V18.87c0-10.41,8.47-18.87,18.87-18.87h38.98c10.41,0,18.87,8.47,18.87,18.87v38.98c0,10.41-8.47,18.87-18.87,18.87Zm-38.61-19.24h38.24V19.24h-38.24v38.24Z"/>
              <path fill="#f97316" d="m67.1,161.15H18.87c-10.41,0-18.87-8.47-18.87-18.87v-28.25h19.24v27.88h47.86v19.24Z"/>
              <path fill="#f97316" d="m142.27,161.15h-48.23v-19.24h47.86v-32.22c0-10.41,8.47-18.87,18.87-18.87h54.45v19.24h-54.08v32.22c0,10.41-8.47,18.87-18.87,18.87Z"/>
              <path fill="#f97316" d="m226.69,161.15h-48.23v-19.24h47.86v-47.86h19.24v48.23c0,10.41-8.47,18.87-18.87,18.87Z"/>
              <path fill="#f97316" d="m57.85,245.57H18.87c-10.41,0-18.87-8.47-18.87-18.87v-38.98c0-10.41,8.47-18.87,18.87-18.87h38.98c10.41,0,18.87,8.47,18.87,18.87v38.98c0,10.41-8.47,18.87-18.87,18.87Zm-38.61-19.24h38.24v-38.24H19.24v38.24Z"/>
              <path fill="#f97316" d="m151.52,245.57h-48.23c-10.41,0-18.87-8.47-18.87-18.87v-48.23h19.24v47.86h47.86v19.24Z"/>
              <path fill="#f97316" d="m226.69,245.57h-38.98c-10.41,0-18.87-8.47-18.87-18.87v-38.98c0-10.41,8.47-18.87,18.87-18.87h38.98c10.41,0,18.87,8.47,18.87,18.87v38.98c0,10.41-8.47,18.87-18.87,18.87Zm-38.61-19.24h38.24v-38.24h-38.24v38.24Z"/>
              <rect fill="#f97316" x="134.86" y="178.46" width="19.24" height="28.74"/>
              <path fill="#f97316" d="m54.7,64.38h-14.39c-1.71,0-3.1-1.38-3.11-3.09l-.05-6.6v-14.39c0-1.71,1.38-3.1,3.09-3.11l6.6-.05h14.39c1.71,0,3.1,1.38,3.11,3.09l.05,6.6v14.39c0,1.71-1.38,3.1-3.09,3.11l-6.6.05Z"/>
              <path fill="#f97316" d="m117.42,126.22h-12.9c-1.53,0-2.78-1.24-2.79-2.77l-.04-5.92v-12.9c0-1.53,1.24-2.78,2.77-2.79l5.92-.04h12.9c1.53,0,2.78,1.24,2.79,2.77l.04,5.92v12.9c0,1.53-1.24,2.78-2.77,2.79l-5.92.04Z"/>
              <path fill="#fff" d="m474.14,152.98c4.4-10.43,6.6-21.74,6.6-33.94s-2.2-23.75-6.6-34.17-10.62-19.5-18.65-27.22c-8.03-7.72-17.49-13.7-28.38-17.95-10.89-4.25-22.82-6.37-35.79-6.37s-24.9,2.12-35.79,6.37c-10.89,4.25-20.35,10.23-28.38,17.95-8.03,7.72-14.25,16.76-18.65,27.1-4.4,10.35-6.6,21.7-6.6,34.05s2.24,23.55,6.72,34.05c4.48,10.5,10.77,19.62,18.88,27.34,8.11,7.72,17.61,13.75,28.49,18.07,10.89,4.32,22.82,6.49,35.79,6.49s24.63-2.12,35.45-6.37c4.25-1.67,8.28-3.63,12.11-5.85l24.03,24.03,25.02-25.02-22.93-22.93c3.41-4.84,6.32-10.05,8.68-15.65Zm-82.82,11c-6.49,0-12.32-1.04-17.49-3.13-5.18-2.08-9.62-5.1-13.32-9.04-3.71-3.94-6.53-8.69-8.46-14.25-1.93-5.56-2.9-11.81-2.9-18.76,0-9.11,1.7-17.03,5.1-23.75,3.4-6.72,8.26-11.89,14.59-15.52,6.33-3.63,13.82-5.44,22.47-5.44,6.49,0,12.31,1.04,17.49,3.13,5.17,2.08,9.61,5.1,13.32,9.03,3.71,3.94,6.52,8.65,8.46,14.13,1.93,5.48,2.9,11.62,2.9,18.42,0,5.73-.68,11-2.02,15.82l-23-23-25.02,25.02,24.52,24.52c-4.97,1.87-10.51,2.82-16.64,2.82Z"/>
              <path fill="#fff" d="m604.92,129.47c8.96-4.17,15.94-9.96,20.96-17.37,5.02-7.41,7.53-16.06,7.53-25.95s-2.47-18.53-7.41-25.95c-4.94-7.41-11.74-13.21-20.39-17.38-8.65-4.17-18.69-6.25-30.12-6.25h-72.97v164.94h46.33v-65.79h.64l41.99,65.79h52.59l-48.28-68.71c3.2-.91,6.26-2.01,9.12-3.34Zm-36.83-59.54c6.33,0,11.16,1.55,14.48,4.63,3.32,3.09,4.98,7.18,4.98,12.28s-1.66,9.19-4.98,12.28c-3.32,3.09-8.15,4.63-14.48,4.63h-19.23v-33.82h19.23Z"/>
              <polygon fill="#fff" points="743.79 134.08 684.15 38.65 661.91 38.65 661.91 201.51 693.41 201.51 693.41 104.26 732.79 168.15 754.57 168.15 793.95 104.58 793.95 201.51 825.46 201.51 825.46 38.65 803.22 38.65 743.79 134.08"/>
              <polygon fill="#fff" points="890.33 132.01 964.23 132.01 964.23 104.91 890.33 104.91 890.33 66.45 970.94 66.45 970.94 38.65 890.33 38.65 881.99 38.65 858.82 38.65 858.82 201.51 881.99 201.51 890.33 201.51 972.1 201.51 972.1 173.71 890.33 173.71 890.33 132.01"/>
              <polygon fill="#fff" points="1102.07 143.81 1020.52 38.65 998.51 38.65 998.51 201.51 1030.02 201.51 1030.02 96.71 1111.1 201.51 1133.57 201.51 1133.57 38.65 1102.07 38.65 1102.07 143.81"/>
              <path fill="#fff" d="m1265.39,38.65v101.01c0,7.11-1.51,13.28-4.52,18.53-3.01,5.25-7.03,9.31-12.05,12.16-5.02,2.86-10.85,4.29-17.49,4.29s-12.59-1.43-17.84-4.29c-5.25-2.86-9.42-6.91-12.51-12.16-3.09-5.25-4.63-11.5-4.63-18.77V38.65h-31.74v99.85c0,12.51,2.9,23.71,8.69,33.59,5.79,9.89,13.71,17.69,23.75,23.4,10.04,5.72,21.46,8.57,34.29,8.57s24.17-2.86,34.05-8.57c9.88-5.71,17.64-13.47,23.28-23.28,5.63-9.81,8.46-20.97,8.46-33.48V38.65h-31.74Z"/>
            </svg>
        </div>
        <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
          <a href="#how" style={{ color: "#94a3b8", textDecoration: "none", fontSize: "0.88rem", fontWeight: 600 }}>كيف يعمل</a>
          <a href="#features" style={{ color: "#94a3b8", textDecoration: "none", fontSize: "0.88rem", fontWeight: 600 }}>المميزات</a>
          <a href="#pricing" style={{ color: "#94a3b8", textDecoration: "none", fontSize: "0.88rem", fontWeight: 600 }}>الأسعار</a>
          <Link href="/login" style={{ background: "#f97316", color: "#fff", padding: "9px 22px", borderRadius: 50, textDecoration: "none", fontSize: "0.88rem", fontWeight: 700, boxShadow: "0 3px 14px rgba(249,115,22,0.35)" }}>الدخول إلى لوحة التحكم</Link>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section style={{
        minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center",
        textAlign: "center", padding: "130px 5% 80px",
        background: "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(249,115,22,0.13), transparent)",
        position: "relative", overflow: "hidden"
      }}>
        {/* grid bg */}
        <div style={{
          position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none",
          backgroundImage: "linear-gradient(rgba(249,115,22,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(249,115,22,0.04) 1px,transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 50%,black 30%,transparent 80%)"
        }} />
        <div style={{ position: "relative", zIndex: 1 }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: "rgba(249,115,22,0.1)", border: "1px solid rgba(249,115,22,0.25)",
            color: "#fb923c", padding: "7px 16px", borderRadius: 50,
            fontSize: "0.8rem", fontWeight: 800, marginBottom: 24
          }}>
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#f97316", display: "inline-block", animation: "pulse 2s infinite" }} />
            الحل الرقمي لمطعمك
          </div>
          <h1 style={{ fontFamily: "'Tajawal',sans-serif", fontSize: "clamp(2.4rem,5vw,4rem)", fontWeight: 900, lineHeight: 1.2, marginBottom: 20 }}>
            قائمة طعام رقمية<br />
            <span style={{ color: "#f97316" }}>تبيع بدلاً عنك</span>
          </h1>
          <p style={{ color: "#94a3b8", fontSize: "1.05rem", marginBottom: 36, maxWidth: 500, margin: "0 auto 36px", lineHeight: 1.7 }}>
            امنح زبائنك تجربة طلب عصرية وسريعة عبر كود QR مخصص لمطعمك. بدون تطبيق، بدون ورق، بدون انتظار.
          </p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/login" style={{ background: "#f97316", color: "#fff", padding: "14px 32px", borderRadius: 50, textDecoration: "none", fontSize: "0.95rem", fontWeight: 700, boxShadow: "0 4px 20px rgba(249,115,22,0.35)" }}>🚀 ابدأ تجربتك المجانية</Link>
            <Link href="/menu/demo" style={{ background: "#1c1f2c", color: "#f1f5f9", padding: "14px 32px", borderRadius: 50, textDecoration: "none", fontSize: "0.95rem", fontWeight: 600, border: "1px solid rgba(255,255,255,0.08)" }}>👀 شاهد مثالاً</Link>
          </div>
          {/* Stats */}
          <div style={{ display: "flex", gap: 40, justifyContent: "center", marginTop: 50, flexWrap: "wrap" }}>
            {[{ num: "+500", label: "مطعم نشط" }, { num: "30 ثانية", label: "للبدء والإعداد" }, { num: "شهر", label: "مجاني بدون بطاقة" }].map((s, i) => (
              <div key={i} style={{ textAlign: "center" }}>
                <div style={{ fontFamily: "'Tajawal',sans-serif", fontSize: "1.6rem", fontWeight: 900, color: "#f97316" }}>{s.num}</div>
                <div style={{ fontSize: "0.78rem", color: "#4b5563", fontWeight: 600 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section id="how" style={{ padding: "90px 5%", background: "#0e1017", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", textAlign: "center" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "rgba(249,115,22,0.08)", border: "1px solid rgba(249,115,22,0.2)", color: "#fb923c", padding: "6px 14px", borderRadius: 50, fontSize: "0.78rem", fontWeight: 800, marginBottom: 16 }}>⚡ كيف يعمل</div>
          <h2 style={{ fontFamily: "'Tajawal',sans-serif", fontSize: "clamp(1.8rem,3.5vw,2.6rem)", fontWeight: 900, marginBottom: 12 }}>ابدأ في 3 خطوات بسيطة</h2>
          <p style={{ color: "#94a3b8", marginBottom: 50 }}>لا تحتاج لخبرة تقنية. كل ما تحتاجه هو هاتفك الذكي.</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: 24 }}>
            {[
              { num: "1", title: "أنشئ حسابك", desc: "سجّل مجاناً في دقيقة واحدة، أدخل اسم مطعمك، وستحصل على رابطك ورمز QR الخاص." },
              { num: "2", title: "أضف أصنافك", desc: "أضف أقسامك وأصنافك مع الصور والأسعار بسهولة تامة من هاتفك أو جهازك." },
              { num: "3", title: "ضع الكود على الطاولة", desc: "اطبع كود QR وضعه على طاولاتك. زبائنك يمسحونه ويطلعون على قائمتك فوراً." },
            ].map((step, i) => (
              <div key={i} style={{ background: "#13161e", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 16, padding: "30px 24px", textAlign: "center" }}>
                <div style={{ width: 56, height: 56, borderRadius: "50%", background: "#f97316", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.2rem", fontWeight: 900, color: "#fff", margin: "0 auto 18px", boxShadow: "0 8px 25px rgba(249,115,22,0.3)" }}>{step.num}</div>
                <h3 style={{ fontSize: "1.05rem", fontWeight: 800, marginBottom: 10 }}>{step.title}</h3>
                <p style={{ color: "#94a3b8", fontSize: "0.88rem", lineHeight: 1.7 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section id="features" style={{ padding: "90px 5%" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", textAlign: "center" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "rgba(249,115,22,0.08)", border: "1px solid rgba(249,115,22,0.2)", color: "#fb923c", padding: "6px 14px", borderRadius: 50, fontSize: "0.78rem", fontWeight: 800, marginBottom: 16 }}>✨ المميزات</div>
          <h2 style={{ fontFamily: "'Tajawal',sans-serif", fontSize: "clamp(1.8rem,3.5vw,2.6rem)", fontWeight: 900, marginBottom: 12 }}>كل ما تحتاجه في منصة واحدة</h2>
          <p style={{ color: "#94a3b8", marginBottom: 50 }}>مميزات مصممة خصيصاً لأصحاب المطاعم في العالم العربي.</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 20 }}>
            {features.map((f, i) => (
              <div key={i} style={{ background: "#13161e", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 16, padding: 28, textAlign: "right" }}>
                <div style={{ width: 52, height: 52, borderRadius: 14, background: "rgba(249,115,22,0.12)", border: "1px solid rgba(249,115,22,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24, marginBottom: 16 }}>{f.icon}</div>
                <h3 style={{ fontSize: "1rem", fontWeight: 800, marginBottom: 8 }}>{f.title}</h3>
                <p style={{ color: "#94a3b8", fontSize: "0.87rem", lineHeight: 1.7 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section style={{ padding: "90px 5%", background: "#0e1017", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", textAlign: "center" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "rgba(249,115,22,0.08)", border: "1px solid rgba(249,115,22,0.2)", color: "#fb923c", padding: "6px 14px", borderRadius: 50, fontSize: "0.78rem", fontWeight: 800, marginBottom: 16 }}>💬 آراء العملاء</div>
          <h2 style={{ fontFamily: "'Tajawal',sans-serif", fontSize: "clamp(1.8rem,3.5vw,2.6rem)", fontWeight: 900, marginBottom: 50 }}>ماذا يقول أصحاب المطاعم</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 20 }}>
            {testimonials.map((t, i) => (
              <div key={i} style={{ background: "#13161e", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 16, padding: 28, textAlign: "right" }}>
                <div style={{ color: "#f59e0b", fontSize: "0.85rem", letterSpacing: 2, marginBottom: 14 }}>★★★★★</div>
                <p style={{ color: "#94a3b8", fontSize: "0.9rem", lineHeight: 1.7, marginBottom: 20, fontStyle: "italic" }}>"{t.text}"</p>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{ width: 42, height: 42, borderRadius: "50%", background: "linear-gradient(135deg,#f97316,#f59e0b)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18 }}>{t.avatar}</div>
                  <div>
                    <div style={{ fontWeight: 800, fontSize: "0.88rem" }}>{t.name}</div>
                    <div style={{ color: "#4b5563", fontSize: "0.78rem" }}>{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section id="pricing" style={{ padding: "90px 5%" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto", textAlign: "center" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "rgba(249,115,22,0.08)", border: "1px solid rgba(249,115,22,0.2)", color: "#fb923c", padding: "6px 14px", borderRadius: 50, fontSize: "0.78rem", fontWeight: 800, marginBottom: 16 }}>💰 الأسعار</div>
          <h2 style={{ fontFamily: "'Tajawal',sans-serif", fontSize: "clamp(1.8rem,3.5vw,2.6rem)", fontWeight: 900, marginBottom: 12 }}>أسعار شفافة بدون مفاجآت</h2>
          <p style={{ color: "#94a3b8", marginBottom: 50 }}>اختر الخطة التي تناسب مطعمك. شهر أول مجاني تماماً.</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: 20, alignItems: "start" }}>
            {[
              { plan: "شهري", price: "50,000", save: "", color: "#f97316", popular: false, features: ["Subdomain مخصص", "أقسام وأصناف غير محدودة", "صور للأصناف", "كود QR للقائمة"] },
              { plan: "نصف سنوي", price: "270,000", save: "توفير 15%", color: "#f97316", popular: true, features: ["كل مميزات الشهري", "دعم متعدد اللغات", "أولوية في الدعم", "تقارير مفصّلة"] },
              { plan: "سنوي", price: "480,000", save: "توفير 26%", color: "#22c55e", popular: false, features: ["كل المميزات", "دعم متعدد اللغات", "إضافة موظفين", "دعم VIP"] },
            ].map((p, i) => (
              <div key={i} style={{
                background: p.popular ? "linear-gradient(135deg,#1a1e28,rgba(249,115,22,0.08))" : "#13161e",
                border: p.popular ? "1px solid #f97316" : "1px solid rgba(255,255,255,0.06)",
                borderRadius: 20, padding: "32px 24px",
                transform: p.popular ? "scale(1.03)" : "scale(1)",
                position: "relative"
              }}>
                {p.popular && <div style={{ position: "absolute", top: 16, right: 16, background: "#f97316", color: "#fff", padding: "3px 12px", borderRadius: 50, fontSize: "0.72rem", fontWeight: 800 }}>الأكثر طلباً ⭐</div>}
                <div style={{ fontSize: "0.8rem", fontWeight: 800, color: "#4b5563", marginBottom: 14, marginTop: p.popular ? 20 : 0 }}>{p.plan}</div>
                <div style={{ fontFamily: "'Tajawal',sans-serif", fontSize: "3rem", fontWeight: 900, color: p.color, lineHeight: 1 }}>
                  {p.price}<span style={{ fontSize: "0.9rem", color: "#94a3b8", fontWeight: 400 }}> ل.س/شهر</span>
                </div>
                {p.save && <div style={{ fontSize: "0.75rem", color: "#22c55e", fontWeight: 700, marginTop: 4 }}>{p.save}</div>}
                <div style={{ height: 1, background: "rgba(255,255,255,0.06)", margin: "20px 0" }} />
                <ul style={{ listStyle: "none", textAlign: "right", marginBottom: 24 }}>
                  {p.features.map((f, j) => (
                    <li key={j} style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10, fontSize: "0.88rem", color: "#94a3b8" }}>
                      <span style={{ color: "#f97316", fontWeight: 900 }}>✓</span> {f}
                    </li>
                  ))}
                </ul>
                <Link href="/login" style={{ display: "block", background: p.popular ? "#f97316" : "#1c1f2c", color: "#fff", padding: 13, borderRadius: 12, textDecoration: "none", fontWeight: 700, fontSize: "0.9rem", border: p.popular ? "none" : "1px solid rgba(255,255,255,0.08)" }}>ابدأ مجاناً</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ padding: "90px 5%", background: "#0e1017", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div style={{ maxWidth: 780, margin: "0 auto", textAlign: "center" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "rgba(249,115,22,0.08)", border: "1px solid rgba(249,115,22,0.2)", color: "#fb923c", padding: "6px 14px", borderRadius: 50, fontSize: "0.78rem", fontWeight: 800, marginBottom: 16 }}>❓ الأسئلة الشائعة</div>
          <h2 style={{ fontFamily: "'Tajawal',sans-serif", fontSize: "clamp(1.8rem,3.5vw,2.6rem)", fontWeight: 900, marginBottom: 40 }}>كل أسئلتك مجابة هنا</h2>
          <div style={{ textAlign: "right" }}>
            {faqs.map((faq, i) => (
              <div key={i} style={{ borderBottom: "1px solid rgba(255,255,255,0.06)", cursor: "pointer" }} onClick={() => setFaqOpen(faqOpen === i ? null : i)}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "20px 0", fontWeight: 700, fontSize: "0.97rem", gap: 16, color: faqOpen === i ? "#f97316" : "#f1f5f9" }}>
                  {faq.q}
                  <div style={{ width: 30, height: 30, borderRadius: "50%", background: faqOpen === i ? "#f97316" : "#1c1f2c", border: "1px solid rgba(255,255,255,0.08)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: 16, transition: "all 0.3s", transform: faqOpen === i ? "rotate(45deg)" : "none" }}>+</div>
                </div>
                {faqOpen === i && <div style={{ color: "#94a3b8", fontSize: "0.9rem", lineHeight: 1.7, paddingBottom: 20 }}>{faq.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ padding: "90px 5%" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <div style={{ background: "linear-gradient(135deg,#1c1f2c,rgba(249,115,22,0.08))", border: "1px solid rgba(249,115,22,0.22)", borderRadius: 28, padding: "60px 40px", textAlign: "center", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: "-50%", left: "50%", transform: "translateX(-50%)", width: 300, height: 300, background: "radial-gradient(circle,rgba(249,115,22,0.12),transparent)", borderRadius: "50%", pointerEvents: "none" }} />
            <h2 style={{ fontFamily: "'Tajawal',sans-serif", fontSize: "clamp(1.8rem,3.5vw,2.4rem)", fontWeight: 900, marginBottom: 14, position: "relative" }}>
              مطعمك يستحق قائمة<br /><span style={{ color: "#f97316" }}>تعكس جودته</span>
            </h2>
            <p style={{ color: "#94a3b8", marginBottom: 32, position: "relative" }}>انضم لأكثر من 500 مطعم ومقهى يستخدم QRMenu. شهر أول مجاني بدون بطاقة بنكية.</p>
            <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap", position: "relative" }}>
              <Link href="/login" style={{ background: "#f97316", color: "#fff", padding: "14px 32px", borderRadius: 50, textDecoration: "none", fontWeight: 700, fontSize: "0.95rem", boxShadow: "0 4px 20px rgba(249,115,22,0.35)" }}>🎉 أنشئ قائمتك الآن مجاناً</Link>
            </div>
            <p style={{ fontSize: "0.8rem", color: "#4b5563", marginTop: 16, position: "relative" }}>✓ مجاني لمدة شهر · ✓ لا بطاقة مطلوبة · ✓ إلغاء في أي وقت</p>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ background: "#0e1017", borderTop: "1px solid rgba(255,255,255,0.06)", padding: "40px 5% 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 40, marginBottom: 32, flexWrap: "wrap" }}>
            <div>
              <div style={{ marginBottom: 14 }}>
                <svg height="28" viewBox="0 0 1297.13 245.57" xmlns="http://www.w3.org/2000/svg">
              <path fill="#f97316" d="m78.67,101.53H22.87c-12.61,0-22.87-10.26-22.87-22.87V22.87C0,10.26,10.26,0,22.87,0h55.8c12.61,0,22.87,10.26,22.87,22.87v55.8c0,12.61-10.26,22.87-22.87,22.87ZM22.87,19.24c-2,0-3.63,1.63-3.63,3.62v55.8c0,2,1.63,3.63,3.63,3.63h55.8c2,0,3.62-1.63,3.62-3.63V22.87c0-2-1.63-3.62-3.62-3.62H22.87Z"/>
              <path fill="#f97316" d="m161.15,67.1h-19.24V19.24h-31.81V0h32.18c10.41,0,18.87,8.47,18.87,18.87v48.23Z"/>
              <path fill="#f97316" d="m226.69,76.72h-38.98c-10.41,0-18.87-8.47-18.87-18.87V18.87c0-10.41,8.47-18.87,18.87-18.87h38.98c10.41,0,18.87,8.47,18.87,18.87v38.98c0,10.41-8.47,18.87-18.87,18.87Zm-38.61-19.24h38.24V19.24h-38.24v38.24Z"/>
              <path fill="#f97316" d="m67.1,161.15H18.87c-10.41,0-18.87-8.47-18.87-18.87v-28.25h19.24v27.88h47.86v19.24Z"/>
              <path fill="#f97316" d="m142.27,161.15h-48.23v-19.24h47.86v-32.22c0-10.41,8.47-18.87,18.87-18.87h54.45v19.24h-54.08v32.22c0,10.41-8.47,18.87-18.87,18.87Z"/>
              <path fill="#f97316" d="m226.69,161.15h-48.23v-19.24h47.86v-47.86h19.24v48.23c0,10.41-8.47,18.87-18.87,18.87Z"/>
              <path fill="#f97316" d="m57.85,245.57H18.87c-10.41,0-18.87-8.47-18.87-18.87v-38.98c0-10.41,8.47-18.87,18.87-18.87h38.98c10.41,0,18.87,8.47,18.87,18.87v38.98c0,10.41-8.47,18.87-18.87,18.87Zm-38.61-19.24h38.24v-38.24H19.24v38.24Z"/>
              <path fill="#f97316" d="m151.52,245.57h-48.23c-10.41,0-18.87-8.47-18.87-18.87v-48.23h19.24v47.86h47.86v19.24Z"/>
              <path fill="#f97316" d="m226.69,245.57h-38.98c-10.41,0-18.87-8.47-18.87-18.87v-38.98c0-10.41,8.47-18.87,18.87-18.87h38.98c10.41,0,18.87,8.47,18.87,18.87v38.98c0,10.41-8.47,18.87-18.87,18.87Zm-38.61-19.24h38.24v-38.24h-38.24v38.24Z"/>
              <rect fill="#f97316" x="134.86" y="178.46" width="19.24" height="28.74"/>
              <path fill="#f97316" d="m54.7,64.38h-14.39c-1.71,0-3.1-1.38-3.11-3.09l-.05-6.6v-14.39c0-1.71,1.38-3.1,3.09-3.11l6.6-.05h14.39c1.71,0,3.1,1.38,3.11,3.09l.05,6.6v14.39c0,1.71-1.38,3.1-3.09,3.11l-6.6.05Z"/>
              <path fill="#f97316" d="m117.42,126.22h-12.9c-1.53,0-2.78-1.24-2.79-2.77l-.04-5.92v-12.9c0-1.53,1.24-2.78,2.77-2.79l5.92-.04h12.9c1.53,0,2.78,1.24,2.79,2.77l.04,5.92v12.9c0,1.53-1.24,2.78-2.77,2.79l-5.92.04Z"/>
              <path fill="#fff" d="m474.14,152.98c4.4-10.43,6.6-21.74,6.6-33.94s-2.2-23.75-6.6-34.17-10.62-19.5-18.65-27.22c-8.03-7.72-17.49-13.7-28.38-17.95-10.89-4.25-22.82-6.37-35.79-6.37s-24.9,2.12-35.79,6.37c-10.89,4.25-20.35,10.23-28.38,17.95-8.03,7.72-14.25,16.76-18.65,27.1-4.4,10.35-6.6,21.7-6.6,34.05s2.24,23.55,6.72,34.05c4.48,10.5,10.77,19.62,18.88,27.34,8.11,7.72,17.61,13.75,28.49,18.07,10.89,4.32,22.82,6.49,35.79,6.49s24.63-2.12,35.45-6.37c4.25-1.67,8.28-3.63,12.11-5.85l24.03,24.03,25.02-25.02-22.93-22.93c3.41-4.84,6.32-10.05,8.68-15.65Zm-82.82,11c-6.49,0-12.32-1.04-17.49-3.13-5.18-2.08-9.62-5.1-13.32-9.04-3.71-3.94-6.53-8.69-8.46-14.25-1.93-5.56-2.9-11.81-2.9-18.76,0-9.11,1.7-17.03,5.1-23.75,3.4-6.72,8.26-11.89,14.59-15.52,6.33-3.63,13.82-5.44,22.47-5.44,6.49,0,12.31,1.04,17.49,3.13,5.17,2.08,9.61,5.1,13.32,9.03,3.71,3.94,6.52,8.65,8.46,14.13,1.93,5.48,2.9,11.62,2.9,18.42,0,5.73-.68,11-2.02,15.82l-23-23-25.02,25.02,24.52,24.52c-4.97,1.87-10.51,2.82-16.64,2.82Z"/>
              <path fill="#fff" d="m604.92,129.47c8.96-4.17,15.94-9.96,20.96-17.37,5.02-7.41,7.53-16.06,7.53-25.95s-2.47-18.53-7.41-25.95c-4.94-7.41-11.74-13.21-20.39-17.38-8.65-4.17-18.69-6.25-30.12-6.25h-72.97v164.94h46.33v-65.79h.64l41.99,65.79h52.59l-48.28-68.71c3.2-.91,6.26-2.01,9.12-3.34Zm-36.83-59.54c6.33,0,11.16,1.55,14.48,4.63,3.32,3.09,4.98,7.18,4.98,12.28s-1.66,9.19-4.98,12.28c-3.32,3.09-8.15,4.63-14.48,4.63h-19.23v-33.82h19.23Z"/>
              <polygon fill="#fff" points="743.79 134.08 684.15 38.65 661.91 38.65 661.91 201.51 693.41 201.51 693.41 104.26 732.79 168.15 754.57 168.15 793.95 104.58 793.95 201.51 825.46 201.51 825.46 38.65 803.22 38.65 743.79 134.08"/>
              <polygon fill="#fff" points="890.33 132.01 964.23 132.01 964.23 104.91 890.33 104.91 890.33 66.45 970.94 66.45 970.94 38.65 890.33 38.65 881.99 38.65 858.82 38.65 858.82 201.51 881.99 201.51 890.33 201.51 972.1 201.51 972.1 173.71 890.33 173.71 890.33 132.01"/>
              <polygon fill="#fff" points="1102.07 143.81 1020.52 38.65 998.51 38.65 998.51 201.51 1030.02 201.51 1030.02 96.71 1111.1 201.51 1133.57 201.51 1133.57 38.65 1102.07 38.65 1102.07 143.81"/>
              <path fill="#fff" d="m1265.39,38.65v101.01c0,7.11-1.51,13.28-4.52,18.53-3.01,5.25-7.03,9.31-12.05,12.16-5.02,2.86-10.85,4.29-17.49,4.29s-12.59-1.43-17.84-4.29c-5.25-2.86-9.42-6.91-12.51-12.16-3.09-5.25-4.63-11.5-4.63-18.77V38.65h-31.74v99.85c0,12.51,2.9,23.71,8.69,33.59,5.79,9.89,13.71,17.69,23.75,23.4,10.04,5.72,21.46,8.57,34.29,8.57s24.17-2.86,34.05-8.57c9.88-5.71,17.64-13.47,23.28-23.28,5.63-9.81,8.46-20.97,8.46-33.48V38.65h-31.74Z"/>
            </svg>
              </div>
              <p style={{ color: "#4b5563", fontSize: "0.87rem", lineHeight: 1.7 }}>منصة قوائم الطعام الرقمية الأولى في المنطقة العربية.</p>
            </div>
            {[
              { title: "المنتج", links: ["المميزات", "الأسعار", "مولّد QR"] },
              { title: "الشركة", links: ["من نحن", "المدونة", "تواصل معنا"] },
              { title: "الدعم", links: ["مركز المساعدة", "الأسئلة الشائعة", "سياسة الخصوصية"] },
            ].map((col, i) => (
              <div key={i}>
                <h4 style={{ fontSize: "0.83rem", fontWeight: 800, color: "#f1f5f9", marginBottom: 14, textTransform: "uppercase", letterSpacing: 1 }}>{col.title}</h4>
                <ul style={{ listStyle: "none" }}>
                  {col.links.map((link, j) => (
                    <li key={j} style={{ marginBottom: 10 }}>
                      <a href="#" style={{ color: "#4b5563", textDecoration: "none", fontSize: "0.87rem" }}>{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: 20, display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 10 }}>
            <span style={{ color: "#4b5563", fontSize: "0.82rem" }}>© 2025 <span style={{ color: "#f97316" }}>QRMenu</span>. جميع الحقوق محفوظة.</span>
            <span style={{ color: "#4b5563", fontSize: "0.82rem" }}>صُنع بـ ❤️ للمطاعم العربية</span>
          </div>
        </div>
      </footer>

    </main>
  );
}
