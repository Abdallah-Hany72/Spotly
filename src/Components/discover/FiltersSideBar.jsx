// src/Components/discover/FiltersSidebar/FiltersSidebar.jsx
import MoodFilter from "./MoodFilter";
import CuisineFilter from "./CuisineFilter";

import PrimaryButton from "../Ui/PrimaryButton/PrimaryButton";

export default function FiltersSidebar({ filters, onChange, onApply }) {
  return (
    <aside className="w-56 flex-shrink-0 space-y-6">
      <h2 className="text-lg font-bold text-on-surface">Filters</h2>

      <MoodFilter
        selected={filters.moods}
        onChange={(moods) => onChange({ ...filters, moods })}
      />

      <CuisineFilter
        value={filters.cuisine}
        onChange={(cuisine) => onChange({ ...filters, cuisine })}
      />


      <PrimaryButton onClick={onApply} className="w-full">
        Apply Changes
      </PrimaryButton>

      {/* Community Banner */}
      <div className="bg-surface-container border border-outline-variant/30 rounded-2xl p-4 space-y-2">
        <p className="text-sm font-semibold text-primary">Unlock Curated Guides</p>
        <p className="text-xs text-on-surface-variant leading-relaxed">
          Join our community for weekly "off-the-radar" neighborhood gems.
        </p>
        <button className="text-xs font-semibold text-primary flex items-center gap-1 hover:underline">
          Sign up free →
        </button>
      </div>
    </aside>
  );
}