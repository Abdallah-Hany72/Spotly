import { useState, useRef, useEffect } from "react";
import clsx from "clsx";

// Import all UI components
import PrimaryButton from "../Components/Ui/PrimaryButton/PrimaryButton";
import InputField from "../Components/Ui/Form/InputField";
import SearchBar from "../Components/Ui/SearchBar/SearchBar";
import TagBadge from "../Components/Ui/TagBadge/TagBadge";
import SectionHeader from "../Components/Ui/SectionHeader/SectionHeader";

export default function UITest() {
  // Inject Google Fonts and Material Symbols for visual fidelity
  useEffect(() => {
    const links = [
      { id: "google-fonts", href: "https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap" },
      { id: "material-symbols", href: "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" }
    ];

    links.forEach(({ id, href }) => {
      if (!document.getElementById(id)) {
        const link = document.createElement("link");
        link.id = id;
        link.rel = "stylesheet";
        link.href = href;
        document.head.appendChild(link);
      }
    });
  }, []);

  // State to test interactive elements
  const [interactiveText, setInteractiveText] = useState("");
  const [passwordValue, setPasswordValue] = useState("secret123");
  const [focusedInput, setFocusedInput] = useState(false);
  const inputRef = useRef(null);

  // Programmatic focus triggers
  const handleFocusClick = () => {
    inputRef.current?.focus();
    setFocusedInput(true);
  };

  return (
    <div className="min-h-screen bg-background text-on-surface font-body-md py-12 px-6 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* PAGE HEADER */}
        <header className="border-b border-outline-variant/30 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-xs font-bold tracking-wider text-primary uppercase bg-primary/10 px-3 py-1 rounded-full">
              Frontend Development Kit
            </span>
            <h1 className="text-4xl font-extrabold tracking-tight mt-2 text-on-surface font-display-lg">
              Design System Showcase & UI Test Page
            </h1>
            <p className="text-on-surface-variant/80 mt-2 text-body-lg max-w-3xl">
              An interactive visual catalog to review and verify variants, sizes, states, and edge-cases of all components. Built using Tailwind v4 styling.
            </p>
          </div>
          <div className="flex gap-3">
            <span className="text-xs font-semibold px-3 py-2 bg-surface-container-high rounded-lg text-on-surface-variant border border-outline-variant/20">
              Vite Dev Server Running
            </span>
            <span className="text-xs font-semibold px-3 py-2 bg-primary text-on-primary rounded-lg shadow-sm">
              React 19
            </span>
          </div>
        </header>

        {/* ---------------------------------------------------- */}
        {/* SECTION 1: SECTION HEADER */}
        {/* ---------------------------------------------------- */}
        <section className="bg-surface-container-lowest rounded-3xl p-8 border border-outline-variant/20 shadow-sm space-y-6">
          <SectionHeader
            title="SectionHeader Component Tests"
            subtitle="Testing title formats, layout alignments, sizes, and long-text behaviors."
          />

          <div className="space-y-8 divide-y divide-outline-variant/20">
            {/* Test 1: Title Only */}
            <div className="pt-4 space-y-2">
              <span className="text-xs font-semibold text-primary/70 block uppercase tracking-wider">
                Test Case 1: Title Only
              </span>
              <div className="bg-surface-container rounded-xl p-6 border border-outline-variant/10">
                <SectionHeader title="This is a Title Only Header" />
              </div>
            </div>

            {/* Test 2: Title + Subtitle */}
            <div className="pt-6 space-y-2">
              <span className="text-xs font-semibold text-primary/70 block uppercase tracking-wider">
                Test Case 2: Title + Subtitle
              </span>
              <div className="bg-surface-container rounded-xl p-6 border border-outline-variant/10">
                <SectionHeader 
                  title="Discover Quiet Spaces" 
                  subtitle="Explore libraries, work-friendly cafes, and hidden gardens in your city."
                />
              </div>
            </div>

            {/* Test 3: Long Title Truncation/Wrap */}
            <div className="pt-6 space-y-2">
              <span className="text-xs font-semibold text-primary/70 block uppercase tracking-wider">
                Test Case 3: Edge Case — Extreme Long Title
              </span>
              <div className="bg-surface-container rounded-xl p-6 border border-outline-variant/10">
                <SectionHeader 
                  title="A Highly Detailed Section Header for Categorizing Places that have an Exceptionally High Concentration of Quiet Studying Cafes and Outdoors Working Stations" 
                  subtitle="Standard sub-title explanation goes here."
                />
              </div>
            </div>

            {/* Test 4: Long Subtitle Text */}
            <div className="pt-6 space-y-2">
              <span className="text-xs font-semibold text-primary/70 block uppercase tracking-wider">
                Test Case 4: Edge Case — Extreme Long Subtitle
              </span>
              <div className="bg-surface-container rounded-xl p-6 border border-outline-variant/10">
                <SectionHeader 
                  title="Standard Header Title" 
                  subtitle="This subtitle contains a very long paragraph to verify the max-width wrapping behaviors. It is designed to check how multiple sentences read when rendered inside the header layout, ensuring it does not stretch the line length to an unreadable width on ultra-wide screens. By default, it uses a max-w-3xl constraint to keep text legible."
                />
              </div>
            </div>

            {/* Test 5: Alignments */}
            <div className="pt-6 space-y-2">
              <span className="text-xs font-semibold text-primary/70 block uppercase tracking-wider">
                Test Case 5: Alignments (Left / Center / Right)
              </span>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-surface-container rounded-xl p-6 border border-outline-variant/10">
                  <span className="text-xs text-on-surface-variant/55 block mb-4">[align="left"] (default)</span>
                  <SectionHeader title="Left Align" subtitle="Aligned to the left start point" align="left" />
                </div>
                <div className="bg-surface-container rounded-xl p-6 border border-outline-variant/10">
                  <span className="text-xs text-on-surface-variant/55 block mb-4">[align="center"]</span>
                  <SectionHeader title="Center Align" subtitle="Aligned to the absolute center" align="center" />
                </div>
                <div className="bg-surface-container rounded-xl p-6 border border-outline-variant/10">
                  <span className="text-xs text-on-surface-variant/55 block mb-4">[align="right"]</span>
                  <SectionHeader title="Right Align" subtitle="Aligned to the right end point" align="right" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------- */}
        {/* SECTION 2: PRIMARY BUTTON */}
        {/* ---------------------------------------------------- */}
        <section className="bg-surface-container-lowest rounded-3xl p-8 border border-outline-variant/20 shadow-sm space-y-6">
          <SectionHeader
            title="PrimaryButton Component Tests"
            subtitle="Testing button types, sizes, icon alignments, states, and style overrides."
          />

          <div className="space-y-8 divide-y divide-outline-variant/20">
            {/* Test 1: Variants */}
            <div className="pt-4 space-y-2">
              <span className="text-xs font-semibold text-primary/70 block uppercase tracking-wider">
                Test Case 1: Styles & Variants
              </span>
              <div className="flex flex-wrap gap-4 bg-surface-container rounded-xl p-6 border border-outline-variant/10">
                <div className="flex flex-col items-center gap-2">
                  <PrimaryButton variant="primary">Primary</PrimaryButton>
                  <span className="text-[11px] text-on-surface-variant">variant="primary"</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <PrimaryButton variant="secondary">Secondary</PrimaryButton>
                  <span className="text-[11px] text-on-surface-variant">variant="secondary"</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <PrimaryButton variant="outline">Outline</PrimaryButton>
                  <span className="text-[11px] text-on-surface-variant">variant="outline"</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <PrimaryButton variant="ghost">Ghost</PrimaryButton>
                  <span className="text-[11px] text-on-surface-variant">variant="ghost"</span>
                </div>
              </div>
            </div>

            {/* Test 2: Sizes */}
            <div className="pt-6 space-y-2">
              <span className="text-xs font-semibold text-primary/70 block uppercase tracking-wider">
                Test Case 2: Size Scales
              </span>
              <div className="flex flex-wrap items-end gap-6 bg-surface-container rounded-xl p-6 border border-outline-variant/10">
                <div className="flex flex-col items-center gap-2">
                  <PrimaryButton size="sm">Small Size</PrimaryButton>
                  <span className="text-[11px] text-on-surface-variant">size="sm"</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <PrimaryButton size="md">Medium Size</PrimaryButton>
                  <span className="text-[11px] text-on-surface-variant">size="md" (default)</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <PrimaryButton size="lg">Large Size</PrimaryButton>
                  <span className="text-[11px] text-on-surface-variant">size="lg"</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <PrimaryButton size="xl">Extra Large</PrimaryButton>
                  <span className="text-[11px] text-on-surface-variant">size="xl"</span>
                </div>
              </div>
            </div>

            {/* Test 3: With Icons */}
            <div className="pt-6 space-y-2">
              <span className="text-xs font-semibold text-primary/70 block uppercase tracking-wider">
                Test Case 3: Button Icon Alignments
              </span>
              <div className="flex flex-wrap gap-4 bg-surface-container rounded-xl p-6 border border-outline-variant/10">
                <div className="flex flex-col items-center gap-2">
                  <PrimaryButton icon="home" iconPosition="left">
                    Left Icon
                  </PrimaryButton>
                  <span className="text-[11px] text-on-surface-variant">iconPosition="left"</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <PrimaryButton icon="arrow_forward" iconPosition="right">
                    Right Icon
                  </PrimaryButton>
                  <span className="text-[11px] text-on-surface-variant">iconPosition="right" (default)</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <PrimaryButton variant="secondary" icon="search" iconPosition="left">
                    Secondary Icon
                  </PrimaryButton>
                  <span className="text-[11px] text-on-surface-variant">Secondary + Left Icon</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <PrimaryButton variant="outline" icon="share">
                    Outline Icon
                  </PrimaryButton>
                  <span className="text-[11px] text-on-surface-variant">Outline + Right Icon</span>
                </div>
              </div>
            </div>

            {/* Test 4: Disabled state */}
            <div className="pt-6 space-y-2">
              <span className="text-xs font-semibold text-primary/70 block uppercase tracking-wider">
                Test Case 4: Disabled State
              </span>
              <div className="flex flex-wrap gap-4 bg-surface-container rounded-xl p-6 border border-outline-variant/10">
                <div className="flex flex-col items-center gap-2">
                  <PrimaryButton disabled>Disabled Primary</PrimaryButton>
                  <span className="text-[11px] text-on-surface-variant">disabled [primary]</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <PrimaryButton variant="secondary" disabled>Disabled Secondary</PrimaryButton>
                  <span className="text-[11px] text-on-surface-variant">disabled [secondary]</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <PrimaryButton variant="outline" disabled>Disabled Outline</PrimaryButton>
                  <span className="text-[11px] text-on-surface-variant">disabled [outline]</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <PrimaryButton variant="ghost" disabled>Disabled Ghost</PrimaryButton>
                  <span className="text-[11px] text-on-surface-variant">disabled [ghost]</span>
                </div>
              </div>
            </div>

            {/* Test 5: Custom className */}
            <div className="pt-6 space-y-2">
              <span className="text-xs font-semibold text-primary/70 block uppercase tracking-wider">
                Test Case 5: Custom Class Override (Full width, custom gradients)
              </span>
              <div className="space-y-4 bg-surface-container rounded-xl p-6 border border-outline-variant/10">
                <div>
                  <PrimaryButton className="w-full bg-linear-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold rounded-xl shadow-lg shadow-indigo-500/20 py-4">
                    Full Width Custom Gradient Button
                  </PrimaryButton>
                  <span className="text-[11px] text-on-surface-variant block mt-1">
                    className="w-full bg-linear-to-r from-purple-600 to-indigo-600 text-white font-bold rounded-xl py-4"
                  </span>
                </div>
                <div>
                  <PrimaryButton variant="outline" className="border-red-500 text-red-500 hover:bg-red-50 hover:border-red-600">
                    Danger Outline Button
                  </PrimaryButton>
                  <span className="text-[11px] text-on-surface-variant block mt-1">
                    className="border-red-500 text-red-500 hover:bg-red-50"
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------- */}
        {/* SECTION 3: INPUT FIELD */}
        {/* ---------------------------------------------------- */}
        <section className="bg-surface-container-lowest rounded-3xl p-8 border border-outline-variant/20 shadow-sm space-y-6">
          <SectionHeader
            title="InputField Component Tests"
            subtitle="Testing inputs, labels, validation states, inputs with icons, and edge cases."
          />

          <div className="space-y-8 divide-y divide-outline-variant/20">
            {/* Grid layout for basic combinations */}
            <div className="pt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Basic input */}
              <div className="space-y-2">
                <span className="text-xs font-semibold text-primary/70 block uppercase tracking-wider">
                  Test 1: Basic Input (No Label)
                </span>
                <div className="bg-surface-container rounded-xl p-6 border border-outline-variant/10">
                  <InputField placeholder="Placeholder only..." />
                </div>
              </div>

              {/* Input with label */}
              <div className="space-y-2">
                <span className="text-xs font-semibold text-primary/70 block uppercase tracking-wider">
                  Test 2: With Label & Placeholder
                </span>
                <div className="bg-surface-container rounded-xl p-6 border border-outline-variant/10">
                  <InputField label="User ID" placeholder="e.g. abdalla123" />
                </div>
              </div>

              {/* Input with icon */}
              <div className="space-y-2">
                <span className="text-xs font-semibold text-primary/70 block uppercase tracking-wider">
                  Test 3: Input With Icon
                </span>
                <div className="bg-surface-container rounded-xl p-6 border border-outline-variant/10">
                  <InputField label="Location search" placeholder="Search for library, cafe..." icon="location_on" />
                </div>
              </div>

              {/* Input with error message */}
              <div className="space-y-2">
                <span className="text-xs font-semibold text-primary/70 block uppercase tracking-wider">
                  Test 4: Validation / Error State
                </span>
                <div className="bg-surface-container rounded-xl p-6 border border-outline-variant/10">
                  <InputField 
                    label="Username Registry" 
                    placeholder="Enter unique name" 
                    error="This username is already taken. Try another." 
                    defaultValue="taken_name"
                  />
                </div>
              </div>

              {/* Disabled state */}
              <div className="space-y-2">
                <span className="text-xs font-semibold text-primary/70 block uppercase tracking-wider">
                  Test 5: Disabled State
                </span>
                <div className="bg-surface-container rounded-xl p-6 border border-outline-variant/10">
                  <InputField 
                    label="System Identifier" 
                    defaultValue="SYS-987-PRO" 
                    disabled={true} 
                    icon="lock"
                  />
                </div>
              </div>

              {/* Email Type */}
              <div className="space-y-2">
                <span className="text-xs font-semibold text-primary/70 block uppercase tracking-wider">
                  Test 6: Email Type Validation
                </span>
                <div className="bg-surface-container rounded-xl p-6 border border-outline-variant/10">
                  <InputField 
                    label="Email Address" 
                    type="email" 
                    placeholder="contact@spotly.com" 
                    icon="mail"
                  />
                </div>
              </div>

              {/* Password Type */}
              <div className="space-y-2">
                <span className="text-xs font-semibold text-primary/70 block uppercase tracking-wider">
                  Test 7: Password Type (Masked Value)
                </span>
                <div className="bg-surface-container rounded-xl p-6 border border-outline-variant/10">
                  <InputField 
                    label="Account Password" 
                    type="password" 
                    value={passwordValue} 
                    onChange={(e) => setPasswordValue(e.target.value)}
                    icon="key"
                  />
                </div>
              </div>

              {/* Long text value */}
              <div className="space-y-2">
                <span className="text-xs font-semibold text-primary/70 block uppercase tracking-wider">
                  Test 8: Long Text Value (Truncation check)
                </span>
                <div className="bg-surface-container rounded-xl p-6 border border-outline-variant/10">
                  <InputField 
                    label="Extremely Long Text Input" 
                    defaultValue="This is an incredibly long text string to check how the input handles overflowing content horizontally when the user continues typing beyond the layout constraints." 
                  />
                </div>
              </div>
            </div>

            {/* Interactive Focus State Example */}
            <div className="pt-6 space-y-2">
              <span className="text-xs font-semibold text-primary/70 block uppercase tracking-wider">
                Test Case 9: Programmatic & Focus State Example
              </span>
              <div className="bg-surface-container rounded-xl p-6 border border-outline-variant/10 space-y-4">
                <p className="text-xs text-on-surface-variant/80">
                  Click the button below to programmatically focus the input field, triggering its active styling (colored outline border and shadow).
                </p>
                <div className="flex flex-col sm:flex-row items-end gap-4">
                  <InputField 
                    ref={inputRef}
                    label="Interactive Focus Field" 
                    placeholder="Click the focus trigger button..." 
                    onFocus={() => setFocusedInput(true)}
                    onBlur={() => setFocusedInput(false)}
                    className="max-w-md"
                  />
                  <PrimaryButton onClick={handleFocusClick} className="w-full sm:w-auto h-[48px]">
                    Trigger Focus
                  </PrimaryButton>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-xs text-on-surface-variant">Focus status:</span>
                  <span className={clsx(
                    "text-xs font-semibold px-2 py-0.5 rounded-md transition-colors",
                    focusedInput ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                  )}>
                    {focusedInput ? "FOCUSED (Active Outline)" : "BLURRED"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------- */}
        {/* SECTION 4: SEARCH BAR */}
        {/* ---------------------------------------------------- */}
        <section className="bg-surface-container-lowest rounded-3xl p-8 border border-outline-variant/20 shadow-sm space-y-6">
          <SectionHeader
            title="SearchBar Component Tests"
            subtitle="Testing states and layouts. NOTE: Query state is fully internal to the component, so values must be entered manually."
          />

          <div className="space-y-8 divide-y divide-outline-variant/20">
            {/* Test 1: Empty state (Default) & Large Variant */}
            <div className="pt-4 space-y-4">
              <span className="text-xs font-semibold text-primary/70 block uppercase tracking-wider">
                Test Case 1: Standard & Large Variants (Empty State)
              </span>
              <div className="grid grid-cols-1 gap-6 bg-surface-container rounded-xl p-6 border border-outline-variant/10">
                <div className="space-y-2">
                  <span className="text-xs text-on-surface-variant block">Standard size (large={"{false}"})</span>
                  <SearchBar placeholder="Search for studying spots..." large={false} />
                </div>
                <div className="space-y-2">
                  <span className="text-xs text-on-surface-variant block">Large size (large={"{true}"})</span>
                  <SearchBar placeholder="Find a spot with fast Wi-Fi and power outlets..." large={true} />
                </div>
              </div>
            </div>

            {/* Test 2: Responsiveness (Mobile vs Desktop) */}
            <div className="pt-6 space-y-4">
              <span className="text-xs font-semibold text-primary/70 block uppercase tracking-wider">
                Test Case 2: Width Constraints & Responsiveness
              </span>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-surface-container rounded-xl p-6 border border-outline-variant/10 space-y-2">
                  <span className="text-xs font-semibold text-on-surface-variant/70 block">
                    Mobile Width Container (max-w-[360px])
                  </span>
                  <p className="text-[11px] text-on-surface-variant/60">
                    Testing how elements fit inside narrow screens (e.g. mobile viewport).
                  </p>
                  <div className="max-w-[360px] border border-outline/10 p-2 rounded-2xl bg-background/50">
                    <SearchBar placeholder="Search spots..." large={false} />
                  </div>
                </div>

                <div className="bg-surface-container rounded-xl p-6 border border-outline-variant/10 space-y-2">
                  <span className="text-xs font-semibold text-on-surface-variant/70 block">
                    Desktop Width Container (Full Width / Max 800px)
                  </span>
                  <p className="text-[11px] text-on-surface-variant/60">
                    Testing how elements expand to fit desktop screens.
                  </p>
                  <div className="max-w-[800px] border border-outline/10 p-2 rounded-3xl bg-background/50">
                    <SearchBar placeholder="Search local work and study spots..." large={true} />
                  </div>
                </div>
              </div>
            </div>

            {/* Test 3: Simulation & Limitations Explanation */}
            <div className="pt-6 space-y-2">
              <span className="text-xs font-semibold text-primary/70 block uppercase tracking-wider">
                Test Case 3: Interactive Demo & State Simulation
              </span>
              <div className="bg-surface-container rounded-xl p-6 border border-outline-variant/10 space-y-4">
                <p className="text-xs text-on-surface-variant/80">
                  Type a query below to test search mechanics. Since the SearchBar component uses internal states and React Router's <code className="bg-surface-container-high px-1 py-0.5 rounded text-primary">useNavigate</code>, submitting this form will navigate to <code className="bg-surface-container-high px-1 py-0.5 rounded text-primary">/discover?q=[query]</code>.
                </p>
                <div className="max-w-2xl bg-background p-4 rounded-2xl border border-outline-variant/30">
                  <SearchBar placeholder="Type text here and hit Search..." />
                </div>
                <div className="bg-yellow-50 border border-yellow-200 text-yellow-800 p-4 rounded-xl text-xs space-y-1">
                  <span className="font-bold block">⚠️ API Limitation Notice:</span>
                  <p>
                    The current SearchBar component does not accept a <code className="font-semibold">value</code> or <code className="font-semibold">defaultValue</code> prop. Its input state is entirely self-contained, meaning it cannot be pre-filled programmatically or controlled from the outside.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------- */}
        {/* SECTION 5: TAG BADGE */}
        {/* ---------------------------------------------------- */}
        <section className="bg-surface-container-lowest rounded-3xl p-8 border border-outline-variant/20 shadow-sm space-y-6">
          <SectionHeader
            title="TagBadge Component Tests"
            subtitle="Testing colors, text lengths, sizes, and state representations (active vs inactive)."
          />

          <div className="space-y-8 divide-y divide-outline-variant/20">
            {/* Test 1: Color Variants */}
            <div className="pt-4 space-y-2">
              <span className="text-xs font-semibold text-primary/70 block uppercase tracking-wider">
                Test Case 1: Color Variants
              </span>
              <div className="flex flex-wrap gap-4 items-center bg-surface-container rounded-xl p-6 border border-outline-variant/10">
                <div className="flex flex-col items-center gap-2">
                  <TagBadge variant="default">Default</TagBadge>
                  <span className="text-[11px] text-on-surface-variant">variant="default"</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <TagBadge variant="secondary">Secondary</TagBadge>
                  <span className="text-[11px] text-on-surface-variant">variant="secondary"</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <TagBadge variant="success">Success</TagBadge>
                  <span className="text-[11px] text-on-surface-variant">variant="success"</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <TagBadge variant="warning">Warning</TagBadge>
                  <span className="text-[11px] text-on-surface-variant">variant="warning"</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <TagBadge variant="danger">Danger</TagBadge>
                  <span className="text-[11px] text-on-surface-variant">variant="danger"</span>
                </div>
              </div>
            </div>

            {/* Test 2: Sizes */}
            <div className="pt-6 space-y-2">
              <span className="text-xs font-semibold text-primary/70 block uppercase tracking-wider">
                Test Case 2: Size Scales
              </span>
              <div className="flex flex-wrap gap-6 items-end bg-surface-container rounded-xl p-6 border border-outline-variant/10">
                <div className="flex flex-col items-center gap-2">
                  <TagBadge size="sm" variant="default">Small Size</TagBadge>
                  <span className="text-[11px] text-on-surface-variant">size="sm"</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <TagBadge size="md" variant="default">Medium Size</TagBadge>
                  <span className="text-[11px] text-on-surface-variant">size="md" (default)</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <TagBadge size="lg" variant="default">Large Size</TagBadge>
                  <span className="text-[11px] text-on-surface-variant">size="lg"</span>
                </div>
              </div>
            </div>

            {/* Test 3: Text Lengths */}
            <div className="pt-6 space-y-2">
              <span className="text-xs font-semibold text-primary/70 block uppercase tracking-wider">
                Test Case 3: Text Lengths (Short vs Extreme Long)
              </span>
              <div className="flex flex-wrap gap-4 items-center bg-surface-container rounded-xl p-6 border border-outline-variant/10">
                <div className="flex flex-col items-start gap-2">
                  <TagBadge>A</TagBadge>
                  <span className="text-[11px] text-on-surface-variant">Single Char</span>
                </div>
                <div className="flex flex-col items-start gap-2">
                  <TagBadge>Wi-Fi</TagBadge>
                  <span className="text-[11px] text-on-surface-variant">Short Text</span>
                </div>
                <div className="flex flex-col items-start gap-2">
                  <TagBadge>Outdoor Seating with Shaded Pergola and Garden Views</TagBadge>
                  <span className="text-[11px] text-on-surface-variant">Long Text (Wrapping test)</span>
                </div>
              </div>
            </div>

            {/* Test 4: Active vs Inactive State Representations */}
            <div className="pt-6 space-y-2">
              <span className="text-xs font-semibold text-primary/70 block uppercase tracking-wider">
                Test Case 4: Active vs Inactive States
              </span>
              <div className="bg-surface-container rounded-xl p-6 border border-outline-variant/10 space-y-4">
                <p className="text-xs text-on-surface-variant/80">
                  Since TagBadge does not have an explicit <code className="bg-surface-container-high px-1 py-0.5 rounded text-primary">active</code> boolean prop, we can test state representations using built-in variants or styling classes:
                </p>
                <div className="flex flex-wrap gap-4">
                  {/* Variant-based Representation */}
                  <div className="flex flex-col items-center gap-2 border border-outline-variant/20 p-4 rounded-xl bg-background">
                    <div className="flex gap-2">
                      <TagBadge variant="default">Active</TagBadge>
                      <TagBadge variant="secondary">Inactive</TagBadge>
                    </div>
                    <span className="text-[11px] font-semibold text-on-surface-variant block mt-1">
                      Using Variants (default / secondary)
                    </span>
                  </div>

                  {/* ClassName-based Representation */}
                  <div className="flex flex-col items-center gap-2 border border-outline-variant/20 p-4 rounded-xl bg-background">
                    <div className="flex gap-2">
                      <TagBadge className="bg-primary text-on-primary ring-2 ring-primary/20">Active Filter</TagBadge>
                      <TagBadge className="bg-surface-container-high text-on-surface-variant border border-outline-variant/30">Inactive Filter</TagBadge>
                    </div>
                    <span className="text-[11px] font-semibold text-on-surface-variant block mt-1">
                      Using Custom className overrides
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
