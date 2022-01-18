import { S as SvelteComponent, i as init, s as safe_not_equal, k as space, e as element, t as text, P as HtmlTagHydration, l as empty, K as query_selector_all, d as detach, m as claim_space, c as claim_element, a as children, h as claim_text, Q as claim_html_tag, b as attr, g as insert_hydration, F as append_hydration, j as set_data, G as noop } from "../chunks/vendor-b5a793c6.js";
import { b as base } from "../chunks/paths-4b3c6e7e.js";
var _slug__svelte_svelte_type_style_lang = "";
function create_fragment(ctx) {
  let title_value;
  let t0;
  let h1;
  let t1_value = ctx[0].metadata.title + "";
  let t1;
  let t2;
  let p;
  let a;
  let t3;
  let t4;
  let t5;
  let t6;
  let html_tag;
  let raw_value = ctx[0].content + "";
  let html_anchor;
  document.title = title_value = ctx[0].metadata.title;
  return {
    c() {
      t0 = space();
      h1 = element("h1");
      t1 = text(t1_value);
      t2 = space();
      p = element("p");
      a = element("a");
      t3 = text("zhuzilin");
      t4 = space();
      t5 = text(ctx[1]);
      t6 = space();
      html_tag = new HtmlTagHydration();
      html_anchor = empty();
      this.h();
    },
    l(nodes) {
      const head_nodes = query_selector_all('[data-svelte="svelte-18mmgjc"]', document.head);
      head_nodes.forEach(detach);
      t0 = claim_space(nodes);
      h1 = claim_element(nodes, "H1", { class: true });
      var h1_nodes = children(h1);
      t1 = claim_text(h1_nodes, t1_value);
      h1_nodes.forEach(detach);
      t2 = claim_space(nodes);
      p = claim_element(nodes, "P", { class: true });
      var p_nodes = children(p);
      a = claim_element(p_nodes, "A", { href: true });
      var a_nodes = children(a);
      t3 = claim_text(a_nodes, "zhuzilin");
      a_nodes.forEach(detach);
      t4 = claim_space(p_nodes);
      t5 = claim_text(p_nodes, ctx[1]);
      p_nodes.forEach(detach);
      t6 = claim_space(nodes);
      html_tag = claim_html_tag(nodes);
      html_anchor = empty();
      this.h();
    },
    h() {
      attr(h1, "class", "title svelte-1mgzh8t");
      attr(a, "href", "https://github.com/zhuzilin");
      attr(p, "class", "info");
      html_tag.a = html_anchor;
    },
    m(target, anchor) {
      insert_hydration(target, t0, anchor);
      insert_hydration(target, h1, anchor);
      append_hydration(h1, t1);
      insert_hydration(target, t2, anchor);
      insert_hydration(target, p, anchor);
      append_hydration(p, a);
      append_hydration(a, t3);
      append_hydration(p, t4);
      append_hydration(p, t5);
      insert_hydration(target, t6, anchor);
      html_tag.m(raw_value, target, anchor);
      insert_hydration(target, html_anchor, anchor);
    },
    p(ctx2, [dirty]) {
      if (dirty & 1 && title_value !== (title_value = ctx2[0].metadata.title)) {
        document.title = title_value;
      }
      if (dirty & 1 && t1_value !== (t1_value = ctx2[0].metadata.title + ""))
        set_data(t1, t1_value);
      if (dirty & 1 && raw_value !== (raw_value = ctx2[0].content + ""))
        html_tag.p(raw_value);
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(t0);
      if (detaching)
        detach(h1);
      if (detaching)
        detach(t2);
      if (detaching)
        detach(p);
      if (detaching)
        detach(t6);
      if (detaching)
        detach(html_anchor);
      if (detaching)
        html_tag.d();
    }
  };
}
async function load({ page, fetch }) {
  const slug = page.params.slug;
  const post = await fetch(`${base}/${slug}.json`).then((r) => r.json());
  return { props: { post } };
}
function instance($$self, $$props, $$invalidate) {
  let { post } = $$props;
  let date = post.metadata.date.toUpperCase();
  $$self.$$set = ($$props2) => {
    if ("post" in $$props2)
      $$invalidate(0, post = $$props2.post);
  };
  return [post, date];
}
class U5Bslugu5D extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, { post: 0 });
  }
}
export { U5Bslugu5D as default, load };
