import { $ } from "https://deno.land/x/dax@0.28.0/mod.ts";
import { Recipe } from "https://raw.githubusercontent.com/sigmaSd/build/master/lib.ts";

const recipe: Recipe = {
  name: "Helix",
  // path of the executable to upload
  target: "helix/target/release/hx",
  // installs rust toolchain
  projectType: ["cargo"],
};
export default recipe;

if (import.meta.main) {
  await $`git clone https://github.com/helix-editor/helix`;
  await $`cd helix && cargo build --release`;
}
