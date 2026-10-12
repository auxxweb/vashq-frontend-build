function l(e){if(e==null)return"";const t=String(e);return/[",\n\r]/.test(t)?`"${t.replace(/"/g,'""')}"`:t}function s(e){if(!e?.length)return"";const t=Object.keys(e[0]),n=[t.map(l).join(",")];for(const r of e)n.push(t.map(o=>l(r[o])).join(","));return n.join(`\r
`)}function c(e,t,n="text/csv;charset=utf-8"){const r=new Blob([e],{type:n}),o=URL.createObjectURL(r),i=document.createElement("a");i.href=o,i.download=t,i.click(),URL.revokeObjectURL(o)}function d(e){if(!e)return;const t=window.open("","_blank");if(!t){window.print();return}t.document.write(`
    <!DOCTYPE html>
    <html>
      <head><title>Report</title>
        <style>
          body { font-family: system-ui, sans-serif; padding: 16px; font-size: 12px; }
          table { border-collapse: collapse; width: 100%; }
          th, td { border: 1px solid #ddd; padding: 6px 8px; text-align: left; }
          th { background: #f5f5f5; }
          tr:nth-child(even) { background: #fafafa; }
        </style>
      </head>
      <body>${e.innerHTML}</body>
    </html>
  `),t.document.close(),t.focus(),setTimeout(()=>{t.print(),t.close()},250)}export{s as b,c as d,d as p};
