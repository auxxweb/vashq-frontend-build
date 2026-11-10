import{W as $e,a9 as qt,f as R,R as Be,o as re,I as Ve,w as H,j as Un,k as jn,l as Vn,m as Fn,n as ft,Q as Wn,V as Hn,az as qn,bm as $n,b1 as Bn}from"./index-DTuZ8Fao.js";import{j as o,r as _}from"./motion-Bp917_L6.js";import{f as A}from"./currencyUtils-CJd_f-r_.js";import{a as Te,c as $t,d as Kn,f as zn}from"./packageValidity-BRk9BjjQ.js";import{P as Bt}from"./PackageCategoryChips-SEkF_z2r.js";import{C as Gn}from"./chevron-right-Dl8qKRJs.js";import{V as Jn}from"./VehicleNumberInput-ngOZRZEl.js";import{P as Yn}from"./PhoneInputWithCountry-y5aDR4ih.js";import{v as Xn}from"./phoneValidation-B2Ec6zlE.js";import{b as D,_ as Kt,c as zt,d as Qn,e as Zn,f as C,h as Fe,j as Ke,p as es,q as te,E as ze,k as T,l as ts,m as ns,S as he,n as ss,r as rs,s as is,F as Ge,L as as,t as Gt,u as os,v as cs,w as pt,C as mt,x as gt,y as ls}from"./firebase-8X5-kH0m.js";import{a as us}from"./firebase-D5wbs-Ko.js";import{C as _t}from"./check-circle-2-LMyuqPcV.js";import{C as ds}from"./clock-CYbZUzBf.js";/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jt=$e("Repeat",[["path",{d:"m17 2 4 4-4 4",key:"nntrym"}],["path",{d:"M3 11v-1a4 4 0 0 1 4-4h14",key:"84bu3i"}],["path",{d:"m7 22-4-4 4-4",key:"1wqhfi"}],["path",{d:"M21 13v1a4 4 0 0 1-4 4H3",key:"1rx37r"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hs=$e("ShieldCheck",[["path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10",key:"1irkt0"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ca=$e("Ticket",[["path",{d:"M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",key:"qn84l0"}],["path",{d:"M13 5v2",key:"dyzc3o"}],["path",{d:"M13 17v2",key:"1ont0d"}],["path",{d:"M13 11v2",key:"1wjjxi"}]]),yt=3;function fs({pkg:n,currency:e,requested:t,onView:s,className:r}){const i=A(n.price,e);return o.jsxs("button",{type:"button",onClick:()=>s?.(n),"aria-label":`${n.name}, ${i}, view details`,className:Be("flex w-full min-h-[64px] items-center gap-3 rounded-2xl bg-card shadow-neu px-4 py-3 text-left transition-shadow hover:shadow-neu-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",r),children:[o.jsxs("div",{className:"min-w-0 flex-1",children:[o.jsx("p",{className:"font-semibold truncate",children:n.name}),o.jsxs("p",{className:"text-xs text-muted-foreground truncate",children:[n.categories?.length?`${n.categories.map(a=>a.name).join(", ")} · `:"",n.totalVisits," ",n.totalVisits===1?"visit":"visits"," · valid ",Te(n),t?" · Requested":""]})]}),o.jsxs("div",{className:"shrink-0 text-right",children:[o.jsx("p",{className:"font-bold text-primary",children:i}),n.savings>0&&o.jsxs("p",{className:"text-[11px] font-semibold text-[hsl(var(--success))]",children:["Save ",A(n.savings,e)]})]}),o.jsx(Gn,{className:"h-4 w-4 shrink-0 text-muted-foreground"})]})}function It({pkg:n,currency:e,requested:t=!1,onView:s,className:r,variant:i="card"}){if(i==="row")return o.jsx(fs,{pkg:n,currency:e,requested:t,onView:s,className:r});const a=n.services||[],c=a.length-yt;return o.jsxs("div",{className:Be("flex flex-col rounded-2xl bg-card shadow-neu p-4 gap-3 text-left",r),children:[o.jsx(Bt,{categories:n.categories,className:"-mb-1"}),o.jsxs("div",{className:"flex items-start justify-between gap-2",children:[o.jsx("p",{className:"font-semibold leading-snug break-words",children:n.name}),n.savings>0&&o.jsxs("span",{className:"shrink-0 rounded-full bg-[hsl(var(--success))]/15 px-2 py-0.5 text-[11px] font-semibold text-[hsl(var(--success))]",children:["Save ",A(n.savings,e)]})]}),o.jsxs("div",{children:[o.jsx("p",{className:"text-xl font-bold text-primary",children:A(n.price,e)}),n.savings>0&&n.individualTotal?o.jsx("p",{className:"text-xs text-muted-foreground line-through",children:A(n.individualTotal,e)}):null]}),o.jsxs("div",{className:"flex flex-wrap gap-x-3 gap-y-1 text-xs text-muted-foreground",children:[o.jsxs("span",{className:"inline-flex items-center gap-1",children:[o.jsx(Jt,{className:"h-3.5 w-3.5"}),n.totalVisits," ",n.totalVisits===1?"visit":"visits"]}),o.jsxs("span",{className:"inline-flex items-center gap-1",children:[o.jsx(qt,{className:"h-3.5 w-3.5"}),"Valid ",Te(n)]})]}),o.jsxs("ul",{className:"text-sm space-y-1 flex-1",children:[a.slice(0,yt).map(l=>o.jsxs("li",{className:"flex items-start gap-2",children:[o.jsx("span",{className:"mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60"}),o.jsx("span",{className:"break-words",children:$t(l)})]},String(l.serviceId))),c>0&&o.jsxs("li",{className:"text-xs text-muted-foreground pl-3.5",children:["+",c," more"]})]}),o.jsx(R,{type:"button",variant:t?"outline":"default",className:"w-full rounded-xl min-h-[44px]",onClick:()=>s?.(n),children:t?"Requested · View details":"View details"})]})}function Yt(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const ps=Yt,Xt=new ze("auth","Firebase",Yt());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ee=new as("@firebase/auth");function ms(n,...e){Ee.logLevel<=Gt.WARN&&Ee.warn(`Auth (${he}): ${n}`,...e)}function ye(n,...e){Ee.logLevel<=Gt.ERROR&&Ee.error(`Auth (${he}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L(n,...e){throw Je(n,...e)}function v(n,...e){return Je(n,...e)}function Qt(n,e,t){const s={...ps(),[e]:t};return new ze("auth","Firebase",s).create(e,{appName:n.name})}function q(n){return Qt(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Je(n,...e){if(typeof n!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=n.name),n._errorFactory.create(t,...s)}return Xt.create(n,...e)}function d(n,e,...t){if(!n)throw Je(e,...t)}function x(n){const e="INTERNAL ASSERTION FAILED: "+n;throw ye(e),new Error(e)}function M(n,e){n||x(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function We(){return typeof self<"u"&&self.location?.href||""}function Zt(){return wt()==="http:"||wt()==="https:"}function wt(){return typeof self<"u"&&self.location?.protocol||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gs(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Zt()||is()||"connection"in navigator)?navigator.onLine:!0}function _s(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe{constructor(e,t){this.shortDelay=e,this.longDelay=t,M(t>e,"Short delay should be less than long delay!"),this.isMobile=ss()||rs()}get(){return gs()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ye(n,e){M(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;x("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;x("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;x("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ys={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Is=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],ws=new fe(3e4,6e4);function N(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function k(n,e,t,s,r={}){return tn(n,r,async()=>{let i={},a={};s&&(e==="GET"?a=s:i={body:JSON.stringify(s)});const c=te({key:n.config.apiKey,...a}).slice(1),l=await n._getAdditionalHeaders();l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode);const u={method:e,headers:l,...i};return cs()||(u.referrerPolicy="no-referrer"),n.emulatorConfig&&Ke(n.emulatorConfig.host)&&(u.credentials="include"),en.fetch()(await nn(n,n.config.apiHost,t,c),u)})}async function tn(n,e,t){n._canInitEmulator=!1;const s={...ys,...e};try{const r=new Ts(n),i=await Promise.race([t(),r.promise]);r.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw se(n,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const c=i.ok?a.errorMessage:a.error.message,[l,u]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw se(n,"credential-already-in-use",a);if(l==="EMAIL_EXISTS")throw se(n,"email-already-in-use",a);if(l==="USER_DISABLED")throw se(n,"user-disabled",a);const h=s[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Qt(n,h,u);L(n,h)}}catch(r){if(r instanceof Ge)throw r;L(n,"network-request-failed",{message:String(r)})}}async function Ce(n,e,t,s,r={}){const i=await k(n,e,t,s,r);return"mfaPendingCredential"in i&&L(n,"multi-factor-auth-required",{_serverResponse:i}),i}async function nn(n,e,t,s){const r=`${e}${t}?${s}`,i=n,a=i.config.emulator?Ye(n.config,r):`${n.config.apiScheme}://${r}`;return Is.includes(t)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(a).toString():a}function vs(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Ts{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(v(this.auth,"network-request-failed")),ws.get())})}}function se(n,e,t){const s={appName:n.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const r=v(n,e,s);return r.customData._tokenResponse=t,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vt(n){return n!==void 0&&n.getResponse!==void 0}function Tt(n){return n!==void 0&&n.enterprise!==void 0}class sn{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return vs(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Es(n){return(await k(n,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function rn(n,e){return k(n,"GET","/v2/recaptchaConfig",N(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ss(n,e){return k(n,"POST","/v1/accounts:delete",e)}async function Se(n,e){return k(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ie(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Rs(n,e=!1){const t=D(n),s=await t.getIdToken(e),r=Xe(s);d(r&&r.exp&&r.auth_time&&r.iat,t.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,a=i?.sign_in_provider;return{claims:r,token:s,authTime:ie(Oe(r.auth_time)),issuedAtTime:ie(Oe(r.iat)),expirationTime:ie(Oe(r.exp)),signInProvider:a||null,signInSecondFactor:i?.sign_in_second_factor||null}}function Oe(n){return Number(n)*1e3}function Xe(n){const[e,t,s]=n.split(".");if(e===void 0||t===void 0||s===void 0)return ye("JWT malformed, contained fewer than 3 sections"),null;try{const r=os(t);return r?JSON.parse(r):(ye("Failed to decode base64 JWT payload"),null)}catch(r){return ye("Caught error parsing JWT payload as JSON",r?.toString()),null}}function Et(n){const e=Xe(n);return d(e,"internal-error"),d(typeof e.exp<"u","internal-error"),d(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ue(n,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof Ge&&Ps(s)&&n.auth.currentUser===n&&await n.auth.signOut(),s}}function Ps({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ks{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=ie(this.lastLoginAt),this.creationTime=ie(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Re(n){const e=n.auth,t=await n.getIdToken(),s=await ue(n,Se(e,{idToken:t}));d(s?.users.length,e,"internal-error");const r=s.users[0];n._notifyReloadListener(r);const i=r.providerUserInfo?.length?an(r.providerUserInfo):[],a=Cs(n.providerData,i),c=n.isAnonymous,l=!(n.email&&r.passwordHash)&&!a?.length,u=c?l:!1,h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new He(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(n,h)}async function bs(n){const e=D(n);await Re(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Cs(n,e){return[...n.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function an(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ns(n,e){const t=await tn(n,{},async()=>{const s=te({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=n.config,a=await nn(n,r,"/v1/token",`key=${i}`),c=await n._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:c,body:s};return n.emulatorConfig&&Ke(n.emulatorConfig.host)&&(l.credentials="include"),en.fetch()(a,l)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function As(n,e){return k(n,"POST","/v2/accounts:revokeToken",N(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){d(e.idToken,"internal-error"),d(typeof e.idToken<"u","internal-error"),d(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Et(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){d(e.length!==0,"internal-error");const t=Et(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(d(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:r,expiresIn:i}=await Ns(e,t);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:r,expirationTime:i}=t,a=new J;return s&&(d(typeof s=="string","internal-error",{appName:e}),a.refreshToken=s),r&&(d(typeof r=="string","internal-error",{appName:e}),a.accessToken=r),i&&(d(typeof i=="number","internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new J,this.toJSON())}_performRefresh(){return x("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U(n,e){d(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class P{constructor({uid:e,auth:t,stsTokenManager:s,...r}){this.providerId="firebase",this.proactiveRefresh=new ks(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new He(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const t=await ue(this,this.stsTokenManager.getToken(this.auth,e));return d(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Rs(this,e)}reload(){return bs(this)}_assign(e){this!==e&&(d(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new P({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){d(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await Re(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(C(this.auth.app))return Promise.reject(q(this.auth));const e=await this.getIdToken();return await ue(this,Ss(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const s=t.displayName??void 0,r=t.email??void 0,i=t.phoneNumber??void 0,a=t.photoURL??void 0,c=t.tenantId??void 0,l=t._redirectEventId??void 0,u=t.createdAt??void 0,h=t.lastLoginAt??void 0,{uid:f,emailVerified:g,isAnonymous:E,providerData:I,stsTokenManager:w}=t;d(f&&w,e,"internal-error");const b=J.fromJSON(this.name,w);d(typeof f=="string",e,"internal-error"),U(s,e.name),U(r,e.name),d(typeof g=="boolean",e,"internal-error"),d(typeof E=="boolean",e,"internal-error"),U(i,e.name),U(a,e.name),U(c,e.name),U(l,e.name),U(u,e.name),U(h,e.name);const p=new P({uid:f,auth:e,email:r,emailVerified:g,displayName:s,isAnonymous:E,photoURL:a,phoneNumber:i,tenantId:c,stsTokenManager:b,createdAt:u,lastLoginAt:h});return I&&Array.isArray(I)&&(p.providerData=I.map(B=>({...B}))),l&&(p._redirectEventId=l),p}static async _fromIdTokenResponse(e,t,s=!1){const r=new J;r.updateFromServerResponse(t);const i=new P({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await Re(i),i}static async _fromGetAccountInfoResponse(e,t,s){const r=t.users[0];d(r.localId!==void 0,"internal-error");const i=r.providerUserInfo!==void 0?an(r.providerUserInfo):[],a=!(r.email&&r.passwordHash)&&!i?.length,c=new J;c.updateFromIdToken(s);const l=new P({uid:r.localId,auth:e,stsTokenManager:c,isAnonymous:a}),u={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:i,metadata:new He(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!i?.length};return Object.assign(l,u),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const St=new Map;function O(n){M(n instanceof Function,"Expected a class definition");let e=St.get(n);return e?(M(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,St.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}on.type="NONE";const Rt=on;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ie(n,e,t){return`firebase:${n}:${e}:${t}`}class Y{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=Ie(this.userKey,r.apiKey,i),this.fullPersistenceKey=Ie("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Se(this.auth,{idToken:e}).catch(()=>{});return t?P._fromGetAccountInfoResponse(this.auth,t,e):null}return P._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new Y(O(Rt),e,s);const r=(await Promise.all(t.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=r[0]||O(Rt);const a=Ie(s,e.config.apiKey,e.name);let c=null;for(const u of t)try{const h=await u._get(a);if(h){let f;if(typeof h=="string"){const g=await Se(e,{idToken:h}).catch(()=>{});if(!g)break;f=await P._fromGetAccountInfoResponse(e,g,h)}else f=P._fromJSON(e,h);u!==i&&(c=f),i=u;break}}catch{}const l=r.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new Y(i,e,s):(i=l[0],c&&await i._set(a,c.toJSON()),await Promise.all(t.map(async u=>{if(u!==i)try{await u._remove(a)}catch{}})),new Y(i,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pt(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(dn(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(cn(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(fn(e))return"Blackberry";if(pn(e))return"Webos";if(ln(e))return"Safari";if((e.includes("chrome/")||un(e))&&!e.includes("edge/"))return"Chrome";if(hn(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=n.match(t);if(s?.length===2)return s[1]}return"Other"}function cn(n=T()){return/firefox\//i.test(n)}function ln(n=T()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function un(n=T()){return/crios\//i.test(n)}function dn(n=T()){return/iemobile/i.test(n)}function hn(n=T()){return/android/i.test(n)}function fn(n=T()){return/blackberry/i.test(n)}function pn(n=T()){return/webos/i.test(n)}function Qe(n=T()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function xs(n=T()){return Qe(n)&&!!window.navigator?.standalone}function Os(){return ts()&&document.documentMode===10}function mn(n=T()){return Qe(n)||hn(n)||pn(n)||fn(n)||/windows phone/i.test(n)||dn(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gn(n,e=[]){let t;switch(n){case"Browser":t=Pt(T());break;case"Worker":t=`${Pt(T())}-${n}`;break;default:t=n}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${he}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ls{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=i=>new Promise((a,c)=>{try{const l=e(i);a(l)}catch(l){c(l)}});s.onAbort=t,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const r of t)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s?.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ms(n,e={}){return k(n,"GET","/v2/passwordPolicy",N(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ds=6;class Us{constructor(e){const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??Ds,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),r&&(t.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let r=0;r<e.length;r++)s=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,r,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class js{constructor(e,t,s,r){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new kt(this),this.idTokenSubscription=new kt(this),this.beforeStateQueue=new Ls(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Xt,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=O(t)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await Y.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Se(this,{idToken:e}),s=await P._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(C(this.app)){const i=this.app.settings.authIdToken;return i?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(i).then(a,a))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let s=t,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=this.redirectUser?._redirectEventId,a=s?._redirectEventId,c=await this.tryRedirectSignIn(e);(!i||i===a)&&c?.user&&(s=c.user,r=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(s)}catch(i){s=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(i))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return d(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Re(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=_s()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(C(this.app))return Promise.reject(q(this));const t=e?D(e):null;return t&&d(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&d(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return C(this.app)?Promise.reject(q(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return C(this.app)?Promise.reject(q(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(O(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Ms(this),t=new Us(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new ze("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await As(this,s)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&O(e)||this._popupRedirectResolver;d(t,this,"argument-error"),this.redirectPersistenceManager=await Y.create(this,[O(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,r){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let a=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(d(c,this,"internal-error"),c.then(()=>{a||i(this.currentUser)}),typeof t=="function"){const l=e.addObserver(t,s,r);return()=>{a=!0,l()}}else{const l=e.addObserver(t);return()=>{a=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return d(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=gn(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();t&&(e["X-Firebase-Client"]=t);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){if(C(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&ms(`Error while retrieving App Check token: ${e.error}`),e?.token}}function $(n){return D(n)}class kt{constructor(e){this.auth=e,this.observer=null,this.addObserver=ls(t=>this.observer=t)}get next(){return d(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let pe={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Vs(n){pe=n}function Ze(n){return pe.loadJS(n)}function Fs(){return pe.recaptchaV2Script}function Ws(){return pe.recaptchaEnterpriseScript}function Hs(){return pe.gapiScript}function _n(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qs=500,$s=6e4,_e=1e12;class Bs{constructor(e){this.auth=e,this.counter=_e,this._widgets=new Map}render(e,t){const s=this.counter;return this._widgets.set(s,new Gs(e,this.auth.name,t||{})),this.counter++,s}reset(e){const t=e||_e;this._widgets.get(t)?.delete(),this._widgets.delete(t)}getResponse(e){const t=e||_e;return this._widgets.get(t)?.getResponse()||""}async execute(e){const t=e||_e;return this._widgets.get(t)?.execute(),""}}class Ks{constructor(){this.enterprise=new zs}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class zs{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class Gs{constructor(e,t,s){this.params=s,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const r=typeof e=="string"?document.getElementById(e):e;d(r,"argument-error",{appName:t}),this.container=r,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=Js(50);const{callback:e,"expired-callback":t}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,t)try{t()}catch{}this.isVisible&&this.execute()},$s)},qs))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function Js(n){const e=[],t="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let s=0;s<n;s++)e.push(t.charAt(Math.floor(Math.random()*t.length)));return e.join("")}const Ys="recaptcha-enterprise",ae="NO_RECAPTCHA";class yn{constructor(e){this.type=Ys,this.auth=$(e)}async verify(e="verify",t=!1){async function s(i){if(!t){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(a,c)=>{rn(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const u=new sn(l);return i.tenantId==null?i._agentRecaptchaConfig=u:i._tenantRecaptchaConfigs[i.tenantId]=u,a(u.siteKey)}}).catch(l=>{c(l)})})}function r(i,a,c){const l=window.grecaptcha;Tt(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(u=>{a(u)}).catch(()=>{a(ae)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new Ks().execute("siteKey",{action:"verify"}):new Promise((i,a)=>{s(this.auth).then(c=>{if(!t&&Tt(window.grecaptcha))r(c,i,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let l=Ws();l.length!==0&&(l+=c),Ze(l).then(()=>{r(c,i,a)}).catch(u=>{a(u)})}}).catch(c=>{a(c)})})}}async function Le(n,e,t,s=!1,r=!1){const i=new yn(n);let a;if(r)a=ae;else try{a=await i.verify(t)}catch{a=await i.verify(t,!0)}const c={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in c){const l=c.phoneEnrollmentInfo.phoneNumber,u=c.phoneEnrollmentInfo.recaptchaToken;Object.assign(c,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:u,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in c){const l=c.phoneSignInInfo.recaptchaToken;Object.assign(c,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return c}return s?Object.assign(c,{captchaResp:a}):Object.assign(c,{captchaResponse:a}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function Me(n,e,t,s,r){if(n._getRecaptchaConfig()?.isProviderEnabled("PHONE_PROVIDER")){const i=await Le(n,e,t);return s(n,i).catch(async a=>{if(n._getRecaptchaConfig()?.getProviderEnforcementState("PHONE_PROVIDER")==="AUDIT"&&(a.code==="auth/missing-recaptcha-token"||a.code==="auth/invalid-app-credential")){console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${t} flow.`);const c=await Le(n,e,t,!1,!0);return s(n,c)}return Promise.reject(a)})}else{const i=await Le(n,e,t,!1,!0);return s(n,i)}}async function Xs(n){const e=$(n),t=await rn(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),s=new sn(t);e.tenantId==null?e._agentRecaptchaConfig=s:e._tenantRecaptchaConfigs[e.tenantId]=s,s.isAnyProviderEnabled()&&new yn(e).verify()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qs(n,e){const t=Kt(n,"auth");if(t.isInitialized()){const r=t.getImmediate(),i=t.getOptions();if(Fe(i,e??{}))return r;L(r,"already-initialized")}return t.initialize({options:e})}function Zs(n,e){const t=e?.persistence||[],s=(Array.isArray(t)?t:[t]).map(O);e?.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(s,e?.popupRedirectResolver)}function er(n,e,t){const s=$(n);d(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!1,i=In(e),{host:a,port:c}=tr(e),l=c===null?"":`:${c}`,u={url:`${i}//${a}${l}/`},h=Object.freeze({host:a,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})});if(!s._canInitEmulator){d(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),d(Fe(u,s.config.emulator)&&Fe(h,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=u,s.emulatorConfig=h,s.settings.appVerificationDisabledForTesting=!0,Ke(a)?es(`${i}//${a}${l}`):nr()}function In(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function tr(n){const e=In(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const i=r[1];return{host:i,port:bt(s.substr(i.length+1))}}else{const[i,a]=s.split(":");return{host:i,port:bt(a)}}}function bt(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function nr(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return x("not implemented")}_getIdTokenResponse(e){return x("not implemented")}_linkToIdToken(e,t){return x("not implemented")}_getReauthenticationResolver(e){return x("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function X(n,e){return Ce(n,"POST","/v1/accounts:signInWithIdp",N(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sr="http://localhost";class K extends et{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new K(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):L("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r,...i}=t;if(!s||!r)return null;const a=new K(s,r);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return X(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,X(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,X(e,t)}buildRequest(){const e={requestUri:sr,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=te(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ct(n,e){return k(n,"POST","/v1/accounts:sendVerificationCode",N(n,e))}async function rr(n,e){return Ce(n,"POST","/v1/accounts:signInWithPhoneNumber",N(n,e))}async function ir(n,e){const t=await Ce(n,"POST","/v1/accounts:signInWithPhoneNumber",N(n,e));if(t.temporaryProof)throw se(n,"account-exists-with-different-credential",t);return t}const ar={USER_NOT_FOUND:"user-not-found"};async function or(n,e){const t={...e,operation:"REAUTH"};return Ce(n,"POST","/v1/accounts:signInWithPhoneNumber",N(n,t),ar)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oe extends et{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new oe({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new oe({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return rr(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return ir(e,{idToken:t,...this._makeVerificationRequest()})}_getReauthenticationResolver(e){return or(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:s,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:s,code:r}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:t,verificationCode:s,phoneNumber:r,temporaryProof:i}=e;return!s&&!t&&!r&&!i?null:new oe({verificationId:t,verificationCode:s,phoneNumber:r,temporaryProof:i})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class me extends wn{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j extends me{constructor(){super("facebook.com")}static credential(e){return K._fromParams({providerId:j.PROVIDER_ID,signInMethod:j.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return j.credentialFromTaggedObject(e)}static credentialFromError(e){return j.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return j.credential(e.oauthAccessToken)}catch{return null}}}j.FACEBOOK_SIGN_IN_METHOD="facebook.com";j.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V extends me{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return K._fromParams({providerId:V.PROVIDER_ID,signInMethod:V.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return V.credentialFromTaggedObject(e)}static credentialFromError(e){return V.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return V.credential(t,s)}catch{return null}}}V.GOOGLE_SIGN_IN_METHOD="google.com";V.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F extends me{constructor(){super("github.com")}static credential(e){return K._fromParams({providerId:F.PROVIDER_ID,signInMethod:F.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return F.credentialFromTaggedObject(e)}static credentialFromError(e){return F.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return F.credential(e.oauthAccessToken)}catch{return null}}}F.GITHUB_SIGN_IN_METHOD="github.com";F.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W extends me{constructor(){super("twitter.com")}static credential(e,t){return K._fromParams({providerId:W.PROVIDER_ID,signInMethod:W.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return W.credentialFromTaggedObject(e)}static credentialFromError(e){return W.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return W.credential(t,s)}catch{return null}}}W.TWITTER_SIGN_IN_METHOD="twitter.com";W.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,r=!1){const i=await P._fromIdTokenResponse(e,s,r),a=Nt(s);return new Z({user:i,providerId:a,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const r=Nt(s);return new Z({user:e,providerId:r,_tokenResponse:s,operationType:t})}}function Nt(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe extends Ge{constructor(e,t,s,r){super(t.code,t.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,Pe.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,r){return new Pe(e,t,s,r)}}function vn(n,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Pe._fromErrorAndOperation(n,i,e,s):i})}async function cr(n,e,t=!1){const s=await ue(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Z._forOperation(n,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lr(n,e,t=!1){const{auth:s}=n;if(C(s.app))return Promise.reject(q(s));const r="reauthenticate";try{const i=await ue(n,vn(s,r,e,n),t);d(i.idToken,s,"internal-error");const a=Xe(i.idToken);d(a,s,"internal-error");const{sub:c}=a;return d(n.uid===c,s,"user-mismatch"),Z._forOperation(n,r,i)}catch(i){throw i?.code==="auth/user-not-found"&&L(s,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tn(n,e,t=!1){if(C(n.app))return Promise.reject(q(n));const s="signIn",r=await vn(n,s,e),i=await Z._fromIdTokenResponse(n,s,r);return t||await n._updateCurrentUser(i.user),i}async function ur(n,e){return Tn($(n),e)}function dr(n,e,t,s){return D(n).onIdTokenChanged(e,t,s)}function hr(n,e,t){return D(n).beforeAuthStateChanged(e,t)}function fr(n,e,t,s){return D(n).onAuthStateChanged(e,t,s)}function pr(n){return D(n).signOut()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function At(n,e){return k(n,"POST","/v2/accounts/mfaEnrollment:start",N(n,e))}const ke="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(ke,"1"),this.storage.removeItem(ke),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mr=1e3,gr=10;class Sn extends En{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=mn(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),r=this.localCache[t];s!==r&&e(t,r,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,c,l)=>{this.notifyListeners(a,l)});return}const s=e.key;t?this.detachListener():this.stopPolling();const r=()=>{const a=this.storage.getItem(s);!t&&this.localCache[s]===a||this.notifyListeners(s,a)},i=this.storage.getItem(s);Os()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,gr):r()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},mr)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Sn.type="LOCAL";const _r=Sn;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn extends En{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Rn.type="SESSION";const Pn=Rn;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yr(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(r=>r.isListeningto(e));if(t)return t;const s=new Ne(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:r,data:i}=t.data,a=this.handlersMap[r];if(!a?.size)return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const c=Array.from(a).map(async u=>u(t.origin,i)),l=await yr(c);t.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ne.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tt(n="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ir{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,a;return new Promise((c,l)=>{const u=tt("",20);r.port1.start();const h=setTimeout(()=>{l(new Error("unsupported_event"))},s);a={messageChannel:r,onMessage(f){const g=f;if(g.data.eventId===u)switch(g.data.status){case"ack":clearTimeout(h),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(g.data.response);break;default:clearTimeout(h),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(a),r.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:u,data:t},[r.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y(){return window}function wr(n){y().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nt(){return typeof y().WorkerGlobalScope<"u"&&typeof y().importScripts=="function"}async function vr(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Tr(){return navigator?.serviceWorker?.controller||null}function Er(){return nt()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kn="firebaseLocalStorageDb",Sr=1,be="firebaseLocalStorage",bn="fbase_key";class ge{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Ae(n,e){return n.transaction([be],e?"readwrite":"readonly").objectStore(be)}function Rr(){const n=indexedDB.deleteDatabase(kn);return new ge(n).toPromise()}function qe(){const n=indexedDB.open(kn,Sr);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const s=n.result;try{s.createObjectStore(be,{keyPath:bn})}catch(r){t(r)}}),n.addEventListener("success",async()=>{const s=n.result;s.objectStoreNames.contains(be)?e(s):(s.close(),await Rr(),e(await qe()))})})}async function xt(n,e,t){const s=Ae(n,!0).put({[bn]:e,value:t});return new ge(s).toPromise()}async function Pr(n,e){const t=Ae(n,!1).get(e),s=await new ge(t).toPromise();return s===void 0?null:s.value}function Ot(n,e){const t=Ae(n,!0).delete(e);return new ge(t).toPromise()}const kr=800,br=3;class Cn{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await qe(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>br)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return nt()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ne._getInstance(Er()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await vr(),!this.activeServiceWorker)return;this.sender=new Ir(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Tr()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await qe();return await xt(e,ke,"1"),await Ot(e,ke),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>xt(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>Pr(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Ot(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=Ae(r,!1).getAll();return new ge(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),kr)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Cn.type="LOCAL";const Cr=Cn;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lt(n,e){return k(n,"POST","/v2/accounts/mfaSignIn:start",N(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const De=_n("rcb"),Nr=new fe(3e4,6e4);class Ar{constructor(){this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!y().grecaptcha?.render}load(e,t=""){return d(xr(t),e,"argument-error"),this.shouldResolveImmediately(t)&&vt(y().grecaptcha)?Promise.resolve(y().grecaptcha):new Promise((s,r)=>{const i=y().setTimeout(()=>{r(v(e,"network-request-failed"))},Nr.get());y()[De]=()=>{y().clearTimeout(i),delete y()[De];const c=y().grecaptcha;if(!c||!vt(c)){r(v(e,"internal-error"));return}const l=c.render;c.render=(u,h)=>{const f=l(u,h);return this.counter++,f},this.hostLanguage=t,s(c)};const a=`${Fs()}?${te({onload:De,render:"explicit",hl:t})}`;Ze(a).catch(()=>{clearTimeout(i),r(v(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){return!!y().grecaptcha?.render&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function xr(n){return n.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(n)}class Or{async load(e){return new Bs(e)}clearedOneInstance(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ce="recaptcha",Lr={theme:"light",type:"image"};class Mr{constructor(e,t,s={...Lr}){this.parameters=s,this.type=ce,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=$(e),this.isInvisible=this.parameters.size==="invisible",d(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const r=typeof t=="string"?document.getElementById(t):t;d(r,this.auth,"argument-error"),this.container=r,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new Or:new Ar,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),t=this.getAssertedRecaptcha(),s=t.getResponse(e);return s||new Promise(r=>{const i=a=>{a&&(this.tokenChangeListeners.delete(i),r(a))};this.tokenChangeListeners.add(i),this.isInvisible&&t.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){d(!this.parameters.sitekey,this.auth,"argument-error"),d(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),d(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return t=>{if(this.tokenChangeListeners.forEach(s=>s(t)),typeof e=="function")e(t);else if(typeof e=="string"){const s=y()[e];typeof s=="function"&&s(t)}}}assertNotDestroyed(){d(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const t=document.createElement("div");e.appendChild(t),e=t}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){d(Zt()&&!nt(),this.auth,"internal-error"),await Dr(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await Es(this.auth);d(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return d(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function Dr(){let n=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}n=()=>e(),window.addEventListener("load",n)}).catch(e=>{throw n&&window.removeEventListener("load",n),e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur{constructor(e,t){this.verificationId=e,this.onConfirmation=t}confirm(e){const t=oe._fromVerification(this.verificationId,e);return this.onConfirmation(t)}}async function jr(n,e,t){if(C(n.app))return Promise.reject(q(n));const s=$(n),r=await Vr(s,e,D(t));return new Ur(r,i=>ur(s,i))}async function Vr(n,e,t){if(!n._getRecaptchaConfig())try{await Xs(n)}catch{console.log("Failed to initialize reCAPTCHA Enterprise config. Triggering the reCAPTCHA v2 verification.")}try{let s;if(typeof e=="string"?s={phoneNumber:e}:s=e,"session"in s){const r=s.session;if("phoneNumber"in s){d(r.type==="enroll",n,"internal-error");const i={idToken:r.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,clientType:"CLIENT_TYPE_WEB"}};return(await Me(n,i,"mfaSmsEnrollment",async(u,h)=>{if(h.phoneEnrollmentInfo.captchaResponse===ae){d(t?.type===ce,u,"argument-error");const f=await Ue(u,h,t);return At(u,f)}return At(u,h)},"PHONE_PROVIDER").catch(u=>Promise.reject(u))).phoneSessionInfo.sessionInfo}else{d(r.type==="signin",n,"internal-error");const i=s.multiFactorHint?.uid||s.multiFactorUid;d(i,n,"missing-multi-factor-info");const a={mfaPendingCredential:r.credential,mfaEnrollmentId:i,phoneSignInInfo:{clientType:"CLIENT_TYPE_WEB"}};return(await Me(n,a,"mfaSmsSignIn",async(h,f)=>{if(f.phoneSignInInfo.captchaResponse===ae){d(t?.type===ce,h,"argument-error");const g=await Ue(h,f,t);return Lt(h,g)}return Lt(h,f)},"PHONE_PROVIDER").catch(h=>Promise.reject(h))).phoneResponseInfo.sessionInfo}}else{const r={phoneNumber:s.phoneNumber,clientType:"CLIENT_TYPE_WEB"};return(await Me(n,r,"sendVerificationCode",async(l,u)=>{if(u.captchaResponse===ae){d(t?.type===ce,l,"argument-error");const h=await Ue(l,u,t);return Ct(l,h)}return Ct(l,u)},"PHONE_PROVIDER").catch(l=>Promise.reject(l))).sessionInfo}}finally{t?._reset()}}async function Ue(n,e,t){d(t.type===ce,n,"argument-error");const s=await t.verify();d(typeof s=="string",n,"argument-error");const r={...e};if("phoneEnrollmentInfo"in r){const i=r.phoneEnrollmentInfo.phoneNumber,a=r.phoneEnrollmentInfo.captchaResponse,c=r.phoneEnrollmentInfo.clientType,l=r.phoneEnrollmentInfo.recaptchaVersion;return Object.assign(r,{phoneEnrollmentInfo:{phoneNumber:i,recaptchaToken:s,captchaResponse:a,clientType:c,recaptchaVersion:l}}),r}else if("phoneSignInInfo"in r){const i=r.phoneSignInInfo.captchaResponse,a=r.phoneSignInInfo.clientType,c=r.phoneSignInInfo.recaptchaVersion;return Object.assign(r,{phoneSignInInfo:{recaptchaToken:s,captchaResponse:i,clientType:a,recaptchaVersion:c}}),r}else return Object.assign(r,{recaptchaToken:s}),r}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fr(n,e){return e?O(e):(d(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st extends et{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return X(e,this._buildIdpRequest())}_linkToIdToken(e,t){return X(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return X(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Wr(n){return Tn(n.auth,new st(n),n.bypassAuthState)}function Hr(n){const{auth:e,user:t}=n;return d(t,e,"internal-error"),lr(t,new st(n),n.bypassAuthState)}async function qr(n){const{auth:e,user:t}=n;return d(t,e,"internal-error"),cr(t,new st(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn{constructor(e,t,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:r,tenantId:i,error:a,type:c}=e;if(a){this.reject(a);return}const l={auth:this.auth,requestUri:t,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Wr;case"linkViaPopup":case"linkViaRedirect":return qr;case"reauthViaPopup":case"reauthViaRedirect":return Hr;default:L(this.auth,"internal-error")}}resolve(e){M(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){M(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $r=new fe(2e3,1e4);class G extends Nn{constructor(e,t,s,r,i){super(e,t,r,i),this.provider=s,this.authWindow=null,this.pollId=null,G.currentPopupAction&&G.currentPopupAction.cancel(),G.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return d(e,this.auth,"internal-error"),e}async onExecution(){M(this.filter.length===1,"Popup operations only handle one event");const e=tt();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(v(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(v(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,G.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(v(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,$r.get())};e()}}G.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Br="pendingRedirect",we=new Map;class Kr extends Nn{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=we.get(this.auth._key());if(!e){try{const s=await zr(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}we.set(this.auth._key(),e)}return this.bypassAuthState||we.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function zr(n,e){const t=Yr(e),s=Jr(n);if(!await s._isAvailable())return!1;const r=await s._get(t)==="true";return await s._remove(t),r}function Gr(n,e){we.set(n._key(),e)}function Jr(n){return O(n._redirectPersistence)}function Yr(n){return Ie(Br,n.config.apiKey,n.name)}async function Xr(n,e,t=!1){if(C(n.app))return Promise.reject(q(n));const s=$(n),r=Fr(s,e),a=await new Kr(s,r,t).execute();return a&&!t&&(delete a.user._redirectEventId,await s._persistUserIfCurrent(a.user),await s._setRedirectUser(null,e)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qr=10*60*1e3;class Zr{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!ei(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){if(e.error&&!An(e)){const s=e.error.code?.split("auth/")[1]||"internal-error";t.onError(v(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Qr&&this.cachedEventUids.clear(),this.cachedEventUids.has(Mt(e))}saveEventToCache(e){this.cachedEventUids.add(Mt(e)),this.lastProcessedEventTime=Date.now()}}function Mt(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function An({type:n,error:e}){return n==="unknown"&&e?.code==="auth/no-auth-event"}function ei(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return An(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ti(n,e={}){return k(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ni=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,si=/^https?/;async function ri(n){if(n.config.emulator)return;const{authorizedDomains:e}=await ti(n);for(const t of e)try{if(ii(t))return}catch{}L(n,"unauthorized-domain")}function ii(n){const e=We(),{protocol:t,hostname:s}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&s===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===s}if(!si.test(t))return!1;if(ni.test(n))return s===n;const r=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ai=new fe(3e4,6e4);function Dt(){const n=y().___jsl;if(n?.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function oi(n){return new Promise((e,t)=>{function s(){Dt(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Dt(),t(v(n,"network-request-failed"))},timeout:ai.get()})}if(y().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(y().gapi?.load)s();else{const r=_n("iframefcb");return y()[r]=()=>{gapi.load?s():t(v(n,"network-request-failed"))},Ze(`${Hs()}?onload=${r}`).catch(i=>t(i))}}).catch(e=>{throw ve=null,e})}let ve=null;function ci(n){return ve=ve||oi(n),ve}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const li=new fe(5e3,15e3),ui="__/auth/iframe",di="emulator/auth/iframe",hi={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},fi=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function pi(n){const e=n.config;d(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Ye(e,di):`https://${n.config.authDomain}/${ui}`,s={apiKey:e.apiKey,appName:n.name,v:he},r=fi.get(n.config.apiHost);r&&(s.eid=r);const i=n._getFrameworks();return i.length&&(s.fw=i.join(",")),`${t}?${te(s).slice(1)}`}async function mi(n){const e=await ci(n),t=y().gapi;return d(t,n,"internal-error"),e.open({where:document.body,url:pi(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:hi,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const a=v(n,"network-request-failed"),c=y().setTimeout(()=>{i(a)},li.get());function l(){y().clearTimeout(c),r(s)}s.ping(l).then(l,()=>{i(a)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gi={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},_i=500,yi=600,Ii="_blank",wi="http://localhost";class Ut{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function vi(n,e,t,s=_i,r=yi){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),a=Math.max((window.screen.availWidth-s)/2,0).toString();let c="";const l={...gi,width:s.toString(),height:r.toString(),top:i,left:a},u=T().toLowerCase();t&&(c=un(u)?Ii:t),cn(u)&&(e=e||wi,l.scrollbars="yes");const h=Object.entries(l).reduce((g,[E,I])=>`${g}${E}=${I},`,"");if(xs(u)&&c!=="_self")return Ti(e||"",c),new Ut(null);const f=window.open(e||"",c,h);d(f,n,"popup-blocked");try{f.focus()}catch{}return new Ut(f)}function Ti(n,e){const t=document.createElement("a");t.href=n,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ei="__/auth/handler",Si="emulator/auth/handler",Ri=encodeURIComponent("fac");async function jt(n,e,t,s,r,i){d(n.config.authDomain,n,"auth-domain-config-required"),d(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:s,v:he,eventId:r};if(e instanceof wn){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",ns(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,f]of Object.entries({}))a[h]=f}if(e instanceof me){const h=e.getScopes().filter(f=>f!=="");h.length>0&&(a.scopes=h.join(","))}n.tenantId&&(a.tid=n.tenantId);const c=a;for(const h of Object.keys(c))c[h]===void 0&&delete c[h];const l=await n._getAppCheckToken(),u=l?`#${Ri}=${encodeURIComponent(l)}`:"";return`${Pi(n)}?${te(c).slice(1)}${u}`}function Pi({config:n}){return n.emulator?Ye(n,Si):`https://${n.authDomain}/${Ei}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const je="webStorageSupport";class ki{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Pn,this._completeRedirectFn=Xr,this._overrideRedirectResult=Gr}async _openPopup(e,t,s,r){M(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const i=await jt(e,t,s,We(),r);return vi(e,i,tt())}async _openRedirect(e,t,s,r){await this._originValidation(e);const i=await jt(e,t,s,We(),r);return wr(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:r,promise:i}=this.eventManagers[t];return r?Promise.resolve(r):(M(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await mi(e),s=new Zr(e);return t.register("authEvent",r=>(d(r?.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(je,{type:je},r=>{const i=r?.[0]?.[je];i!==void 0&&t(!!i),L(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=ri(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return mn()||ln()||Qe()}}const bi=ki;var Vt="@firebase/auth",Ft="1.13.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ci{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e(s?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){d(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ni(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Ai(n){pt(new mt("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:c}=s.options;d(a&&!a.includes(":"),"invalid-api-key",{appName:s.name});const l={apiKey:a,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:gn(n)},u=new js(s,r,i,l);return Zs(u,t),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),pt(new mt("auth-internal",e=>{const t=$(e.getProvider("auth").getImmediate());return(s=>new Ci(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),gt(Vt,Ft,Ni(n)),gt(Vt,Ft,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xi=5*60,Oi=zt("authIdTokenMaxAge")||xi;let Wt=null;const Li=n=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>Oi)return;const r=t?.token;Wt!==r&&(Wt=r,await fetch(n,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function Mi(n=Zn()){const e=Kt(n,"auth");if(e.isInitialized())return e.getImmediate();const t=Qs(n,{popupRedirectResolver:bi,persistence:[Cr,_r,Pn]}),s=zt("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(s,location.origin);if(location.origin===i.origin){const a=Li(i.toString());hr(t,a,()=>a(t.currentUser)),dr(t,c=>a(c))}}const r=Qn("auth");return r&&er(t,`http://${r}`),t}function Di(){return document.getElementsByTagName("head")?.[0]??document}Vs({loadJS(n){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",n),s.onload=e,s.onerror=r=>{const i=v("internal-error");i.customData=r,t(i)},s.type="text/javascript",s.charset="UTF-8",Di().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Ai("Browser");const ee=Mi(us),xn="firebase-phone-recaptcha";let le=null,Q=null;function de(){if(le){try{le.clear()}catch{}le=null}}function Ui(n=xn){de();const e=document.getElementById(n);if(!e)throw new Error("Verification is not ready. Refresh the page and try again.");e.replaceChildren();const t=document.createElement("div");return e.appendChild(t),le=new Mr(ee,t,{size:"invisible",callback:()=>{},"expired-callback":()=>{de()}}),le}const ji=6e4,Vi={"auth/invalid-phone-number":"That mobile number doesn’t look right. Check it and try again.","auth/too-many-requests":"Too many attempts. Please wait a few minutes and try again.","auth/quota-exceeded":"Too many codes sent right now. Please try again later.","auth/captcha-check-failed":"Verification failed. Please try again.","auth/invalid-verification-code":"That code is incorrect. Check the SMS and try again.","auth/code-expired":"That code has expired. Request a new one.","auth/network-request-failed":"No connection. Check your internet and try again."};function On(n){const e=n?.code||"",t=Vi[e]||(e.startsWith("auth/")?"Could not verify your number. Please try again.":n?.message)||"Could not verify your number. Please try again.";return Object.assign(new Error(t),{code:e})}async function Fi(n,e=xn){const t=String(n||"").trim();if(!t.startsWith("+"))throw new Error("Enter a valid mobile number with country code");const s=Ui(e);let r;const i=new Promise((a,c)=>{r=setTimeout(()=>c(new Error("Verification timed out. Please try again.")),ji)});try{return Q=await Promise.race([jr(ee,t,s),i]),Q}catch(a){throw de(),On(a)}finally{clearTimeout(r)}}async function Wi(n){if(!Q)throw new Error("Request a verification code first");const e=String(n||"").replace(/\s/g,"");if(!/^\d{6}$/.test(e))throw new Error("Enter the 6-digit code from SMS");let t;try{t=await Q.confirm(e)}catch(s){throw On(s)}return Q=null,de(),t.user}async function Hi(){const n=ee.currentUser;return n?n.getIdToken():null}async function qi(){Q=null,de(),ee.currentUser&&await pr(ee)}function $i(n){return fr(ee,n)}function Bi({idPrefix:n="otp",internationalEnabled:e=!1,errorText:t="",onVerified:s}){const[r,i]=_.useState("phone"),[a,c]=_.useState(""),[l,u]=_.useState(""),[h,f]=_.useState(!1),g=async I=>{I.preventDefault();const w=Xn(a,{required:!0});if(!w.ok){H.error(w.error||"Enter a valid mobile number");return}f(!0);try{await Fi(w.e164),i("otp"),H.success("Verification code sent")}catch(b){H.error(b?.message||"Could not send verification code")}finally{f(!1)}},E=async I=>{I.preventDefault(),f(!0);try{const w=await Wi(l);s?.(w)}catch(w){H.error(w?.message||"Invalid code")}finally{f(!1)}};return r==="otp"?o.jsxs("form",{onSubmit:E,className:"space-y-4",children:[o.jsxs("div",{children:[o.jsx("p",{className:"text-base font-semibold",children:"Enter verification code"}),o.jsx("p",{className:"text-sm text-muted-foreground mt-1",children:"Check SMS for a 6-digit code."})]}),o.jsxs("div",{children:[o.jsx(re,{htmlFor:`${n}-code`,children:"Code"}),o.jsx(Ve,{id:`${n}-code`,inputMode:"numeric",autoComplete:"one-time-code",className:"mt-1.5 shadow-neu border-0 text-center text-lg tracking-widest",value:l,onChange:I=>u(I.target.value.replace(/\D/g,"").slice(0,6)),maxLength:6,required:!0,autoFocus:!0})]}),o.jsx(R,{type:"submit",className:"w-full rounded-2xl min-h-[44px]",disabled:h,children:h?"Verifying…":"Verify & continue"}),o.jsx(R,{type:"button",variant:"ghost",className:"w-full",onClick:()=>{i("phone"),u("")},children:"Use a different number"})]}):o.jsxs("form",{onSubmit:g,className:"space-y-4",children:[o.jsxs("div",{children:[o.jsx("p",{className:"text-base font-semibold",children:"Sign in with mobile"}),o.jsx("p",{className:"text-sm text-muted-foreground mt-1",children:"We'll text you a one-time code. Use the number on file at this shop."})]}),t?o.jsx("p",{className:"text-sm text-destructive",children:t}):null,o.jsxs("div",{children:[o.jsx(re,{htmlFor:`${n}-phone`,children:"Mobile number"}),o.jsx("div",{className:"mt-1.5",children:o.jsx(Yn,{id:`${n}-phone`,value:a,onChange:c,placeholder:"Mobile number",required:!0,inputClassName:"shadow-neu border-0",internationalEnabled:e})})]}),o.jsx(R,{type:"submit",className:"w-full rounded-2xl min-h-[44px]",disabled:h,children:h?"Sending…":"Send verification code"})]})}const Ht=$n.create({baseURL:Bn}),Ki=["Send a request — we verify your mobile number by OTP.","The shop confirms your package.","Pay at the shop on your next visit and start using it."];function zi(n,e){const t=String(n||"").replace(/\D/g,"");return t?`https://wa.me/${t}?text=${encodeURIComponent(e)}`:null}function Gi({open:n,onOpenChange:e,pkg:t,businessId:s,business:r,currency:i,internationalEnabled:a=!1,myPackagesHref:c,onRequested:l}){const[u,h]=_.useState("details"),[f,g]=_.useState(!1),[E,I]=_.useState(!1),[w,b]=_.useState(!1),[p,B]=_.useState(""),[rt,it]=_.useState(""),[at,ot]=_.useState(""),[ct,lt]=_.useState(!1);_.useEffect(()=>$i(m=>g(!!m)),[]),_.useEffect(()=>{n&&(h("details"),b(!1),B(""),it(""),ot(""))},[n,t?._id]);const ut=async()=>{const m=await Hi();return m?{Authorization:`Bearer ${m}`}:null},xe=_.useCallback(()=>{qi().catch(()=>{}),H.error("Your sign-in expired. Please verify your number again."),h("otp")},[]),dt=_.useCallback(async()=>{h("confirm"),I(!0);try{const m=await ut();if(!m){h("otp");return}const S=await Ht.get(`/public/rewards/${s}/me/packages`,{headers:m});b(!S.data?.customerFound),(S.data?.requests||[]).some(ne=>ne.status==="pending"&&String(ne.packageTemplateId)===String(t?._id))&&h("already")}catch(m){m.response?.status===401&&xe()}finally{I(!1)}},[s,t?._id,xe]),Ln=()=>{f?dt():h("otp")},Mn=async m=>{if(m.preventDefault(),w&&!p.trim()){H.error("Please enter your name");return}lt(!0);try{const S=await ut();if(!S){h("otp");return}const z=await Ht.post(`/public/book/${s}/packages/${t._id}/request`,{name:p.trim()||void 0,vehicleNumber:rt.trim()||void 0,note:at.trim()||void 0},{headers:S});z.data?.success&&(h("success"),l?.(z.data.request))}catch(S){const z=S.response?.status,ne=S.response?.data?.code;z===401?xe():z===409||ne==="ALREADY_REQUESTED"?h("already"):ne==="NAME_REQUIRED"?(b(!0),H.error("Please enter your name")):H.error(S.response?.data?.message||"Could not send your request. Please try again.")}finally{lt(!1)}};if(!t)return null;const ht=zi(r?.whatsappNumber||r?.phone,`Hi ${r?.businessName||""}, I requested the "${t.name}" package online.`),Dn={details:t.name,otp:"Verify your mobile",confirm:"Confirm your request",already:"Already requested",success:"Request sent!"};return o.jsx(Un,{open:n,onOpenChange:e,children:o.jsxs(jn,{className:"sm:max-w-md",children:[o.jsxs(Vn,{children:[o.jsx(Fn,{className:"leading-snug",children:Dn[u]}),u==="details"&&t.description?o.jsx(ft,{children:t.description}):null,u==="otp"?o.jsxs(ft,{children:["So the shop knows who to contact about ",t.name,"."]}):null]}),o.jsxs(Wn,{className:"space-y-4",children:[u==="details"&&o.jsxs(o.Fragment,{children:[o.jsx(Bt,{categories:t.categories}),o.jsxs("div",{className:"rounded-2xl vashq-grad-soft p-4",children:[o.jsxs("div",{className:"flex items-end justify-between gap-3",children:[o.jsxs("div",{children:[o.jsx("p",{className:"text-2xl font-bold text-primary",children:A(t.price,i)}),t.savings>0&&t.individualTotal?o.jsxs("p",{className:"text-xs text-muted-foreground",children:[o.jsx("span",{className:"line-through",children:A(t.individualTotal,i)})," ","if booked separately"]}):null]}),t.savings>0&&o.jsxs("span",{className:"rounded-full bg-[hsl(var(--success))]/15 px-2.5 py-1 text-xs font-semibold text-[hsl(var(--success))]",children:["Save ",A(t.savings,i)]})]}),o.jsxs("div",{className:"mt-3 flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground",children:[o.jsxs("span",{className:"inline-flex items-center gap-1.5",children:[o.jsx(Jt,{className:"h-4 w-4"}),t.totalVisits," ",t.totalVisits===1?"visit":"visits"]}),o.jsxs("span",{className:"inline-flex items-center gap-1.5",children:[o.jsx(qt,{className:"h-4 w-4"}),"Valid ",Te(t)," from purchase"]})]})]}),o.jsxs("div",{children:[o.jsx("p",{className:"text-sm font-semibold mb-2",children:"What's included"}),o.jsx("ul",{className:"space-y-2",children:(t.services||[]).map(m=>o.jsxs("li",{className:"flex items-start gap-2 text-sm",children:[o.jsx(_t,{className:"h-4 w-4 mt-0.5 shrink-0 text-[hsl(var(--success))]"}),o.jsx("span",{className:"break-words",children:$t(m)})]},String(m.serviceId)))})]}),o.jsxs("div",{className:"rounded-xl neu-inset p-3",children:[o.jsx("p",{className:"text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-2",children:"How it works"}),o.jsx("ol",{className:"space-y-1.5 text-sm",children:Ki.map((m,S)=>o.jsxs("li",{className:"flex gap-2",children:[o.jsx("span",{className:"flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-[11px] font-bold text-primary",children:S+1}),o.jsx("span",{children:m})]},m))})]}),o.jsx(R,{type:"button",className:"w-full rounded-2xl min-h-[48px]",onClick:Ln,children:"Request this package"}),o.jsxs("p",{className:"text-center text-xs text-muted-foreground flex items-center justify-center gap-1.5",children:[o.jsx(hs,{className:"h-3.5 w-3.5"}),"No payment now — you pay at the shop."]})]}),u==="otp"&&o.jsxs(o.Fragment,{children:[o.jsx(Bi,{idPrefix:"package-request",internationalEnabled:a,onVerified:dt}),o.jsx(R,{type:"button",variant:"ghost",className:"w-full",onClick:()=>h("details"),children:"Back to package"})]}),u==="confirm"&&(E?o.jsx("div",{className:"flex justify-center py-8",children:o.jsx(Hn,{size:"sm"})}):o.jsxs("form",{onSubmit:Mn,className:"space-y-4",children:[o.jsxs("div",{className:"flex items-center justify-between gap-3 rounded-xl neu-inset p-3",children:[o.jsxs("div",{className:"min-w-0",children:[o.jsx("p",{className:"font-semibold truncate",children:t.name}),o.jsxs("p",{className:"text-xs text-muted-foreground",children:[t.totalVisits," visits · valid ",Te(t)]})]}),o.jsx("p",{className:"font-bold text-primary shrink-0",children:A(t.price,i)})]}),w&&o.jsxs("div",{children:[o.jsx(re,{htmlFor:"package-request-name",children:"Your name"}),o.jsx(Ve,{id:"package-request-name",className:"mt-1.5 shadow-neu border-0",value:p,maxLength:100,onChange:m=>B(m.target.value),placeholder:"Full name",autoComplete:"name",required:!0})]}),o.jsxs("div",{children:[o.jsx(re,{htmlFor:"package-request-vehicle",children:"Vehicle number (optional)"}),o.jsx(Jn,{id:"package-request-vehicle",className:"mt-1.5 shadow-neu border-0 uppercase tracking-wide font-medium",value:rt,onChange:m=>it(m.target.value),hint:!1})]}),o.jsxs("div",{children:[o.jsx(re,{htmlFor:"package-request-note",children:"Note for the shop (optional)"}),o.jsx(Ve,{id:"package-request-note",className:"mt-1.5 shadow-neu border-0",value:at,maxLength:500,onChange:m=>ot(m.target.value),placeholder:"e.g. Preferred start date"})]}),o.jsx(R,{type:"submit",className:"w-full rounded-2xl min-h-[48px]",disabled:ct,children:ct?"Sending…":"Send request"}),o.jsx(R,{type:"button",variant:"ghost",className:"w-full",onClick:()=>h("details"),children:"Back"})]})),(u==="success"||u==="already")&&o.jsxs("div",{className:"text-center space-y-4 py-2",children:[o.jsx("div",{className:"mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[hsl(var(--success))]/15 text-[hsl(var(--success))]",children:u==="success"?o.jsx(_t,{className:"h-7 w-7"}):o.jsx(ds,{className:"h-7 w-7"})}),o.jsx("p",{className:"text-sm text-muted-foreground",children:u==="success"?`The shop will confirm your ${t.name} package. You can pay at your next visit.`:`Your request for ${t.name} is waiting for the shop to confirm. We'll be in touch soon.`}),o.jsxs("div",{className:"flex flex-col gap-2",children:[c&&o.jsx(R,{asChild:!0,className:"w-full rounded-2xl min-h-[44px]",children:o.jsx("a",{href:c,children:"View my packages"})}),ht&&o.jsx(R,{asChild:!0,variant:"outline",className:"w-full rounded-2xl min-h-[44px]",children:o.jsxs("a",{href:ht,target:"_blank",rel:"noopener noreferrer",children:[o.jsx(qn,{className:"h-4 w-4 mr-1.5"}),"Message the shop"]})}),o.jsx(R,{type:"button",variant:"ghost",className:"w-full",onClick:()=>e(!1),children:"Close"})]})]})]})]})})}function la({packages:n,businessId:e,business:t,currency:s,internationalEnabled:r,requestedTemplateIds:i,myPackagesHref:a,onRequested:c,layout:l="cards"}){const[u,h]=_.useState(null),[f,g]=_.useState("ALL"),E=i||new Set,I=_.useMemo(()=>Kn(n),[n]),w=I.some(p=>String(p._id)===f)?f:"ALL",b=_.useMemo(()=>zn(n,w),[n,w]);return n?.length?o.jsxs(o.Fragment,{children:[I.length>1&&o.jsx("div",{role:"group","aria-label":"Filter packages by category",className:"-mx-4 px-4 sm:mx-0 sm:px-0 mb-3 flex gap-2 overflow-x-auto pb-1",children:[{_id:"ALL",name:"All"},...I].map(p=>{const B=String(p._id)===w;return o.jsx("button",{type:"button","aria-pressed":B,onClick:()=>g(String(p._id)),className:Be("shrink-0 rounded-full px-3.5 min-h-[36px] text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",B?"bg-primary text-primary-foreground":"bg-card shadow-neu text-muted-foreground hover:text-foreground"),children:p.name},String(p._id))})}),l==="list"?o.jsx("div",{className:"space-y-2",children:b.map(p=>o.jsx(It,{variant:"row",pkg:p,currency:s,requested:E.has(String(p._id)),onView:h},p._id))}):o.jsx("div",{className:"-mx-4 px-4 sm:mx-0 sm:px-0 flex sm:grid sm:grid-cols-2 gap-3 overflow-x-auto sm:overflow-visible snap-x snap-mandatory pb-2 sm:pb-0",children:b.map(p=>o.jsx(It,{pkg:p,currency:s,requested:E.has(String(p._id)),onView:h,className:"snap-start shrink-0 w-[78%] sm:w-auto"},p._id))}),o.jsx(Gi,{open:!!u,onOpenChange:p=>{p||h(null)},pkg:u,businessId:e,business:t,currency:s,internationalEnabled:r,myPackagesHref:a,onRequested:c})]}):null}export{xn as F,la as P,ca as T,Bi as a,Hi as g,$i as o,qi as s};
