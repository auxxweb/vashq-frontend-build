const t={received:`Hello {{name}}, your vehicle {{vehicleNumber}} has been received. Token: {{token}}

Before photos: {{beforeImagesLink}}`,workStarted:"Your vehicle {{vehicleNumber}} – work is in progress.",completed:`✅ Your vehicle {{vehicleNumber}} is ready for delivery. Token: {{token}}.{{pendingNote}}

View & pay invoice: {{invoiceLink}}`,delivered:`🚗 Thank you! Your vehicle {{vehicleNumber}} has been delivered. Job completed.{{pendingNote}}

View & pay invoice: {{invoiceLink}}

Before photos: {{beforeImagesLink}}
After photos: {{afterImagesLink}}`,invoiceShare:"Hello {{name}}, your vehicle service is completed. Total: {{total}} {{currency}}.{{pendingNote}} View & download invoice (PDF): {{invoiceLink}} Thank you!",invoicePackage:"Hello {{name}}, your package purchase is ready. Total: {{total}} {{currency}}. Package: {{packageName}}. View & download invoice (PDF): {{invoiceLink}} Thank you!",googleReview:`Thank you for choosing us 🙏
Please leave us a Google review: {{reviewLink}}`},s={RECEIVED:"received",WORK_STARTED:"workStarted",COMPLETED:"completed",DELIVERED:"delivered"},a={...t};function l(i){const e={...t,...i&&typeof i=="object"?i:{}};return!String(e.workStarted||"").trim()&&String(e.inProgress||"").trim()&&(e.workStarted=e.inProgress),String(e.completed||"").trim()==="✅ Your vehicle {{vehicleNumber}} is ready for delivery. Token: {{token}}"&&(e.completed=t.completed),String(e.invoiceShare||"").trim()==="Hello {{name}}, your vehicle service is completed. Total: {{total}} {{currency}}. View & download invoice (PDF): {{invoiceLink}} Thank you!"&&(e.invoiceShare=t.invoiceShare),String(e.delivered||"").trim()===`🚗 Thank you! Your vehicle {{vehicleNumber}} has been delivered. Job completed.

Before photos: {{beforeImagesLink}}
After photos: {{afterImagesLink}}`&&(e.delivered=t.delivered),e}function v(i,o={}){if(!i)return"";let e=String(i);for(const[r,n]of Object.entries(o))e=e.replace(new RegExp(`\\{\\{${r}\\}\\}`,"g"),String(n??""));return o.beforeImagesLink||(e=e.replace(/^\s*Before photos:\s*$/gim,"").replace(/^\s*Before\/After photos:\s*$/gim,"")),o.afterImagesLink||(e=e.replace(/^\s*After photos:\s*$/gim,"")),e.replace(/\n{3,}/g,`

`).trimEnd()}function g(i,o){const e=l(i),r=s[o];if(!r)return"";const n=String(e[r]||"").trim();if(n)return n;if(r==="workStarted"){const c=String(e.inProgress||e.washing||"").trim();if(c)return c}return a[r]||""}function d(i,o){const e=l(i);return o==="PACKAGE"?String(e.invoicePackage||e.invoiceShare||a.invoicePackage).trim():String(e.invoiceShare||a.invoiceShare).trim()}function m(i){const o=l(i);return String(o.googleReview||a.googleReview).trim()}export{t as D,m as a,d as b,v as f,l as n,g as r};
