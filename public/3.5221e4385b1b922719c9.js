(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"4Xmu":function(t,e,i){"use strict";i.d(e,"a",(function(){return c}));var r=i("Jg5f"),n=i("Mumn"),o=i("1C3z"),a=i("t5c9"),c=function(){function t(t){this.http=t,this.apiProfile=n.a.mainUrl+n.a.apiUrl+"/profile",this.apiPassport=this.apiProfile+"/passport",this.apiLogo=this.apiProfile+"/passport"}return t.prototype.getMyProfile=function(){return this.http.get(this.apiProfile).pipe(Object(r.a)((function(t){return t})))},t.prototype.getSkillSet=function(){return this.http.get(this.apiProfile+"/skillset").pipe(Object(r.a)((function(t){return t})))},t.prototype.getRecruiterByUserId=function(t){return this.http.get(this.apiProfile+"/rid/"+t).pipe(Object(r.a)((function(t){return t})))},t.prototype.getCandidateByUserId=function(t){return this.http.get(this.apiProfile+"/cid/"+t).pipe(Object(r.a)((function(t){return t})))},t.prototype.getCandidates=function(){return this.http.get(this.apiProfile+"/candidates").pipe(Object(r.a)((function(t){return t})))},t.prototype.getRecruiters=function(){return this.http.get(this.apiProfile+"/recruiters").pipe(Object(r.a)((function(t){return t})))},t.prototype.saveRecruiters=function(t){return this.http.post(this.apiProfile+"/recruiters",t).pipe(Object(r.a)((function(t){return t})))},t.prototype.editRecruiters=function(t){return this.http.put(this.apiProfile+"/recruiters",t).pipe(Object(r.a)((function(t){return t})))},t.prototype.saveCandidates=function(t){return this.http.post(this.apiProfile+"/candidates",t).pipe(Object(r.a)((function(t){return t})))},t.prototype.deleteRecruiters=function(t){return this.http.delete(this.apiProfile+"/recruiter/remove/"+t).pipe(Object(r.a)((function(t){return t})))},t.prototype.deleteCandidates=function(t){return this.http.delete(this.apiProfile+"/candidate/remove/"+t).pipe(Object(r.a)((function(t){return t})))},t.prototype.editCandidates=function(t){return this.http.put(this.apiProfile+"/candidates",t).pipe(Object(r.a)((function(t){return t})))},t.prototype.verifyRecruiter=function(t){return this.http.get(this.apiProfile+"/recruiter/verify/"+t).pipe(Object(r.a)((function(t){return t})))},t.\u0275fac=function(e){return new(e||t)(o.ic(a.b))},t.\u0275prov=o.Ub({token:t,factory:t.\u0275fac,providedIn:"root"}),t}()},"7RHe":function(t,e,i){"use strict";i.d(e,"a",(function(){return n}));var r=i("LiEJ"),n=function(){function t(){this.currentSubjects=new r.a([]),this.currentData=this.currentSubjects.asObservable()}return t.prototype.setData=function(t){var e=this.currentSubjects.getValue();e.push(t),this.currentSubjects.next(e)},t}()},DdyX:function(t,e,i){"use strict";i.d(e,"a",(function(){return h})),i.d(e,"b",(function(){return l})),i.d(e,"c",(function(){return u}));var r=i("8AiQ"),n=i("1C3z");function o(t,e){if(1&t&&(n.pc(),n.cc(0),n.Zb(1,"animate",7),n.bc()),2&t){const t=n.qc();n.Kb(1),n.Lb("keyTimes",t.keyTimes)("values",t.animationValues[0])("dur",t.duration)}}function a(t,e){if(1&t&&(n.pc(),n.cc(0),n.Zb(1,"animate",7),n.bc()),2&t){const t=n.qc();n.Kb(1),n.Lb("keyTimes",t.keyTimes)("values",t.animationValues[1])("dur",t.duration)}}function c(t,e){if(1&t&&(n.pc(),n.cc(0),n.Zb(1,"animate",7),n.bc()),2&t){const t=n.qc();n.Kb(1),n.Lb("keyTimes",t.keyTimes)("values",t.animationValues[2])("dur",t.duration)}}const s=["*"];let d=(()=>{class t{constructor(){this.fixedId=Math.random().toString(36).substring(2),this.idClip=this.fixedId+"-diff",this.idGradient=this.fixedId+"-animated-diff",this.idAria=this.fixedId+"-aria",this.animate=!0,this.baseUrl="",this.speed=1.2,this.viewBox="0 0 0 0",this.gradientRatio=2,this.backgroundColor="#f5f6f7",this.backgroundOpacity=1,this.foregroundColor="#eee",this.foregroundOpacity=1,this.rtl=!1,this.interval=.25,this.style={},this.animationValues=[]}ngOnInit(){this.clipPath=`url(${this.baseUrl}#${this.idClip})`,this.fillStyle={fill:`url(${this.baseUrl}#${this.idGradient})`},this.style=this.rtl?Object.assign(Object.assign({},this.style),{transform:"scaleX(-1)"}):this.style,this.duration=this.speed+"s",this.keyTimes=`0; ${this.interval}; 1`,this.animationValues=[`${-this.gradientRatio}; ${-this.gradientRatio}; 1`,`${-this.gradientRatio/2}; ${-this.gradientRatio/2}; ${1+this.gradientRatio/2}`,"0; 0; "+(1+this.gradientRatio)]}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=n.Sb({type:t,selectors:[["content-loader"]],inputs:{animate:"animate",baseUrl:"baseUrl",speed:"speed",viewBox:"viewBox",gradientRatio:"gradientRatio",backgroundColor:"backgroundColor",backgroundOpacity:"backgroundOpacity",foregroundColor:"foregroundColor",foregroundOpacity:"foregroundOpacity",rtl:"rtl",interval:"interval",style:"style"},ngContentSelectors:s,decls:12,vars:15,consts:[[3,"ngStyle"],["role","presentation","x","0","y","0","width","100%","height","100%",3,"ngStyle"],["role","presentation"],["offset","0%"],[4,"ngIf"],["offset","50%"],["offset","100%"],["attributeName","offset","repeatCount","indefinite"]],template:function(t,e){1&t&&(n.wc(),n.pc(),n.ec(0,"svg",0),n.Zb(1,"rect",1),n.ec(2,"defs",2),n.ec(3,"clipPath"),n.vc(4),n.dc(),n.ec(5,"linearGradient"),n.ec(6,"stop",3),n.Uc(7,o,2,3,"ng-container",4),n.dc(),n.ec(8,"stop",5),n.Uc(9,a,2,3,"ng-container",4),n.dc(),n.ec(10,"stop",6),n.Uc(11,c,2,3,"ng-container",4),n.dc(),n.dc(),n.dc(),n.dc()),2&t&&(n.xc("ngStyle",e.style),n.Lb("viewBox",e.viewBox),n.Kb(1),n.xc("ngStyle",e.fillStyle),n.Lb("clip-path",e.clipPath),n.Kb(2),n.Lb("id",e.idClip),n.Kb(2),n.Lb("id",e.idGradient),n.Kb(1),n.Lb("stop-color",e.backgroundColor)("stop-opacity",e.backgroundOpacity),n.Kb(1),n.xc("ngIf",e.animate),n.Kb(1),n.Lb("stop-color",e.foregroundColor)("stop-opacity",e.foregroundOpacity),n.Kb(1),n.xc("ngIf",e.animate),n.Kb(1),n.Lb("stop-color",e.backgroundColor)("stop-opacity",e.backgroundOpacity),n.Kb(1),n.xc("ngIf",e.animate))},directives:[r.n,r.m],styles:["[_nghost-%COMP%] {\n        display: block;\n      }"],changeDetection:0}),t})(),l=(()=>{class t extends d{}return t.\u0275fac=function(e){return p(e||t)},t.\u0275cmp=n.Sb({type:t,selectors:[["facebook-content-loader"]],features:[n.Hb],decls:7,vars:0,consts:[["viewBox","0 0 476 124"],["x","48","y","8","width","88","height","6","rx","3"],["x","48","y","26","width","52","height","6","rx","3"],["x","0","y","56","width","410","height","6","rx","3"],["x","0","y","72","width","380","height","6","rx","3"],["x","0","y","88","width","178","height","6","rx","3"],["cx","20","cy","20","r","20"]],template:function(t,e){1&t&&(n.ec(0,"content-loader",0),n.pc(),n.Zb(1,"rect",1),n.Zb(2,"rect",2),n.Zb(3,"rect",3),n.Zb(4,"rect",4),n.Zb(5,"rect",5),n.Zb(6,"circle",6),n.dc())},directives:[d],encapsulation:2}),t})();const p=n.gc(l);let u=(()=>{class t extends d{}return t.\u0275fac=function(e){return f(e||t)},t.\u0275cmp=n.Sb({type:t,selectors:[["list-content-loader"]],features:[n.Hb],decls:7,vars:0,consts:[["viewBox","0 0 400 110"],["x","0","y","0","rx","3","ry","3","width","250","height","10"],["x","20","y","20","rx","3","ry","3","width","220","height","10"],["x","20","y","40","rx","3","ry","3","width","170","height","10"],["x","0","y","60","rx","3","ry","3","width","250","height","10"],["x","20","y","80","rx","3","ry","3","width","200","height","10"],["x","20","y","100","rx","3","ry","3","width","80","height","10"]],template:function(t,e){1&t&&(n.ec(0,"content-loader",0),n.pc(),n.Zb(1,"rect",1),n.Zb(2,"rect",2),n.Zb(3,"rect",3),n.Zb(4,"rect",4),n.Zb(5,"rect",5),n.Zb(6,"rect",6),n.dc())},directives:[d],encapsulation:2}),t})();const f=n.gc(u);let h=(()=>{class t{static forRoot(){return{ngModule:t}}}return t.\u0275mod=n.Wb({type:t}),t.\u0275inj=n.Vb({factory:function(e){return new(e||t)},imports:[[r.c]]}),t})()},FlLz:function(t,e,i){"use strict";i.d(e,"a",(function(){return r})),i.d(e,"c",(function(){return n})),i.d(e,"b",(function(){return a})),i("D57K");var r=function(){return function(){}}();function n(t){var e=new o;return new Promise((function(i,r){var n=new FileReader;n.addEventListener("loadend",(function(r){e.size=t.size,e.type=t.type,e.name=t.name,e.file=r.target.result,e.raw=t,i(e)})),n.addEventListener("error",r),n.readAsDataURL(t)}))}var o=function(){return function(){}}();function a(t,e){var i=new FormData;return t.name&&(i.append("size",""+t.size),i.append("fileType",t.type),i.append("name",t.name),i.append("file",t.raw),i.append("objID",""+e.objID),i.append("tag",e.tag),e.id&&i.append("id",""+e.id)),i}},Onip:function(t,e,i){"use strict";i.d(e,"a",(function(){return X}));var r=i("D57K"),n=i("1C3z"),o=i("ZSGP"),a=(i("YOe6"),i("Oaad")),c=i("4Xmu"),s=i("AwSQ"),d=i("aOG3"),l=i("2Mvu"),p=function(){return function(){}}(),u=i("5/c3"),f=i("iZ6s"),h=i("8AiQ"),g=i("t5c9"),b=i("Jg5f"),m=i("Mumn"),v=function(){function t(t){this.http=t,this.api=m.a.mainUrl+m.a.storageApi}return t.prototype.saveFile=function(t){return this.http.post(this.api,t).pipe(Object(b.a)((function(t){return t})))},t.prototype.saveAllFile=function(t){return this.http.post(this.api,t,{reportProgress:!0,observe:"events"}).pipe(Object(b.a)((function(t){switch(t.type){case g.e.UploadProgress:return{status:"progress",message:Math.round(100*t.loaded/t.total)};case g.e.Response:return t.body;default:return"Unhandled event: "+JSON.stringify(t)}})))},t.prototype.updateFile=function(t){return this.http.put(this.api,t).pipe(Object(b.a)((function(t){return t})))},t.prototype.deleteFile=function(t){return this.http.delete(this.api+"/rem/"+t).pipe(Object(b.a)((function(t){return t})))},t.\u0275fac=function(e){return new(e||t)(n.ic(g.b))},t.\u0275prov=n.Ub({token:t,factory:t.\u0275fac,providedIn:"root"}),t}(),y=i("LiEJ"),w=i("RECK"),U=i("7RHe"),x=i("FlLz"),S=i("Ata6"),k=function(){function t(t){this._sanitizer=t}return t.prototype.transform=function(t){return this._sanitizer.bypassSecurityTrustResourceUrl(t)},t.\u0275fac=function(e){return new(e||t)(n.Yb(S.b))},t.\u0275pipe=n.Xb({name:"sanitizeResource",type:t,pure:!0}),t}();function O(t,e){if(1&t){var i=n.fc();n.ec(0,"img",11),n.mc("click",(function(){return n.Lc(i),n.qc(),n.Jc(5).click()})),n.dc()}if(2&t){var r=n.qc(2);n.zc("alt","",r.uploadName," passport uu"),n.xc("src",r.imageSrc.passport,n.Oc)}}function C(t,e){if(1&t){var i=n.fc();n.ec(0,"img",12),n.mc("click",(function(){return n.Lc(i),n.qc(),n.Jc(5).click()})),n.dc()}if(2&t){var r=n.qc(2);n.zc("alt","",r.uploadName," passport"),n.xc("src",r.avatarUrl,n.Oc)}}function L(t,e){if(1&t){var i=n.fc();n.ec(0,"img",13),n.mc("click",(function(){return n.Lc(i),n.qc(),n.Jc(5).click()})),n.dc()}if(2&t){var r=n.qc(2);n.zc("alt","",r.uploadName," passport"),n.xc("src",r.fileLink+r.fileStorage[0].link,n.Oc)}}function I(t,e){if(1&t){var i=n.fc();n.ec(0,"div"),n.Uc(1,O,1,2,"img",3),n.Uc(2,C,1,2,"img",4),n.Uc(3,L,1,2,"img",5),n.ec(4,"input",6,7),n.mc("change",(function(t){return n.Lc(i),n.qc().readURL(t,"passport")})),n.dc(),n.ec(6,"div",8),n.ec(7,"h6",9),n.Wc(8),n.dc(),n.ec(9,"p",10),n.Wc(10),n.dc(),n.dc(),n.dc()}if(2&t){var r=n.qc();n.Kb(1),n.xc("ngIf",!r.fileStorage[0].link&&!r.avatarUrl),n.Kb(1),n.xc("ngIf",!r.fileStorage[0].link&&r.avatarUrl),n.Kb(1),n.xc("ngIf",r.fileStorage[0].link),n.Kb(5),n.Xc(r.uploadLabel),n.Kb(2),n.Xc(r.uploadError.passport)}}function P(t,e){if(1&t&&n.Zb(0,"img",15),2&t){var i=n.qc(2);n.zc("alt","",i.uploadName," passport"),n.xc("src",i.imageSrc.passport,n.Oc)}}function j(t,e){if(1&t&&n.Zb(0,"img",15),2&t){var i=n.qc(2);n.zc("alt","",i.uploadName," passport"),n.xc("src",i.avatarUrl,n.Oc)}}function q(t,e){if(1&t&&n.Zb(0,"img",15),2&t){var i=n.qc(2);n.zc("alt","",i.uploadName," passport"),n.xc("src",i.fileLink+i.fileStorage[0].link,n.Oc)}}function K(t,e){if(1&t&&(n.ec(0,"div"),n.Uc(1,P,1,2,"img",14),n.Uc(2,j,1,2,"img",14),n.Uc(3,q,1,2,"img",14),n.ec(4,"div",8),n.ec(5,"h5",9),n.Wc(6),n.dc(),n.ec(7,"p",10),n.Wc(8),n.dc(),n.dc(),n.dc()),2&t){var i=n.qc();n.Kb(1),n.xc("ngIf",!i.fileStorage[0].link&&!i.avatarUrl),n.Kb(1),n.xc("ngIf",!i.fileStorage[0].link&&i.avatarUrl),n.Kb(1),n.xc("ngIf",i.fileStorage[0].link),n.Kb(3),n.Xc(i.uploadLabel),n.Kb(2),n.Xc(i.uploadError.passport)}}function F(t,e){if(1&t){var i=n.fc();n.ec(0,"h5",9),n.Wc(1,"Current Pay Slip "),n.ec(2,"span",20),n.mc("click",(function(){n.Lc(i);var t=e.$implicit,r=n.qc(3),o=n.Jc(4),a=n.Jc(6);return r.viewFileClick(t,o,a)})),n.Wc(3,"View"),n.dc(),n.dc()}}function T(t,e){if(1&t&&(n.ec(0,"div"),n.Uc(1,F,4,0,"h5",19),n.dc()),2&t){var i=n.qc(2);n.Kb(1),n.xc("ngForOf",i.pendingUpload)}}function R(t,e){if(1&t&&(n.ec(0,"p",10),n.Wc(1),n.dc()),2&t){var i=n.qc(2);n.Kb(1),n.Xc(i.uploadError.document)}}function D(t,e){if(1&t){var i=n.fc();n.ec(0,"div"),n.ec(1,"img",16),n.mc("click",(function(){return n.Lc(i),n.Jc(3).click()})),n.dc(),n.ec(2,"input",17,7),n.mc("change",(function(t){return n.Lc(i),n.qc().readURL(t,"document")})),n.dc(),n.ec(4,"div",8),n.Uc(5,T,2,1,"div",0),n.Uc(6,R,2,1,"p",18),n.dc(),n.dc()}if(2&t){var r=n.qc();n.Kb(1),n.xc("src",r.imageSrc.document,n.Oc),n.Kb(4),n.xc("ngIf",r.viewFile&&r.pendingUpload.length>0),n.Kb(1),n.xc("ngIf",r.uploadError.document)}}function z(t,e){if(1&t){var i=n.fc();n.ec(0,"div",21),n.ec(1,"h4",22),n.Wc(2),n.dc(),n.ec(3,"button",23),n.mc("click",(function(){return n.Lc(i),n.qc().viewTemp.hide()})),n.ec(4,"span",24),n.Wc(5,"\xd7"),n.dc(),n.dc(),n.dc(),n.ec(6,"div",25),n.Zb(7,"img",26),n.dc()}if(2&t){var r=n.qc();n.Kb(2),n.Xc(r.curViewFile.name),n.Kb(5),n.yc("alt",r.curViewFile.name),n.xc("src",r.curViewFile.file,n.Oc)}}function E(t,e){if(1&t){var i=n.fc();n.ec(0,"div",21),n.ec(1,"h4",22),n.Wc(2),n.dc(),n.ec(3,"button",23),n.mc("click",(function(){return n.Lc(i),n.qc().viewTemp.hide()})),n.ec(4,"span",24),n.Wc(5,"\xd7"),n.dc(),n.dc(),n.dc(),n.ec(6,"div",25),n.Zb(7,"iframe",27),n.rc(8,"sanitizeResource"),n.dc()}if(2&t){var r=n.qc();n.Kb(2),n.Xc(r.curViewFile.name),n.Kb(5),n.Lb("src",n.sc(8,2,r.curViewFile.file),n.Nc)}}var Z=function(){function t(t,e,i,r,o){this.http=t,this.dataStore=e,this.storageData=i,this.modalService=r,this.messageService=o,this.imageSrc=[],this.uploadName="",this.uploadType="passport",this.fileType=["image"],this.uploadLabel="",this.maxSize=1e5,this.instantUpload=!1,this.disableUpload=!1,this.upload=!1,this.viewFile=!1,this.toastComplete=!0,this.updateUserPassport=!1,this.fileLoaded=new n.q,this.fileStorageUploads=new n.q,this.uploadError=[],this.fileLink=m.a.mainUrl+m.a.fsDL+"/",this.pendingUpload=[],this.docUploadCount=new y.a([]),this.currentDoc=this.docUploadCount.asObservable()}return t.prototype.ngOnInit=function(){var t=this;this.imageSrc.passport="assets/img/avatars/0.jpeg",this.imageSrc.document="assets/img/avatars/0.jpeg",this.upload&&this.uploadFiles(),this.storageData.currentData.subscribe((function(e){e.find((function(e){return e.tag===t.uploadName&&e.upload}))&&t.uploadFiles()})),console.log(this.fileLink+this.fileStorage[0].link),console.log(this.avatarUrl)},t.prototype.readURL=function(t,e){var i=this;if(t.target.files&&t.target.files[0]){var n=t.target.files[0];if(!this.validateFile(n,e))return;this.uploadError[e]=null,Object(x.c)(n).then((function(t){if(i.imageSrc[e]="application/pdf"===t.type?"assets/img/avatars/1.png":t.file,t.name){i.pendingUpload=[];var n=i.fileStorage.find((function(t){return t.tag===e}));n&&(i.fileStorage[i.fileStorage.indexOf(n)].link=null),i.fileLoaded.emit(!0),i.pendingUpload=Object(r.i)(i.pendingUpload,[t])}"passport"!==e?i.fileStorage.find((function(t){return t.objID&&t.tag===e}))&&i.uploadFiles():i.passportUpload()}))}},t.prototype.uploadFiles=function(){for(var t=this,e=[],i=0;i<this.pendingUpload.length;i++){var r=Object(x.b)(this.pendingUpload[i],this.fileStorage[i]);this.http.saveFile(r).pipe(Object(l.a)()).subscribe((function(i){t.fileStorageUploads.emit(i),e.push(Math.random()),t.docUploadCount.next(e)}),(function(e){t.docUploadCount.next([])}))}this.currentDoc.subscribe((function(e){e.length===t.pendingUpload.length&&(t.docUploadCount.next([]),t.pendingUpload=[],t.toastComplete&&t.messageService.add({severity:"success",summary:t.uploadLabel+" Uploaded Successfully!"}))}))},t.prototype.passportUpload=function(){var t=this,e=Object(x.b)(this.pendingUpload[0],this.fileStorage[0]);this.http.saveFile(e).pipe(Object(l.a)()).subscribe((function(e){if(t.fileStorage.length<2&&(t.fileStorage=[e]),t.fileStorageUploads.emit(e),t.updateUserPassport){var i=t.dataStore.getUser();i.passport=e,t.dataStore.setUser(i)}t.toastComplete&&t.messageService.add({severity:"success",summary:t.uploadLabel+" Profile Picture Uploaded Successfully!"})}))},t.prototype.viewFileClick=function(t,e,i){this.curViewFile=t,this.viewTemp="application/pdf"===t.raw.type.toLowerCase()?this.modalService.show(i):this.modalService.show(e)},t.prototype.validateFile=function(t,e){return this.fileType.includes("image")&&t.type.toLowerCase().includes("image")?"image/png"===t.type.toLowerCase()||"image/jpg"===t.type.toLowerCase()||"image/jpeg"===t.type.toLowerCase()?this.validateFileSize(t,e):(this.uploadError[e]="File must be an image of subscription png or jpeg/jpg only",!1):this.fileType.includes("pdf")&&t.type.toLowerCase().includes("pdf")?"application/pdf"!==t.type.toLowerCase()?(this.uploadError[e]="File must be an image of subscription pdf only",!1):this.validateFileSize(t,e):(this.uploadError[e]="File Format not Supported!",!1)},t.prototype.validateFileSize=function(t,e){return!(t.size>this.maxSize&&(this.uploadError[e]="File must not be larger than "+(this.maxSize/1e3).toFixed(0)+" kb",1))},t.\u0275fac=function(e){return new(e||t)(n.Yb(v),n.Yb(s.a),n.Yb(U.a),n.Yb(w.a),n.Yb(f.g))},t.\u0275cmp=n.Sb({type:t,selectors:[["app-uploads"]],inputs:{uploadName:"uploadName",uploadType:"uploadType",fileType:"fileType",uploadLabel:"uploadLabel",fileStorage:"fileStorage",maxSize:"maxSize",instantUpload:"instantUpload",disableUpload:"disableUpload",upload:"upload",viewFile:"viewFile",toastComplete:"toastComplete",updateUserPassport:"updateUserPassport",avatarUrl:"avatarUrl"},outputs:{fileLoaded:"fileLoaded",fileStorageUploads:"fileStorageUploads"},decls:7,vars:3,consts:[[4,"ngIf"],["picTemp",""],["pdfTemp",""],["class","img-thumbnail rounded-circle","id","passportP","style","height: auto; width: 100%",3,"src","alt","click",4,"ngIf"],["class","img-thumbnail rounded-circle","style","height: auto; width: 100%",3,"src","alt","click",4,"ngIf"],["class","img-thumbnail rounded-circle","style","height: 200px; width: auto",3,"alt","src","click",4,"ngIf"],["hidden","","id","imageUpload","type","file",3,"change"],["image",""],[1,"card-body"],[1,"card-title","text-center"],[1,"card-text",2,"color","red"],["id","passportP",1,"img-thumbnail","rounded-circle",2,"height","auto","width","100%",3,"src","alt","click"],[1,"img-thumbnail","rounded-circle",2,"height","auto","width","100%",3,"src","alt","click"],[1,"img-thumbnail","rounded-circle",2,"height","200px","width","auto",3,"alt","src","click"],["class","img-thumbnail rounded-circle","style","height: auto; width: 100%",3,"src","alt",4,"ngIf"],[1,"img-thumbnail","rounded-circle",2,"height","auto","width","100%",3,"src","alt"],["alt","Pay Slip",1,"card-img-top",2,"max-height","200px",3,"src","click"],["hidden","","type","file",3,"change"],["class","card-text","style","color: red",4,"ngIf"],["class","card-title text-center",4,"ngFor","ngForOf"],[1,"badge","badge-primary","badge-pill",3,"click"],[1,"modal-header"],[1,"modal-title"],["aria-label","Close","type","button",1,"close",3,"click"],["aria-hidden","true"],[1,"modal-body"],[1,"img-thumbnail","rounded",3,"src","alt"],["height","500","width","100%"]],template:function(t,e){1&t&&(n.Uc(0,I,11,5,"div",0),n.Uc(1,K,9,5,"div",0),n.Uc(2,D,7,3,"div",0),n.Uc(3,z,8,3,"ng-template",null,1,n.Vc),n.Uc(5,E,9,4,"ng-template",null,2,n.Vc)),2&t&&(n.xc("ngIf","passport"===e.uploadType&&!e.disableUpload),n.Kb(1),n.xc("ngIf","passport"===e.uploadType&&e.disableUpload),n.Kb(1),n.xc("ngIf","document"===e.uploadType))},directives:[h.m,h.l],pipes:[k],styles:[""]}),t}(),V=i("hOvr"),W=i("TDrE"),B=i("fb+k"),N=i("DdyX");function J(t,e){if(1&t){var i=n.fc();n.ec(0,"button",25),n.mc("click",(function(){return n.Lc(i),n.qc(2).close()})),n.Zb(1,"i",26),n.dc()}}function M(t,e){1&t&&(n.ec(0,"mat-error"),n.Wc(1," Name is "),n.ec(2,"strong"),n.Wc(3,"required"),n.dc(),n.dc())}function Y(t,e){1&t&&(n.ec(0,"mat-error"),n.Wc(1," Title is "),n.ec(2,"strong"),n.Wc(3,"required"),n.dc(),n.dc())}function A(t,e){if(1&t){var i=n.fc();n.ec(0,"div",2),n.ec(1,"div",3),n.ec(2,"div",4),n.ec(3,"div",5),n.ec(4,"div",6),n.ec(5,"div",7),n.ec(6,"h4"),n.Wc(7),n.Uc(8,J,2,0,"button",8),n.dc(),n.dc(),n.dc(),n.dc(),n.ec(9,"div",9),n.ec(10,"form",10),n.ec(11,"div",11),n.ec(12,"div",12),n.ec(13,"div",13),n.ec(14,"h4"),n.Wc(15,"Profile Data"),n.dc(),n.Zb(16,"hr"),n.dc(),n.ec(17,"div",14),n.ec(18,"app-uploads",15),n.mc("fileStorageUploads",(function(t){return n.Lc(i),n.qc().updatePassport(t)})),n.dc(),n.dc(),n.ec(19,"div",16),n.ec(20,"mat-form-field",17),n.Zb(21,"input",18),n.Uc(22,M,4,0,"mat-error",19),n.dc(),n.ec(23,"mat-form-field",20),n.Zb(24,"input",21),n.Uc(25,Y,4,0,"mat-error",19),n.dc(),n.dc(),n.dc(),n.ec(26,"div",12),n.ec(27,"div",13),n.ec(28,"ckeditor",22),n.mc("ready",(function(t){return n.Lc(i),n.qc().onReady(t)})),n.dc(),n.dc(),n.dc(),n.dc(),n.ec(29,"div",23),n.ec(30,"button",24),n.mc("click",(function(){return n.Lc(i),n.qc().submitProfile()})),n.Wc(31,"Save Profile"),n.dc(),n.dc(),n.dc(),n.dc(),n.dc(),n.dc(),n.dc()}if(2&t){var r=n.qc();n.Kb(7),n.Yc("",r.profile?"Update Profile":"Complete Your Profile"," "),n.Kb(1),n.xc("ngIf",r.enableClose),n.Kb(2),n.xc("formGroup",r.profileGroup),n.Kb(8),n.xc("fileStorage",r.passport)("avatarUrl",r.profile.avatar)("instantUpload",!1)("toastComplete",!1)("uploadLabel","Profile Photo")("uploadName","passport")("upload",!1),n.Kb(4),n.xc("ngIf",r.submitted&&r.f.name.hasError("required")),n.Kb(3),n.xc("ngIf",r.submitted&&r.f.title.hasError("required")),n.Kb(3),n.xc("config",r.editorConfig)("editor",r.ckEditor)}}function G(t,e){1&t&&(n.ec(0,"div",27),n.Zb(1,"facebook-content-loader"),n.Zb(2,"facebook-content-loader"),n.Zb(3,"list-content-loader"),n.dc())}var X=function(){function t(t,e,i,r,o,c){this.formBuilder=t,this.router=e,this.http=i,this.dataStore=r,this.messageService=o,this.userService=c,this.dataLoaded=!1,this.submitted=!1,this.ckEditor=a,this.skillSets=[],this.skills=[],this.editedUser=new n.q,this.editedProfile=new n.q,this.closed=new n.q,this.enableClose=!1,this.editorConfig={removePlugins:["Title"],toolbar:["heading","|","fontSize","fontFamily","|","bold","italic","underline","highlight","|","alignment","|","link","bulletedList","numberedList"],placeholder:"About me..."}}return Object.defineProperty(t.prototype,"f",{get:function(){return this.profileGroup.controls},enumerable:!0,configurable:!0}),t.prototype.ngOnInit=function(){var t=this;this.loginUser=this.dataStore.getUser(),this.profile?this.init(this.profile):(this.user=this.loginUser,this.http.getMyProfile().pipe(Object(l.a)()).subscribe((function(e){t.init(e)}),(function(e){t.init({})})))},t.prototype.submitProfile=function(){var t=this;if(this.profileGroup.updateValueAndValidity(),this.profileGroup.invalid)this.submitted=!0;else{var e=this.profileGroup.value;if(e.user=this.user,this.profile.id){var i=Object(r.a)(Object(r.a)({},this.profile),e);this.http.editCandidates(i).pipe(Object(l.a)()).subscribe((function(e){t.messageService.add({severity:"success",summary:"Profile Information updated successfully"}),t.editedProfile.emit(e),t.enableClose?t.close():t.router.navigate(["/profile"])}))}else this.http.saveCandidates(e).pipe(Object(l.a)()).subscribe((function(e){t.messageService.add({severity:"success",summary:"Profile Information saved successfully"}),t.editedProfile.emit(e),t.enableClose?t.close():t.router.navigate(["/profile"])}))}},t.prototype.init=function(t){var e,i;if(this.profileGroup=this.formBuilder.group({title:[t.title,o.x.required],description:[t.description,o.x.required],name:[t.name,o.x.required]}),!this.passport){var r=this.user?(null===(e=this.user.passport)||void 0===e?void 0:e.id)?this.user.passport:new p:this.loginUser&&(null===(i=this.loginUser.passport)||void 0===i?void 0:i.id)?this.loginUser.passport:new p;r.tag="passport",r.objID=this.user?this.user.id:this.loginUser.id,this.passport=[r]}this.dataLoaded=!0},t.prototype.onReady=function(t){t.ui.getEditableElement().parentElement.insertBefore(t.ui.view.toolbar.element,t.ui.getEditableElement())},t.prototype.updatePassport=function(t){this.passport=[t],this.user.passport=t,this.loginUser.id===this.user.id&&this.dataStore.setUser(this.user)},t.prototype.close=function(){this.closed.emit(!0)},t.\u0275fac=function(e){return new(e||t)(n.Yb(o.d),n.Yb(u.c),n.Yb(c.a),n.Yb(s.a),n.Yb(f.g),n.Yb(d.a))},t.\u0275cmp=n.Sb({type:t,selectors:[["app-candidate-profile"]],inputs:{passport:"passport",user:"user",profile:"profile",enableClose:"enableClose"},outputs:{editedUser:"editedUser",editedProfile:"editedProfile",closed:"closed"},decls:2,vars:2,consts:[["class","animated fadeIn",4,"ngIf"],["class","animated fadeIn py-3 px-4",4,"ngIf"],[1,"animated","fadeIn"],[1,"row","py-3","px-4"],[1,"col-md-10","mx-auto"],[1,"bg-white","shadow","rounded","overflow-hidden"],[1,"card","pb-0","mb-0"],[1,"card-header"],["class","btn btn-sm btn-danger float-right",3,"click",4,"ngIf"],[1,"my-4"],[3,"formGroup"],[1,"bg-white","shadow","p-3"],[1,"row"],[1,"col-12"],[1,"col-md-4","col-sm-6"],[3,"fileStorage","avatarUrl","instantUpload","toastComplete","uploadLabel","uploadName","upload","fileStorageUploads"],[1,"col-md-8","col-sm-6"],[1,"d-block"],["formControlName","name","matInput","","placeholder","Name...","required",""],[4,"ngIf"],[1,"d-block","mt-3"],["formControlName","title","matInput","","placeholder","Title","required",""],["formControlName","description",3,"config","editor","ready"],[1,"mt-3","pb-4"],[1,"btn","btn-ghost-primary","float-right",3,"click"],[1,"btn","btn-sm","btn-danger","float-right",3,"click"],[1,"fa","fa-close"],[1,"animated","fadeIn","py-3","px-4"]],template:function(t,e){1&t&&(n.Uc(0,A,32,14,"div",0),n.Uc(1,G,4,0,"div",1)),2&t&&(n.xc("ngIf",e.dataLoaded),n.Kb(1),n.xc("ngIf",!e.dataLoaded))},directives:[h.m,o.z,o.q,o.i,Z,V.c,o.c,W.b,o.p,o.g,o.v,B.a,V.b,N.b,N.c],styles:["[_nghost-%COMP%]     .ck-editor__editable{min-height:200px}.profile-head[_ngcontent-%COMP%]{transform:translateY(5rem)}.cover[_ngcontent-%COMP%]{background-image:url(https://images.unsplash.com/photo-1530305408560-82d13781b33a?auto=format&fit=crop&ixid=eyJhcHBfaWQiOjEyMDd9&ixlib=rb-1.2.1&q=80&w=1352);background-size:cover;background-repeat:no-repeat}"]}),t}()},VwB5:function(t,e,i){"use strict";i.d(e,"a",(function(){return w}));var r,n=i("8AiQ"),o=i("ZSGP"),a=i("TDrE"),c=i("fb+k"),s=i("DdyX"),d=i("D57K"),l=i("1C3z");i("1MVu"),(r={})[9]=function(t,e,i){i.select(t<e.length-1?e[t+1]:e[0],!0)},r[38]=function(t,e,i){t>0&&i.select(e[t-1],!0)},r[40]=function(t,e,i){t<e.length-1&&i.select(e[t+1],!0)},r[13]=function(t,e,i){return i.selectedItem?i.selectedItem.click():void 0},r[27]=function(){this.hide()};var p=function(){function t(){}return t.\u0275mod=l.Wb({type:t}),t.\u0275inj=l.Vb({factory:function(e){return new(e||t)},imports:[[n.c]]}),t}();i("2Mvu"),i("lqvn"),i("R+ki"),i("z5yO"),i("Jg5f");var u=function(){function t(){this.state={dragging:!1,dropping:!1,index:void 0}}return t.prototype.setDraggedItem=function(t,e){t&&t.dataTransfer&&t.dataTransfer.setData("Text",JSON.stringify(e))},t.prototype.getDraggedItem=function(t){if(t&&t.dataTransfer){var e=t.dataTransfer.getData("Text");try{return JSON.parse(e)}catch(i){return}}},t.prototype.setSender=function(t){this.sender=t},t.prototype.setReceiver=function(t){this.receiver=t},t.prototype.onTagDropped=function(t,e,i){this.onDragEnd(),this.sender.onRemoveRequested(t,e),this.receiver.onAddingRequested(!1,t,i)},t.prototype.setState=function(t){this.state=Object(d.a)(Object(d.a)({},this.state),t)},t.prototype.getState=function(t){return t?this.state[t]:this.state},t.prototype.onDragEnd=function(){this.setState({dragging:!1,dropping:!1,index:void 0})},t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=l.Ub({token:t,factory:function(e){return t.\u0275fac(e)}}),t}(),f={tagInput:{separatorKeys:[],separatorKeyCodes:[],maxItems:1/0,placeholder:"+ Tag",secondaryPlaceholder:"Enter a new tag",validators:[],asyncValidators:[],onlyFromAutocomplete:!1,errorMessages:{},theme:"",onTextChangeDebounce:250,inputId:null,inputClass:"",clearOnBlur:!1,hideForm:!1,addOnBlur:!1,addOnPaste:!1,pasteSplitPattern:",",blinkIfDupe:!0,removable:!0,editable:!1,allowDupes:!1,modelAsStrings:!1,trimTags:!0,ripple:!0,tabIndex:"",disable:!1,dragZone:"",onRemoving:void 0,onAdding:void 0,displayBy:"display",identifyBy:"value",animationDuration:{enter:"250ms",leave:"150ms"}},dropdown:{displayBy:"display",identifyBy:"value",appendToBody:!0,offset:"50 0",focusFirstElement:!1,showDropdownIfEmpty:!1,minimumTextLength:1,limitItemsTo:1/0,keepOpen:!0,dynamicUpdate:!0,zIndex:1e3,matchingFn:function(t,e){var i=e[this.displayBy].toString();return i&&i.toLowerCase().indexOf(t.toLowerCase())>=0}}};"undefined"!=typeof window&&window,"undefined"!=typeof window&&window;var h=new(function(){function t(){}return t.prototype.setOptions=function(e){t.defaults.tagInput=Object(d.a)(Object(d.a)({},f.tagInput),e.tagInput),t.defaults.dropdown=Object(d.a)(Object(d.a)({},f.dropdown),e.dropdown)},t.defaults=f,t}()),g=function(){function t(){}return t.withDefaults=function(t){h.setOptions(t)},t.\u0275mod=l.Wb({type:t}),t.\u0275inj=l.Vb({factory:function(e){return new(e||t)},providers:[u,{provide:o.a,useValue:!1}],imports:[[n.c,o.u,o.j,p]]}),t}(),b=i("RECK"),m=i("7RHe"),v=i("cFi/"),y=function(){function t(){}return t.\u0275mod=l.Wb({type:t}),t.\u0275inj=l.Vb({factory:function(e){return new(e||t)},providers:[m.a],imports:[[n.c,v.a,b.b.forRoot()]]}),t}(),w=function(){function t(){}return t.\u0275mod=l.Wb({type:t}),t.\u0275inj=l.Vb({factory:function(e){return new(e||t)},imports:[[n.c,o.u,y,a.c,c.b,s.a,g,o.j]]}),t}()}}]);