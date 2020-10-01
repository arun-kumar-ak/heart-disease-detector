(this["webpackJsonpheart-disease-detector"]=this["webpackJsonpheart-disease-detector"]||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l),r=a(2),u=a.n(r),c=(a(12),a(3)),s=a(4),m=a(6),o=a(5),i=(a(13),function(e){Object(m.a)(a,e);var t=Object(o.a)(a);function a(e){var l;return Object(c.a)(this,a),(l=t.call(this)).onsubmitpredict=function(){fetch("https://flask-server-fs.herokuapp.com/predict",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({age:l.state.age_value,sex:l.state.sex_value,cp:l.state.cp_value,trestbps:l.state.trestbps_value,chol:l.state.chol_value,fbs:l.state.fbs_value,restecg:l.state.restecg_value,thalach:l.state.thalach_value,exang:l.state.exang_value,oldpeak:l.state.oldpeak_value,slope:l.state.slope_value,ca:l.state.ca_value,thal:l.state.thal_value})}).then((function(e){return e.json()})).then((function(e){console.log(e),l.setState({output:e})}))},l.state={age_value:"",sex_value:"",cp_value:"",trestbps_value:"",chol_value:"",fbs_value:"",restecg_value:"",thalach_value:"",exang_value:"",oldpeak_value:"",slope_value:"",ca_value:"",thal_value:"",output:""},l}return Object(s.a)(a,[{key:"componentDidMount",value:function(){fetch("https://flask-server-fs.herokuapp.com/").then((function(e){return e.json()})).then(console.log)}},{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"App"},n.a.createElement("h1",null,"HEART DISEASE DETECTOR"),n.a.createElement("fieldset",null,n.a.createElement("legend",null,n.a.createElement("b",null,"Age")),n.a.createElement("label",null,"Enter Your Age:"),n.a.createElement("br",null),n.a.createElement("input",{id:"age-label",value:this.state.age_value,onChange:function(t){e.setState({age_value:t.target.value})}}),n.a.createElement("input",{type:"range",min:"1",className:"slider",max:"100",step:"1",onChange:function(t){e.setState({age_value:t.target.value})}}),n.a.createElement("br",null)),n.a.createElement("fieldset",{className:"equal"},n.a.createElement("legend",null,n.a.createElement("b",null,"Sex")),n.a.createElement("label",{htmlFor:"male"},"Male"),n.a.createElement("input",{type:"radio",name:"gender",value:1,onChange:function(t){e.setState({sex_value:t.target.value})}}),n.a.createElement("label",{htmlFor:"female"},"Female"),n.a.createElement("input",{type:"radio",name:"gender",value:0,onChange:function(t){e.setState({sex_value:t.target.value})}}),n.a.createElement("br",null)),n.a.createElement("fieldset",null,n.a.createElement("legend",null,n.a.createElement("b",null,"Chest Pain Type")),n.a.createElement("label",{className:"font"},"0: Typical angina: chest pain related decrease blood supply to the heart",n.a.createElement("br",null),"1: Atypical angina: chest pain not related to heart",n.a.createElement("br",null),"2: Non-anginal pain: typically esophageal spasms (non heart related)",n.a.createElement("br",null),"3: Asymptomatic: chest pain not showing signs of disease",n.a.createElement("hr",null)," ",n.a.createElement("br",null)),n.a.createElement("input",{type:"number",value:this.state.cp_value,onChange:function(t){e.setState({cp_value:t.target.value})}}),n.a.createElement("input",{type:"range",min:"0",max:"3",step:"1",className:"slider",onChange:function(t){e.setState({cp_value:t.target.value})}})),n.a.createElement("fieldset",null,n.a.createElement("legend",null,n.a.createElement("b",null,"Resting Blood Pressure")),n.a.createElement("label",{className:"font"},"Resting blood pressure (in mm Hg on admission to the hospital) anything above 130-140 is typically cause for concern.",n.a.createElement("hr",null),n.a.createElement("br",null),"Minimum : 94",n.a.createElement("br",null),"25% : 120",n.a.createElement("br",null),"50% : 130",n.a.createElement("br",null),"75% : 140",n.a.createElement("br",null),"Maximum : 200",n.a.createElement("hr",null)),n.a.createElement("br",null),n.a.createElement("input",{type:"number",value:this.state.trestbps_value,onChange:function(t){e.setState({trestbps_value:t.target.value})}}),n.a.createElement("input",{type:"range",min:"94",className:"slider",max:"200",step:"1",onChange:function(t){e.setState({trestbps_value:t.target.value})}}),n.a.createElement("br",null)),n.a.createElement("fieldset",null,n.a.createElement("legend",null,n.a.createElement("b",null,"Cholestrol")),n.a.createElement("label",{className:"font"},"The person\u2019s cholesterol measurement in mg/dl - above 200 is cause for concern.",n.a.createElement("hr",null),n.a.createElement("br",null),"Minimum : 126",n.a.createElement("br",null),"25% : 211",n.a.createElement("br",null),"50% : 240",n.a.createElement("br",null),"75% : 275",n.a.createElement("br",null),"Maximum : 564",n.a.createElement("hr",null)),n.a.createElement("input",{value:this.state.chol_value,onChange:function(t){e.setState({chol_value:t.target.value})}}),n.a.createElement("input",{className:"slider",type:"range",min:"126",max:"564",step:"1",onChange:function(t){e.setState({chol_value:t.target.value})}}),n.a.createElement("br",null)),n.a.createElement("fieldset",{className:"equal"},n.a.createElement("legend",null,n.a.createElement("b",null,"Fasting blood sugar")),n.a.createElement("span",null),n.a.createElement("label",{htmlFor:"fbs_no"},"No"),n.a.createElement("input",{type:"radio",name:"fbs",value:0,onChange:function(t){e.setState({fbs_value:t.target.value})}}),n.a.createElement("label",{htmlFor:"fbs_yes"},"Yes"),n.a.createElement("input",{type:"radio",name:"fbs",value:1,onChange:function(t){e.setState({fbs_value:t.target.value})}}),n.a.createElement("br",null)),n.a.createElement("fieldset",null,n.a.createElement("legend",null,n.a.createElement("b",null,"Restecg")),n.a.createElement("label",{className:"font"},"Resting electrocardiographic results:",n.a.createElement("hr",null),n.a.createElement("br",null),"0 : Normal",n.a.createElement("br",null),"1 : having ST-T wave abnormality (T wave inversions and/or ST elevation or depression of > 0.05 mV)",n.a.createElement("br",null),"2 : showing probable or definite left ventricular hypertrophy by Estes' criteria",n.a.createElement("hr",null)),n.a.createElement("input",{type:"number",value:this.state.restecg_value,onChange:function(t){e.setState({restecg_value:t.target.value})}}),n.a.createElement("input",{type:"range",className:"slider",min:"0",max:"2",step:"1",onChange:function(t){e.setState({restecg_value:t.target.value})}})),n.a.createElement("fieldset",null,n.a.createElement("legend",null,n.a.createElement("b",null,"Thalach")),n.a.createElement("label",null,"Maximum Heart Rate Achieved.",n.a.createElement("hr",null),n.a.createElement("br",null),"Minimum : 71",n.a.createElement("br",null),"25% : 143",n.a.createElement("br",null),"50% : 153",n.a.createElement("br",null),"75% : 166",n.a.createElement("br",null),"Maximum : 202",n.a.createElement("hr",null)),n.a.createElement("br",null),n.a.createElement("input",{value:this.state.thalach_value,onChange:function(t){e.setState({thalach_value:t.target.value})}}),n.a.createElement("input",{className:"slider",type:"range",min:"71",max:"202",step:"1",onChange:function(t){e.setState({thalach_value:t.target.value})}}),n.a.createElement("br",null)),n.a.createElement("fieldset",{className:"equal"},n.a.createElement("legend",null,n.a.createElement("b",null,"Exang")),n.a.createElement("label",null,"Exercise induced Angina, which means heart pain produced during exercise due to lack of oxygen supply.",n.a.createElement("br",null),"It feel better when relax."),n.a.createElement("hr",null),n.a.createElement("br",null),n.a.createElement("span",null),n.a.createElement("label",{htmlFor:"exang_no"},"No"),n.a.createElement("input",{type:"radio",name:"exang",value:0,onChange:function(t){e.setState({exang_value:t.target.value})}}),n.a.createElement("label",{htmlFor:"exang_yes"},"Yes"),n.a.createElement("input",{type:"radio",name:"exang",value:1,onChange:function(t){e.setState({exang_value:t.target.value})}}),n.a.createElement("br",null)),n.a.createElement("fieldset",null,n.a.createElement("legend",null,n.a.createElement("b",null,"Oldpeak")),n.a.createElement("label",null,"ST depression induced by exercise relative to rest looks at stress of heart during excercise unhealthy heart will stress more.",n.a.createElement("br",null)),n.a.createElement("hr",null),n.a.createElement("br",null),n.a.createElement("input",{type:"number",value:this.state.oldpeak_value,onChange:function(t){e.setState({oldpeak_value:t.target.value})}}),n.a.createElement("input",{className:"slider",type:"range",min:"0",max:"6.2",step:"0.1",onChange:function(t){e.setState({oldpeak_value:t.target.value})}}),n.a.createElement("br",null)),n.a.createElement("fieldset",null,n.a.createElement("legend",null,n.a.createElement("b",null,"Slope")),n.a.createElement("label",null,"The slope of the peak exercise ST segment.",n.a.createElement("hr",null),n.a.createElement("br",null),"0 : Upsloping: better heart rate with excercise (uncommon)",n.a.createElement("br",null),"1 : Flatsloping: minimal change (typical healthy heart)",n.a.createElement("br",null),"2 : Downslopins: signs of unhealthy heart",n.a.createElement("br",null)),n.a.createElement("hr",null),n.a.createElement("br",null),n.a.createElement("input",{type:"number",value:this.state.slope_value,onChange:function(t){e.setState({slope_value:t.target.value})}}),n.a.createElement("input",{type:"range",className:"slider",min:"0",max:"2",step:"1",onChange:function(t){e.setState({slope_value:t.target.value})}})),n.a.createElement("fieldset",null,n.a.createElement("legend",null,n.a.createElement("b",null,"CA")),n.a.createElement("label",null,"Number of major vessels (0-3) colored by flourosopy.",n.a.createElement("hr",null),n.a.createElement("br",null),"colored vessel means the doctor can see the blood passing through.",n.a.createElement("br",null),"the more blood movement the better (no clots)"),n.a.createElement("hr",null),n.a.createElement("br",null),n.a.createElement("input",{type:"number",value:this.state.ca_value,onChange:function(t){e.setState({ca_value:t.target.value})}}),n.a.createElement("input",{type:"range",className:"slider",min:"0",max:"4",step:"1",onChange:function(t){e.setState({ca_value:t.target.value})}})),n.a.createElement("fieldset",null,n.a.createElement("legend",null,n.a.createElement("b",null,"Thal")),n.a.createElement("label",null,"Thalium stress result.",n.a.createElement("hr",null),n.a.createElement("br",null),"(1,3) : normal",n.a.createElement("br",null),"6 : fixed defect: used to be defect but ok now",n.a.createElement("br",null),"7 : reversable defect: no proper blood movement when excercising."),n.a.createElement("hr",null),n.a.createElement("br",null),n.a.createElement("input",{type:"number",value:this.state.thal_value,onChange:function(t){e.setState({thal_value:t.target.value})}}),n.a.createElement("input",{type:"range",className:"slider",min:"0",max:"3",step:"1",onChange:function(t){e.setState({thal_value:t.target.value})}})),n.a.createElement("div",{id:"output"},n.a.createElement("span",null,this.state.output)),n.a.createElement("div",null,n.a.createElement("button",{id:"button",onClick:this.onsubmitpredict},"Predict")))}}]),a}(l.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(i,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,a){e.exports=a(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.dfb0a7fe.chunk.js.map