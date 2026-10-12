var e=e=>String(e).replace(/[&<>"']/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`})[e]),t=(e,t)=>`<img src="${e.src}" srcset="${e.srcset}" sizes="${t}" width="${e.w}" height="${e.h}" alt="" loading="lazy" decoding="async"${e.focus?` style="object-position:${e.focus[0]}% ${e.focus[1]}%"`:``}>`;function n(n,r,i){let a=n.card??{},o=a.main?t(a.main,i):`<span class="card__nophoto">${a.outline?`<span class="card__outline" style="aspect-ratio:${a.outline}"></span>`:``}<span class="card__nophoto-label">${e(r.noPhoto)}</span></span>`;return`<li class="card">
    <a class="card__media frame" href="${n.url}" tabindex="-1" aria-hidden="true" style="aspect-ratio:2 / 3;--mat:${a.main?.mat??`#efebe7`}">${o}${a.detail?`<span class="card__second">${t(a.detail,i)}</span>`:``}</a>
    <div class="card__info">
      <h2 class="card__heading"><a class="card__link t-label" href="${n.url}">${e(n.name)}</a>
      <span class="t-italic card__size">${e(a.sizeCm??r.sizeUnconfirmed)}</span></h2>
      <p class="t-label card__price"><span class="t-muted">${e(r.priceToConfirm)}</span></p>
    </div>
  </li>`}export{n as cardHtml};