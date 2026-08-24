import{c as e}from"./tslib.es6-B50zIwoW.js";import{f as t,m as n,p as r,t as i}from"./styled-components.browser.esm-DHy5LH3R.js";import{t as a}from"./Constants-BX77kWGP.js";import{n as o}from"./MetadataKeys-B7ws-e14.js";import{t as s}from"./Logger-DX4jZ06e.js";import{t as c}from"./x-DmwLwxdQ.js";import{t as l}from"./upload-DiyBufU7.js";import{t as u}from"./Translation-BC3yKQtd.js";import{i as d}from"./hpAttributeMapping-M8K2Cbp0.js";import{a as ee,c as f,i as te,l as p,n as ne,r as re,t as m}from"./systemKeys-CDLHS-Ai.js";import{a as ie}from"./supabaseClient-7JhD0IQw.js";import{d as ae,f as oe,i as se,m as ce,p as le,r as ue}from"./authHelpers-DZr5j1-Z.js";import"./forgeMetrics-DDxkywL3.js";import{f as h,l as de,o as fe,u as pe}from"./main-CB-EQrQ8.js";import{i as g}from"./defaultgamesystem-BSWK_XU6.js";import{a as me,i as he,n as ge,r as _e,t as _}from"./SharedStyledComponents-zLdKwnsc.js";var v=n(),y=r(),ve=`com.battle-system.forge`,ye=(e,t)=>{if(e===`buff`||e===`debuff`||e===`neutral`)return e;let n=t.toLowerCase();return/\b(buff|bless|haste|shield|inspiration|rage|fortif|quicken|resist)\b/.test(n)?`buff`:/\b(debuff|poison\w*|restrain|blind|charm|fright|paraly|stun|slow|exhaust|burn|bleed|daze|curse)\b/.test(n)?`debuff`:`neutral`},be=e=>{let t=Number(e);return!Number.isFinite(t)||t<=0?1:Math.max(1,Math.trunc(t))},xe=e=>e===`turns`?`turns`:`rounds`,Se=e=>e===`end`?`end`:`start`,Ce=e=>Array.isArray(e)?e.filter(e=>!!e&&typeof e==`object`).map((e,t)=>{let n=typeof e.name==`string`?e.name.trim().slice(0,80):``;return n?{id:typeof e.id==`string`&&e.id.trim()?e.id:`default-preset-${t+1}`,name:n,type:ye(e.type,n),duration:be(e.duration),durationType:xe(e.durationType),endTiming:Se(e.endTiming)}:null}).filter(e=>!!e).slice(0,30):[],we=d(g.attributes),Te=(e,t)=>e instanceof Error&&e.message?e.message:t,Ee=i.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`,De=i.div`
  background-color: ${e=>t(e.theme.BACKGROUND,.3)};
  border: 2px solid ${e=>e.theme.BORDER};
  border-radius: 6px;
  padding: 20px;
  margin: 20px 0;
`,Oe=i.h2`
  color: ${e=>e.theme.PRIMARY};
  border-bottom: 2px solid ${e=>e.theme.BORDER};
  padding: 12px 15px;
  margin: 0 0 15px 0;
  font-size: 20px;
  font-weight: 400;
`,ke=i.p`
  color: ${e=>t(e.theme.PRIMARY,.8)};
  font-size: 14px;
  margin: 0 0 15px 0;
  font-style: italic;
`,Ae=i.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  margin-top: 15px;
`,b=i.div`
  background-color: ${e=>e.color};
  border: 2px solid ${e=>e.theme.BORDER};
  border-radius: 6px;
  height: 30px;
  width: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  font-weight: 600;
  color: ${e=>e.theme.PRIMARY};
  text-shadow: 0 0 3px rgba(0, 0, 0, 0.8);
`,x=i.div`
  text-align: center;
  font-size: 12px;
  color: ${e=>e.theme.PRIMARY};
  margin-top: 5px;
`,je=i.div`
  margin-top: 16px;
  background-color: ${e=>t(e.theme.BACKGROUND,.3)};
  border: 2px solid ${e=>e.theme.BORDER};
  border-radius: 6px;
  padding: 14px;
`,Me=i.h3`
  color: ${e=>e.theme.PRIMARY};
  margin: 0 0 10px 0;
  font-size: 15px;
`,S=i.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 8px;

  &:last-child {
    margin-bottom: 0;
  }
