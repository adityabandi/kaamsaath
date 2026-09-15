import { readFileSync, existsSync, readdirSync } from "node:fs";
import { join, dirname } from "node:path";
const roots=["index.html","landing/index.html","whatsapp-demo/index.html","onboarding-demo/index.html","scoping-demo/index.html","governance-demo/index.html","payments-demo/index.html","prototype/index.html"];
let errors=[];
for(const file of roots){
 if(!existsSync(file)){errors.push(`missing ${file}`);continue}
 const html=readFileSync(file,"utf8");
 if(!html.includes('name="viewport"'))errors.push(`${file}: no viewport`);
 for(const m of html.matchAll(/(?:href|src)="([^"#][^"]*)"/g)){
  const u=m[1]; if(/^(https?:|data:|mailto:|tel:)/.test(u))continue;
  const target=join(dirname(file),u.split(/[?#]/)[0]);
  if(!existsSync(target))errors.push(`${file}: broken ${u}`);
 }
 if(/KaamSaath/i.test(html))errors.push(`${file}: stale brand`);
}
for(const dir of ["landing","whatsapp-demo","onboarding-demo","scoping-demo","governance-demo","payments-demo","prototype"]){
 for(const f of readdirSync(dir).filter(x=>x.endsWith('.js'))){new Function(readFileSync(join(dir,f),'utf8'))}
}
if(errors.length){console.error(errors.join('\n'));process.exit(1)}
console.log(`site check passed: ${roots.length} decisive pages`);
