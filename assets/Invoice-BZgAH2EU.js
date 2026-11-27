import{c as G,s as d,d1 as V,d2 as J,d3 as Q,J as q,f as r,F as I,G as R,r as U,j as e}from"./index-D-9RPGSI.js";import{m as O,s as K,a as D,l as M,n as H}from"./orders-Bx9FUUTQ.js";/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const st=G("Printer",[["path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",key:"143wyd"}],["path",{d:"M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6",key:"1itne7"}],["rect",{x:"6",y:"14",width:"12",height:"8",rx:"1",key:"1ue0tg"}]]);function nt(n){return!!n.partner_member_id&&n.status!=="cancelled"&&n.order_type!=="partner"}function at(n){const t=Array.isArray(n.items)?n.items:[];let s=0,a=0;for(const l of t){const c=d(l.qty),i=d(l.price);s+=c*i,a+=c*(l.list_price==null?i:d(l.list_price))}return{purchase:s,normal:a,diff:a-s}}function L(n,t){if(n.list_price==null)return null;const s=d(n.list_price);if(!(s>d(n.price)))return null;const a=d(n.qty)*s,l=t.qty>0?t.qty:1;return{unitPrice:t.total/l,listUnitPrice:a/l,listTotal:a}}const X="٠١٢٣٤٥٦٧٨٩",Y="۰۱۲۳۴۵۶۷۸۹";function it(n){if(!n)return null;let t="";for(const s of String(n)){const a=X.indexOf(s),l=Y.indexOf(s);t+=a>=0?String(a):l>=0?String(l):s}return t=t.replace(/\D/g,""),t.startsWith("00963")?t=t.slice(5):t.startsWith("963")&&t.length>=12&&(t=t.slice(3)),t.startsWith("0")&&t.length===10&&(t=t.slice(1)),/^9\d{8}$/.test(t)?t:null}function rt(n){return`⁦${n}⁩`}async function dt(n){try{const[t,s]=await Promise.all([q.rpc("mystore_order_returned_qty",{p_order_id:n}),q.from("returns").select("total_refund").or(`order_uuid.eq.${n},original_order_id.eq.${n}`)]);if(t.error)return null;const a=t.data||{};if(!Object.values(a).some(i=>d(i)>0))return null;let l=s.data;if(s.error){const i=await q.from("returns").select("total_refund").eq("original_order_id",n);l=i.error?[]:i.data}const c=(l||[]).reduce((i,m)=>i+d(m.total_refund),0);return{returned:a,refundTotal:c}}catch{return null}}U.forwardRef(function({order:t,store:s,returns:a},l){const c=O(Array.isArray(t.items)?t.items:[]),i=D(c,a?.returned),m=i.some(h=>h>0),x=m?d(a?.refundTotal):0,y=c.reduce((h,w)=>h+d(w.qty)*d(w.price),0),v=d(t.discount),b=d(t.delivery),_=y-v+b,N=d(t.paid),z=_-N,k=C(t),j=W(t);return e.jsxs("div",{ref:l,dir:"rtl",className:"invoice bg-white text-black mx-auto relative",style:{width:"210mm",minHeight:"297mm",padding:"15mm",fontFamily:'"Tajawal", sans-serif'},children:[k&&e.jsx("div",{"aria-hidden":!0,className:"pointer-events-none absolute inset-0 grid place-items-center",style:{zIndex:0},children:e.jsx("div",{className:"border-[6px] border-red-600 text-red-600 font-black rounded-md px-10 py-3",style:{fontSize:"72px",transform:"rotate(-18deg)",opacity:.22,letterSpacing:"0.1em"},children:"ملغاة"})}),k&&e.jsxs("div",{className:"mb-4 border-2 border-red-600 text-red-700 rounded p-2 text-center font-black text-base",children:["فاتورة ملغاة — لا تُعتمد للبيع",t.cancel_reason?e.jsxs("span",{className:"block text-xs font-bold mt-1",children:["سبب الإلغاء: ",t.cancel_reason]}):null]}),e.jsxs("div",{className:"flex items-start justify-between mb-6 pb-4 border-b-2 border-gray-900",children:[e.jsxs("div",{className:"flex items-center gap-4",children:[s.logo_url&&e.jsx("img",{src:s.logo_url,alt:"",className:"w-20 h-20 object-contain",crossOrigin:"anonymous"}),e.jsxs("div",{children:[e.jsx("h1",{className:"text-3xl font-black text-gray-900",children:s.store_name||"My Store"}),s.address&&e.jsx("div",{className:"text-sm mt-1",children:s.address}),s.phone&&e.jsxs("div",{className:"text-sm",dir:"ltr",children:["📞 ",s.phone]}),s.email&&e.jsxs("div",{className:"text-sm",dir:"ltr",children:["✉ ",s.email]}),s.tax_number&&e.jsxs("div",{className:"text-xs text-gray-600 mt-1",children:["الرقم الضريبي: ",s.tax_number]})]})]}),e.jsxs("div",{className:"text-end",children:[e.jsx("div",{className:"inline-block px-4 py-1 rounded font-black text-lg text-white "+(k?"bg-red-600":"bg-gray-900"),children:k?"فاتورة ملغاة":"فاتورة"}),e.jsxs("div",{className:"text-xs mt-2",children:[e.jsxs("div",{children:[e.jsx("strong",{children:"رقم:"})," ",t.id]}),e.jsxs("div",{children:[e.jsx("strong",{children:"التاريخ:"})," ",I(R(t.created_at))]})]})]})]}),s.receipt_header&&e.jsx("div",{className:"mb-4 p-3 bg-gray-50 rounded text-sm font-bold text-center",children:s.receipt_header}),(t.customer_name||t.customer_phone||t.delivery_address)&&e.jsxs("div",{className:"mb-6 bg-gray-50 rounded-lg p-4",children:[e.jsx("div",{className:"text-xs font-extrabold text-gray-500 mb-2",children:"العميل"}),e.jsxs("div",{className:"grid grid-cols-3 gap-4 text-sm",children:[t.customer_name&&e.jsxs("div",{children:[e.jsx("div",{className:"font-extrabold text-gray-500 text-xs",children:"الاسم"}),e.jsx("div",{className:"font-bold",children:t.customer_name})]}),t.customer_phone&&e.jsxs("div",{children:[e.jsx("div",{className:"font-extrabold text-gray-500 text-xs",children:"الهاتف"}),e.jsx("div",{className:"font-bold",dir:"ltr",children:t.customer_phone})]}),t.delivery_address&&e.jsxs("div",{children:[e.jsx("div",{className:"font-extrabold text-gray-500 text-xs",children:"العنوان"}),e.jsx("div",{className:"font-bold",children:t.delivery_address})]})]})]}),e.jsxs("table",{className:"w-full border-collapse text-sm mb-6",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"bg-gray-900 text-white",children:[e.jsx("th",{className:"p-2 border border-gray-900 text-center font-extrabold",children:"#"}),e.jsx("th",{className:"p-2 border border-gray-900 font-extrabold",children:"الصنف"}),e.jsx("th",{className:"p-2 border border-gray-900 text-center font-extrabold w-24",children:"الكمية"}),e.jsx("th",{className:"p-2 border border-gray-900 text-center font-extrabold w-32",children:"السعر"}),e.jsx("th",{className:"p-2 border border-gray-900 text-center font-extrabold w-32",children:"الإجمالي"}),m&&e.jsx("th",{className:"p-2 border border-gray-900 text-center font-extrabold w-24",children:"الصافي"})]})}),e.jsx("tbody",{children:c.length===0?e.jsx("tr",{children:e.jsx("td",{colSpan:m?6:5,className:"p-4 text-center border border-gray-300",children:"لا توجد أصناف"})}):c.map((h,w)=>{const p=M(h),f=L(h,p),g=i[w]||0;return e.jsxs("tr",{className:"odd:bg-gray-50",children:[e.jsx("td",{className:"p-2 border border-gray-300 text-center",children:w+1}),e.jsxs("td",{className:"p-2 border border-gray-300 font-bold break-words",children:[h.name||h.product_id||"—",p.unit&&p.pieces!==p.qty&&e.jsxs("span",{className:"text-xs text-gray-500 font-normal ms-1",children:["(= ",p.pieces," قطعة)"]}),g>0&&e.jsxs("span",{className:"text-xs text-red-700 font-bold ms-1",children:["(مرتجع ",g,")"]})]}),e.jsxs("td",{className:"p-2 border border-gray-300 text-center font-bold",children:[p.qty,p.unit?` ${p.unit}`:""]}),e.jsx("td",{className:"p-2 border border-gray-300 text-center",children:r(f?f.unitPrice:p.unitPrice)}),e.jsx("td",{className:"p-2 border border-gray-300 text-center font-bold",children:r(p.total)}),m&&e.jsx("td",{className:"p-2 border border-gray-300 text-center font-bold",children:g>0?H(h,g):p.unit?`${p.qty} ${p.unit}`:p.qty})]},w)})})]}),t.note?e.jsxs("div",{className:"mt-3 border border-gray-900 rounded p-2 text-sm",children:[e.jsx("span",{className:"font-extrabold",children:"ملاحظة: "}),e.jsx("span",{className:"font-bold",children:t.note})]}):null,e.jsx("div",{className:"flex justify-end",children:e.jsxs("div",{className:"w-80",children:[e.jsx($,{label:"المجموع قبل الخصم",value:r(y)}),v>0&&e.jsx($,{label:"الخصم",value:`-${r(v)}`}),b>0&&e.jsx($,{label:"التوصيل",value:`+${r(b)}`}),e.jsx($,{label:"الإجمالي",value:r(_),big:!0}),m&&x>0&&e.jsxs(e.Fragment,{children:[e.jsx($,{label:"المرتجع",value:`-${r(x)}`}),e.jsx($,{label:"الصافي بعد المرتجع",value:r(_-x)})]}),(N>0||j)&&e.jsx($,{label:"المدفوع",value:r(N)}),z>0&&e.jsx($,{label:j?"المتبقي (على الحساب)":"المتبقي",value:r(z),warning:!0})]})}),e.jsxs("div",{className:"mt-8 pt-4 border-t-2 border-gray-900 text-center text-sm",children:[s.receipt_footer?e.jsx("div",{className:"font-bold",children:s.receipt_footer}):e.jsx("div",{className:"font-bold",children:"شكراً لتعاملكم معنا 🙏"}),e.jsx("div",{className:"text-xs text-gray-500 mt-2",children:"My Store — نظام إدارة متكامل"})]})]})});function C(n){return n.status==="cancelled"}function W(n){return n.payment_method==="account"||n.is_debt===!0}function $({label:n,value:t,big:s,warning:a}){return e.jsxs("div",{className:"flex items-center justify-between py-2 px-3 border-b border-gray-300 "+(s?"bg-gray-900 text-white font-black text-lg":"")+(a?" bg-red-100 text-red-900 font-black":""),children:[e.jsx("span",{children:n}),e.jsx("span",{className:"tabular-nums",children:t})]})}function lt(n,t,s){const a=window.open("","_blank","width=900,height=700");if(!a){alert("يرجى السماح بالنوافذ المنبثقة للطباعة");return}const l=Array.isArray(n.items)?n.items:[],c=V(l.filter(x=>x.unit_label).map(x=>x.product_id)),i=c.length?J(c):{},m=!!s&&typeof s.then=="function";if(m||!i){a.document.open(),a.document.write('<!doctype html><html lang="ar" dir="rtl"><head><meta charset="utf-8"><title>فاتورة</title></head><body style="font-family:sans-serif;padding:24px">جارٍ تحضير الفاتورة…</body></html>'),a.document.close();const x=m?s.catch(()=>null):Promise.resolve(s??null),y=i?Promise.resolve(i):Q(c,2500);Promise.all([x,y]).then(([v,b])=>T(a,n,t,v,b));return}T(a,n,t,s??null,i)}function T(n,t,s,a,l){if(n.closed)return;const c=O(Array.isArray(t.items)?t.items:[]),i=K(c,l),m=D(i,a?.returned),x=m.some(f=>f>0),y=x?d(a?.refundTotal):0,v=c.reduce((f,g)=>f+d(g.qty)*d(g.price),0),b=d(t.discount),_=d(t.delivery),N=v-b+_,z=d(t.paid),k=N-z,j=C(t),h=W(t),w=i.map((f,g)=>{const u=M(f),S=L(f,u),B=u.unit&&!u.portion&&u.pieces!==u.qty?` <span style="font-size:11px;color:#666;font-weight:400">(= ${u.pieces} قطعة)</span>`:"",A=o(u.text),P=m[g]||0,E=P>0?` <span style="font-size:11px;color:#b91c1c;font-weight:700">(مرتجع ${P})</span>`:"",F=x?`<td style="text-align:center;font-weight:700">${P>0?o(H(f,P)):A}</td>`:"";return`
      <tr>
        <td style="text-align:center">${g+1}</td>
        <td style="font-weight:700;word-break:break-word">${o(f.name||String(f.product_id||"—"))}${B}${E}</td>
        <td style="text-align:center;font-weight:700">${A}</td>
        <td style="text-align:center">${r(S?S.unitPrice:u.unitPrice)}</td>
        <td style="text-align:center;font-weight:700">${r(u.total)}</td>
        ${F}
      </tr>
    `}).join(""),p=`
<!doctype html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="utf-8">
  <title>${j?"فاتورة ملغاة":"فاتورة"} ${o(String(t.id))}</title>
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
  ${j?'<div class="stamp" aria-hidden="true"><span>ملغاة</span></div>':""}
  ${j?`<div class="cancel-banner">فاتورة ملغاة — لا تُعتمد للبيع${t.cancel_reason?`<small>سبب الإلغاء: ${o(t.cancel_reason)}</small>`:""}</div>`:""}
  <div class="hdr">
    <div style="display:flex;gap:16px;align-items:flex-start;">
      ${s.logo_url?`<img src="${Z(s.logo_url)}" style="width:70px;height:70px;object-fit:contain">`:""}
      <div class="store-info">
        <h1>${o(s.store_name||"My Store")}</h1>
        ${s.address?`<div>${o(s.address)}</div>`:""}
        ${s.phone?`<div dir="ltr">📞 ${o(s.phone)}</div>`:""}
        ${s.email?`<div dir="ltr">✉ ${o(s.email)}</div>`:""}
        ${s.tax_number?`<div style="font-size:11px;color:#666">الرقم الضريبي: ${o(s.tax_number)}</div>`:""}
      </div>
    </div>
    <div>
      <div class="badge${j?" cancelled":""}">${j?"فاتورة ملغاة":"فاتورة"}</div>
      <div class="meta">
        <div><strong>رقم:</strong> ${o(String(t.id))}</div>
        <div><strong>التاريخ:</strong> ${o(I(R(t.created_at)))}</div>
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
        ${x?'<th class="c" style="width:80px">الصافي</th>':""}
      </tr>
    </thead>
    <tbody>
      ${w||`<tr><td colspan="${x?6:5}" style="text-align:center;padding:14px">لا توجد أصناف</td></tr>`}
    </tbody>
  </table>

  ${t.note?`<div class="note"><b>ملاحظة:</b> ${o(String(t.note))}</div>`:""}

  <div class="totals">
    <div class="row"><span>المجموع قبل الخصم</span><span>${r(v)}</span></div>
    ${b>0?`<div class="row"><span>الخصم</span><span>-${r(b)}</span></div>`:""}
    ${_>0?`<div class="row"><span>التوصيل</span><span>+${r(_)}</span></div>`:""}
    <div class="row big"><span>الإجمالي</span><span>${r(N)}</span></div>
    ${x&&y>0?`<div class="row"><span>المرتجع</span><span>-${r(y)}</span></div><div class="row"><span>الصافي بعد المرتجع</span><span>${r(N-y)}</span></div>`:""}
    ${z>0||h?`<div class="row"><span>المدفوع</span><span>${r(z)}</span></div>`:""}
    ${k>0?`<div class="row warn"><span>${h?"المتبقي (على الحساب)":"المتبقي"}</span><span>${r(k)}</span></div>`:""}
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
</html>`;n.document.open(),n.document.write(p),n.document.close()}function o(n){return String(n??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}function Z(n){return o(n)}export{st as P,it as a,at as b,L as c,dt as f,nt as i,rt as l,lt as p};