`,C=i.label`
  color: ${e=>e.theme.PRIMARY};
  min-width: 84px;
  font-size: 13px;
`,w=i.select`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.5);
  color: ${e=>e.theme.PRIMARY};
  border: 2px solid ${e=>e.theme.BORDER};
  border-radius: 6px;
  padding: 6px 20px 6px 8px;
  text-overflow: ellipsis;
  overflow: hidden;
  width: 100%;
  font-size: 13px;

  &:focus {
    outline: none;
    border-color: ${e=>e.theme.OFFSET};
  }
`,Ne=i.div`
  background-color: ${()=>t(`#FF0000`,.2)};
  border: 2px solid #FF0000;
  border-radius: 6px;
  padding: 15px;
  color: ${e=>e.theme.PRIMARY};
  margin: 15px 0;
`,Pe=i.div`
  background-color: ${()=>t(`#00FF00`,.2)};
  border: 2px solid #00FF00;
  border-radius: 6px;
  padding: 15px;
  color: ${e=>e.theme.PRIMARY};
  margin: 15px 0;
`,Fe=i.div`
  display: flex;
  gap: 10px;
  margin-top: 15px;
`,Ie=i.p`
  color: ${e=>t(e.theme.PRIMARY,.9)};
  margin: 0 0 20px 0;
  line-height: 1.5;
`,Le=i.div`
  margin-top: 30px;
