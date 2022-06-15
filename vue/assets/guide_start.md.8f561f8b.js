import{_ as a,c as n,o as s,a as t}from"./app.b6ae52a2.js";const e={components:{}},h='{"title":"Getting Started","description":"","frontmatter":{"map":{"path":"/guide/start"}},"headers":[{"level":2,"title":"Getting Started","slug":"getting-started"},{"level":2,"title":"Features","slug":"features"},{"level":2,"title":"Install","slug":"install"},{"level":2,"title":"Usage","slug":"usage"}],"relativePath":"guide/start.md","lastUpdated":1655298795679}',p=t(`<h2 id="getting-started"><a class="header-anchor" href="#getting-started" aria-hidden="true">#</a> Getting Started</h2><p>vue typography components Library.</p><h2 id="features"><a class="header-anchor" href="#features" aria-hidden="true">#</a> Features</h2><ul><li>Easy to learn and use.</li><li>Works for both Vue 3 and 2 ( thanks for <a href="https://github.com/antfu/vue-demi" target="_blank" rel="noopener noreferrer">vue-demi</a> ).</li><li>Written in TypeScript with predictable static types.</li></ul><h2 id="install"><a class="header-anchor" href="#install" aria-hidden="true">#</a> Install</h2><div class="language-"><pre><code>yarn add @typography/vue -S
</code></pre></div><h2 id="usage"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">:style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{ width: <span class="token punctuation">&#39;</span>300px<span class="token punctuation">&#39;</span>, border: <span class="token punctuation">&#39;</span>1px solid red<span class="token punctuation">&#39;</span>, boxSizing: <span class="token punctuation">&#39;</span>initial<span class="token punctuation">&#39;</span> }<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Paragraph</span>
      <span class="token attr-name">:ellipsis</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{
        expandable: true,
        packupable: true,
        rows: 2,
      }<span class="token punctuation">&quot;</span></span>
    <span class="token punctuation">&gt;</span></span>
      I may be the first row of data displayed in this text box hey, I may be the second row of data displayed in this text box, I may be the third row of data displayed in this text box
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Paragraph</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> Paragraph <span class="token keyword">from</span> <span class="token string">&quot;../index.vue&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  components<span class="token operator">:</span> <span class="token punctuation">{</span>
    Paragraph<span class="token operator">:</span> Paragraph<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>For more usage, see <a href="https://drdevelop.github.io/typography/vue/components/paragraph/" target="_blank" rel="noopener noreferrer">Component-Paragraph</a></p>`,9),o=[p];function l(c,r,u,i,k,d){return s(),n("div",null,o)}var _=a(e,[["render",l]]);export{h as __pageData,_ as default};
