import"./tslib.es6-C783ynKN.js";import{S as e,_ as t,f as n,p as r,t as i}from"./styled-components.browser.esm-UVFsQtUm.js";import{t as a}from"./Constants-vXYz8c6e.js";import{n as o}from"./MetadataKeys-DpE2-j4V.js";import{t as s}from"./Logger-C94eKphQ.js";import"./createLucideIcon-BbfiFPNP.js";import{t as c}from"./upload-Bxgu4CcV.js";import{t as l}from"./x-iNwObYPB.js";import{t as u}from"./Translation-K1AcF_l-.js";import{i as d}from"./hpAttributeMapping-CbdVshDZ.js";import{a as ee,c as f,i as te,l as p,n as ne,r as re,t as m}from"./systemKeys-DYrvonWC.js";import{a as ie}from"./supabaseClient-CdceIqu0.js";import{d as ae,f as oe,i as se,p as ce,r as le,u as ue}from"./authHelpers-BGKZZVLe.js";import{f as h,l as de,o as fe,u as pe}from"./main-D4l1PQRI.js";import{i as g}from"./defaultgamesystem-BhmBTadj.js";import{a as me,i as he,n as ge,r as _e,t as _}from"./SharedStyledComponents-D81OPnYe.js";var v=e(),y=r(),ve=`com.battle-system.forge`,ye=d(g.attributes),be=(e,t)=>e instanceof Error&&e.message?e.message:t,xe=i.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`,Se=i.div`
  background-color: ${e=>n(e.theme.BACKGROUND,.3)};
  border: 2px solid ${e=>e.theme.BORDER};
  border-radius: 6px;
  padding: 20px;
  margin: 20px 0;
`,Ce=i.h2`
  color: ${e=>e.theme.PRIMARY};
  border-bottom: 2px solid ${e=>e.theme.BORDER};
  padding: 12px 15px;
  margin: 0 0 15px 0;
  font-size: 20px;
  font-weight: 400;
`,we=i.p`
  color: ${e=>n(e.theme.PRIMARY,.8)};
  font-size: 14px;
  margin: 0 0 15px 0;
  font-style: italic;
`,Te=i.div`
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
`,Ee=i.div`
  margin-top: 16px;
  background-color: ${e=>n(e.theme.BACKGROUND,.3)};
  border: 2px solid ${e=>e.theme.BORDER};
  border-radius: 6px;
  padding: 14px;
`,De=i.h3`
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
`,Oe=i.div`
  background-color: ${()=>n(`#FF0000`,.2)};
  border: 2px solid #FF0000;
  border-radius: 6px;
  padding: 15px;
  color: ${e=>e.theme.PRIMARY};
  margin: 15px 0;
`,ke=i.div`
  background-color: ${()=>n(`#00FF00`,.2)};
  border: 2px solid #00FF00;
  border-radius: 6px;
  padding: 15px;
  color: ${e=>e.theme.PRIMARY};
  margin: 15px 0;
`,Ae=i.div`
  display: flex;
  gap: 10px;
  margin-top: 15px;
`,je=i.p`
  color: ${e=>n(e.theme.PRIMARY,.9)};
  margin: 0 0 20px 0;
  line-height: 1.5;
`,Me=i.div`
  margin-top: 30px;
