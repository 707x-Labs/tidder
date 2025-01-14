import SearchBar from "../search/search-bar";

export default function Header() {
  return (
    <header className="flex items-center justify-between border-b border-primary relative h-14 p-2">
      <h1 className="tracking-wider text-xl font-semibold text-red-900">
        {/* Reference: https://en.wiktionary.org/wiki/Appendix:Unicode/Unified_Canadian_Aboriginal_Syllabics */}
        TiᗡᑓᕮR
      </h1>
      <div className="flex items-center gap-3">
        <SearchBar />
        <section>Sort by</section>
      </div>
    </header>
  );
}
