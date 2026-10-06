const P=(a,b)=>Object.fromEntries([...a].map((c,i)=>[c,b[i]]));
const C={...P('कखगघचछजझटठडढणतथदधनपफबभमयरलवशषसह',['k','kh','g','gh','ch','chh','j','jh','t','th','d','dh','n','t','th','d','dh','n','p','ph','b','bh','m','y','r','l','v','sh','sh','s','h'])};
const V=P('अआइईउऊएऐओऔऋ',['a','aa','i','ee','u','oo','e','ai','o','au','ri']),M=P('ािीुूेैोौृ',['a','i','ee','u','oo','e','ai','o','au','ri']);
const NK={j:'z',ph:'f',d:'r',dh:'rh',k:'q'};
function word(w){const S=[];for(let i=0;i<w.length;i++){const ch=w[i];
if(C[ch]){let c=C[ch];if(w[i+1]=='\u093C'){i++;c=NK[c]||c}const n=w[i+1];
if(n=='\u094D'){i++;S.push({c,v:'x'})}else if(M[n]!==undefined){i++;S.push({c,v:M[n]})}else S.push({c,v:'a',inh:1})}
else if(V[ch])S.push({c:'',v:V[ch]});
else if(ch=='ं'||ch=='ँ'){if(S.length)S.at(-1).t=(S.at(-1).t||'')+'n'}
else if(ch=='ः'){if(S.length)S.at(-1).t=(S.at(-1).t||'')+'h'}
else if(ch=='।')S.push({l:'.'});else if(ch!='\u094D'&&ch!='\u093C')S.push({l:ch})}
const has=s=>s&&!s.l&&s.v&&s.v!='x',L=S.length-1;
if(L>0&&S[L].inh)S[L].v='';
for(let i=L-1;i>=1;i--)if(S[i].inh&&has(S[i+1])&&has(S[i-1]))S[i].v='';
return S.map(s=>s.l??(s.c+(s.v=='x'?'':s.v)+(s.t||''))).join('')}
export const hinglish=t=>t.replace(/[\u0900-\u097F]+/g,word);