`,Re=i.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,ze=i.div`
  background-color: ${e=>t(e.theme.BACKGROUND,.3)};
  border: 2px solid ${e=>e.theme.BORDER};
  border-radius: 6px;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,Be=i.div`
  flex: 1;
`,Ve=i.div`
  color: ${e=>e.theme.PRIMARY};
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 5px;
`,He=i.div`
  color: ${e=>t(e.theme.PRIMARY,.7)};
  font-size: 13px;
  font-style: italic;
`,Ue=i.div`
  display: flex;
  gap: 8px;
`,We=i.button`
  background-color: ${e=>e.$variant===`danger`?t(`#FF0000`,.2):t(e.theme.OFFSET,.5)};
  border: 2px solid ${e=>e.$variant===`danger`?`#FF0000`:e.theme.BORDER};
  border-radius: 6px;
  color: ${e=>e.$variant===`danger`?`#FF0000`:e.theme.PRIMARY};
  padding: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;

  &:hover {
    background-color: ${e=>e.$variant===`danger`?t(`#FF0000`,.3):e.theme.OFFSET};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,Ge={initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20}},T=[`circle`,`square`,`diamond`,`hex`,`shield`],E={shape:`circle`,color:`#f5c542`,attribute:``},Ke=e=>typeof e==`string`&&T.includes(e),D=(e,t)=>{if(typeof e!=`string`)return t;let n=e.trim();return/^#[0-9a-fA-F]{6}$/.test(n)?n:t},O=(e,t,n,r)=>({shape:Ke(e[t])?e[t]:E.shape,color:D(e[n],E.color),attribute:typeof e[r]==`string`?e[r]:E.attribute});const k=()=>{let{theme:n,updateThemeFromSystem:r}=pe(),{t:i,locale:a}=u(),d=h(e=>e.sceneMetadata),D=h(e=>e.roomMetadata),k=D,A=h(e=>e.systemData),qe=h(e=>e.setSystemData),[j,Je]=(0,v.useState)(()=>se().premiumAuthorized),[M,Ye]=(0,v.useState)(``),[N,P]=(0,v.useState)(!1),[Xe,F]=(0,v.useState)(null),[Ze,I]=(0,v.useState)(null),[Qe,L]=(0,v.useState)(``),[$e,R]=(0,v.useState)(null),[z,B]=(0,v.useState)(null),[et,tt]=(0,v.useState)([]),[nt,V]=(0,v.useState)(``),[rt,H]=(0,v.useState)(``),[it,U]=(0,v.useState)(te),[at,W]=(0,v.useState)(ee),[ot,st]=(0,v.useState)(!1),[ct,lt]=(0,v.useState)(!1),[G,ut]=(0,v.useState)(null),[K,dt]=(0,v.useState)(null),[ft,q]=(0,v.useState)(E),[pt,J]=(0,v.useState)({...E,color:`#5bb5ff`}),[mt,ht]=(0,v.useState)([]),[gt,Y]=(0,v.useState)(!1),[_t,vt]=(0,v.useState)(null),[yt,bt]=(0,v.useState)(``),xt={buff_effect_one:i(`system.buffVisualPreset.buff_effect_one`),buff_effect_two:i(`system.buffVisualPreset.buff_effect_two`)},St={debuff_effect_one:i(`system.debuffVisualPreset.debuff_effect_one`),debuff_effect_two:i(`system.debuffVisualPreset.debuff_effect_two`)},Ct={circle:i(`system.tokenBadgeShape.circle`),square:i(`system.tokenBadgeShape.square`),diamond:i(`system.tokenBadgeShape.diamond`),hex:i(`system.tokenBadgeShape.hex`),shield:i(`system.tokenBadgeShape.shield`)};(0,v.useEffect)(()=>{let e=!0,t=async()=>{await le(),e&&Je(se().premiumAuthorized)},n=oe(t=>{e&&Je(t.premiumAuthorized)});return t(),()=>{e=!1,n()}},[]),(0,v.useEffect)(()=>{wt(),Ot()},[d,D,A,j]);let wt=()=>{try{if(A){let e=k[o.HP_CURRENT_BID],t=k[o.HP_MAX_BID],n=k[o.BUFF_VISUAL_PRESET],r=k[o.DEBUFF_VISUAL_PRESET],i=f(n)?n:null,a=p(r)?r:null,s=O(k,o.TOKEN_BADGE_ONE_SHAPE,o.TOKEN_BADGE_ONE_COLOR,o.TOKEN_BADGE_ONE_ATTRIBUTE),c=O(k,o.TOKEN_BADGE_TWO_SHAPE,o.TOKEN_BADGE_TWO_COLOR,o.TOKEN_BADGE_TWO_ATTRIBUTE);L(A.systemName),R(A.importDate),B(A.theme),tt(A.attributes),V(e||``),H(t||``),G&&i===G&&ut(null),K&&a===K&&dt(null),!ot&&!G&&U(e=>i||e),!ct&&!K&&W(e=>a||e),q(s),J(c);return}if(!j){let e={primary:g.theme_primary,offset:g.theme_offset,background:g.theme_background,border:g.theme_border,background_url:g.background_url},t=k[o.BUFF_VISUAL_PRESET],n=k[o.DEBUFF_VISUAL_PRESET],r=f(t)?t:te,i=p(n)?n:ee,a=O(k,o.TOKEN_BADGE_ONE_SHAPE,o.TOKEN_BADGE_ONE_COLOR,o.TOKEN_BADGE_ONE_ATTRIBUTE),s=O(k,o.TOKEN_BADGE_TWO_SHAPE,o.TOKEN_BADGE_TWO_COLOR,o.TOKEN_BADGE_TWO_ATTRIBUTE);L(g.name),R(null),B(e),tt(g.attributes),V(we.currentHpBid),H(we.maxHpBid),U(r),W(i),q(a),J(s);return}let e=D[m.SYSTEM_NAME],t=D[m.IMPORT_DATE],n=k[o.HP_CURRENT_BID],r=k[o.HP_MAX_BID],i=k[o.BUFF_VISUAL_PRESET],a=k[o.DEBUFF_VISUAL_PRESET],s=f(i)?i:null,c=p(a)?a:null,l=O(k,o.TOKEN_BADGE_ONE_SHAPE,o.TOKEN_BADGE_ONE_COLOR,o.TOKEN_BADGE_ONE_ATTRIBUTE),u=O(k,o.TOKEN_BADGE_TWO_SHAPE,o.TOKEN_BADGE_TWO_COLOR,o.TOKEN_BADGE_TWO_ATTRIBUTE);L(e||g.name),R(t||null),B({primary:g.theme_primary,offset:g.theme_offset,background:g.theme_background,border:g.theme_border,background_url:g.background_url}),tt(g.attributes),V(n||``),H(r||``),G&&s===G&&ut(null),K&&c===K&&dt(null),!ot&&!G&&U(e=>s||e),!ct&&!K&&W(e=>c||e),q(l),J(u)}catch(e){s.error(`Error loading system from cache:`,e)}},X=async(t,n)=>{await e.room.setMetadata({[t]:n})},Tt=(e,t)=>{if(Array.isArray(e))return e;if(typeof e==`string`){let n;try{n=JSON.parse(e)}catch{throw Error(i(`system.error.invalidJsonField`,{field:t}))}if(!Array.isArray(n))throw Error(i(`system.error.invalidArrayField`,{field:t}));return n}throw Error(i(`system.error.invalidFieldType`,{field:t}))},Et=et.filter(e=>{let t=String(e.attr_type||``).toLowerCase();return t===`numb`||t===`resource`}),Dt=et.filter(e=>{let t=String(e.attr_type||``).toLowerCase();return t===`numb`||t===`resource`||t===`derived`}),Z=async(e,t,n)=>{let r=e===1?q:J,i=e===1?{shape:o.TOKEN_BADGE_ONE_SHAPE,color:o.TOKEN_BADGE_ONE_COLOR,attribute:o.TOKEN_BADGE_ONE_ATTRIBUTE}:{shape:o.TOKEN_BADGE_TWO_SHAPE,color:o.TOKEN_BADGE_TWO_COLOR,attribute:o.TOKEN_BADGE_TWO_ATTRIBUTE};r(e=>({...e,[t]:n})),await X(i[t],n)},Ot=()=>{try{let e=[];for(let t=0;t<localStorage.length;t++){let n=localStorage.key(t);if(n&&n.startsWith(`${ve}.`)&&n.endsWith(`.backup`)){let t=localStorage.getItem(n);if(t){let n=JSON.parse(t);e.push(n)}}}e.sort((e,t)=>new Date(t.backupDate).getTime()-new Date(e.backupDate).getTime()),ht(e)}catch(e){s.error(`Error loading backups:`,e)}},kt=async e=>{try{if(!A){s.warn(`Cannot create backup: runtime system data is unavailable`);return}let e=A.systemName||g.name,t={name:e,backupDate:new Date().toISOString(),theme_primary:A.theme.primary,theme_offset:A.theme.offset,theme_background:A.theme.background,theme_border:A.theme.border,background_url:A.theme.background_url,card_layout:A.cardLayout,list_layout:A.listLayout,attributes:A.attributes},n=`${ve}.${e}.backup`;localStorage.setItem(n,JSON.stringify(t)),s.log(`Backup created for ${e}`),Ot()}catch(e){throw s.error(`Error creating backup:`,e),e}},At=e=>{try{let t=`${ve}.${e}.backup`;localStorage.removeItem(t),s.log(`Backup deleted for ${e}`),Ot(),I(i(`system.success.backupDeleted`,{name:e}))}catch(e){s.error(`Error deleting backup:`,e),F(i(`system.error.deleteBackup`))}},jt=(e,t)=>{bt(e),vt(()=>t),Y(!0)},Mt=async()=>{Y(!1),_t&&(await _t(),vt(null))},Nt=()=>{Y(!1),vt(null),bt(``)},Pt=async()=>{if(!M.trim()){F(i(`system.error.enterShareId`));return}jt(i(`system.confirm.importSystem`),async()=>{await Ft()})},Ft=async()=>{if(!ae()){F(i(`system.error.premiumImport`));return}P(!0),F(null),I(null);try{await ue();let{data:t,error:n}=await ce(async()=>ie.rpc(`bs_forge_import_system_snapshot`,{p_source_share_id:M.trim()}));if(n)throw n;if(!t){F(i(`system.error.noSystemFound`)),P(!1);return}let a=Array.isArray(t)?t[0]:t;if(!a||typeof a.snapshot_public_id!=`string`)throw Error(i(`system.error.snapshotInvalid`));let o=Tt(a.card_layout,`card_layout`),c=Tt(a.list_layout,`list_layout`),l=Tt(a.attributes,`attributes`);if(!Array.isArray(l))throw Error(i(`system.error.attributesInvalid`));await kt(Qe);let u={primary:a.theme_primary,offset:a.theme_offset,background:a.theme_background,border:a.theme_border,background_url:a.background_url},d=new Date().toISOString();await e.room.setMetadata({[m.SNAPSHOT_PUBLIC_ID]:a.snapshot_public_id,[m.SYSTEM_NAME]:a.system_name,[m.IMPORT_DATE]:d}),qe({theme:u,cardLayout:o,listLayout:c,attributes:l,effectPresets:Array.isArray(a.effect_presets)?a.effect_presets.filter(e=>!!e&&typeof e==`object`).map(e=>({id:typeof e.id==`string`?e.id:crypto.randomUUID(),name:typeof e.name==`string`?e.name.slice(0,80):``,type:ye(e.type,typeof e.name==`string`?e.name:``),duration:be(e.duration),durationType:xe(e.durationType),endTiming:Se(e.endTiming)})).filter(e=>e.name.length>0):[],systemName:a.system_name,importDate:d,snapshotPublicId:a.snapshot_public_id}),L(a.system_name),R(d),B(u),r(u.primary,u.offset,u.background,u.border,u.background_url),I(i(`system.success.systemImported`,{name:a.system_name})),Ye(``),s.log(`System snapshot imported and loaded:`,{systemName:a.system_name,snapshotPublicId:a.snapshot_public_id})}catch(e){s.error(`Error fetching system:`,e),F(Te(e,i(`system.error.fetchSystem`)))}finally{P(!1)}},It=async e=>{jt(i(`system.confirm.restoreBackup`,{name:e.name}),async()=>{await Lt(e)})},Lt=async t=>{P(!0),F(null),I(null);try{if(!ae()){F(i(`system.error.premiumRestore`));return}await ue(),await kt(Qe);let n={primary:t.theme_primary,offset:t.theme_offset,background:t.theme_background,border:t.theme_border,background_url:t.background_url};if(!Array.isArray(t.card_layout)||!Array.isArray(t.list_layout)||!Array.isArray(t.attributes))throw Error(i(`system.error.backupInvalid`));let a=new Date().toISOString(),o=`forge-backup:${t.name.trim().toLowerCase()}`,{data:c,error:l}=await ce(async()=>ie.rpc(`bs_forge_upsert_user_snapshot_payload`,{p_source_share_id:o,p_system_name:t.name,p_background_url:t.background_url,p_theme_primary:t.theme_primary,p_theme_offset:t.theme_offset,p_theme_background:t.theme_background,p_theme_border:t.theme_border,p_card_layout:t.card_layout,p_list_layout:t.list_layout,p_attributes:t.attributes}));if(l)throw l;let u=Array.isArray(c)?c[0]:c;if(!u||typeof u.snapshot_public_id!=`string`)throw Error(i(`system.error.backupPublishFailed`));qe({theme:n,cardLayout:t.card_layout,listLayout:t.list_layout,attributes:t.attributes,effectPresets:[],systemName:t.name,importDate:a,snapshotPublicId:u.snapshot_public_id}),await e.room.setMetadata({[m.SNAPSHOT_PUBLIC_ID]:u.snapshot_public_id,[m.SYSTEM_NAME]:t.name,[m.IMPORT_DATE]:a}),L(t.name),R(a),B(n),r(n.primary,n.offset,n.background,n.border,n.background_url),I(i(`system.success.backupRestored`,{name:t.name})),s.log(`System restored from backup:`,t.name)}catch(e){s.error(`Error restoring backup:`,e),F(i(`system.error.restoreBackup`))}finally{P(!1)}},Rt=async()=>{P(!0),F(null),I(null);try{let t={primary:g.theme_primary,offset:g.theme_offset,background:g.theme_background,border:g.theme_border,background_url:g.background_url};qe({theme:t,cardLayout:g.card_layout,listLayout:g.list_layout,attributes:g.attributes,effectPresets:Ce(g.effect_presets),systemName:g.name,importDate:null,snapshotPublicId:null}),await e.room.setMetadata({[m.SNAPSHOT_PUBLIC_ID]:null,[m.SYSTEM_NAME]:g.name,[m.IMPORT_DATE]:null}),L(g.name),R(null),B(t),r(t.primary,t.offset,t.background,t.border,t.background_url),I(i(`system.success.resetDefault`))}catch(e){F(i(`system.error.resetDefault`)),s.error(`Error resetting to default:`,e)}finally{P(!1)}},zt=e=>e?new Date(e).toLocaleDateString(a,{year:`numeric`,month:`long`,day:`numeric`,hour:`2-digit`,minute:`2-digit`}):null,Q=!j,$=!j;return(0,y.jsxs)(de.div,{variants:Ge,initial:`initial`,animate:`animate`,exit:`exit`,children:[(0,y.jsxs)(he,{theme:n,children:[(0,y.jsx)(me,{theme:n,children:i(`system.pageTitle`)}),(0,y.jsx)(Oe,{theme:n,children:Qe}),$e?(0,y.jsx)(ke,{theme:n,children:i(`system.importedOn`,{value:zt($e)})}):(0,y.jsx)(ke,{theme:n,children:i(`system.usingDefaultSystem`)}),z&&(0,y.jsxs)(y.Fragment,{children:[(0,y.jsxs)(Ae,{children:[(0,y.jsxs)(`div`,{children:[(0,y.jsx)(b,{color:z.primary,theme:n,children:z.primary}),(0,y.jsx)(x,{theme:n,children:i(`system.swatch.primary`)})]}),(0,y.jsxs)(`div`,{children:[(0,y.jsx)(b,{color:z.offset,theme:n,children:z.offset}),(0,y.jsx)(x,{theme:n,children:i(`system.swatch.offset`)})]}),(0,y.jsxs)(`div`,{children:[(0,y.jsx)(b,{color:z.background,theme:n,children:z.background}),(0,y.jsx)(x,{theme:n,children:i(`system.swatch.background`)})]}),(0,y.jsxs)(`div`,{children:[(0,y.jsx)(b,{color:z.border,theme:n,children:z.border}),(0,y.jsx)(x,{theme:n,children:i(`system.swatch.border`)})]})]}),(0,y.jsxs)(je,{theme:n,children:[(0,y.jsx)(Me,{theme:n,children:i(`system.settingsSectionTitle`)}),(0,y.jsxs)(S,{children:[(0,y.jsx)(C,{theme:n,children:i(`system.currentHp`)}),(0,y.jsxs)(w,{theme:n,value:nt,disabled:$,onChange:async e=>{if($)return;let t=e.target.value;V(t),await X(o.HP_CURRENT_BID,t)},children:[(0,y.jsx)(`option`,{value:``,children:i(`system.selectAttribute`)}),Et.map(e=>(0,y.jsxs)(`option`,{value:e.attr_bid,children:[e.attr_abbr,` — `,e.attr_name,String(e.attr_type||``).toLowerCase()===`resource`?i(`system.resourceOptionSuffix`):``]},e.attr_bid))]})]}),(0,y.jsxs)(S,{children:[(0,y.jsx)(C,{theme:n,children:i(`system.maxHp`)}),(0,y.jsxs)(w,{theme:n,value:rt,disabled:$,onChange:async e=>{if($)return;let t=e.target.value;H(t),await X(o.HP_MAX_BID,t)},children:[(0,y.jsx)(`option`,{value:``,children:i(`system.selectAttribute`)}),Et.map(e=>(0,y.jsxs)(`option`,{value:e.attr_bid,children:[e.attr_abbr,` — `,e.attr_name,String(e.attr_type||``).toLowerCase()===`resource`?i(`system.resourceOptionSuffix`):``]},e.attr_bid))]})]}),$&&(0,y.jsx)(ke,{theme:n,children:i(`system.premiumHpMappingLocked`)}),(0,y.jsxs)(S,{children:[(0,y.jsx)(C,{theme:n,children:i(`system.buffVisual`)}),(0,y.jsx)(w,{theme:n,value:it,onChange:async e=>{let t=e.target.value;if(f(t)){U(t),ut(t),st(!0);try{await X(o.BUFF_VISUAL_PRESET,t)}finally{st(!1)}}},children:ne.map(e=>(0,y.jsx)(`option`,{value:e.value,children:xt[e.value]},e.value))})]}),(0,y.jsxs)(S,{children:[(0,y.jsx)(C,{theme:n,children:i(`system.debuffVisual`)}),(0,y.jsx)(w,{theme:n,value:at,onChange:async e=>{let t=e.target.value;if(p(t)){W(t),dt(t),lt(!0);try{await X(o.DEBUFF_VISUAL_PRESET,t)}finally{lt(!1)}}},children:re.map(e=>(0,y.jsx)(`option`,{value:e.value,children:St[e.value]},e.value))})]}),(0,y.jsxs)(S,{children:[(0,y.jsx)(C,{theme:n,children:i(`system.tokenBadgeOne`)}),(0,y.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`8px`,width:`100%`},children:[(0,y.jsxs)(`div`,{style:{display:`flex`,gap:`8px`,width:`100%`,alignItems:`center`},children:[(0,y.jsx)(w,{theme:n,value:ft.shape,"aria-label":i(`system.tokenBadgeShape`),onChange:async e=>{let t=e.target.value;Ke(t)&&await Z(1,`shape`,t)},children:T.map(e=>(0,y.jsx)(`option`,{value:e,children:Ct[e]},e))}),(0,y.jsx)(_e,{theme:n,type:`color`,"aria-label":i(`system.tokenBadgeColor`),value:ft.color,onChange:async e=>{await Z(1,`color`,e.target.value)},style:{width:`56px`,padding:`4px`,minHeight:`36px`,flexShrink:0}})]}),(0,y.jsx)(`div`,{style:{width:`100%`,boxSizing:`border-box`},children:(0,y.jsxs)(w,{theme:n,value:ft.attribute,"aria-label":i(`system.tokenBadgeAttribute`),onChange:async e=>{await Z(1,`attribute`,e.target.value)},children:[(0,y.jsx)(`option`,{value:``,children:i(`system.tokenBadgeNoAttribute`)}),Dt.map(e=>(0,y.jsxs)(`option`,{value:e.attr_bid,children:[e.attr_abbr,` — `,e.attr_name,String(e.attr_type||``).toLowerCase()===`resource`?i(`system.resourceOptionSuffix`):``]},`badge-one-${e.attr_bid}`))]})})]})]}),(0,y.jsxs)(S,{children:[(0,y.jsx)(C,{theme:n,children:i(`system.tokenBadgeTwo`)}),(0,y.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`8px`,width:`100%`},children:[(0,y.jsxs)(`div`,{style:{display:`flex`,gap:`8px`,width:`100%`,alignItems:`center`},children:[(0,y.jsx)(w,{theme:n,value:pt.shape,"aria-label":i(`system.tokenBadgeShape`),onChange:async e=>{let t=e.target.value;Ke(t)&&await Z(2,`shape`,t)},children:T.map(e=>(0,y.jsx)(`option`,{value:e,children:Ct[e]},e))}),(0,y.jsx)(_e,{theme:n,type:`color`,"aria-label":i(`system.tokenBadgeColor`),value:pt.color,onChange:async e=>{await Z(2,`color`,e.target.value)},style:{width:`56px`,padding:`4px`,minHeight:`36px`,flexShrink:0}})]}),(0,y.jsx)(`div`,{style:{width:`100%`,boxSizing:`border-box`},children:(0,y.jsxs)(w,{theme:n,value:pt.attribute,"aria-label":i(`system.tokenBadgeAttribute`),onChange:async e=>{await Z(2,`attribute`,e.target.value)},children:[(0,y.jsx)(`option`,{value:``,children:i(`system.tokenBadgeNoAttribute`)}),Dt.map(e=>(0,y.jsxs)(`option`,{value:e.attr_bid,children:[e.attr_abbr,` — `,e.attr_name,String(e.attr_type||``).toLowerCase()===`resource`?i(`system.resourceOptionSuffix`):``]},`badge-two-${e.attr_bid}`))]})})]})]})]})]}),(0,y.jsxs)(De,{theme:n,children:[(0,y.jsx)(`h3`,{style:{color:n.PRIMARY,marginTop:0},children:i(`system.importSectionTitle`)}),(0,y.jsx)(`p`,{style:{color:t(n.PRIMARY,.8),fontSize:`14px`},children:i(Q?`system.importLockedDescription`:`system.importDescription`)}),(0,y.jsx)(Ee,{children:(0,y.jsx)(_e,{theme:n,type:`text`,value:M,onChange:e=>Ye(e.target.value),placeholder:Q?``:i(`system.shareIdPlaceholder`),disabled:N||Q,onKeyPress:e=>e.key===`Enter`&&Pt()})}),(0,y.jsxs)(Fe,{children:[(0,y.jsx)(_,{theme:n,onClick:Pt,disabled:N||Q||!M.trim(),children:i(N?`system.importButtonLoading`:`system.importButton`)}),(0,y.jsx)(_,{theme:n,variant:`secondary`,onClick:Rt,disabled:N,children:i(`system.useDefaultButton`)})]})]}),Xe&&(0,y.jsxs)(Ne,{theme:n,children:[(0,y.jsx)(`strong`,{children:i(`system.errorPrefix`)}),` `,Xe]}),Ze&&(0,y.jsxs)(Pe,{theme:n,children:[(0,y.jsx)(`strong`,{children:i(`system.successPrefix`)}),` `,Ze]}),mt.length>0&&(0,y.jsx)(Le,{children:(0,y.jsxs)(ge,{theme:n,children:[(0,y.jsx)(`h3`,{style:{color:n.PRIMARY,marginTop:0,marginBottom:`15px`},children:i(`system.backupsSectionTitle`)}),(0,y.jsx)(Re,{children:mt.map(e=>(0,y.jsxs)(ze,{theme:n,children:[(0,y.jsxs)(Be,{children:[(0,y.jsx)(Ve,{theme:n,children:e.name}),(0,y.jsx)(He,{theme:n,children:i(`system.backedUpOn`,{value:zt(e.backupDate)})})]}),(0,y.jsxs)(Ue,{children:[(0,y.jsx)(We,{theme:n,onClick:()=>It(e),disabled:N,title:i(`system.importBackupTitle`),children:(0,y.jsx)(l,{size:18})}),(0,y.jsx)(We,{theme:n,$variant:`danger`,onClick:()=>At(e.name),disabled:N,title:i(`system.deleteBackupTitle`),children:(0,y.jsx)(c,{size:18})})]})]},`${e.name}-${e.backupDate}`))})]})})]}),(0,y.jsx)(fe,{isOpen:gt,title:i(`system.confirmActionTitle`),onClose:Nt,actions:(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(_,{theme:n,variant:`secondary`,onClick:Nt,children:i(`system.cancel`)}),(0,y.jsx)(_,{theme:n,onClick:Mt,children:i(`system.confirm`)})]}),children:(0,y.jsx)(Ie,{theme:n,children:yt})})]},`system`)};export{k as SystemPage};