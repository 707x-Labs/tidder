import { PropsWithChildren } from "react";
import useSearch from "./use-search";
import { createPortal } from "react-dom";
import over18Icon from "./over-18-icon.svg";
import defaultIcon from "./default-icon.svg";
export default function SearchBar() {
  const { search, setSearch, data, isLoading } = useSearch();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setSearch(inputValue);
  };

  const totalResult = data?.dist;
  const results = data?.children;

  function RenderSubredditIcon({
    name,
    icon,
    over18,
    showOver18 = true,
  }: {
    name: string;
    icon: string;
    over18: boolean;
    showOver18: boolean;
  }) {
    if (icon && over18 && showOver18) {
      return <img className="size-8 rounded-lg" src={icon} alt={name} />;
    } else if (over18 && !showOver18) {
      return <img className="size-8" src={over18Icon} alt={name} />;
    } else if (!icon) {
      return <img className="size-8 rounded-lg" src={defaultIcon} alt={name} />;
    } else {
      return <img className="size-8 rounded-lg" src={icon} alt={name} />;
    }
  }

  return (
    <>
      <div>
        <input
          className="bg-primary p-1 border border-primary rounded-md"
          id="search"
          type="search"
          placeholder="Search for subreddit"
          value={search}
          onChange={handleSearch}
        />
      </div>

      {isLoading ? (
        <SearchDropdown>
          <span>Loading...</span>
        </SearchDropdown>
      ) : null}
      {totalResult ? (
        <SearchDropdown>
          {results?.map((result) => {
            const item = result?.data;
            return (
              <section className="flex gap-2 bg-secondary p-1 rounded-md items-start">
                <RenderSubredditIcon
                  name={item.display_name}
                  icon={item.community_icon || item.icon_img}
                  over18={item.over18}
                  showOver18={true}
                />
                <div className="flex flex-col gap-1" key={item.id}>
                  <h1 className="flex items-center gap-2">
                    <a
                      target="_blank"
                      className="hover:text-secondary"
                      href={`https://www.reddit.com/${item.display_name_prefixed}`}
                    >
                      {item.display_name}
                    </a>
                    {item.over18 ? <p className="text-red-500">18+</p> : null}
                  </h1>
                  <p className="text-xs">{item.public_description}</p>
                </div>
              </section>
            );
          })}
        </SearchDropdown>
      ) : null}
    </>
  );
}

function SearchDropdown({ children }: PropsWithChildren) {
  return createPortal(
    <div className="min-h-0 max-h-48 overflow-y-auto absolute inset-0 top-14 shadow-sm border border-primary rounded-sm mx-auto w-[80%] z-10">
      <div className="flex flex-col gap-3 p-2">{children}</div>
    </div>,
    document.body
  );
}
