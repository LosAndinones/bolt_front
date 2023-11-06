import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead } from '../astro.dcaadc57.mjs';
import 'html-escaper';
import 'cookie';
import 'kleur/colors';
import '@astrojs/internal-helpers/path';
import 'path-to-regexp';
import 'mime';
import 'string-width';

const $$Astro = createAstro();
const $$Login = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Login;
  return renderTemplate`${maybeRenderHead()}<bolt_form>
    <button_form text="submit"></button_form>
</bolt_form>`;
}, "D:/dev/university/bolt/bolt_front/src/pages/login.astro", void 0);

const $$file = "D:/dev/university/bolt/bolt_front/src/pages/login.astro";
const $$url = "/login";

export { $$Login as default, $$file as file, $$url as url };