`,Ne=i.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,Pe=i.div`
  background-color: ${e=>n(e.theme.BACKGROUND,.3)};
  border: 2px solid ${e=>e.theme.BORDER};
  border-radius: 6px;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,Fe=i.div`
  flex: 1;
`,Ie=i.div`
  color: ${e=>e.theme.PRIMARY};
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 5px;
`,Le=i.div`
  color: ${e=>n(e.theme.PRIMARY,.7)};
  font-size: 13px;
  font-style: italic;
`,Re=i.div`
  display: flex;
  gap: 8px;
`,ze=i.button`
  background-color: ${e=>e.$variant===`danger`?n(`#FF0000`,.2):n(e.theme.OFFSET,.5)};
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
    background-color: ${e=>e.$variant===`danger`?n(`#FF0000`,.3):e.theme.OFFSET};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,Be={initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20}},Ve=[`circle`,`square`,`diamond`,`hex`,`shield`],T={shape:`circle`,color:`#f5c542`,attribute:``},E=e=>typeof e==`string`&&Ve.includes(e),D=(e,t)=>{if(typeof e!=`string`)return t;let n=e.trim();return/^#[0-9a-fA-F]{6}$/.test(n)?n:t},O=(e,t,n,r)=>({shape:E(e[t])?e[t]:T.shape,color:D(e[n],T.color),attribute:typeof e[r]==`string`?e[r]:T.attribute});const k=()=>{let{theme:e,updateThemeFromSystem:r}=pe(),{t:i,locale:a}=u(),d=h(e=>e.sceneMetadata),D=h(e=>e.roomMetadata),k=D,A=h(e=>e.systemData),He=h(e=>e.setSystemData),[j,Ue]=(0,v.useState)(()=>se().premiumAuthorized),[M,We]=(0,v.useState)(``),[N,P]=(0,v.useState)(!1),[Ge,F]=(0,v.useState)(null),[Ke,I]=(0,v.useState)(null),[qe,L]=(0,v.useState)(``),[Je,R]=(0,v.useState)(null),[z,B]=(0,v.useState)(null),[Ye,Xe]=(0,v.useState)([]),[Ze,V]=(0,v.useState)(``),[Qe,H]=(0,v.useState)(``),[$e,U]=(0,v.useState)(te),[et,W]=(0,v.useState)(ee),[tt,nt]=(0,v.useState)(!1),[rt,it]=(0,v.useState)(!1),[G,at]=(0,v.useState)(null),[K,ot]=(0,v.useState)(null),[st,q]=(0,v.useState)(T),[ct,J]=(0,v.useState)({...T,color:`#5bb5ff`}),[lt,ut]=(0,v.useState)([]),[dt,ft]=(0,v.useState)(!1),[pt,mt]=(0,v.useState)(null),[ht,gt]=(0,v.useState)(``),_t={buff_effect_one:i(`system.buffVisualPreset.buff_effect_one`),buff_effect_two:i(`system.buffVisualPreset.buff_effect_two`)},vt={debuff_effect_one:i(`system.debuffVisualPreset.debuff_effect_one`),debuff_effect_two:i(`system.debuffVisualPreset.debuff_effect_two`)},yt={circle:i(`system.tokenBadgeShape.circle`),square:i(`system.tokenBadgeShape.square`),diamond:i(`system.tokenBadgeShape.diamond`),hex:i(`system.tokenBadgeShape.hex`),shield:i(`system.tokenBadgeShape.shield`)};(0,v.useEffect)(()=>{let e=!0,t=async()=>{await oe(),e&&Ue(se().premiumAuthorized)},n=ae(t=>{e&&Ue(t.premiumAuthorized)});return t(),()=>{e=!1,n()}},[]),(0,v.useEffect)(()=>{bt(),Z()},[d,D,A,j]);let bt=()=>{try{if(A){let e=k[o.HP_CURRENT_BID],t=k[o.HP_MAX_BID],n=k[o.BUFF_VISUAL_PRESET],r=k[o.DEBUFF_VISUAL_PRESET],i=f(n)?n:null,a=p(r)?r:null,s=O(k,o.TOKEN_BADGE_ONE_SHAPE,o.TOKEN_BADGE_ONE_COLOR,o.TOKEN_BADGE_ONE_ATTRIBUTE),c=O(k,o.TOKEN_BADGE_TWO_SHAPE,o.TOKEN_BADGE_TWO_COLOR,o.TOKEN_BADGE_TWO_ATTRIBUTE);L(A.systemName),R(A.importDate),B(A.theme),Xe(A.attributes),V(e||``),H(t||``),G&&i===G&&at(null),K&&a===K&&ot(null),!tt&&!G&&U(e=>i||e),!rt&&!K&&W(e=>a||e),q(s),J(c);return}if(!j){let e={primary:g.theme_primary,offset:g.theme_offset,background:g.theme_background,border:g.theme_border,background_url:g.background_url},t=k[o.BUFF_VISUAL_PRESET],n=k[o.DEBUFF_VISUAL_PRESET],r=f(t)?t:te,i=p(n)?n:ee,a=O(k,o.TOKEN_BADGE_ONE_SHAPE,o.TOKEN_BADGE_ONE_COLOR,o.TOKEN_BADGE_ONE_ATTRIBUTE),s=O(k,o.TOKEN_BADGE_TWO_SHAPE,o.TOKEN_BADGE_TWO_COLOR,o.TOKEN_BADGE_TWO_ATTRIBUTE);L(g.name),R(null),B(e),Xe(g.attributes),V(ye.currentHpBid),H(ye.maxHpBid),U(r),W(i),q(a),J(s);return}let e=D[m.SYSTEM_NAME],t=D[m.IMPORT_DATE],n=k[o.HP_CURRENT_BID],r=k[o.HP_MAX_BID],i=k[o.BUFF_VISUAL_PRESET],a=k[o.DEBUFF_VISUAL_PRESET],s=f(i)?i:null,c=p(a)?a:null,l=O(k,o.TOKEN_BADGE_ONE_SHAPE,o.TOKEN_BADGE_ONE_COLOR,o.TOKEN_BADGE_ONE_ATTRIBUTE),u=O(k,o.TOKEN_BADGE_TWO_SHAPE,o.TOKEN_BADGE_TWO_COLOR,o.TOKEN_BADGE_TWO_ATTRIBUTE);L(e||g.name),R(t||null),B({primary:g.theme_primary,offset:g.theme_offset,background:g.theme_background,border:g.theme_border,background_url:g.background_url}),Xe(g.attributes),V(n||``),H(r||``),G&&s===G&&at(null),K&&c===K&&ot(null),!tt&&!G&&U(e=>s||e),!rt&&!K&&W(e=>c||e),q(l),J(u)}catch(e){s.error(`Error loading system from cache:`,e)}},Y=async(e,n)=>{await t.room.setMetadata({[e]:n})},xt=(e,t)=>{if(Array.isArray(e))return e;if(typeof e==`string`){let n;try{n=JSON.parse(e)}catch{throw Error(i(`system.error.invalidJsonField`,{field:t}))}if(!Array.isArray(n))throw Error(i(`system.error.invalidArrayField`,{field:t}));return n}throw Error(i(`system.error.invalidFieldType`,{field:t}))},St=Ye.filter(e=>{let t=String(e.attr_type||``).toLowerCase();return t===`numb`||t===`resource`}),Ct=Ye.filter(e=>{let t=String(e.attr_type||``).toLowerCase();return t===`numb`||t===`resource`||t===`derived`}),X=async(e,t,n)=>{let r=e===1?q:J,i=e===1?{shape:o.TOKEN_BADGE_ONE_SHAPE,color:o.TOKEN_BADGE_ONE_COLOR,attribute:o.TOKEN_BADGE_ONE_ATTRIBUTE}:{shape:o.TOKEN_BADGE_TWO_SHAPE,color:o.TOKEN_BADGE_TWO_COLOR,attribute:o.TOKEN_BADGE_TWO_ATTRIBUTE};r(e=>({...e,[t]:n})),await Y(i[t],n)},Z=()=>{try{let e=[];for(let t=0;t<localStorage.length;t++){let n=localStorage.key(t);if(n&&n.startsWith(`${ve}.`)&&n.endsWith(`.backup`)){let t=localStorage.getItem(n);if(t){let n=JSON.parse(t);e.push(n)}}}e.sort((e,t)=>new Date(t.backupDate).getTime()-new Date(e.backupDate).getTime()),ut(e)}catch(e){s.error(`Error loading backups:`,e)}},wt=async e=>{try{if(!A){s.warn(`Cannot create backup: runtime system data is unavailable`);return}let e=A.systemName||g.name,t={name:e,backupDate:new Date().toISOString(),theme_primary:A.theme.primary,theme_offset:A.theme.offset,theme_background:A.theme.background,theme_border:A.theme.border,background_url:A.theme.background_url,card_layout:A.cardLayout,list_layout:A.listLayout,attributes:A.attributes},n=`${ve}.${e}.backup`;localStorage.setItem(n,JSON.stringify(t)),s.log(`Backup created for ${e}`),Z()}catch(e){throw s.error(`Error creating backup:`,e),e}},Tt=e=>{try{let t=`${ve}.${e}.backup`;localStorage.removeItem(t),s.log(`Backup deleted for ${e}`),Z(),I(i(`system.success.backupDeleted`,{name:e}))}catch(e){s.error(`Error deleting backup:`,e),F(i(`system.error.deleteBackup`))}},Et=(e,t)=>{gt(e),mt(()=>t),ft(!0)},Dt=async()=>{ft(!1),pt&&(await pt(),mt(null))},Ot=()=>{ft(!1),mt(null),gt(``)},kt=async()=>{if(!M.trim()){F(i(`system.error.enterShareId`));return}Et(i(`system.confirm.importSystem`),async()=>{await At()})},At=async()=>{if(!ue()){F(i(`system.error.premiumImport`));return}P(!0),F(null),I(null);try{await le();let{data:e,error:n}=await ce(async()=>ie.rpc(`bs_forge_import_system_snapshot`,{p_source_share_id:M.trim()}));if(n)throw n;if(!e){F(i(`system.error.noSystemFound`)),P(!1);return}let a=Array.isArray(e)?e[0]:e;if(!a||typeof a.snapshot_public_id!=`string`)throw Error(i(`system.error.snapshotInvalid`));let o=xt(a.card_layout,`card_layout`),c=xt(a.list_layout,`list_layout`),l=xt(a.attributes,`attributes`);if(!Array.isArray(l))throw Error(i(`system.error.attributesInvalid`));await wt(qe);let u={primary:a.theme_primary,offset:a.theme_offset,background:a.theme_background,border:a.theme_border,background_url:a.background_url},d=new Date().toISOString();await t.room.setMetadata({[m.SNAPSHOT_PUBLIC_ID]:a.snapshot_public_id,[m.SYSTEM_NAME]:a.system_name,[m.IMPORT_DATE]:d}),He({theme:u,cardLayout:o,listLayout:c,attributes:l,systemName:a.system_name,importDate:d,snapshotPublicId:a.snapshot_public_id}),L(a.system_name),R(d),B(u),r(u.primary,u.offset,u.background,u.border,u.background_url),I(i(`system.success.systemImported`,{name:a.system_name})),We(``),s.log(`System snapshot imported and loaded:`,{systemName:a.system_name,snapshotPublicId:a.snapshot_public_id})}catch(e){s.error(`Error fetching system:`,e),F(be(e,i(`system.error.fetchSystem`)))}finally{P(!1)}},jt=async e=>{Et(i(`system.confirm.restoreBackup`,{name:e.name}),async()=>{await Mt(e)})},Mt=async e=>{P(!0),F(null),I(null);try{if(!ue()){F(i(`system.error.premiumRestore`));return}await le(),await wt(qe);let n={primary:e.theme_primary,offset:e.theme_offset,background:e.theme_background,border:e.theme_border,background_url:e.background_url};if(!Array.isArray(e.card_layout)||!Array.isArray(e.list_layout)||!Array.isArray(e.attributes))throw Error(i(`system.error.backupInvalid`));let a=new Date().toISOString(),o=`forge-backup:${e.name.trim().toLowerCase()}`,{data:c,error:l}=await ce(async()=>ie.rpc(`bs_forge_upsert_user_snapshot_payload`,{p_source_share_id:o,p_system_name:e.name,p_background_url:e.background_url,p_theme_primary:e.theme_primary,p_theme_offset:e.theme_offset,p_theme_background:e.theme_background,p_theme_border:e.theme_border,p_card_layout:e.card_layout,p_list_layout:e.list_layout,p_attributes:e.attributes}));if(l)throw l;let u=Array.isArray(c)?c[0]:c;if(!u||typeof u.snapshot_public_id!=`string`)throw Error(i(`system.error.backupPublishFailed`));He({theme:n,cardLayout:e.card_layout,listLayout:e.list_layout,attributes:e.attributes,systemName:e.name,importDate:a,snapshotPublicId:u.snapshot_public_id}),await t.room.setMetadata({[m.SNAPSHOT_PUBLIC_ID]:u.snapshot_public_id,[m.SYSTEM_NAME]:e.name,[m.IMPORT_DATE]:a}),L(e.name),R(a),B(n),r(n.primary,n.offset,n.background,n.border,n.background_url),I(i(`system.success.backupRestored`,{name:e.name})),s.log(`System restored from backup:`,e.name)}catch(e){s.error(`Error restoring backup:`,e),F(i(`system.error.restoreBackup`))}finally{P(!1)}},Nt=async()=>{P(!0),F(null),I(null);try{let e={primary:g.theme_primary,offset:g.theme_offset,background:g.theme_background,border:g.theme_border,background_url:g.background_url};He({theme:e,cardLayout:g.card_layout,listLayout:g.list_layout,attributes:g.attributes,systemName:g.name,importDate:null,snapshotPublicId:null}),await t.room.setMetadata({[m.SNAPSHOT_PUBLIC_ID]:null,[m.SYSTEM_NAME]:g.name,[m.IMPORT_DATE]:null}),L(g.name),R(null),B(e),r(e.primary,e.offset,e.background,e.border,e.background_url),I(i(`system.success.resetDefault`))}catch(e){F(i(`system.error.resetDefault`)),s.error(`Error resetting to default:`,e)}finally{P(!1)}},Pt=e=>e?new Date(e).toLocaleDateString(a,{year:`numeric`,month:`long`,day:`numeric`,hour:`2-digit`,minute:`2-digit`}):null,Q=!j,$=!j;return(0,y.jsxs)(de.div,{variants:Be,initial:`initial`,animate:`animate`,exit:`exit`,children:[(0,y.jsxs)(he,{theme:e,children:[(0,y.jsx)(me,{theme:e,children:i(`system.pageTitle`)}),(0,y.jsx)(Ce,{theme:e,children:qe}),Je?(0,y.jsx)(we,{theme:e,children:i(`system.importedOn`,{value:Pt(Je)})}):(0,y.jsx)(we,{theme:e,children:i(`system.usingDefaultSystem`)}),z&&(0,y.jsxs)(y.Fragment,{children:[(0,y.jsxs)(Te,{children:[(0,y.jsxs)(`div`,{children:[(0,y.jsx)(b,{color:z.primary,theme:e,children:z.primary}),(0,y.jsx)(x,{theme:e,children:i(`system.swatch.primary`)})]}),(0,y.jsxs)(`div`,{children:[(0,y.jsx)(b,{color:z.offset,theme:e,children:z.offset}),(0,y.jsx)(x,{theme:e,children:i(`system.swatch.offset`)})]}),(0,y.jsxs)(`div`,{children:[(0,y.jsx)(b,{color:z.background,theme:e,children:z.background}),(0,y.jsx)(x,{theme:e,children:i(`system.swatch.background`)})]}),(0,y.jsxs)(`div`,{children:[(0,y.jsx)(b,{color:z.border,theme:e,children:z.border}),(0,y.jsx)(x,{theme:e,children:i(`system.swatch.border`)})]})]}),(0,y.jsxs)(Ee,{theme:e,children:[(0,y.jsx)(De,{theme:e,children:i(`system.settingsSectionTitle`)}),(0,y.jsxs)(S,{children:[(0,y.jsx)(C,{theme:e,children:i(`system.currentHp`)}),(0,y.jsxs)(w,{theme:e,value:Ze,disabled:$,onChange:async e=>{if($)return;let t=e.target.value;V(t),await Y(o.HP_CURRENT_BID,t)},children:[(0,y.jsx)(`option`,{value:``,children:i(`system.selectAttribute`)}),St.map(e=>(0,y.jsxs)(`option`,{value:e.attr_bid,children:[e.attr_abbr,` — `,e.attr_name,String(e.attr_type||``).toLowerCase()===`resource`?i(`system.resourceOptionSuffix`):``]},e.attr_bid))]})]}),(0,y.jsxs)(S,{children:[(0,y.jsx)(C,{theme:e,children:i(`system.maxHp`)}),(0,y.jsxs)(w,{theme:e,value:Qe,disabled:$,onChange:async e=>{if($)return;let t=e.target.value;H(t),await Y(o.HP_MAX_BID,t)},children:[(0,y.jsx)(`option`,{value:``,children:i(`system.selectAttribute`)}),St.map(e=>(0,y.jsxs)(`option`,{value:e.attr_bid,children:[e.attr_abbr,` — `,e.attr_name,String(e.attr_type||``).toLowerCase()===`resource`?i(`system.resourceOptionSuffix`):``]},e.attr_bid))]})]}),$&&(0,y.jsx)(we,{theme:e,children:i(`system.premiumHpMappingLocked`)}),(0,y.jsxs)(S,{children:[(0,y.jsx)(C,{theme:e,children:i(`system.buffVisual`)}),(0,y.jsx)(w,{theme:e,value:$e,onChange:async e=>{let t=e.target.value;if(f(t)){U(t),at(t),nt(!0);try{await Y(o.BUFF_VISUAL_PRESET,t)}finally{nt(!1)}}},children:ne.map(e=>(0,y.jsx)(`option`,{value:e.value,children:_t[e.value]},e.value))})]}),(0,y.jsxs)(S,{children:[(0,y.jsx)(C,{theme:e,children:i(`system.debuffVisual`)}),(0,y.jsx)(w,{theme:e,value:et,onChange:async e=>{let t=e.target.value;if(p(t)){W(t),ot(t),it(!0);try{await Y(o.DEBUFF_VISUAL_PRESET,t)}finally{it(!1)}}},children:re.map(e=>(0,y.jsx)(`option`,{value:e.value,children:vt[e.value]},e.value))})]}),(0,y.jsxs)(S,{children:[(0,y.jsx)(C,{theme:e,children:i(`system.tokenBadgeOne`)}),(0,y.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`8px`,width:`100%`},children:[(0,y.jsxs)(`div`,{style:{display:`flex`,gap:`8px`,width:`100%`,alignItems:`center`},children:[(0,y.jsx)(w,{theme:e,value:st.shape,"aria-label":i(`system.tokenBadgeShape`),onChange:async e=>{let t=e.target.value;E(t)&&await X(1,`shape`,t)},children:Ve.map(e=>(0,y.jsx)(`option`,{value:e,children:yt[e]},e))}),(0,y.jsx)(_e,{theme:e,type:`color`,"aria-label":i(`system.tokenBadgeColor`),value:st.color,onChange:async e=>{await X(1,`color`,e.target.value)},style:{width:`56px`,padding:`4px`,minHeight:`36px`,flexShrink:0}})]}),(0,y.jsx)(`div`,{style:{width:`100%`,boxSizing:`border-box`},children:(0,y.jsxs)(w,{theme:e,value:st.attribute,"aria-label":i(`system.tokenBadgeAttribute`),onChange:async e=>{await X(1,`attribute`,e.target.value)},children:[(0,y.jsx)(`option`,{value:``,children:i(`system.tokenBadgeNoAttribute`)}),Ct.map(e=>(0,y.jsxs)(`option`,{value:e.attr_bid,children:[e.attr_abbr,` — `,e.attr_name,String(e.attr_type||``).toLowerCase()===`resource`?i(`system.resourceOptionSuffix`):``]},`badge-one-${e.attr_bid}`))]})})]})]}),(0,y.jsxs)(S,{children:[(0,y.jsx)(C,{theme:e,children:i(`system.tokenBadgeTwo`)}),(0,y.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`8px`,width:`100%`},children:[(0,y.jsxs)(`div`,{style:{display:`flex`,gap:`8px`,width:`100%`,alignItems:`center`},children:[(0,y.jsx)(w,{theme:e,value:ct.shape,"aria-label":i(`system.tokenBadgeShape`),onChange:async e=>{let t=e.target.value;E(t)&&await X(2,`shape`,t)},children:Ve.map(e=>(0,y.jsx)(`option`,{value:e,children:yt[e]},e))}),(0,y.jsx)(_e,{theme:e,type:`color`,"aria-label":i(`system.tokenBadgeColor`),value:ct.color,onChange:async e=>{await X(2,`color`,e.target.value)},style:{width:`56px`,padding:`4px`,minHeight:`36px`,flexShrink:0}})]}),(0,y.jsx)(`div`,{style:{width:`100%`,boxSizing:`border-box`},children:(0,y.jsxs)(w,{theme:e,value:ct.attribute,"aria-label":i(`system.tokenBadgeAttribute`),onChange:async e=>{await X(2,`attribute`,e.target.value)},children:[(0,y.jsx)(`option`,{value:``,children:i(`system.tokenBadgeNoAttribute`)}),Ct.map(e=>(0,y.jsxs)(`option`,{value:e.attr_bid,children:[e.attr_abbr,` — `,e.attr_name,String(e.attr_type||``).toLowerCase()===`resource`?i(`system.resourceOptionSuffix`):``]},`badge-two-${e.attr_bid}`))]})})]})]})]})]}),(0,y.jsxs)(Se,{theme:e,children:[(0,y.jsx)(`h3`,{style:{color:e.PRIMARY,marginTop:0},children:i(`system.importSectionTitle`)}),(0,y.jsx)(`p`,{style:{color:n(e.PRIMARY,.8),fontSize:`14px`},children:i(Q?`system.importLockedDescription`:`system.importDescription`)}),(0,y.jsx)(xe,{children:(0,y.jsx)(_e,{theme:e,type:`text`,value:M,onChange:e=>We(e.target.value),placeholder:Q?``:i(`system.shareIdPlaceholder`),disabled:N||Q,onKeyPress:e=>e.key===`Enter`&&kt()})}),(0,y.jsxs)(Ae,{children:[(0,y.jsx)(_,{theme:e,onClick:kt,disabled:N||Q||!M.trim(),children:i(N?`system.importButtonLoading`:`system.importButton`)}),(0,y.jsx)(_,{theme:e,variant:`secondary`,onClick:Nt,disabled:N,children:i(`system.useDefaultButton`)})]})]}),Ge&&(0,y.jsxs)(Oe,{theme:e,children:[(0,y.jsx)(`strong`,{children:i(`system.errorPrefix`)}),` `,Ge]}),Ke&&(0,y.jsxs)(ke,{theme:e,children:[(0,y.jsx)(`strong`,{children:i(`system.successPrefix`)}),` `,Ke]}),lt.length>0&&(0,y.jsx)(Me,{children:(0,y.jsxs)(ge,{theme:e,children:[(0,y.jsx)(`h3`,{style:{color:e.PRIMARY,marginTop:0,marginBottom:`15px`},children:i(`system.backupsSectionTitle`)}),(0,y.jsx)(Ne,{children:lt.map(t=>(0,y.jsxs)(Pe,{theme:e,children:[(0,y.jsxs)(Fe,{children:[(0,y.jsx)(Ie,{theme:e,children:t.name}),(0,y.jsx)(Le,{theme:e,children:i(`system.backedUpOn`,{value:Pt(t.backupDate)})})]}),(0,y.jsxs)(Re,{children:[(0,y.jsx)(ze,{theme:e,onClick:()=>jt(t),disabled:N,title:i(`system.importBackupTitle`),children:(0,y.jsx)(c,{size:18})}),(0,y.jsx)(ze,{theme:e,$variant:`danger`,onClick:()=>Tt(t.name),disabled:N,title:i(`system.deleteBackupTitle`),children:(0,y.jsx)(l,{size:18})})]})]},`${t.name}-${t.backupDate}`))})]})})]}),(0,y.jsx)(fe,{isOpen:dt,title:i(`system.confirmActionTitle`),onClose:Ot,actions:(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(_,{theme:e,variant:`secondary`,onClick:Ot,children:i(`system.cancel`)}),(0,y.jsx)(_,{theme:e,onClick:Dt,children:i(`system.confirm`)})]}),children:(0,y.jsx)(je,{theme:e,children:ht})})]},`system`)};export{k as SystemPage};