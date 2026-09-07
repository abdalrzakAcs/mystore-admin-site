import{c as A,s as l,F as P,f as r,A as $,D as N,r as T,j as t}from"./index-D9ojWl-n.js";/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H=A("Printer",[["path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",key:"143wyd"}],["path",{d:"M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6",key:"1itne7"}],["rect",{x:"6",y:"14",width:"12",height:"8",rx:"1",key:"1ue0tg"}]]);function _(e){const s=l(e.qty),n=l(e.price),a=s*n,d=e.unit_qty==null?null:l(e.unit_qty);if(d!=null&&d>0&&e.unit_label){const x=e.unit_price==null?a/d:l(e.unit_price);return{qty:d,unit:String(e.unit_label),unitPrice:x,pieces:s,total:a}}return{qty:s,unit:null,unitPrice:n,pieces:s,total:a}}function w(e){const n=(Array.isArray(e.items)?e.items:[]).map(a=>`${String(a.product_id??a.name??"")}:${l(a.qty)}`).sort();return`${Math.round(P(e))}|${n.join(",")}`}function I(e){const s=new Set;for(let n=1;n<e.length;n++){const a=e[n-1],d=e[n];a.status==="cancelled"||d.status==="cancelled"||(Array.isArray(d.items)?d.items:[]).length===0||w(a)===w(d)&&(s.add(String(a.id)),s.add(String(d.id)))}return s}T.forwardRef(function({order:s,store:n},a){const d=Array.isArray(s.items)?s.items:[],x=d.reduce((h,o)=>h+l(o.qty)*l(o.price),0),g=l(s.discount),u=l(s.delivery),f=x-g+u,v=l(s.paid),m=f-v,b=k(s),j=z(s);return t.jsxs("div",{ref:a,dir:"rtl",className:"invoice bg-white text-black mx-auto relative",style:{width:"210mm",minHeight:"297mm",padding:"15mm",fontFamily:'"Tajawal", sans-serif'},children:[b&&t.jsx("div",{"aria-hidden":!0,className:"pointer-events-none absolute inset-0 grid place-items-center",style:{zIndex:0},children:t.jsx("div",{className:"border-[6px] border-red-600 text-red-600 font-black rounded-md px-10 py-3",style:{fontSize:"72px",transform:"rotate(-18deg)",opacity:.22,letterSpacing:"0.1em"},children:"ملغاة"})}),b&&t.jsxs("div",{className:"mb-4 border-2 border-red-600 text-red-700 rounded p-2 text-center font-black text-base",children:["فاتورة ملغاة — لا تُعتمد للبيع",s.cancel_reason?t.jsxs("span",{className:"block text-xs font-bold mt-1",children:["سبب الإلغاء: ",s.cancel_reason]}):null]}),t.jsxs("div",{className:"flex items-start justify-between mb-6 pb-4 border-b-2 border-gray-900",children:[t.jsxs("div",{className:"flex items-center gap-4",children:[n.logo_url&&t.jsx("img",{src:n.logo_url,alt:"",className:"w-20 h-20 object-contain",crossOrigin:"anonymous"}),t.jsxs("div",{children:[t.jsx("h1",{className:"text-3xl font-black text-gray-900",children:n.store_name||"My Store"}),n.address&&t.jsx("div",{className:"text-sm mt-1",children:n.address}),n.phone&&t.jsxs("div",{className:"text-sm",dir:"ltr",children:["📞 ",n.phone]}),n.email&&t.jsxs("div",{className:"text-sm",dir:"ltr",children:["✉ ",n.email]}),n.tax_number&&t.jsxs("div",{className:"text-xs text-gray-600 mt-1",children:["الرقم الضريبي: ",n.tax_number]})]})]}),t.jsxs("div",{className:"text-end",children:[t.jsx("div",{className:"inline-block px-4 py-1 rounded font-black text-lg text-white "+(b?"bg-red-600":"bg-gray-900"),children:b?"فاتورة ملغاة":"فاتورة"}),t.jsxs("div",{className:"text-xs mt-2",children:[t.jsxs("div",{children:[t.jsx("strong",{children:"رقم:"})," ",s.id]}),t.jsxs("div",{children:[t.jsx("strong",{children:"التاريخ:"})," ",$(N(s.created_at))]})]})]})]}),n.receipt_header&&t.jsx("div",{className:"mb-4 p-3 bg-gray-50 rounded text-sm font-bold text-center",children:n.receipt_header}),(s.customer_name||s.customer_phone||s.delivery_address)&&t.jsxs("div",{className:"mb-6 bg-gray-50 rounded-lg p-4",children:[t.jsx("div",{className:"text-xs font-extrabold text-gray-500 mb-2",children:"العميل"}),t.jsxs("div",{className:"grid grid-cols-3 gap-4 text-sm",children:[s.customer_name&&t.jsxs("div",{children:[t.jsx("div",{className:"font-extrabold text-gray-500 text-xs",children:"الاسم"}),t.jsx("div",{className:"font-bold",children:s.customer_name})]}),s.customer_phone&&t.jsxs("div",{children:[t.jsx("div",{className:"font-extrabold text-gray-500 text-xs",children:"الهاتف"}),t.jsx("div",{className:"font-bold",dir:"ltr",children:s.customer_phone})]}),s.delivery_address&&t.jsxs("div",{children:[t.jsx("div",{className:"font-extrabold text-gray-500 text-xs",children:"العنوان"}),t.jsx("div",{className:"font-bold",children:s.delivery_address})]})]})]}),t.jsxs("table",{className:"w-full border-collapse text-sm mb-6",children:[t.jsx("thead",{children:t.jsxs("tr",{className:"bg-gray-900 text-white",children:[t.jsx("th",{className:"p-2 border border-gray-900 text-center font-extrabold",children:"#"}),t.jsx("th",{className:"p-2 border border-gray-900 font-extrabold",children:"الصنف"}),t.jsx("th",{className:"p-2 border border-gray-900 text-center font-extrabold w-24",children:"الكمية"}),t.jsx("th",{className:"p-2 border border-gray-900 text-center font-extrabold w-32",children:"السعر"}),t.jsx("th",{className:"p-2 border border-gray-900 text-center font-extrabold w-32",children:"الإجمالي"})]})}),t.jsx("tbody",{children:d.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:5,className:"p-4 text-center border border-gray-300",children:"لا توجد أصناف"})}):d.map((h,o)=>{const c=_(h);return t.jsxs("tr",{className:"odd:bg-gray-50",children:[t.jsx("td",{className:"p-2 border border-gray-300 text-center",children:o+1}),t.jsxs("td",{className:"p-2 border border-gray-300 font-bold break-words",children:[h.name||h.product_id||"—",c.unit&&c.pieces!==c.qty&&t.jsxs("span",{className:"text-xs text-gray-500 font-normal ms-1",children:["(= ",c.pieces," قطعة)"]})]}),t.jsxs("td",{className:"p-2 border border-gray-300 text-center font-bold",children:[c.qty,c.unit?` ${c.unit}`:""]}),t.jsx("td",{className:"p-2 border border-gray-300 text-center",children:r(c.unitPrice)}),t.jsx("td",{className:"p-2 border border-gray-300 text-center font-bold",children:r(c.total)})]},o)})})]}),s.note?t.jsxs("div",{className:"mt-3 border border-gray-900 rounded p-2 text-sm",children:[t.jsx("span",{className:"font-extrabold",children:"ملاحظة: "}),t.jsx("span",{className:"font-bold",children:s.note})]}):null,t.jsx("div",{className:"flex justify-end",children:t.jsxs("div",{className:"w-80",children:[t.jsx(y,{label:"المجموع قبل الخصم",value:r(x)}),g>0&&t.jsx(y,{label:"الخصم",value:`-${r(g)}`}),u>0&&t.jsx(y,{label:"التوصيل",value:`+${r(u)}`}),t.jsx(y,{label:"الإجمالي",value:r(f),big:!0}),(v>0||j)&&t.jsx(y,{label:"المدفوع",value:r(v)}),m>0&&t.jsx(y,{label:j?"المتبقي (على الحساب)":"المتبقي",value:r(m),warning:!0})]})}),t.jsxs("div",{className:"mt-8 pt-4 border-t-2 border-gray-900 text-center text-sm",children:[n.receipt_footer?t.jsx("div",{className:"font-bold",children:n.receipt_footer}):t.jsx("div",{className:"font-bold",children:"شكراً لتعاملكم معنا 🙏"}),t.jsx("div",{className:"text-xs text-gray-500 mt-2",children:"My Store — نظام إدارة متكامل"})]})]})});function k(e){return e.status==="cancelled"}function z(e){return e.payment_method==="account"||e.is_debt===!0}function y({label:e,value:s,big:n,warning:a}){return t.jsxs("div",{className:"flex items-center justify-between py-2 px-3 border-b border-gray-300 "+(n?"bg-gray-900 text-white font-black text-lg":"")+(a?" bg-red-100 text-red-900 font-black":""),children:[t.jsx("span",{children:e}),t.jsx("span",{className:"tabular-nums",children:s})]})}function O(e,s){const n=window.open("","_blank","width=900,height=700");if(!n){alert("يرجى السماح بالنوافذ المنبثقة للطباعة");return}const a=Array.isArray(e.items)?e.items:[],d=a.reduce((o,c)=>o+l(c.qty)*l(c.price),0),x=l(e.discount),g=l(e.delivery),u=d-x+g,f=l(e.paid),v=u-f,m=k(e),b=z(e),j=a.map((o,c)=>{const p=_(o),S=p.unit&&p.pieces!==p.qty?` <span style="font-size:11px;color:#666;font-weight:400">(= ${p.pieces} قطعة)</span>`:"",q=p.unit?`${p.qty} ${i(p.unit)}`:String(p.qty);return`
      <tr>
        <td style="text-align:center">${c+1}</td>
        <td style="font-weight:700;word-break:break-word">${i(o.name||String(o.product_id||"—"))}${S}</td>
        <td style="text-align:center;font-weight:700">${q}</td>
        <td style="text-align:center">${r(p.unitPrice)}</td>
        <td style="text-align:center;font-weight:700">${r(p.total)}</td>
      </tr>
    `}).join(""),h=`
<!doctype html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="utf-8">
  <title>${m?"فاتورة ملغاة":"فاتورة"} ${i(String(e.id))}</title>
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
  ${m?'<div class="stamp" aria-hidden="true"><span>ملغاة</span></div>':""}
  ${m?`<div class="cancel-banner">فاتورة ملغاة — لا تُعتمد للبيع${e.cancel_reason?`<small>سبب الإلغاء: ${i(e.cancel_reason)}</small>`:""}</div>`:""}
  <div class="hdr">
    <div style="display:flex;gap:16px;align-items:flex-start;">
      ${s.logo_url?`<img src="${M(s.logo_url)}" style="width:70px;height:70px;object-fit:contain">`:""}
      <div class="store-info">
        <h1>${i(s.store_name||"My Store")}</h1>
        ${s.address?`<div>${i(s.address)}</div>`:""}
        ${s.phone?`<div dir="ltr">📞 ${i(s.phone)}</div>`:""}
        ${s.email?`<div dir="ltr">✉ ${i(s.email)}</div>`:""}
        ${s.tax_number?`<div style="font-size:11px;color:#666">الرقم الضريبي: ${i(s.tax_number)}</div>`:""}
      </div>
    </div>
    <div>
      <div class="badge${m?" cancelled":""}">${m?"فاتورة ملغاة":"فاتورة"}</div>
      <div class="meta">
        <div><strong>رقم:</strong> ${i(String(e.id))}</div>
        <div><strong>التاريخ:</strong> ${i($(N(e.created_at)))}</div>
      </div>
    </div>
  </div>

  ${s.receipt_header?`<div class="custom-header">${i(s.receipt_header)}</div>`:""}

  ${e.customer_name||e.customer_phone||e.delivery_address?`
    <div class="customer">
      <div style="font-size:11px;font-weight:800;color:#666;margin-bottom:8px">العميل</div>
      <div class="customer-grid">
        ${e.customer_name?`<div><div class="lbl">الاسم</div><div style="font-weight:700">${i(e.customer_name)}</div></div>`:""}
        ${e.customer_phone?`<div><div class="lbl">الهاتف</div><div dir="ltr" style="font-weight:700">${i(e.customer_phone)}</div></div>`:""}
        ${e.delivery_address?`<div><div class="lbl">العنوان</div><div style="font-weight:700">${i(e.delivery_address)}</div></div>`:""}
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
      </tr>
    </thead>
    <tbody>
      ${j||'<tr><td colspan="5" style="text-align:center;padding:14px">لا توجد أصناف</td></tr>'}
    </tbody>
  </table>

  ${e.note?`<div class="note"><b>ملاحظة:</b> ${i(String(e.note))}</div>`:""}

  <div class="totals">
    <div class="row"><span>المجموع قبل الخصم</span><span>${r(d)}</span></div>
    ${x>0?`<div class="row"><span>الخصم</span><span>-${r(x)}</span></div>`:""}
    ${g>0?`<div class="row"><span>التوصيل</span><span>+${r(g)}</span></div>`:""}
    <div class="row big"><span>الإجمالي</span><span>${r(u)}</span></div>
    ${f>0||b?`<div class="row"><span>المدفوع</span><span>${r(f)}</span></div>`:""}
    ${v>0?`<div class="row warn"><span>${b?"المتبقي (على الحساب)":"المتبقي"}</span><span>${r(v)}</span></div>`:""}
  </div>

  <div class="footer">
    <div class="msg">${i(s.receipt_footer||"شكراً لتعاملكم معنا 🙏")}</div>
    <div class="sig">My Store — نظام إدارة متكامل</div>
  </div>

  <script>
    window.onload = function() {
      setTimeout(function() { window.print(); }, 300);
    };
  <\/script>
</body>
</html>`;n.document.open(),n.document.write(h),n.document.close()}function i(e){return String(e??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}function M(e){return i(e)}export{H as P,I as d,_ as l,O as p};
