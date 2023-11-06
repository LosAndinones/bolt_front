import { c as createAstro, a as createComponent, r as renderTemplate, b as renderHead, d as addAttribute, e as renderSlot, m as maybeRenderHead, f as renderComponent } from '../astro.64fbe324.mjs';
import 'html-escaper';
import 'cookie';
import 'kleur/colors';
import '@astrojs/internal-helpers/path';
import 'path-to-regexp';
import 'mime';
import 'string-width';

const $$Astro$2 = createAstro();
const $$BoltForm = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$BoltForm;
  const { page_title, back_image, title, subtitle } = Astro2.props;
  return renderTemplate`<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="../Styles/layouts/form.css">
        <title>${page_title}</title>
    ${renderHead()}</head>
    <body>
        <div class="container"${addAttribute(`background-image: url('${{ back_image }}');`, "style")}>
            <div class="formulario">
                <h1>${title}</h1>
                <h2>${subtitle}</h2>
                ${renderSlot($$result, $$slots["default"])}
            </div>
        </div>
    </body></html>`;
}, "D:/dev/university/bolt/bolt_front/src/layouts/bolt_form.astro", void 0);

const $$Astro$1 = createAstro();
const $$ButtonForm = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ButtonForm;
  const { text } = Astro2.props;
  return renderTemplate`<link rel="stylesheet" href="../Styles/components/button_form.css">
${maybeRenderHead()}<button class="boton-moderno">${text}</button>`;
}, "D:/dev/university/bolt/bolt_front/src/components/button_form.astro", void 0);

const $$Astro = createAstro();
const $$Login = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Login;
  return renderTemplate`${renderComponent($$result, "BoltForm", $$BoltForm, { "page_title": "Login", "back_image": "https://previews.123rf.com/images/tovovan/tovovan1703/tovovan170300091/74578597-fondo-de-dise%C3%B1o-de-material-4k-abstracto-moderno-blured-fondo-gris-oscuro-para-el-dise%C3%B1o.jpg", "title": "Bolt", "subtitle": "Hola, estas de vuelta!" }, { "default": ($$result2) => renderTemplate`
    ${renderComponent($$result2, "ButtonForm", $$ButtonForm, { "text": "submit" })}
` })}`;
}, "D:/dev/university/bolt/bolt_front/src/pages/login.astro", void 0);

const $$file = "D:/dev/university/bolt/bolt_front/src/pages/login.astro";
const $$url = "/login";

export { $$Login as default, $$file as file, $$url as url };
