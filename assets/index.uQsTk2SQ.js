import{d as f,t as l,v as r,x as e,L as b,M as C,N as t,y as d,O as x,C as S,D as g,r as F,_ as m,P,Q as A,R as Y,S as $,c as k,B as Z,T as V,z as O,U as N,V as T}from"./entry.RILp_l8E.js";const h=c=>(S("data-v-a71de47e"),c=c(),g(),c),U={class:"base-form-step-container"},D=h(()=>e("div",{class:"title"},"Personal info",-1)),H=h(()=>e("div",{class:"hint"},"Please provide your name, email address, and phone number.",-1)),K={class:"inputs"},z={class:"input-container"},L=h(()=>e("label",{for:"name"},"Name",-1)),G=h(()=>e("br",null,null,-1)),R={key:0,class:"error-info"},j={class:"input-container"},Q=h(()=>e("label",{for:"email"},"Email Address",-1)),W=h(()=>e("br",null,null,-1)),q={key:0,class:"error-info"},J={class:"input-container"},X=h(()=>e("label",{for:"tel"},"Phone Number",-1)),ee=h(()=>e("br",null,null,-1)),se={key:0,class:"error-info"},te={class:"step-navigation-wrapper"},ne=f({__name:"BaseFormStep1",setup(c){const p=i=>i.value.length<1?(i.error="Can't be empty.",!0):(i.error="",!1),u=()=>{const i=F(0);for(const n in s.step1.inputs){const a=s.step1.inputs[n];switch(p(a)&&i.value++,a.type){case s.step1.inputs.fullName.type:break;case s.step1.inputs.emailAddress.type:break;case s.step1.inputs.phoneNumber.type:break}}return i.value===0},_=()=>{u()&&s.functions.nextStep()};return(i,n)=>(l(),r("div",U,[D,H,e("div",K,[e("div",z,[L,G,b(e("input",{"onUpdate:modelValue":n[0]||(n[0]=a=>t(s).step1.inputs.fullName.value=a),class:"input-personal-info",type:"text",id:"name",placeholder:"e.g. Stephen King"},null,512),[[C,t(s).step1.inputs.fullName.value]]),t(s).step1.inputs.fullName.error?(l(),r("div",R,d(t(s).step1.inputs.fullName.error),1)):x("",!0)]),e("div",j,[Q,W,b(e("input",{"onUpdate:modelValue":n[1]||(n[1]=a=>t(s).step1.inputs.emailAddress.value=a),class:"input-personal-info",type:"email",id:"email",placeholder:"e.g. stephenking@lorem.com"},null,512),[[C,t(s).step1.inputs.emailAddress.value]]),t(s).step1.inputs.emailAddress.error?(l(),r("div",q,d(t(s).step1.inputs.emailAddress.error),1)):x("",!0)]),e("div",J,[X,ee,b(e("input",{"onUpdate:modelValue":n[2]||(n[2]=a=>t(s).step1.inputs.phoneNumber.value=a),class:"input-personal-info",type:"tel",id:"tel",placeholder:"e.g. +1 234 567 890"},null,512),[[C,t(s).step1.inputs.phoneNumber.value]]),t(s).step1.inputs.phoneNumber.error?(l(),r("div",se,d(t(s).step1.inputs.phoneNumber.error),1)):x("",!0)]),e("div",te,[e("button",{onClick:n[3]||(n[3]=a=>_()),class:"button-next-step"},"Next Step")])])]))}}),oe=m(ne,[["__scopeId","data-v-a71de47e"]]),w=c=>(S("data-v-223fa7c2"),c=c(),g(),c),ce={class:"base-form-step-container"},ie=w(()=>e("div",{class:"title"},"Select your plan",-1)),ae=w(()=>e("div",{class:"hint"},"You have the option of monthly or yearly billing.",-1)),le={class:"base-form-step-content-container"},re={class:"selector-plans"},pe=["onClick"],de=["src","alt"],ue={class:"plan-info"},_e={class:"plan-name"},me={class:"plan-price"},he={class:"switch-payment-schedule-wrapper"},ve={class:"switch-payment-schedule"},fe=w(()=>e("span",{class:"monthly"},"Monthly",-1)),ye={class:"switch"},$e=w(()=>e("span",{class:"slider round"},null,-1)),Se=w(()=>e("span",{class:"yearly"},"Yearly",-1)),ge={key:0,class:"error-info"},be={class:"step-navigation-wrapper"},we=f({__name:"BaseFormStep2",setup(c){const p=n=>{for(const a in s.step2.plans){const o=s.step2.plans[a];o===n?(o.isSelected=!0,s.step4.summary.selectedPlan=o):o.isSelected=!1}},u=()=>s.step4.summary.selectedPlan?(s.step2.error="",!0):(s.step2.error="Please select a plan.",!1),_=()=>!!u(),i=()=>{_()&&s.functions.nextStep()};return(n,a)=>(l(),r("div",ce,[ie,ae,e("div",le,[e("div",re,[(l(!0),r(P,null,A(t(s).step2.plans,o=>(l(),r("div",{onClick:y=>p(o),class:$(["plan",o.isSelected?"active":""])},[e("img",{src:o.icon,alt:o.name},null,8,de),e("div",ue,[e("div",_e,d(o.name),1),e("div",me," $"+d(t(s).switch.isYearly?o.priceYearly+"/yr":o.priceMonthly+"/mo"),1)])],10,pe))),256))]),e("div",he,[e("div",ve,[fe,e("label",ye,[b(e("input",{"onUpdate:modelValue":a[0]||(a[0]=o=>t(s).switch.isYearly=o),type:"checkbox"},null,512),[[Y,t(s).switch.isYearly]]),$e]),Se])]),t(s).step2.error?(l(),r("div",ge,d(t(s).step2.error),1)):x("",!0),e("div",be,[e("button",{onClick:a[1]||(a[1]=(...o)=>t(s).functions.previousStep&&t(s).functions.previousStep(...o)),class:"button-previous-step"}," Go Back "),e("button",{onClick:i,class:"button-next-step"},"Next Step")])])]))}}),xe=m(we,[["__scopeId","data-v-223fa7c2"]]),M=c=>(S("data-v-68c33776"),c=c(),g(),c),ke={class:"base-form-step-container"},Ce=M(()=>e("div",{class:"title"},"Pick add-ons",-1)),Fe=M(()=>e("div",{class:"hint"},"Add-ons help enhance your gaming experience.",-1)),Pe={class:"base-form-step-content-container add-ons-container"},Ae=["onClick"],Ye=["onUpdate:modelValue"],Ne={class:"add-on-info"},Me={class:"add-on-title"},Be={class:"add-on-description"},Ie={class:"add-on-price"},Ee={class:"step-navigation-wrapper"},Ze=f({__name:"BaseFormStep3",setup(c){const p=_=>{_.isChecked=!_.isChecked;for(const i in s.step3.addOns){const n=s.step3.addOns[i];n.isChecked?s.step4.summary.selectedAddOns[i]=n:s.step4.summary.selectedAddOns.hasOwnProperty(i)&&delete s.step4.summary.selectedAddOns[i]}},u=()=>{s.functions.nextStep()};return(_,i)=>(l(),r("div",ke,[Ce,Fe,e("div",Pe,[(l(!0),r(P,null,A(t(s).step3.addOns,n=>(l(),r("div",{onClick:a=>p(n),class:$(["add-on-item",n.isChecked?"active":""])},[b(e("input",{"onUpdate:modelValue":a=>n.isChecked=a,type:"checkbox"},null,8,Ye),[[Y,n.isChecked]]),e("div",Ne,[e("div",Me,d(n.name),1),e("div",Be,d(n.description),1)]),e("div",Ie," +$"+d(t(s).switch.isYearly?n.priceYearly+"/yr":n.priceMonthly+"/mo"),1)],10,Ae))),256))]),e("div",Ee,[e("button",{onClick:i[0]||(i[0]=(...n)=>t(s).functions.previousStep&&t(s).functions.previousStep(...n)),class:"button-previous-step"}," Go Back "),e("button",{onClick:u,class:"button-next-step"},"Next Step")])]))}}),Ve=m(Ze,[["__scopeId","data-v-68c33776"]]),B=c=>(S("data-v-c5c2ca98"),c=c(),g(),c),Oe={class:"base-form-step-container"},Te=B(()=>e("div",{class:"title"},"Finishing up",-1)),Ue=B(()=>e("div",{class:"hint"},"Double-check everything looks OK before confirming.",-1)),De={class:"base-form-step-content-container"},He={class:"summary"},Ke={class:"plan"},ze={class:"plan-name"},Le={class:"plan-price"},Ge={class:"addOns"},Re={class:"addOn"},je={class:"addOn-name"},Qe={class:"addOn-price"},We={class:"final-price-container"},qe={class:"final-price-title"},Je={class:"final-price-value"},Xe={class:"step-navigation-wrapper"},es=f({__name:"BaseFormStep4",setup(c){const p=k(()=>{var i,n;return s.switch.isYearly?"$"+((i=s.step4.summary.selectedPlan)==null?void 0:i.priceYearly)+"/yr":"$"+((n=s.step4.summary.selectedPlan)==null?void 0:n.priceMonthly)+"/mo"}),u=k(()=>s.switch.isYearly?" (Yearly)":" (Monthly)"),_=k(()=>{var n,a;let i=0;if(s.step4.summary.selectedPlan){if(s.switch.isYearly){i+=s.step4.summary.selectedPlan.priceYearly;for(const o in s.step4.summary.selectedAddOns){const y=(n=s.step4.summary.selectedAddOns[o])==null?void 0:n.priceYearly;y&&(i+=y)}return"+$"+i+"/yr"}if(!s.switch.isYearly){i+=s.step4.summary.selectedPlan.priceMonthly;for(const o in s.step4.summary.selectedAddOns){const y=(a=s.step4.summary.selectedAddOns[o])==null?void 0:a.priceMonthly;y&&(i+=y)}return"+$"+i+"/mo"}}});return(i,n)=>{var a;return l(),r("div",Oe,[Te,Ue,e("div",De,[e("div",He,[e("div",Ke,[e("div",ze,[Z(d(((a=t(s).step4.summary.selectedPlan)==null?void 0:a.name)+t(u))+" ",1),e("div",{class:"plan-change-button",onClick:n[0]||(n[0]=o=>t(s).currentStep=2)},"Change")]),e("div",Le,d(t(p)),1)]),e("div",Ge,[(l(!0),r(P,null,A(t(s).step4.summary.selectedAddOns,o=>(l(),r("div",Re,[e("div",je,d(o==null?void 0:o.name),1),e("div",Qe,d(t(s).switch.isYearly?"+$"+(o==null?void 0:o.priceYearly)+"/yr":"+$"+(o==null?void 0:o.priceMonthly)+"/mo"),1)]))),256))])]),e("div",We,[e("div",qe," Total"+d(t(s).switch.isYearly?" (per year)":" (per month)"),1),e("div",Je,d(t(_)),1)])]),e("div",Xe,[e("button",{onClick:n[1]||(n[1]=(...o)=>t(s).functions.previousStep&&t(s).functions.previousStep(...o)),class:"button-previous-step"}," Go Back "),e("button",{onClick:n[2]||(n[2]=o=>t(s).functions.nextStep()),class:"button-confirm"},"Confirm")])])}}}),ss=m(es,[["__scopeId","data-v-c5c2ca98"]]),ts="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='80'%20height='80'%20viewBox='0%200%2080%2080'%3e%3cg%20fill='none'%3e%3ccircle%20cx='40'%20cy='40'%20r='40'%20fill='%23F9818E'/%3e%3cpath%20fill='%23E96170'%20d='M48.464%2079.167c.768-.15%201.53-.321%202.288-.515a40.04%2040.04%200%200%200%203.794-1.266%2040.043%2040.043%200%200%200%203.657-1.63%2040.046%2040.046%200%200%200%2012.463-9.898A40.063%2040.063%200%200%200%2078.3%2051.89c.338-1.117.627-2.249.867-3.391L55.374%2024.698a21.6%2021.6%200%200%200-15.332-6.365%2021.629%2021.629%200%200%200-15.344%206.365c-8.486%208.489-8.486%2022.205%200%2030.694l23.766%2023.775Z'/%3e%3cpath%20fill='%23FFF'%20d='M40.003%2018.333a21.58%2021.58%200%200%201%2015.31%206.351c8.471%208.471%208.471%2022.158%200%2030.63-8.47%208.47-22.156%208.47-30.627%200-8.47-8.472-8.47-22.159%200-30.63a21.594%2021.594%200%200%201%2015.317-6.35Zm9.865%2015c-.316.028-.622.15-.872.344l-12.168%209.13-5.641-5.642c-1.224-1.275-3.63%201.132-2.356%202.356l6.663%206.663c.56.56%201.539.63%202.173.156l13.326-9.995c1.122-.816.43-2.993-.956-3.013a1.666%201.666%200%200%200-.17%200Z'/%3e%3c/g%3e%3c/svg%3e",I=c=>(S("data-v-738ec021"),c=c(),g(),c),ns={class:"base-form-step-success"},os={class:"content-container"},cs=["src"],is=I(()=>e("div",{class:"title"},"THANK YOU!",-1)),as=I(()=>e("div",{class:"description"}," Thanks for confirming your subscription! We hope you have fun using your platform. If you ever need support, please feel free to email us at support@loremgaming.com. ",-1)),ls=f({__name:"BaseFormStep5",setup(c){return(p,u)=>(l(),r("div",ns,[e("div",os,[e("img",{src:t(ts),class:"image-success"},null,8,cs),is,as])]))}}),rs=m(ls,[["__scopeId","data-v-738ec021"]]),ps="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='40'%20height='40'%20viewBox='0%200%2040%2040'%3e%3cg%20fill='none'%20fill-rule='evenodd'%3e%3ccircle%20cx='20'%20cy='20'%20r='20'%20fill='%23FFAF7E'/%3e%3cpath%20fill='%23FFF'%20fill-rule='nonzero'%20d='M24.995%2018.005h-3.998v5.998h-2v-5.998H15a1%201%200%200%200-1%201V29a1%201%200%200%200%201%201h9.995a1%201%200%200%200%201-1v-9.995a1%201%200%200%200-1-1Zm-5.997%208.996h-2v-1.999h2v2Zm2-11.175a2.999%202.999%200%201%200-2%200v2.18h2v-2.18Z'/%3e%3c/g%3e%3c/svg%3e",ds="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='40'%20height='40'%20viewBox='0%200%2040%2040'%3e%3cg%20fill='none'%20fill-rule='evenodd'%3e%3ccircle%20cx='20'%20cy='20'%20r='20'%20fill='%23F9818E'/%3e%3cpath%20fill='%23FFF'%20fill-rule='nonzero'%20d='M25.057%2015H14.944C12.212%2015%2010%2017.03%2010%2019.885c0%202.857%202.212%204.936%204.944%204.936h10.113c2.733%200%204.943-2.08%204.943-4.936S27.79%2015%2025.057%2015ZM17.5%2020.388c0%20.12-.108.237-.234.237h-1.552v1.569c0%20.126-.138.217-.259.217H14.5c-.118%200-.213-.086-.213-.203v-1.583h-1.569c-.126%200-.217-.139-.217-.26v-.956c0-.117.086-.213.202-.213h1.584v-1.554c0-.125.082-.231.203-.231h.989c.12%200%20.236.108.236.234v1.551h1.555c.125%200%20.231.083.231.204v.988Zm5.347.393a.862.862%200%200%201-.869-.855c0-.472.39-.856.869-.856.481%200%20.87.384.87.856%200%20.471-.389.855-.87.855Zm1.9%201.866a.86.86%200%200%201-.87-.852.86.86%200%200%201%20.87-.855c.48%200%20.87.38.87.855a.86.86%200%200%201-.87.852Zm0-3.736a.862.862%200%200%201-.87-.854c0-.472.39-.856.87-.856s.87.384.87.856a.862.862%200%200%201-.87.854Zm1.899%201.87a.862.862%200%200%201-.868-.855c0-.472.389-.856.868-.856s.868.384.868.856a.862.862%200%200%201-.868.855Z'/%3e%3c/g%3e%3c/svg%3e",us="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='40'%20height='40'%20viewBox='0%200%2040%2040'%3e%3cg%20fill='none'%20fill-rule='evenodd'%3e%3ccircle%20cx='20'%20cy='20'%20r='20'%20fill='%23483EFF'/%3e%3cpath%20fill='%23FFF'%20fill-rule='nonzero'%20d='M26.666%2013H13.334A3.333%203.333%200%200%200%2010%2016.333v7.193a3.447%203.447%200%200%200%202.14%203.24c1.238.5%202.656.182%203.56-.8L18.52%2023h2.96l2.82%202.966a3.2%203.2%200%200%200%203.56.8%203.447%203.447%200%200%200%202.14-3.24v-7.193A3.333%203.333%200%200%200%2026.666%2013Zm-9.333%206H16v1.333a.667.667%200%200%201-1.333%200V19h-1.333a.667.667%200%200%201%200-1.334h1.333v-1.333a.667.667%200%201%201%201.333%200v1.333h1.333a.667.667%200%201%201%200%201.334Zm7.333%202a2.667%202.667%200%201%201%200-5.333%202.667%202.667%200%200%201%200%205.333ZM26%2018.333a1.333%201.333%200%201%201-2.667%200%201.333%201.333%200%200%201%202.667%200Z'/%3e%3c/g%3e%3c/svg%3e",E={1:oe,2:xe,3:Ve,4:ss,5:rs},s=V({lastStepNumber:F(Object.keys(E).length),currentStep:F(1),switch:{isYearly:!1},functions:{nextStep(){s.currentStep<s.lastStepNumber&&s.currentStep++},previousStep(){s.currentStep>1&&s.currentStep--}},step1:{inputs:{fullName:{type:0,value:"",error:""},emailAddress:{type:1,value:"",error:""},phoneNumber:{type:2,value:"",error:""}}},step2:{error:"",plans:{arcade:{name:"Arcade",icon:ps,isSelected:!1,priceMonthly:9,priceYearly:108},advanced:{name:"Advanced",icon:ds,isSelected:!1,priceMonthly:12,priceYearly:144},pro:{name:"Pro",icon:us,isSelected:!1,priceMonthly:15,priceYearly:180}}},step3:{addOns:{onlineService:{name:"Online service",description:"Access to multiplayer games.",priceMonthly:1,priceYearly:12,isChecked:!1},largerStorage:{name:"Larger storage",description:"Extra 1TB of cloud save.",priceMonthly:2,priceYearly:24,isChecked:!1},CustomizableProfile:{name:"Customizable Profile",description:"Custom theme on your profile.",priceMonthly:2,priceYearly:24,isChecked:!1}}},step4:{summary:{selectedPlan:null,selectedAddOns:{}}}}),v=c=>(S("data-v-02d7d1a7"),c=c(),g(),c),_s={class:"sidebar"},ms={class:"steps-container"},hs={class:"step"},vs=v(()=>e("div",{class:"step-number"},"1",-1)),fs=[vs],ys=v(()=>e("div",{class:"wrapper"},[e("div",{class:"step-title-number"},"STEP 1"),e("div",{class:"step-title-info"},"YOUR INFO")],-1)),$s={class:"step"},Ss=v(()=>e("div",{class:"step-number"},"2",-1)),gs=[Ss],bs=v(()=>e("div",{class:"wrapper"},[e("div",{class:"step-title-number"},"STEP 2"),e("div",{class:"step-title-info"},"SELECT PLAN")],-1)),ws={class:"step"},xs=v(()=>e("div",{class:"step-number"},"3",-1)),ks=[xs],Cs=v(()=>e("div",{class:"wrapper"},[e("div",{class:"step-title-number"},"STEP 3"),e("div",{class:"step-title-info"},"ADD-ONS")],-1)),Fs={class:"step"},Ps=v(()=>e("div",{class:"step-number"},"4",-1)),As=[Ps],Ys=v(()=>e("div",{class:"wrapper"},[e("div",{class:"step-title-number"},"STEP 4"),e("div",{class:"step-title-info"},"SUMMARY")],-1)),Ns=f({__name:"SidebarSteps",setup(c){const p=k(()=>s.currentStep);return(u,_)=>(l(),r("div",_s,[e("div",ms,[e("div",hs,[e("div",{class:$(["step-circle",t(p)===1?"active":null])},fs,2),ys]),e("div",$s,[e("div",{class:$(["step-circle",t(p)===2?"active":null])},gs,2),bs]),e("div",ws,[e("div",{class:$(["step-circle",t(p)===3?"active":null])},ks,2),Cs]),e("div",Fs,[e("div",{class:$(["step-circle",t(p)===4?"active":null])},As,2),Ys])])]))}}),Ms=m(Ns,[["__scopeId","data-v-02d7d1a7"]]),Bs={class:"container"},Is=f({__name:"BaseFormHandler",setup(c){return(p,u)=>{const _=Ms;return l(),r("main",null,[e("div",Bs,[O(_),(l(),N(T(t(E)[t(s).currentStep])))])])}}}),Es=m(Is,[["__scopeId","data-v-10639928"]]),Zs={};function Vs(c,p){const u=Es;return l(),N(u)}const Ts=m(Zs,[["render",Vs]]);export{Ts as default};
