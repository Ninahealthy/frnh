import Script from "next/script";

export default function Search() {
  return (
    <>
      <mainsearch>
        <Script src="https://cse.google.com/cse.js?cx=763af41fbeba0fc8e" />
        <div class="gcse-searchresults-only"></div>
      </mainsearch>
    </>
  );
}
