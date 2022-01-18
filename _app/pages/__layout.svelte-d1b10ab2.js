import { S as SvelteComponent, i as init, s as safe_not_equal, e as element, t as text, k as space, c as claim_element, a as children, h as claim_text, d as detach, m as claim_space, b as attr, g as insert_hydration, F as append_hydration, G as noop, H as svg_element, I as claim_svg_element, f as set_style, J as create_slot, w as create_component, K as query_selector_all, x as claim_component, y as mount_component, L as update_slot_base, M as get_all_dirty_from_scope, N as get_slot_changes, q as transition_in, o as transition_out, B as destroy_component } from "../chunks/vendor-b5a793c6.js";
import { b as base } from "../chunks/paths-4b3c6e7e.js";
var app = "";
var Nav_svelte_svelte_type_style_lang = "";
function create_fragment$2(ctx) {
  let div;
  let nav;
  let a0;
  let h30;
  let t0;
  let t1;
  let a1;
  let h31;
  let t2;
  return {
    c() {
      div = element("div");
      nav = element("nav");
      a0 = element("a");
      h30 = element("h3");
      t0 = text("HOME");
      t1 = space();
      a1 = element("a");
      h31 = element("h3");
      t2 = text("about");
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", {});
      var div_nodes = children(div);
      nav = claim_element(div_nodes, "NAV", { class: true });
      var nav_nodes = children(nav);
      a0 = claim_element(nav_nodes, "A", { href: true, class: true });
      var a0_nodes = children(a0);
      h30 = claim_element(a0_nodes, "H3", { class: true });
      var h30_nodes = children(h30);
      t0 = claim_text(h30_nodes, "HOME");
      h30_nodes.forEach(detach);
      a0_nodes.forEach(detach);
      t1 = claim_space(nav_nodes);
      a1 = claim_element(nav_nodes, "A", { href: true, class: true });
      var a1_nodes = children(a1);
      h31 = claim_element(a1_nodes, "H3", { class: true });
      var h31_nodes = children(h31);
      t2 = claim_text(h31_nodes, "about");
      h31_nodes.forEach(detach);
      a1_nodes.forEach(detach);
      nav_nodes.forEach(detach);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(h30, "class", "home svelte-2eyo7l");
      attr(a0, "href", "" + (base + "/"));
      attr(a0, "class", "svelte-2eyo7l");
      attr(h31, "class", "about svelte-2eyo7l");
      attr(a1, "href", "" + (base + "/about"));
      attr(a1, "class", "svelte-2eyo7l");
      attr(nav, "class", "svelte-2eyo7l");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      append_hydration(div, nav);
      append_hydration(nav, a0);
      append_hydration(a0, h30);
      append_hydration(h30, t0);
      append_hydration(nav, t1);
      append_hydration(nav, a1);
      append_hydration(a1, h31);
      append_hydration(h31, t2);
    },
    p: noop,
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(div);
    }
  };
}
class Nav extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, null, create_fragment$2, safe_not_equal, {});
  }
}
var GithubCorner_svelte_svelte_type_style_lang = "";
function create_fragment$1(ctx) {
  let a;
  let svg;
  let path0;
  let path1;
  let path2;
  return {
    c() {
      a = element("a");
      svg = svg_element("svg");
      path0 = svg_element("path");
      path1 = svg_element("path");
      path2 = svg_element("path");
      this.h();
    },
    l(nodes) {
      a = claim_element(nodes, "A", {
        href: true,
        class: true,
        "aria-label": true
      });
      var a_nodes = children(a);
      svg = claim_svg_element(a_nodes, "svg", {
        width: true,
        height: true,
        viewBox: true,
        style: true,
        "aria-hidden": true
      });
      var svg_nodes = children(svg);
      path0 = claim_svg_element(svg_nodes, "path", { d: true });
      children(path0).forEach(detach);
      path1 = claim_svg_element(svg_nodes, "path", {
        d: true,
        fill: true,
        style: true,
        class: true
      });
      children(path1).forEach(detach);
      path2 = claim_svg_element(svg_nodes, "path", { d: true, fill: true, class: true });
      children(path2).forEach(detach);
      svg_nodes.forEach(detach);
      a_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(path0, "d", "M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z");
      attr(path1, "d", "M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2");
      attr(path1, "fill", "currentColor");
      set_style(path1, "transform-origin", "130px 106px");
      attr(path1, "class", "octo-arm svelte-11krw05");
      attr(path2, "d", "M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z");
      attr(path2, "fill", "currentColor");
      attr(path2, "class", "octo-body");
      attr(svg, "width", "60");
      attr(svg, "height", "60");
      attr(svg, "viewBox", "0 0 250 250");
      set_style(svg, "fill", "#444");
      set_style(svg, "color", "#fff");
      set_style(svg, "position", "absolute");
      set_style(svg, "top", "0");
      set_style(svg, "border", "0");
      set_style(svg, "right", "0");
      attr(svg, "aria-hidden", "true");
      attr(a, "href", "https://github.com/svelteland/svelte-kit-blog-demo");
      attr(a, "class", "github-corner svelte-11krw05");
      attr(a, "aria-label", "View source on GitHub");
    },
    m(target, anchor) {
      insert_hydration(target, a, anchor);
      append_hydration(a, svg);
      append_hydration(svg, path0);
      append_hydration(svg, path1);
      append_hydration(svg, path2);
    },
    p: noop,
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(a);
    }
  };
}
class GithubCorner extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, null, create_fragment$1, safe_not_equal, {});
  }
}
var __layout_svelte_svelte_type_style_lang = "";
function create_fragment(ctx) {
  let link0;
  let link1;
  let link2;
  let t0;
  let githubcorner;
  let t1;
  let div;
  let nav;
  let t2;
  let current;
  githubcorner = new GithubCorner({});
  nav = new Nav({});
  const default_slot_template = ctx[1].default;
  const default_slot = create_slot(default_slot_template, ctx, ctx[0], null);
  return {
    c() {
      link0 = element("link");
      link1 = element("link");
      link2 = element("link");
      t0 = space();
      create_component(githubcorner.$$.fragment);
      t1 = space();
      div = element("div");
      create_component(nav.$$.fragment);
      t2 = space();
      if (default_slot)
        default_slot.c();
      this.h();
    },
    l(nodes) {
      const head_nodes = query_selector_all('[data-svelte="svelte-dd1lau"]', document.head);
      link0 = claim_element(head_nodes, "LINK", { rel: true, href: true });
      link1 = claim_element(head_nodes, "LINK", { rel: true, href: true });
      link2 = claim_element(head_nodes, "LINK", { rel: true, href: true });
      head_nodes.forEach(detach);
      t0 = claim_space(nodes);
      claim_component(githubcorner.$$.fragment, nodes);
      t1 = claim_space(nodes);
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      claim_component(nav.$$.fragment, div_nodes);
      t2 = claim_space(div_nodes);
      if (default_slot)
        default_slot.l(div_nodes);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(link0, "rel", "stylesheet");
      attr(link0, "href", "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/10.7.1/styles/github.min.css");
      attr(link1, "rel", "stylesheet");
      attr(link1, "href", "https://fonts.googleapis.com/css2?family=Overpass");
      attr(link2, "rel", "stylesheet");
      attr(link2, "href", "https://fonts.googleapis.com/css2?family=Fira+Mono");
      attr(div, "class", "g-app-wrapper svelte-1b6ygo1");
    },
    m(target, anchor) {
      append_hydration(document.head, link0);
      append_hydration(document.head, link1);
      append_hydration(document.head, link2);
      insert_hydration(target, t0, anchor);
      mount_component(githubcorner, target, anchor);
      insert_hydration(target, t1, anchor);
      insert_hydration(target, div, anchor);
      mount_component(nav, div, null);
      append_hydration(div, t2);
      if (default_slot) {
        default_slot.m(div, null);
      }
      current = true;
    },
    p(ctx2, [dirty]) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & 1)) {
          update_slot_base(default_slot, default_slot_template, ctx2, ctx2[0], !current ? get_all_dirty_from_scope(ctx2[0]) : get_slot_changes(default_slot_template, ctx2[0], dirty, null), null);
        }
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(githubcorner.$$.fragment, local);
      transition_in(nav.$$.fragment, local);
      transition_in(default_slot, local);
      current = true;
    },
    o(local) {
      transition_out(githubcorner.$$.fragment, local);
      transition_out(nav.$$.fragment, local);
      transition_out(default_slot, local);
      current = false;
    },
    d(detaching) {
      detach(link0);
      detach(link1);
      detach(link2);
      if (detaching)
        detach(t0);
      destroy_component(githubcorner, detaching);
      if (detaching)
        detach(t1);
      if (detaching)
        detach(div);
      destroy_component(nav);
      if (default_slot)
        default_slot.d(detaching);
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  $$self.$$set = ($$props2) => {
    if ("$$scope" in $$props2)
      $$invalidate(0, $$scope = $$props2.$$scope);
  };
  return [$$scope, slots];
}
class _layout extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, {});
  }
}
export { _layout as default };
