import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead } from '../astro.64fbe324.mjs';
import 'html-escaper';
import 'cookie';
import 'kleur/colors';
import '@astrojs/internal-helpers/path';
import 'path-to-regexp';
import 'mime';
import 'string-width';

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${maybeRenderHead()}<h1>index</h1>`;
}, "D:/dev/university/bolt/bolt_front/src/pages/index.astro", void 0);

const $$file = "D:/dev/university/bolt/bolt_front/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
