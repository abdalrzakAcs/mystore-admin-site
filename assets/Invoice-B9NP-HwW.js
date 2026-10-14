import{c as F,s as l,J as q,f as d,F as A,G as P,r as G,j as e}from"./index-DBu8imxo.js";import{m as R,a as I,l as O,n as D}from"./orders-B22KtE-T.js";/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K=F("Printer",[["path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",key:"143wyd"}],["path",{d:"M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6",key:"1itne7"}],["rect",{x:"6",y:"14",width:"12",height:"8",rx:"1",key:"1ue0tg"}]]);function X(n){return!!n.partner_member_id&&n.status!=="cancelled"&&n.order_type!=="partner"}function Y(n){const t=Array.isArray(n.items)?n.items:[];let s=0,a=0;for(const i of t){const m=l(i.qty),c=l(i.price);s+=m*c,a+=m*(i.list_price==null?c:l(i.list_price))}return{purchase:s,normal:a,diff:a-s}}function M(n,t){if(n.list_price==null)return null;const s=l(n.list_price);if(!(s>l(n.price)))return null;const a=l(n.qty)*s,i=t.qty>0?t.qty:1;return{unitPrice:t.total/i,listUnitPrice:a/i,listTotal:a}}const W="٠١٢٣٤٥٦٧٨٩",V="۰۱۲۳۴۵۶۷۸۹";function Z(n){if(!n)return null;let t="";for(const s of String(n)){const a=W.indexOf(s),i=V.indexOf(s);t+=a>=0?String(a):i>=0?String(i):s}return t=t.replace(/\D/g,""),t.startsWith("00963")?t=t.slice(5):t.startsWith("963")&&t.length>=12&&(t=t.slice(3)),t.startsWith("0")&&t.length===10&&(t=t.slice(1)),/^9\d{8}$/.test(t)?t:null}function tt(n){return`⁦${n}⁩`}async function et(n){try{const[t,s]=await Promise.all([q.rpc("mystore_order_returned_qty",{p_order_id:n}),q.from("returns").select("total_refund").or(`order_uuid.eq.${n},original_order_id.eq.${n}`)]);if(t.error)return null;const a=t.data||{};if(!Object.values(a).some(c=>l(c)>0))return null;let i=s.data;if(s.error){const c=await q.from("returns").select("total_refund").eq("original_order_id",n);i=c.error?[]:c.data}const m=(i||[]).reduce((c,h)=>c+l(h.total_refund),0);return{returned:a,refundTotal:m}}catch{return null}}G.forwardRef(function({order:t,store:s,returns:a},i){const m=R(Array.isArray(t.items)?t.items:[]),c=I(m,a?.returned),h=c.some(f=>f>0),$=h?l(a?.refundTotal):0,_=m.reduce((f,p)=>f+l(p.qty)*l(p.price),0),u=l(t.discount),y=l(t.delivery),v=_-u+y,N=l(t.paid),g=v-N,j=H(t),k=L(t);return e.jsxs("div",{ref:i,dir:"rtl",className:"invoice bg-white text-black mx-auto relative",style:{width:"210mm",minHeight:"297mm",padding:"15mm",fontFamily:'"Tajawal", sans-serif'},children:[j&&e.jsx("div",{"aria-hidden":!0,className:"pointer-events-none absolute inset-0 grid place-items-center",style:{zIndex:0},children:e.jsx("div",{className:"border-[6px] border-red-600 text-red-600 font-black rounded-md px-10 py-3",style:{fontSize:"72px",transform:"rotate(-18deg)",opacity:.22,letterSpacing:"0.1em"},children:"ملغاة"})}),j&&e.jsxs("div",{className:"mb-4 border-2 border-red-600 text-red-700 rounded p-2 text-center font-black text-base",children:["فاتورة ملغاة — لا تُعتمد للبيع",t.cancel_reason?e.jsxs("span",{className:"block text-xs font-bold mt-1",children:["سبب الإلغاء: ",t.cancel_reason]}):null]}),e.jsxs("div",{className:"flex items-start justify-between mb-6 pb-4 border-b-2 border-gray-900",children:[e.jsxs("div",{className:"flex items-center gap-4",children:[s.logo_url&&e.jsx("img",{src:s.logo_url,alt:"",className:"w-20 h-20 object-contain",crossOrigin:"anonymous"}),e.jsxs("div",{children:[e.jsx("h1",{className:"text-3xl font-black text-gray-900",children:s.store_name||"My Store"}),s.address&&e.jsx("div",{className:"text-sm mt-1",children:s.address}),s.phone&&e.jsxs("div",{className:"text-sm",dir:"ltr",children:["📞 ",s.phone]}),s.email&&e.jsxs("div",{className:"text-sm",dir:"ltr",children:["✉ ",s.email]}),s.tax_number&&e.jsxs("div",{className:"text-xs text-gray-600 mt-1",children:["الرقم الضريبي: ",s.tax_number]})]})]}),e.jsxs("div",{className:"text-end",children:[e.jsx("div",{className:"inline-block px-4 py-1 rounded font-black text-lg text-white "+(j?"bg-red-600":"bg-gray-900"),children:j?"فاتورة ملغاة":"فاتورة"}),e.jsxs("div",{className:"text-xs mt-2",children:[e.jsxs("div",{children:[e.jsx("strong",{children:"رقم:"})," ",t.id]}),e.jsxs("div",{children:[e.jsx("strong",{children:"التاريخ:"})," ",A(P(t.created_at))]})]})]})]}),s.receipt_header&&e.jsx("div",{className:"mb-4 p-3 bg-gray-50 rounded text-sm font-bold text-center",children:s.receipt_header}),(t.customer_name||t.customer_phone||t.delivery_address)&&e.jsxs("div",{className:"mb-6 bg-gray-50 rounded-lg p-4",children:[e.jsx("div",{className:"text-xs font-extrabold text-gray-500 mb-2",children:"العميل"}),e.jsxs("div",{className:"grid grid-cols-3 gap-4 text-sm",children:[t.customer_name&&e.jsxs("div",{children:[e.jsx("div",{className:"font-extrabold text-gray-500 text-xs",children:"الاسم"}),e.jsx("div",{className:"font-bold",children:t.customer_name})]}),t.customer_phone&&e.jsxs("div",{children:[e.jsx("div",{className:"font-extrabold text-gray-500 text-xs",children:"الهاتف"}),e.jsx("div",{className:"font-bold",dir:"ltr",children:t.customer_phone})]}),t.delivery_address&&e.jsxs("div",{children:[e.jsx("div",{className:"font-extrabold text-gray-500 text-xs",children:"العنوان"}),e.jsx("div",{className:"font-bold",children:t.delivery_address})]})]})]}),e.jsxs("table",{className:"w-full border-collapse text-sm mb-6",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"bg-gray-900 text-white",children:[e.jsx("th",{className:"p-2 border border-gray-900 text-center font-extrabold",children:"#"}),e.jsx("th",{className:"p-2 border border-gray-900 font-extrabold",children:"الصنف"}),e.jsx("th",{className:"p-2 border border-gray-900 text-center font-extrabold w-24",children:"الكمية"}),e.jsx("th",{className:"p-2 border border-gray-900 text-center font-extrabold w-32",children:"السعر"}),e.jsx("th",{className:"p-2 border border-gray-900 text-center font-extrabold w-32",children:"الإجمالي"}),h&&e.jsx("th",{className:"p-2 border border-gray-900 text-center font-extrabold w-24",children:"الصافي"})]})}),e.jsx("tbody",{children:m.length===0?e.jsx("tr",{children:e.jsx("td",{colSpan:h?6:5,className:"p-4 text-center border border-gray-300",children:"لا توجد أصناف"})}):m.map((f,p)=>{const r=O(f),x=M(f,r),w=c[p]||0;return e.jsxs("tr",{className:"odd:bg-gray-50",children:[e.jsx("td",{className:"p-2 border border-gray-300 text-center",children:p+1}),e.jsxs("td",{className:"p-2 border border-gray-300 font-bold break-words",children:[f.name||f.product_id||"—",r.unit&&r.pieces!==r.qty&&e.jsxs("span",{className:"text-xs text-gray-500 font-normal ms-1",children:["(= ",r.pieces," قطعة)"]}),w>0&&e.jsxs("span",{className:"text-xs text-red-700 font-bold ms-1",children:["(مرتجع ",w,")"]})]}),e.jsxs("td",{className:"p-2 border border-gray-300 text-center font-bold",children:[r.qty,r.unit?` ${r.unit}`:""]}),e.jsx("td",{className:"p-2 border border-gray-300 text-center",children:d(x?x.unitPrice:r.unitPrice)}),e.jsx("td",{className:"p-2 border border-gray-300 text-center font-bold",children:d(r.total)}),h&&e.jsx("td",{className:"p-2 border border-gray-300 text-center font-bold",children:w>0?D(f,w):r.unit?`${r.qty} ${r.unit}`:r.qty})]},p)})})]}),t.note?e.jsxs("div",{className:"mt-3 border border-gray-900 rounded p-2 text-sm",children:[e.jsx("span",{className:"font-extrabold",children:"ملاحظة: "}),e.jsx("span",{className:"font-bold",children:t.note})]}):null,e.jsx("div",{className:"flex justify-end",children:e.jsxs("div",{className:"w-80",children:[e.jsx(b,{label:"المجموع قبل الخصم",value:d(_)}),u>0&&e.jsx(b,{label:"الخصم",value:`-${d(u)}`}),y>0&&e.jsx(b,{label:"التوصيل",value:`+${d(y)}`}),e.jsx(b,{label:"الإجمالي",value:d(v),big:!0}),h&&$>0&&e.jsxs(e.Fragment,{children:[e.jsx(b,{label:"المرتجع",value:`-${d($)}`}),e.jsx(b,{label:"الصافي بعد المرتجع",value:d(v-$)})]}),(N>0||k)&&e.jsx(b,{label:"المدفوع",value:d(N)}),g>0&&e.jsx(b,{label:k?"المتبقي (على الحساب)":"المتبقي",value:d(g),warning:!0})]})}),e.jsxs("div",{className:"mt-8 pt-4 border-t-2 border-gray-900 text-center text-sm",children:[s.receipt_footer?e.jsx("div",{className:"font-bold",children:s.receipt_footer}):e.jsx("div",{className:"font-bold",children:"شكراً لتعاملكم معنا 🙏"}),e.jsx("div",{className:"text-xs text-gray-500 mt-2",children:"My Store — نظام إدارة متكامل"})]})]})});function H(n){return n.status==="cancelled"}function L(n){return n.payment_method==="account"||n.is_debt===!0}function b({label:n,value:t,big:s,warning:a}){return e.jsxs("div",{className:"flex items-center justify-between py-2 px-3 border-b border-gray-300 "+(s?"bg-gray-900 text-white font-black text-lg":"")+(a?" bg-red-100 text-red-900 font-black":""),children:[e.jsx("span",{children:n}),e.jsx("span",{className:"tabular-nums",children:t})]})}function st(n,t,s){const a=window.open("","_blank","width=900,height=700");if(!a){alert("يرجى السماح بالنوافذ المنبثقة للطباعة");return}if(s&&typeof s.then=="function"){a.document.open(),a.document.write('<!doctype html><html lang="ar" dir="rtl"><head><meta charset="utf-8"><title>فاتورة</title></head><body style="font-family:sans-serif;padding:24px">جارٍ تحضير الفاتورة…</body></html>'),a.document.close(),s.catch(()=>null).then(i=>T(a,n,t,i));return}T(a,n,t,s??null)}function T(n,t,s,a){if(n.closed)return;const i=R(Array.isArray(t.items)?t.items:[]),m=I(i,a?.returned),c=m.some(p=>p>0),h=c?l(a?.refundTotal):0,$=i.reduce((p,r)=>p+l(r.qty)*l(r.price),0),_=l(t.discount),u=l(t.delivery),y=$-_+u,v=l(t.paid),N=y-v,g=H(t),j=L(t),k=i.map((p,r)=>{const x=O(p),w=M(p,x),C=x.unit&&x.pieces!==x.qty?` <span style="font-size:11px;color:#666;font-weight:400">(= ${x.pieces} قطعة)</span>`:"",S=x.unit?`${x.qty} ${o(x.unit)}`:String(x.qty),z=m[r]||0,B=z>0?` <span style="font-size:11px;color:#b91c1c;font-weight:700">(مرتجع ${z})</span>`:"",E=c?`<td style="text-align:center;font-weight:700">${z>0?o(D(p,z)):S}</td>`:"";return`
      <tr>
        <td style="text-align:center">${r+1}</td>
        <td style="font-weight:700;word-break:break-word">${o(p.name||String(p.product_id||"—"))}${C}${B}</td>
        <td style="text-align:center;font-weight:700">${S}</td>
        <td style="text-align:center">${d(w?w.unitPrice:x.unitPrice)}</td>
        <td style="text-align:center;font-weight:700">${d(x.total)}</td>
        ${E}
      </tr>
    `}).join(""),f=`
<!doctype html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="utf-8">
  <title>${g?"فاتورة ملغاة":"فاتورة"} ${o(String(t.id))}</title>
  <link href="https://fonts.googleapis.com/css2?family=Tajawal:wght@400;700;900&display=swap" rel="stylesheet">
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: 'Tajawal', sans-serif; color: #111; background: #fff; padding: 15mm; }
    .hdr { display: flex; justify-content: space-between; align-items: flex-start; padding-bottom: 16px; border-bottom: 2px solid #111; margin-bottom: 20px; }
    .store-info h1 { font-size: 28px; font-weight: 900; }
    .store-info div { font-size: 13px; margin-top: 2px; }
    .badge { background: #111; color: #fff; padding: 4px 14px; border-radius: 4px; font-weight: 900; font-size: 18px; display: inline-block; }
    .meta { font-size: 12px; margin-top: 8px; text-align: end; }
    .meta div { margin-top: 2px; }
    .customer { background: #f5f5f5; border-radius: 8px; padding: 14px; margin-bottom: 20px; }
    .customer-grid { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 16px; font-size: 13px; }
    .customer-grid .lbl { font-size: 11px; color: #666; font-weight: 800; }
    table { width: 100%; border-collapse: collapse; font-size: 13px; margin-bottom: 20px; }
    thead th { background: #111; color: #fff; padding: 8px; border: 1px solid #111; text-align: right; font-weight: 900; }
    thead th.c { text-align: center; }
    tbody td { padding: 8px; border: 1px solid #d4d4d4; }
    tbody tr:nth-child(odd) { background: #fafafa; }
    .note { border:1px solid #111; border-radius:4px; padding:6px 8px; margin:8px 0; font-size:12px; }
    .totals { margin-inline-start: auto; width: 320px; }
    .row { display: flex; justify-content: space-between; padding: 8px 12px; border-bottom: 1px solid #d4d4d4; font-size: 14px; }
    .row.big { background: #111; color: #fff; font-weight: 900; font-size: 17px; padding: 10px 12px; }
    .row.warn { background: #fee2e2; color: #991b1b; font-weight: 900; }
    .footer { margin-top: 32px; padding-top: 14px; border-top: 2px solid #111; text-align: center; }
    .footer .msg { font-weight: 700; font-size: 14px; }
    .footer .sig { font-size: 11px; color: #888; margin-top: 8px; }
    .custom-header { background: #f5f5f5; padding: 10px; border-radius: 6px; text-align: center; font-weight: 700; margin-bottom: 16px; font-size: 13px; }
    .badge.cancelled { background: #dc2626; }
    .cancel-banner { border: 2px solid #dc2626; color: #b91c1c; border-radius: 6px; padding: 8px 12px; text-align: center; font-weight: 900; font-size: 16px; margin-bottom: 16px; }
    .cancel-banner small { display: block; font-size: 12px; font-weight: 700; margin-top: 4px; }
    .stamp { position: fixed; inset: 0; display: flex; align-items: center; justify-content: center; pointer-events: none; z-index: 0; }
    .stamp span { border: 6px solid #dc2626; color: #dc2626; font-weight: 900; font-size: 84px; padding: 8px 48px; border-radius: 8px; transform: rotate(-18deg); opacity: 0.22; letter-spacing: 0.1em; }
    @media print {
      body { padding: 10mm; }
      .no-print { display: none !important; }
      .stamp, .cancel-banner, .badge.cancelled { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
    }
  </style>
</head>
<body>
  ${g?'<div class="stamp" aria-hidden="true"><span>ملغاة</span></div>':""}
  ${g?`<div class="cancel-banner">فاتورة ملغاة — لا تُعتمد للبيع${t.cancel_reason?`<small>سبب الإلغاء: ${o(t.cancel_reason)}</small>`:""}</div>`:""}
  <div class="hdr">
    <div style="display:flex;gap:16px;align-items:flex-start;">
      ${s.logo_url?`<img src="${J(s.logo_url)}" style="width:70px;height:70px;object-fit:contain">`:""}
      <div class="store-info">
        <h1>${o(s.store_name||"My Store")}</h1>
        ${s.address?`<div>${o(s.address)}</div>`:""}
        ${s.phone?`<div dir="ltr">📞 ${o(s.phone)}</div>`:""}
        ${s.email?`<div dir="ltr">✉ ${o(s.email)}</div>`:""}
        ${s.tax_number?`<div style="font-size:11px;color:#666">الرقم الضريبي: ${o(s.tax_number)}</div>`:""}
      </div>
    </div>
    <div>
      <div class="badge${g?" cancelled":""}">${g?"فاتورة ملغاة":"فاتورة"}</div>
      <div class="meta">
        <div><strong>رقم:</strong> ${o(String(t.id))}</div>
        <div><strong>التاريخ:</strong> ${o(A(P(t.created_at)))}</div>
      </div>
    </div>
  </div>

  ${s.receipt_header?`<div class="custom-header">${o(s.receipt_header)}</div>`:""}

  ${t.customer_name||t.customer_phone||t.delivery_address?`
    <div class="customer">
      <div style="font-size:11px;font-weight:800;color:#666;margin-bottom:8px">العميل</div>
      <div class="customer-grid">
        ${t.customer_name?`<div><div class="lbl">الاسم</div><div style="font-weight:700">${o(t.customer_name)}</div></div>`:""}
        ${t.customer_phone?`<div><div class="lbl">الهاتف</div><div dir="ltr" style="font-weight:700">${o(t.customer_phone)}</div></div>`:""}
        ${t.delivery_address?`<div><div class="lbl">العنوان</div><div style="font-weight:700">${o(t.delivery_address)}</div></div>`:""}
      </div>
    </div>
    `:""}

  <table>
    <thead>
      <tr>
        <th class="c" style="width:40px">#</th>
        <th>الصنف</th>
        <th class="c" style="width:80px">الكمية</th>
        <th class="c" style="width:100px">السعر</th>
        <th class="c" style="width:100px">الإجمالي</th>
        ${c?'<th class="c" style="width:80px">الصافي</th>':""}
      </tr>
    </thead>
    <tbody>
      ${k||`<tr><td colspan="${c?6:5}" style="text-align:center;padding:14px">لا توجد أصناف</td></tr>`}
    </tbody>
  </table>

  ${t.note?`<div class="note"><b>ملاحظة:</b> ${o(String(t.note))}</div>`:""}

  <div class="totals">
    <div class="row"><span>المجموع قبل الخصم</span><span>${d($)}</span></div>
    ${_>0?`<div class="row"><span>الخصم</span><span>-${d(_)}</span></div>`:""}
    ${u>0?`<div class="row"><span>التوصيل</span><span>+${d(u)}</span></div>`:""}
    <div class="row big"><span>الإجمالي</span><span>${d(y)}</span></div>
    ${c&&h>0?`<div class="row"><span>المرتجع</span><span>-${d(h)}</span></div><div class="row"><span>الصافي بعد المرتجع</span><span>${d(y-h)}</span></div>`:""}
    ${v>0||j?`<div class="row"><span>المدفوع</span><span>${d(v)}</span></div>`:""}
    ${N>0?`<div class="row warn"><span>${j?"المتبقي (على الحساب)":"المتبقي"}</span><span>${d(N)}</span></div>`:""}
  </div>

  <div class="footer">
    <div class="msg">${o(s.receipt_footer||"شكراً لتعاملكم معنا 🙏")}</div>
    <div class="sig">My Store — نظام إدارة متكامل</div>
  </div>

  <script>
    window.onload = function() {
      setTimeout(function() { window.print(); }, 300);
    };
  <\/script>
</body>
</html>`;n.document.open(),n.document.write(f),n.document.close()}function o(n){return String(n??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}function J(n){return o(n)}export{K as P,Z as a,Y as b,M as c,et as f,X as i,tt as l,st as p};
