import { S as SvelteComponent, i as init, s as safe_not_equal, e as element, t as text, k as space, c as claim_element, a as children, h as claim_text, d as detach, m as claim_space, b as attr, g as insert_hydration, F as append_hydration, j as set_data, K as query_selector_all, G as noop, O as destroy_each } from "../chunks/vendor-b5a793c6.js";
import { b as base } from "../chunks/paths-4b3c6e7e.js";
var index_svelte_svelte_type_style_lang = "";
function get_each_context(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[1] = list[i];
  return child_ctx;
}
function create_each_block(ctx) {
  let a;
  let h2;
  let t0_value = ctx[1].metadata.title + "";
  let t0;
  let t1;
  let p;
  let t2_value = ctx[1].metadata.excerpt + "";
  let t2;
  let t3;
  let a_href_value;
  return {
    c() {
      a = element("a");
      h2 = element("h2");
      t0 = text(t0_value);
      t1 = space();
      p = element("p");
      t2 = text(t2_value);
      t3 = space();
      this.h();
    },
    l(nodes) {
      a = claim_element(nodes, "A", { href: true });
      var a_nodes = children(a);
      h2 = claim_element(a_nodes, "H2", { class: true });
      var h2_nodes = children(h2);
      t0 = claim_text(h2_nodes, t0_value);
      h2_nodes.forEach(detach);
      t1 = claim_space(a_nodes);
      p = claim_element(a_nodes, "P", { class: true });
      var p_nodes = children(p);
      t2 = claim_text(p_nodes, t2_value);
      p_nodes.forEach(detach);
      t3 = claim_space(a_nodes);
      a_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(h2, "class", "title svelte-1i98gyn");
      attr(p, "class", "svelte-1i98gyn");
      attr(a, "href", a_href_value = `${base}/${ctx[1].slug}`);
    },
    m(target, anchor) {
      insert_hydration(target, a, anchor);
      append_hydration(a, h2);
      append_hydration(h2, t0);
      append_hydration(a, t1);
      append_hydration(a, p);
      append_hydration(p, t2);
      append_hydration(a, t3);
    },
    p(ctx2, dirty) {
      if (dirty & 1 && t0_value !== (t0_value = ctx2[1].metadata.title + ""))
        set_data(t0, t0_value);
      if (dirty & 1 && t2_value !== (t2_value = ctx2[1].metadata.excerpt + ""))
        set_data(t2, t2_value);
      if (dirty & 1 && a_href_value !== (a_href_value = `${base}/${ctx2[1].slug}`)) {
        attr(a, "href", a_href_value);
      }
    },
    d(detaching) {
      if (detaching)
        detach(a);
    }
  };
}
function create_fragment(ctx) {
  let t0;
  let div;
  let h1;
  let t1;
  let t2;
  let p;
  let t3_value = ctx[0].length + "";
  let t3;
  let t4;
  let t5;
  let each_value = ctx[0];
  let each_blocks = [];
  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
  }
  return {
    c() {
      t0 = space();
      div = element("div");
      h1 = element("h1");
      t1 = text("SvelteKit Blog");
      t2 = space();
      p = element("p");
      t3 = text(t3_value);
      t4 = text(" posts.");
      t5 = space();
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      this.h();
    },
    l(nodes) {
      const head_nodes = query_selector_all('[data-svelte="svelte-n3ior8"]', document.head);
      head_nodes.forEach(detach);
      t0 = claim_space(nodes);
      div = claim_element(nodes, "DIV", {});
      var div_nodes = children(div);
      h1 = claim_element(div_nodes, "H1", { class: true });
      var h1_nodes = children(h1);
      t1 = claim_text(h1_nodes, "SvelteKit Blog");
      h1_nodes.forEach(detach);
      t2 = claim_space(div_nodes);
      p = claim_element(div_nodes, "P", { class: true });
      var p_nodes = children(p);
      t3 = claim_text(p_nodes, t3_value);
      t4 = claim_text(p_nodes, " posts.");
      p_nodes.forEach(detach);
      t5 = claim_space(div_nodes);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].l(div_nodes);
      }
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      document.title = "Home";
      attr(h1, "class", "svelte-1i98gyn");
      attr(p, "class", "info svelte-1i98gyn");
    },
    m(target, anchor) {
      insert_hydration(target, t0, anchor);
      insert_hydration(target, div, anchor);
      append_hydration(div, h1);
      append_hydration(h1, t1);
      append_hydration(div, t2);
      append_hydration(div, p);
      append_hydration(p, t3);
      append_hydration(p, t4);
      append_hydration(div, t5);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(div, null);
      }
    },
    p(ctx2, [dirty]) {
      if (dirty & 1 && t3_value !== (t3_value = ctx2[0].length + ""))
        set_data(t3, t3_value);
      if (dirty & 1) {
        each_value = ctx2[0];
        let i;
        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context(ctx2, each_value, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
          } else {
            each_blocks[i] = create_each_block(child_ctx);
            each_blocks[i].c();
            each_blocks[i].m(div, null);
          }
        }
        for (; i < each_blocks.length; i += 1) {
          each_blocks[i].d(1);
        }
        each_blocks.length = each_value.length;
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(t0);
      if (detaching)
        detach(div);
      destroy_each(each_blocks, detaching);
    }
  };
}
async function load({ fetch }) {
  const posts = await fetch(`${base}/index.json`).then((r) => r.json());
  return { props: { posts } };
}
function instance($$self, $$props, $$invalidate) {
  let { posts } = $$props;
  $$self.$$set = ($$props2) => {
    if ("posts" in $$props2)
      $$invalidate(0, posts = $$props2.posts);
  };
  return [posts];
}
class Routes extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, { posts: 0 });
  }
}
export { Routes as default, load };
