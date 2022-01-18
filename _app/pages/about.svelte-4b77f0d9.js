import { S as SvelteComponent, i as init, s as safe_not_equal, k as space, e as element, t as text, K as query_selector_all, d as detach, m as claim_space, c as claim_element, a as children, h as claim_text, b as attr, g as insert_hydration, F as append_hydration, G as noop } from "../chunks/vendor-b5a793c6.js";
function create_fragment(ctx) {
  let t0;
  let h1;
  let t1;
  let t2;
  let p0;
  let t3;
  let a0;
  let t4;
  let t5;
  let t6;
  let p1;
  let t7;
  let a1;
  let t8;
  let t9;
  return {
    c() {
      t0 = space();
      h1 = element("h1");
      t1 = text("About");
      t2 = space();
      p0 = element("p");
      t3 = text('Recently, SvelteKit is released in public beta. And we could finally see what Rich Harris called "');
      a0 = element("a");
      t4 = text("Futuristic Web Development");
      t5 = text(`" is made of. It's always better to learn with project, so I made this little blog with SvelteKit and deployed it on the Github Pages.`);
      t6 = space();
      p1 = element("p");
      t7 = text("The Github repo for this blog is ");
      a1 = element("a");
      t8 = text("svelte-kit-blog-demo");
      t9 = text(".");
      this.h();
    },
    l(nodes) {
      const head_nodes = query_selector_all('[data-svelte="svelte-1myew8g"]', document.head);
      head_nodes.forEach(detach);
      t0 = claim_space(nodes);
      h1 = claim_element(nodes, "H1", {});
      var h1_nodes = children(h1);
      t1 = claim_text(h1_nodes, "About");
      h1_nodes.forEach(detach);
      t2 = claim_space(nodes);
      p0 = claim_element(nodes, "P", {});
      var p0_nodes = children(p0);
      t3 = claim_text(p0_nodes, 'Recently, SvelteKit is released in public beta. And we could finally see what Rich Harris called "');
      a0 = claim_element(p0_nodes, "A", { href: true });
      var a0_nodes = children(a0);
      t4 = claim_text(a0_nodes, "Futuristic Web Development");
      a0_nodes.forEach(detach);
      t5 = claim_text(p0_nodes, `" is made of. It's always better to learn with project, so I made this little blog with SvelteKit and deployed it on the Github Pages.`);
      p0_nodes.forEach(detach);
      t6 = claim_space(nodes);
      p1 = claim_element(nodes, "P", {});
      var p1_nodes = children(p1);
      t7 = claim_text(p1_nodes, "The Github repo for this blog is ");
      a1 = claim_element(p1_nodes, "A", { href: true });
      var a1_nodes = children(a1);
      t8 = claim_text(a1_nodes, "svelte-kit-blog-demo");
      a1_nodes.forEach(detach);
      t9 = claim_text(p1_nodes, ".");
      p1_nodes.forEach(detach);
      this.h();
    },
    h() {
      document.title = "About";
      attr(a0, "href", "https://www.youtube.com/watch?v=qSfdtmcZ4d0");
      attr(a1, "href", "https://github.com/svelteland/svelte-kit-blog-demo");
    },
    m(target, anchor) {
      insert_hydration(target, t0, anchor);
      insert_hydration(target, h1, anchor);
      append_hydration(h1, t1);
      insert_hydration(target, t2, anchor);
      insert_hydration(target, p0, anchor);
      append_hydration(p0, t3);
      append_hydration(p0, a0);
      append_hydration(a0, t4);
      append_hydration(p0, t5);
      insert_hydration(target, t6, anchor);
      insert_hydration(target, p1, anchor);
      append_hydration(p1, t7);
      append_hydration(p1, a1);
      append_hydration(a1, t8);
      append_hydration(p1, t9);
    },
    p: noop,
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
        detach(p0);
      if (detaching)
        detach(t6);
      if (detaching)
        detach(p1);
    }
  };
}
class About extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, null, create_fragment, safe_not_equal, {});
  }
}
export { About as default };
