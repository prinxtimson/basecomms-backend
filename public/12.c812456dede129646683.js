(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"55j5":function(t,e,n){"use strict";n.r(e),n.d(e,"ChannelsModule",(function(){return gt}));var c=n("8AiQ"),i=n("D57K"),a=n("AwSQ"),r=n("ZgNk"),o=n("2Mvu"),s=n("1C3z"),l=n("iZ6s"),d=n("Z+in"),u=n("dIiP"),f=n("ZSGP"),h=n("L1Hv"),p=n("aOG3"),m=n("Mumn"),b=n("hOvr"),g=n("TDrE"),v=n("ZDS+"),y=n("X8C7"),C=n("DdyX");function w(t,e){1&t&&(s.ec(0,"mat-error"),s.Wc(1," Channel Name is "),s.ec(2,"strong"),s.Wc(3,"required"),s.dc(),s.dc())}function x(t,e){1&t&&(s.ec(0,"mat-error"),s.Wc(1," Channel Description is "),s.ec(2,"strong"),s.Wc(3,"required"),s.dc(),s.dc())}function I(t,e){if(1&t){var n=s.fc();s.ec(0,"div"),s.ec(1,"input",25),s.mc("input",(function(t){return s.Lc(n),s.qc(),s.Jc(20).filterGlobal(t.target.value,"contains")})),s.dc(),s.dc()}}function k(t,e){if(1&t&&(s.ec(0,"th",28),s.Wc(1),s.Zb(2,"p-sortIcon",29),s.dc()),2&t){var n=e.$implicit;s.xc("pSortableColumn",n.field),s.Kb(1),s.Yc(" ",n.header," "),s.Kb(1),s.xc("field",n.field)}}function U(t,e){if(1&t&&(s.ec(0,"tr"),s.Zb(1,"th",26),s.Uc(2,k,3,3,"th",27),s.ec(3,"th",26),s.Wc(4,"Add"),s.dc(),s.dc()),2&t){var n=e.$implicit;s.Kb(2),s.xc("ngForOf",n)}}function S(t,e){if(1&t&&s.Zb(0,"img",33),2&t){var n=s.qc().$implicit,c=s.qc(2);s.zc("alt","",n.name," avatar"),s.xc("src",c.imageSrc.passport,s.Oc)}}function q(t,e){if(1&t&&s.Zb(0,"img",33),2&t){var n=s.qc().$implicit,c=s.qc(2);s.zc("alt","",n.name," avatar"),s.xc("src",c.fsPath+n.passport.link,s.Oc)}}function O(t,e){if(1&t&&s.Zb(0,"img",33),2&t){var n=s.qc().$implicit;s.zc("alt","",n.name," avatar"),s.xc("src",n.avatar,s.Oc)}}function K(t,e){if(1&t){var n=s.fc();s.ec(0,"tr"),s.ec(1,"td"),s.Uc(2,S,1,2,"img",30),s.Uc(3,q,1,2,"img",30),s.Uc(4,O,1,2,"img",30),s.dc(),s.ec(5,"td"),s.Wc(6),s.dc(),s.ec(7,"td"),s.ec(8,"button",31),s.mc("click",(function(){s.Lc(n);var t=e.$implicit;return s.qc(2).addMember(t)})),s.Zb(9,"i",32),s.dc(),s.dc(),s.dc()}if(2&t){var c=e.$implicit;s.Kb(2),s.xc("ngIf",!c.passport&&!c.avatar),s.Kb(1),s.xc("ngIf",c.passport),s.Kb(1),s.xc("ngIf",!c.passport&&c.avatar),s.Kb(2),s.Xc(c.name)}}function L(t,e){if(1&t){var n=s.fc();s.ec(0,"div"),s.ec(1,"input",25),s.mc("input",(function(t){return s.Lc(n),s.qc(),s.Jc(26).filterGlobal(t.target.value,"contains")})),s.dc(),s.dc()}}function Z(t,e){if(1&t&&(s.ec(0,"th",28),s.Wc(1),s.Zb(2,"p-sortIcon",29),s.dc()),2&t){var n=e.$implicit;s.xc("pSortableColumn",n.field),s.Kb(1),s.Yc(" ",n.header," "),s.Kb(1),s.xc("field",n.field)}}function D(t,e){if(1&t&&(s.ec(0,"tr"),s.Zb(1,"th",26),s.Uc(2,Z,3,3,"th",27),s.ec(3,"th",26),s.Wc(4,"Remove"),s.dc(),s.dc()),2&t){var n=e.$implicit;s.Kb(2),s.xc("ngForOf",n)}}function j(t,e){if(1&t&&s.Zb(0,"img",33),2&t){var n=s.qc().$implicit,c=s.qc(2);s.zc("alt","",n.name," avatar"),s.xc("src",c.imageSrc.passport,s.Oc)}}function A(t,e){if(1&t&&s.Zb(0,"img",33),2&t){var n=s.qc().$implicit,c=s.qc(2);s.zc("alt","",n.name," avatar"),s.xc("src",c.fsPath+n.passport.link,s.Oc)}}function M(t,e){if(1&t&&s.Zb(0,"img",33),2&t){var n=s.qc().$implicit;s.zc("alt","",n.name," avatar"),s.xc("src",n.avatar,s.Oc)}}function T(t,e){if(1&t){var n=s.fc();s.ec(0,"tr"),s.ec(1,"td"),s.Uc(2,j,1,2,"img",30),s.Uc(3,A,1,2,"img",30),s.Uc(4,M,1,2,"img",30),s.dc(),s.ec(5,"td"),s.Wc(6),s.dc(),s.ec(7,"td"),s.ec(8,"button",34),s.mc("click",(function(){s.Lc(n);var t=e.$implicit;return s.qc(2).removeMember(t)})),s.Zb(9,"i",35),s.dc(),s.dc(),s.dc()}if(2&t){var c=e.$implicit;s.Kb(2),s.xc("ngIf",!c.passport&&!c.avatar),s.Kb(1),s.xc("ngIf",c.passport),s.Kb(1),s.xc("ngIf",!c.passport&&c.avatar),s.Kb(2),s.Xc(c.name)}}function $(t,e){if(1&t){var n=s.fc();s.ec(0,"div",1),s.ec(1,"div",2),s.ec(2,"div",3),s.ec(3,"div",4),s.ec(4,"h4"),s.Wc(5),s.ec(6,"button",5),s.mc("click",(function(){return s.Lc(n),s.qc().close()})),s.Zb(7,"i",6),s.dc(),s.dc(),s.dc(),s.dc(),s.dc(),s.ec(8,"div",7),s.ec(9,"form",8),s.ec(10,"div",9),s.ec(11,"div",10),s.ec(12,"mat-form-field",11),s.Zb(13,"input",12),s.Uc(14,w,4,0,"mat-error",13),s.dc(),s.ec(15,"mat-form-field",14),s.Zb(16,"textarea",15),s.Uc(17,x,4,0,"mat-error",13),s.dc(),s.dc(),s.ec(18,"div",16),s.ec(19,"p-table",17,18),s.Uc(21,I,2,0,"ng-template",19),s.Uc(22,U,5,1,"ng-template",20),s.Uc(23,K,10,4,"ng-template",21),s.dc(),s.dc(),s.ec(24,"div",16),s.ec(25,"p-table",17,22),s.Uc(27,L,2,0,"ng-template",19),s.Uc(28,D,5,1,"ng-template",20),s.Uc(29,T,10,4,"ng-template",21),s.dc(),s.dc(),s.dc(),s.ec(30,"div",23),s.ec(31,"button",24),s.mc("click",(function(){return s.Lc(n),s.qc().submitChannel()})),s.Wc(32,"Save Channel"),s.dc(),s.dc(),s.dc(),s.dc(),s.dc()}if(2&t){var c=s.qc();s.Kb(5),s.Yc("",c.title," "),s.Kb(4),s.xc("formGroup",c.channelForm),s.Kb(5),s.xc("ngIf",c.submitted&&c.f.name.hasError("required")),s.Kb(3),s.xc("ngIf",c.submitted&&c.f.description.hasError("required")),s.Kb(2),s.xc("autoLayout",!0)("columns",c.cols)("paginator",!0)("resizableColumns",!0)("rows",10)("value",c.members),s.Kb(6),s.xc("autoLayout",!0)("columns",c.cols)("paginator",!0)("resizableColumns",!0)("rows",10)("value",c.selectedMembers)}}function W(t,e){1&t&&(s.ec(0,"div",1),s.Zb(1,"facebook-content-loader"),s.Zb(2,"facebook-content-loader"),s.Zb(3,"list-content-loader"),s.dc())}var R=function(){function t(t,e,n,c,i){this.dataService=t,this.http=e,this.messageSevice=n,this.formBuilder=c,this.userService=i,this.dataLoaded=!1,this.title="Add New Channel",this.enableClose=!0,this.submitted=!1,this.selectedMembers=[],this.members=[],this.cols=[],this.imageSrc=[],this.fsPath="",this.outChannel=new s.q,this.closed=new s.q,this.users=[]}return Object.defineProperty(t.prototype,"f",{get:function(){return this.channelForm.controls},enumerable:!0,configurable:!0}),t.prototype.ngOnInit=function(){var t=this;this.imageSrc.passport="assets/img/avatars/0.png",this.fsPath=m.a.mainUrl+m.a.fsDL+"/",this.loginUser=this.dataService.getUser(),this.userService.getUsers().pipe(Object(o.a)()).subscribe((function(e){t.users=e,t.initForm(),t.dataLoaded=!0,console.log(t.dataLoaded)})),this.cols=[{header:"Name",field:"name"}]},t.prototype.close=function(){this.closed.emit(!0)},t.prototype.submitChannel=function(){var t=this;if(this.channelForm.updateValueAndValidity(),this.submitted=!0,!this.channelForm.invalid){var e=this.channelForm.value;e.members=this.selectedMembers,this.channel?this.http.editChannel(Object(i.a)(Object(i.a)({},this.channel),e)).pipe(Object(o.a)()).subscribe((function(e){t.messageSevice.add({severity:"success",summary:"Channel Information Saved Successfully"}),t.outChannel.emit(e),t.closed.emit(!0)})):this.http.saveChannel(e).pipe(Object(o.a)()).subscribe((function(e){t.messageSevice.add({severity:"success",summary:"Channel Information Saved Successfully"}),t.outChannel.emit(e),t.closed.emit(!0)}))}},t.prototype.initForm=function(){var t=this.channel?this.channel:new h.a;this.channelForm=this.formBuilder.group({name:[t.name,f.x.required],description:[t.description,f.x.required]}),this.sortMembers(t.members)},t.getMemberIds=function(t){return t?t.map((function(t){return t.id})):[]},t.prototype.sortMembers=function(t){var e=this;this.members=this.users,t&&(this.selectedMembers=t,t.forEach((function(t){e.members=e.members.filter((function(e){return e.id!==t.id}))})))},t.prototype.removeMember=function(t){this.selectedMembers=this.selectedMembers.filter((function(e){return e.id!==t.id})),this.members=Object(i.i)([t],this.members)},t.prototype.addMember=function(t){this.members=this.members.filter((function(e){return e.id!==t.id})),this.selectedMembers=Object(i.i)([t],this.selectedMembers)},t.\u0275fac=function(e){return new(e||t)(s.Yb(a.a),s.Yb(r.a),s.Yb(l.g),s.Yb(f.d),s.Yb(p.a))},t.\u0275cmp=s.Sb({type:t,selectors:[["app-channel-data"]],inputs:{channel:"channel"},outputs:{outChannel:"outChannel",closed:"closed"},decls:2,vars:2,consts:[["class","animated fadeIn py-3 px-4",4,"ngIf"],[1,"animated","fadeIn","py-3","px-4"],[1,"bg-white","shadow","rounded","overflow-hidden"],[1,"card","pb-0","mb-0"],[1,"card-header"],[1,"btn","btn-sm","btn-danger","float-right",3,"click"],[1,"fa","fa-close"],[1,"my-4"],[1,"mt-3","bg-white","shadow","p-3",3,"formGroup"],[1,"row"],[1,"col-sm-12"],[1,"d-block"],["formControlName","name","matInput","","placeholder","Channel Name","required",""],[4,"ngIf"],[1,"d-block","mt-2"],["formControlName","description","rows","5","matInput","","placeholder","Channel Description","required",""],[1,"col-md-6"],["sortMode","multiple",3,"autoLayout","columns","paginator","resizableColumns","rows","value"],["dt1",""],["pTemplate","caption"],["pTemplate","header"],["pTemplate","body"],["dt",""],[1,"mt-3","pb-4"],[1,"btn","btn-ghost-primary","float-right",3,"click"],["pInputText","","placeholder","Search members","size","50","type","text",2,"width","100%",3,"input"],["pResizableColumn",""],["pResizableColumn","",3,"pSortableColumn",4,"ngFor","ngForOf"],["pResizableColumn","",3,"pSortableColumn"],[3,"field"],["class","img-avatar","style","height: 30px; width: auto",3,"src","alt",4,"ngIf"],[1,"btn","btn-sm","btn-success",3,"click"],[1,"fa","fa-plus"],[1,"img-avatar",2,"height","30px","width","auto",3,"src","alt"],[1,"btn","btn-sm","btn-warning",3,"click"],[1,"fa","fa-minus"]],template:function(t,e){1&t&&(s.Uc(0,$,33,16,"div",0),s.Uc(1,W,4,0,"div",0)),2&t&&(s.xc("ngIf",e.dataLoaded),s.Kb(1),s.xc("ngIf",!e.dataLoaded))},directives:[c.m,f.z,f.q,f.i,b.c,f.c,g.b,f.p,f.g,f.v,v.d,l.i,b.b,y.a,v.a,c.l,v.c,v.b,C.b,C.c],styles:[""]}),t}();function F(t,e){if(1&t){var n=s.fc();s.ec(0,"button",25),s.mc("click",(function(){return s.Lc(n),s.qc(3).delete()})),s.Zb(1,"i",26),s.dc()}}function N(t,e){if(1&t){var n=s.fc();s.ec(0,"button",27),s.mc("click",(function(){return s.Lc(n),s.qc(3).view=2})),s.Zb(1,"i",28),s.dc()}}function E(t,e){if(1&t&&s.Zb(0,"img",35),2&t){var n=s.qc().$implicit;s.yc("tooltip",n.name),s.yc("alt",n.name)}}function P(t,e){if(1&t&&s.Zb(0,"img",36),2&t){var n=s.qc().$implicit;s.yc("tooltip",n.name),s.yc("alt",n.name),s.xc("src",n.avatar,s.Oc)}}function Y(t,e){if(1&t&&s.Zb(0,"img",37),2&t){var n=s.qc().$implicit,c=s.qc(3);s.yc("src",c.fsPath+n.passport.link,s.Oc),s.yc("alt",n.name)}}function z(t,e){if(1&t){var n=s.fc();s.ec(0,"i",38),s.mc("click",(function(){s.Lc(n);var t=s.qc().$implicit;return s.qc(3).removeUser(t)})),s.dc()}}function V(t,e){if(1&t&&(s.ec(0,"div",29),s.ec(1,"div",30),s.Uc(2,E,1,2,"img",31),s.Uc(3,P,1,3,"img",32),s.Uc(4,Y,1,2,"img",33),s.Uc(5,z,1,0,"i",34),s.dc(),s.dc()),2&t){var n=e.$implicit,c=s.qc(3);s.Kb(2),s.xc("ngIf",!n.passport&&!n.avatar),s.Kb(1),s.xc("ngIf",!n.passport&&n.avatar),s.Kb(1),s.xc("ngIf",n.passport),s.Kb(1),s.xc("ngIf","CANDIDATES"!==c.loginUser.role)}}function G(t,e){if(1&t){var n=s.fc();s.ec(0,"div",8),s.ec(1,"div",9),s.ec(2,"div",10),s.ec(3,"div",11),s.ec(4,"h4",12),s.Wc(5),s.ec(6,"button",13),s.mc("click",(function(){return s.Lc(n),s.qc(2).close()})),s.Zb(7,"i",14),s.dc(),s.Uc(8,F,2,0,"button",15),s.Uc(9,N,2,0,"button",16),s.ec(10,"a",17),s.Zb(11,"i",18),s.dc(),s.dc(),s.ec(12,"p"),s.Wc(13),s.rc(14,"number"),s.dc(),s.dc(),s.dc(),s.dc(),s.ec(15,"div",19),s.ec(16,"p"),s.Wc(17),s.dc(),s.dc(),s.ec(18,"div",20),s.ec(19,"div",21),s.ec(20,"h5",22),s.Wc(21,"Members"),s.dc(),s.dc(),s.ec(22,"div",23),s.Uc(23,V,6,4,"div",24),s.dc(),s.dc(),s.dc()}if(2&t){var c=s.qc(2);s.Kb(5),s.Yc(" ",c.channel.name," "),s.Kb(3),s.xc("ngIf","CANDIDATES"!==c.loginUser.role),s.Kb(1),s.xc("ngIf","CANDIDATES"!==c.loginUser.role),s.Kb(1),s.zc("href","#/chat/",c.channel.id,"",s.Oc),s.Kb(3),s.Yc("",s.sc(14,7,c.channel.members.length)," Members"),s.Kb(4),s.Xc(c.channel.description),s.Kb(6),s.xc("ngForOf",c.channel.members)}}function B(t,e){1&t&&(s.ec(0,"div",3),s.Zb(1,"facebook-content-loader"),s.Zb(2,"facebook-content-loader"),s.Zb(3,"list-content-loader"),s.dc())}function X(t,e){if(1&t&&(s.ec(0,"div"),s.ec(1,"div",3),s.ec(2,"div",4),s.ec(3,"div",5),s.Uc(4,G,24,9,"div",6),s.Uc(5,B,4,0,"div",7),s.dc(),s.dc(),s.dc(),s.dc()),2&t){var n=s.qc();s.Kb(4),s.xc("ngIf",n.dataLoaded),s.Kb(1),s.xc("ngIf",!n.dataLoaded)}}function _(t,e){if(1&t){var n=s.fc();s.ec(0,"app-channel-data",39),s.mc("closed",(function(){return s.Lc(n),s.qc().view=1}))("outChannel",(function(t){return s.Lc(n),s.qc().updateChannel(t)})),s.dc()}if(2&t){var c=s.qc();s.xc("channel",c.channel)}}var H=function(){function t(t,e,n,c){this.confirmService=t,this.messageService=e,this.dataService=n,this.http=c,this.dataLoaded=!1,this.closed=new s.q,this.deleted=new s.q,this.outChannel=new s.q,this.p=1,this.view=1,this.fsPath=m.a.mainUrl+m.a.fsDL+"/"}return t.prototype.ngOnInit=function(){this.loginUser=this.dataService.getUser(),this.dataLoaded=!0},t.prototype.removeUser=function(t){var e=this;"CANDIDATES"!==this.loginUser.role&&this.confirmService.confirm({message:"Are you sure you want to remove "+t.name+" from Channel?",header:"Remove User",icon:"pi pi-exclamation-triangle",accept:function(){e.channel.members=e.channel.members.filter((function(e){return e.id!==t.id})),e.http.editChannel(e.channel).pipe(Object(o.a)()).subscribe((function(t){e.messageService.add({severity:"success",summary:"Remove Success",detail:"User Removed from Channel!"}),e.outChannel.emit(t),e.channel=t}))},reject:function(){}})},t.prototype.close=function(){this.closed.emit(!0)},t.prototype.delete=function(){var t=this;"CANDIDATES"!==this.loginUser.role&&this.confirmService.confirm({message:"Are you sure you want to delete Channel?",header:"Delete Confirmation",icon:"pi pi-exclamation-triangle",accept:function(){t.http.deleteChannel(t.channel.id).pipe(Object(o.a)()).subscribe((function(){t.messageService.add({severity:"success",summary:"Delete Success",detail:"Channel Removed from Platform!"}),t.deleted.emit(t.channel),t.closed.emit(!0)}))},reject:function(){}})},t.prototype.updateChannel=function(t){this.outChannel.emit(t),this.channel=t},t.\u0275fac=function(e){return new(e||t)(s.Yb(l.b),s.Yb(l.g),s.Yb(a.a),s.Yb(r.a))},t.\u0275cmp=s.Sb({type:t,selectors:[["app-channel-view"]],inputs:{channel:"channel"},outputs:{closed:"closed",deleted:"deleted",outChannel:"outChannel"},decls:3,vars:3,consts:[[3,"ngSwitch"],[4,"ngSwitchCase"],[3,"channel","closed","outChannel",4,"ngSwitchCase"],[1,"animated","fadeIn"],[1,"row","py-3","px-4"],[1,"col-md-10","mx-auto"],["class","animated fadeIn bg-white shadow rounded overflow-hidden",4,"ngIf"],["class","animated fadeIn",4,"ngIf"],[1,"animated","fadeIn","bg-white","shadow","rounded","overflow-hidden"],[1,"p-4","cover"],[1,"media","align-items-end","profile-head"],[1,"media-body","mb-5","text-white"],[1,"mt-0","mb-0"],[1,"btn","btn-sm","btn-info","mr-1","float-right",3,"click"],[1,"fa","fa-close"],["tooltip","Delete Channel","class","btn btn-sm btn-danger  mr-1 float-right",3,"click",4,"ngIf"],["tooltip","Edit Channel","class","btn btn-sm btn-success  mr-1 float-right",3,"click",4,"ngIf"],["tooltip","Goto Group Chat",1,"btn","btn-sm","btn-primary","mr-4","float-right",3,"href"],[1,"fa","fa-comments"],[1,"bg-light","p-4","d-flex","text-center"],[1,"py-4","px-4"],[1,"d-flex","align-items-center","justify-content-between","mb-3"],[1,"mb-0"],[1,"row"],["class","m-1",4,"ngFor","ngForOf"],["tooltip","Delete Channel",1,"btn","btn-sm","btn-danger","mr-1","float-right",3,"click"],[1,"fa","fa-trash-o"],["tooltip","Edit Channel",1,"btn","btn-sm","btn-success","mr-1","float-right",3,"click"],[1,"fa","fa-edit"],[1,"m-1"],[1,"avatar_cont"],["class","profile-img shadow","src","assets/img/avatars/0.png",3,"tooltip","alt",4,"ngIf"],["class","profile-img shadow",3,"tooltip","src","alt",4,"ngIf"],["class","profile-img",3,"src","alt",4,"ngIf"],["class","fa fa-remove avatar-edit-badge","tooltip","Remove From Channel",3,"click",4,"ngIf"],["src","assets/img/avatars/0.png",1,"profile-img","shadow",3,"tooltip","alt"],[1,"profile-img","shadow",3,"tooltip","src","alt"],[1,"profile-img",3,"src","alt"],["tooltip","Remove From Channel",1,"fa","fa-remove","avatar-edit-badge",3,"click"],[3,"channel","closed","outChannel"]],template:function(t,e){1&t&&(s.ec(0,"div",0),s.Uc(1,X,6,2,"div",1),s.Uc(2,_,1,1,"app-channel-data",2),s.dc()),2&t&&(s.xc("ngSwitch",e.view),s.Kb(1),s.xc("ngSwitchCase",1),s.Kb(1),s.xc("ngSwitchCase",2))},directives:[c.o,c.p,c.m,u.a,c.l,C.b,C.c,R],pipes:[c.f],styles:[".avatar-list[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;margin:0 auto}.avatar-edit-badge[_ngcontent-%COMP%]{position:absolute;height:20px;width:20px;background-color:transparent;color:#f48e33;border-radius:50%;bottom:.2em;right:.4em;border:1.5px solid #f48e33;padding-top:1px;padding-left:2px;cursor:pointer}.avatar_cont[_ngcontent-%COMP%]{position:relative}"]}),t}();function J(t,e){if(1&t){var n=s.fc();s.ec(0,"button",11),s.mc("click",(function(){return s.Lc(n),s.qc(2).addChannel(null)})),s.Zb(1,"i",12),s.Wc(2," Add Channel"),s.dc()}}function Q(t,e){if(1&t){var n=s.fc();s.ec(0,"button",36),s.mc("click",(function(){s.Lc(n);var t=s.qc(2).$implicit;return s.qc(3).viewChannel(t)})),s.Zb(1,"i",37),s.Wc(2," View Channel"),s.dc()}}function tt(t,e){if(1&t){var n=s.fc();s.ec(0,"button",38),s.mc("click",(function(){s.Lc(n);var t=s.qc(2).$implicit;return s.qc(3).viewChannel(t)})),s.Zb(1,"i",37),s.dc()}}function et(t,e){if(1&t){var n=s.fc();s.ec(0,"button",39),s.mc("click",(function(){s.Lc(n);var t=s.qc(2).$implicit;return s.qc(3).addChannel(t)})),s.Zb(1,"i",40),s.dc()}}function nt(t,e){if(1&t){var n=s.fc();s.ec(0,"button",41),s.mc("click",(function(){s.Lc(n);var t=s.qc(2).$implicit;return s.qc(3).deleteChannel(t)})),s.Zb(1,"i",42),s.dc()}}function ct(t,e){if(1&t&&(s.ec(0,"div",31),s.Uc(1,Q,3,0,"button",32),s.Uc(2,tt,2,0,"button",33),s.Uc(3,et,2,0,"button",34),s.Uc(4,nt,2,0,"button",35),s.dc()),2&t){var n=s.qc(4);s.Kb(1),s.xc("ngIf","CANDIDATES"===n.loginUser.role),s.Kb(1),s.xc("ngIf","CANDIDATES"!==n.loginUser.role),s.Kb(1),s.xc("ngIf","CANDIDATES"!==n.loginUser.role),s.Kb(1),s.xc("ngIf","CANDIDATES"!==n.loginUser.role)}}function it(t,e){if(1&t){var n=s.fc();s.ec(0,"div",23),s.ec(1,"div",24),s.ec(2,"div",25),s.ec(3,"button",26),s.ec(4,"i",27),s.Wc(5,"more_vert"),s.dc(),s.dc(),s.Uc(6,ct,5,4,"div",28),s.dc(),s.ec(7,"h4",29),s.mc("click",(function(){s.Lc(n);var t=e.$implicit;return s.qc(3).viewChannel(t)})),s.Wc(8),s.dc(),s.ec(9,"div",30),s.Wc(10),s.dc(),s.dc(),s.dc()}if(2&t){var c=e.$implicit;s.Kb(8),s.Xc(c.name),s.Kb(2),s.Xc(c.description)}}function at(t,e){if(1&t){var n=s.fc();s.ec(0,"div",13),s.ec(1,"div",14),s.ec(2,"div",15),s.ec(3,"div",16),s.Zb(4,"input",17),s.dc(),s.dc(),s.ec(5,"div",18),s.ec(6,"button",19),s.mc("click",(function(){return s.Lc(n),s.qc(2).refresh()})),s.Zb(7,"i",20),s.Wc(8," Refresh "),s.dc(),s.dc(),s.dc(),s.ec(9,"div",21),s.Uc(10,it,11,2,"div",22),s.dc(),s.dc()}if(2&t){var c=s.qc(2);s.Kb(10),s.xc("ngForOf",c.channels)}}function rt(t,e){if(1&t){var n=s.fc();s.ec(0,"div",43),s.ec(1,"div",23),s.ec(2,"div",44),s.mc("click",(function(){return s.Lc(n),s.qc(2).addChannel(null)})),s.Zb(3,"i",45),s.ec(4,"h4",46),s.Wc(5,"Add Channel"),s.dc(),s.dc(),s.dc(),s.dc()}}function ot(t,e){1&t&&(s.ec(0,"div",43),s.ec(1,"div",47),s.ec(2,"div",24),s.ec(3,"p"),s.Wc(4,"You have not been assigned to a channel yet. Please contact Admin."),s.dc(),s.dc(),s.dc(),s.dc())}function st(t,e){if(1&t&&(s.ec(0,"div"),s.ec(1,"div",2),s.ec(2,"div",3),s.ec(3,"div",4),s.ec(4,"div",5),s.ec(5,"h3",6),s.Wc(6,"Channels"),s.dc(),s.dc(),s.ec(7,"div",7),s.Uc(8,J,3,0,"button",8),s.dc(),s.dc(),s.dc(),s.Uc(9,at,11,1,"div",9),s.Uc(10,rt,6,0,"div",10),s.Uc(11,ot,5,0,"div",10),s.dc(),s.dc()),2&t){var n=s.qc();s.Kb(8),s.xc("ngIf","CANDIDATES"===n.loginUser.role),s.Kb(1),s.xc("ngIf",n.dataLoaded&&n.channels.length>0),s.Kb(1),s.xc("ngIf",n.dataLoaded&&n.channels.length<1&&"CANDIDATES"!==n.loginUser.role),s.Kb(1),s.xc("ngIf",n.dataLoaded&&n.channels.length<1&&"CANDIDATES"===n.loginUser.role)}}function lt(t,e){if(1&t){var n=s.fc();s.ec(0,"div"),s.ec(1,"app-channel-data",48),s.mc("outChannel",(function(t){return s.Lc(n),s.qc().newChannel(t)}))("closed",(function(t){return s.Lc(n),s.qc().close(t)})),s.dc(),s.dc()}if(2&t){var c=s.qc();s.Kb(1),s.xc("channel",c.curChannel)}}function dt(t,e){if(1&t){var n=s.fc();s.ec(0,"div"),s.ec(1,"app-channel-view",49),s.mc("closed",(function(t){return s.Lc(n),s.qc().close(t)}))("outChannel",(function(t){return s.Lc(n),s.qc().newChannel(t)}))("deleted",(function(t){return s.Lc(n),s.qc().removeChannel(t)})),s.dc(),s.dc()}if(2&t){var c=s.qc();s.Kb(1),s.xc("channel",c.curChannel)}}var ut=function(){function t(t,e,n,c){this.dataService=t,this.http=e,this.messageService=n,this.confirmService=c,this.dataLoaded=!1,this.channels=[],this.view=1}return t.prototype.ngOnInit=function(){this.loginUser=this.dataService.getUser(),this.refresh()},t.prototype.refresh=function(){var t=this;this.loginUser.role.includes("ADMIN")?this.http.getChannels().pipe(Object(o.a)()).subscribe((function(e){t.channels=e,t.dataLoaded=!0})):this.http.getMyChannels().pipe(Object(o.a)()).subscribe((function(e){t.channels=e,t.dataLoaded=!0}))},t.prototype.viewChannel=function(t){this.curChannel=t,this.view=3},t.prototype.addChannel=function(t){this.curChannel=t,this.view=2},t.prototype.newChannel=function(t){this.channels=this.channels.filter((function(e){return e.id!==t.id})),this.channels=Object(i.i)([t],this.channels)},t.prototype.close=function(t){t&&(this.view=1)},t.prototype.deleteChannel=function(t){var e=this;this.confirmService.confirm({message:"Are you sure you want to delete Channel?",header:"Delete Confirmation",icon:"pi pi-exclamation-triangle",accept:function(){e.http.deleteChannel(t.id).pipe(Object(o.a)()).subscribe((function(){e.channels=e.channels.filter((function(e){return e.id!==t.id})),e.messageService.add({severity:"success",summary:"Delete Success",detail:"Channel Removed from Platform!"})}))},reject:function(){}})},t.prototype.removeChannel=function(t){this.channels=this.channels.filter((function(e){return e.id!=t.id}))},t.\u0275fac=function(e){return new(e||t)(s.Yb(a.a),s.Yb(r.a),s.Yb(l.g),s.Yb(l.b))},t.\u0275cmp=s.Sb({type:t,selectors:[["app-channels"]],decls:4,vars:4,consts:[[3,"ngSwitch"],[4,"ngSwitchCase"],[1,"content","container-fluid"],[1,"page-header","mt-3"],[1,"row","align-items-center"],[1,"col"],[1,"page-title"],[1,"col-auto","float-right","ml-auto"],["class","btn add-btn btn-ghost-primary",3,"click",4,"ngIf"],["class","animated fadeIn",4,"ngIf"],["class","animated fadeIn mt-5",4,"ngIf"],[1,"btn","add-btn","btn-ghost-primary",3,"click"],[1,"fa","fa-plus"],[1,"animated","fadeIn"],[1,"row","filter-row"],[1,"col-sm-9","col-md-9"],[1,"form-group","form-focus"],["type","text","placeholder","search channels",1,"form-control","floating"],[1,"col-sm-3","col-md-3"],[1,"btn","btn-success","btn-block",3,"click"],[1,"fa","fa-refresh"],[1,"row","staff-grid-row"],["class","col-md-4 col-sm-6 col-12 col-lg-4 col-xl-3",4,"ngFor","ngForOf"],[1,"col-md-4","col-sm-6","col-12","col-lg-4","col-xl-3"],[1,"profile-widget","shadow","p-4"],["dropdown","",1,"dropdown","profile-action"],["data-toggle","dropdown","aria-expanded","false","dropdownToggle","",1,"action-icon","bg-transparent","border-0","btn-sm"],[1,"material-icons"],["class","dropdown-menu dropdown-menu-right",4,"dropdownMenu"],[1,"user-name","m-t-10","mb-0","text-ellipsis",3,"click"],[1,"small","text-muted"],[1,"dropdown-menu","dropdown-menu-right"],["class","btn btn-sm btn-info mr-1",3,"click",4,"ngIf"],["tooltip","View","class","btn btn-sm btn-info mr-1",3,"click",4,"ngIf"],["tooltip","Edit","class","btn btn-sm btn-warning mr-1",3,"click",4,"ngIf"],["tooltip","Delete","class","btn btn-sm btn-danger mr-1",3,"click",4,"ngIf"],[1,"btn","btn-sm","btn-info","mr-1",3,"click"],[1,"fa","fa-eye"],["tooltip","View",1,"btn","btn-sm","btn-info","mr-1",3,"click"],["tooltip","Edit",1,"btn","btn-sm","btn-warning","mr-1",3,"click"],[1,"fa","fa-edit"],["tooltip","Delete",1,"btn","btn-sm","btn-danger","mr-1",3,"click"],[1,"fa","fa-trash"],[1,"animated","fadeIn","mt-5"],[1,"profile-widget","shadow","p-4",2,"cursor","pointer",3,"click"],[1,"fa","fa-plus","fa-3x"],[1,"user-name","m-t-10","mb-0","text-ellipsis"],[1,"col-md-6","col-sm-6","col-12"],[3,"channel","outChannel","closed"],[3,"channel","closed","outChannel","deleted"]],template:function(t,e){1&t&&(s.ec(0,"div",0),s.Uc(1,st,12,4,"div",1),s.Uc(2,lt,2,1,"div",1),s.Uc(3,dt,2,1,"div",1),s.dc()),2&t&&(s.xc("ngSwitch",e.view),s.Kb(1),s.xc("ngSwitchCase",1),s.Kb(1),s.xc("ngSwitchCase",2),s.Kb(1),s.xc("ngSwitchCase",3))},directives:[c.o,c.p,c.m,c.l,d.a,d.d,d.b,u.a,R,H],styles:[".dropdown-menu[_ngcontent-%COMP%]{min-width:7rem;text-align:left;border:none}"]}),t}(),ft=n("5/c3"),ht=function(){function t(){}return t.\u0275mod=s.Wb({type:t}),t.\u0275inj=s.Vb({factory:function(e){return new(e||t)},imports:[[c.c,f.u,b.e,g.c,C.a,v.e,y.b]]}),t}(),pt=n("iNDR"),mt=function(){function t(){}return t.\u0275mod=s.Wb({type:t}),t.\u0275inj=s.Vb({factory:function(e){return new(e||t)},imports:[[c.c,C.a,pt.a,d.c,u.b.forRoot(),ht]]}),t}(),bt=[{path:"",data:{title:"Channels"},children:[{path:"",component:ut,data:{title:""}}]}],gt=function(){function t(){}return t.\u0275mod=s.Wb({type:t}),t.\u0275inj=s.Vb({factory:function(e){return new(e||t)},imports:[[c.c,ft.g.forChild(bt),d.c,ht,u.b.forRoot(),mt]]}),t}()},DdyX:function(t,e,n){"use strict";n.d(e,"a",(function(){return p})),n.d(e,"b",(function(){return d})),n.d(e,"c",(function(){return f}));var c=n("8AiQ"),i=n("1C3z");function a(t,e){if(1&t&&(i.pc(),i.cc(0),i.Zb(1,"animate",7),i.bc()),2&t){const t=i.qc();i.Kb(1),i.Lb("keyTimes",t.keyTimes)("values",t.animationValues[0])("dur",t.duration)}}function r(t,e){if(1&t&&(i.pc(),i.cc(0),i.Zb(1,"animate",7),i.bc()),2&t){const t=i.qc();i.Kb(1),i.Lb("keyTimes",t.keyTimes)("values",t.animationValues[1])("dur",t.duration)}}function o(t,e){if(1&t&&(i.pc(),i.cc(0),i.Zb(1,"animate",7),i.bc()),2&t){const t=i.qc();i.Kb(1),i.Lb("keyTimes",t.keyTimes)("values",t.animationValues[2])("dur",t.duration)}}const s=["*"];let l=(()=>{class t{constructor(){this.fixedId=Math.random().toString(36).substring(2),this.idClip=this.fixedId+"-diff",this.idGradient=this.fixedId+"-animated-diff",this.idAria=this.fixedId+"-aria",this.animate=!0,this.baseUrl="",this.speed=1.2,this.viewBox="0 0 0 0",this.gradientRatio=2,this.backgroundColor="#f5f6f7",this.backgroundOpacity=1,this.foregroundColor="#eee",this.foregroundOpacity=1,this.rtl=!1,this.interval=.25,this.style={},this.animationValues=[]}ngOnInit(){this.clipPath=`url(${this.baseUrl}#${this.idClip})`,this.fillStyle={fill:`url(${this.baseUrl}#${this.idGradient})`},this.style=this.rtl?Object.assign(Object.assign({},this.style),{transform:"scaleX(-1)"}):this.style,this.duration=this.speed+"s",this.keyTimes=`0; ${this.interval}; 1`,this.animationValues=[`${-this.gradientRatio}; ${-this.gradientRatio}; 1`,`${-this.gradientRatio/2}; ${-this.gradientRatio/2}; ${1+this.gradientRatio/2}`,"0; 0; "+(1+this.gradientRatio)]}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.Sb({type:t,selectors:[["content-loader"]],inputs:{animate:"animate",baseUrl:"baseUrl",speed:"speed",viewBox:"viewBox",gradientRatio:"gradientRatio",backgroundColor:"backgroundColor",backgroundOpacity:"backgroundOpacity",foregroundColor:"foregroundColor",foregroundOpacity:"foregroundOpacity",rtl:"rtl",interval:"interval",style:"style"},ngContentSelectors:s,decls:12,vars:15,consts:[[3,"ngStyle"],["role","presentation","x","0","y","0","width","100%","height","100%",3,"ngStyle"],["role","presentation"],["offset","0%"],[4,"ngIf"],["offset","50%"],["offset","100%"],["attributeName","offset","repeatCount","indefinite"]],template:function(t,e){1&t&&(i.wc(),i.pc(),i.ec(0,"svg",0),i.Zb(1,"rect",1),i.ec(2,"defs",2),i.ec(3,"clipPath"),i.vc(4),i.dc(),i.ec(5,"linearGradient"),i.ec(6,"stop",3),i.Uc(7,a,2,3,"ng-container",4),i.dc(),i.ec(8,"stop",5),i.Uc(9,r,2,3,"ng-container",4),i.dc(),i.ec(10,"stop",6),i.Uc(11,o,2,3,"ng-container",4),i.dc(),i.dc(),i.dc(),i.dc()),2&t&&(i.xc("ngStyle",e.style),i.Lb("viewBox",e.viewBox),i.Kb(1),i.xc("ngStyle",e.fillStyle),i.Lb("clip-path",e.clipPath),i.Kb(2),i.Lb("id",e.idClip),i.Kb(2),i.Lb("id",e.idGradient),i.Kb(1),i.Lb("stop-color",e.backgroundColor)("stop-opacity",e.backgroundOpacity),i.Kb(1),i.xc("ngIf",e.animate),i.Kb(1),i.Lb("stop-color",e.foregroundColor)("stop-opacity",e.foregroundOpacity),i.Kb(1),i.xc("ngIf",e.animate),i.Kb(1),i.Lb("stop-color",e.backgroundColor)("stop-opacity",e.backgroundOpacity),i.Kb(1),i.xc("ngIf",e.animate))},directives:[c.n,c.m],styles:["[_nghost-%COMP%] {\n        display: block;\n      }"],changeDetection:0}),t})(),d=(()=>{class t extends l{}return t.\u0275fac=function(e){return u(e||t)},t.\u0275cmp=i.Sb({type:t,selectors:[["facebook-content-loader"]],features:[i.Hb],decls:7,vars:0,consts:[["viewBox","0 0 476 124"],["x","48","y","8","width","88","height","6","rx","3"],["x","48","y","26","width","52","height","6","rx","3"],["x","0","y","56","width","410","height","6","rx","3"],["x","0","y","72","width","380","height","6","rx","3"],["x","0","y","88","width","178","height","6","rx","3"],["cx","20","cy","20","r","20"]],template:function(t,e){1&t&&(i.ec(0,"content-loader",0),i.pc(),i.Zb(1,"rect",1),i.Zb(2,"rect",2),i.Zb(3,"rect",3),i.Zb(4,"rect",4),i.Zb(5,"rect",5),i.Zb(6,"circle",6),i.dc())},directives:[l],encapsulation:2}),t})();const u=i.gc(d);let f=(()=>{class t extends l{}return t.\u0275fac=function(e){return h(e||t)},t.\u0275cmp=i.Sb({type:t,selectors:[["list-content-loader"]],features:[i.Hb],decls:7,vars:0,consts:[["viewBox","0 0 400 110"],["x","0","y","0","rx","3","ry","3","width","250","height","10"],["x","20","y","20","rx","3","ry","3","width","220","height","10"],["x","20","y","40","rx","3","ry","3","width","170","height","10"],["x","0","y","60","rx","3","ry","3","width","250","height","10"],["x","20","y","80","rx","3","ry","3","width","200","height","10"],["x","20","y","100","rx","3","ry","3","width","80","height","10"]],template:function(t,e){1&t&&(i.ec(0,"content-loader",0),i.pc(),i.Zb(1,"rect",1),i.Zb(2,"rect",2),i.Zb(3,"rect",3),i.Zb(4,"rect",4),i.Zb(5,"rect",5),i.Zb(6,"rect",6),i.dc())},directives:[l],encapsulation:2}),t})();const h=i.gc(f);let p=(()=>{class t{static forRoot(){return{ngModule:t}}}return t.\u0275mod=i.Wb({type:t}),t.\u0275inj=i.Vb({factory:function(e){return new(e||t)},imports:[[c.c]]}),t})()},L1Hv:function(t,e,n){"use strict";n.d(e,"e",(function(){return c})),n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return r})),n.d(e,"d",(function(){return o})),n.d(e,"f",(function(){return l}));var c=[{value:"lowest",name:"Lowest",class:"info"},{value:"low",name:"Low",class:"info"},{value:"moderate",name:"Moderate",class:"warning"},{value:"could-have",name:"Could Have",class:"warning"},{value:"must-have",name:"Must Have",class:"danger"},{value:"high",name:"High",class:"danger"}],i=function(){return function(){}}(),a=function(){return function(){}}(),r=function(){return function(){}}();function o(t){return t.getFullYear()+"-"+s(t.getMonth()+1,2)+"-"+s(t.getDate(),2)}function s(t,e,n){return void 0===e&&(e=2),void 0===n&&(n="0"),(String(n).repeat(e)+String(t)).slice(String(t).length)}function l(t,e,n){return function(t,e,n){return!(t.size>n)||"File must not be larger than "+(n/1e3).toFixed(0)+" kb"}(t,0,n)}},ZgNk:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var c=n("Jg5f"),i=n("Mumn"),a=n("1C3z"),r=n("t5c9"),o=function(){function t(t){this.http=t,this.apiChannels=i.a.mainUrl+i.a.apiUrl+"/channels",this.apiCalendar=i.a.mainUrl+i.a.apiUrl+"/calendar",this.apiTasks=i.a.mainUrl+i.a.apiUrl+"/tasks",this.apiComments=i.a.mainUrl+i.a.apiUrl+"/comments",this.apiStorage=i.a.mainUrl+i.a.storageApi}return t.prototype.getMyChannels=function(){return this.http.get(this.apiChannels+"/my").pipe(Object(c.a)((function(t){return t})))},t.prototype.getChannels=function(){return this.http.get(this.apiChannels).pipe(Object(c.a)((function(t){return t})))},t.prototype.saveChannel=function(t){return this.http.post(this.apiChannels,t).pipe(Object(c.a)((function(t){return t})))},t.prototype.editChannel=function(t){return this.http.put(this.apiChannels,t).pipe(Object(c.a)((function(t){return t})))},t.prototype.deleteChannel=function(t){return this.http.delete(this.apiChannels+"/remove/"+t).pipe(Object(c.a)((function(t){return t})))},t.prototype.getTaskByChannel=function(t){return this.http.get(this.apiTasks+"/cid/"+t).pipe(Object(c.a)((function(t){return t})))},t.prototype.saveTask=function(t){return this.http.post(this.apiTasks,t).pipe(Object(c.a)((function(t){return t})))},t.prototype.saveTaskSort=function(t){return this.http.post(this.apiTasks+"/reorder",t).pipe(Object(c.a)((function(t){return t})))},t.prototype.updateTask=function(t){return this.http.put(this.apiTasks,t).pipe(Object(c.a)((function(t){return t})))},t.prototype.deleteTask=function(t){return this.http.delete(this.apiTasks+"/remove/"+t).pipe(Object(c.a)((function(t){return t})))},t.prototype.saveComments=function(t){return this.http.post(this.apiComments,t).pipe(Object(c.a)((function(t){return t})))},t.prototype.deleteComment=function(t){return this.http.delete(this.apiComments+"/remove/"+t).pipe(Object(c.a)((function(t){return t})))},t.prototype.getCalendar=function(t){return this.http.get(this.apiCalendar+"/cid/"+t).pipe(Object(c.a)((function(t){return t})))},t.prototype.saveCalendar=function(t){return this.http.post(this.apiCalendar,t).pipe(Object(c.a)((function(t){return t})))},t.prototype.editCalendar=function(t){return this.http.put(this.apiCalendar,t).pipe(Object(c.a)((function(t){return t})))},t.prototype.deleteCalendar=function(t){return this.http.delete(this.apiCalendar+"/remove/"+t).pipe(Object(c.a)((function(t){return t})))},t.prototype.saveFile=function(t){return this.http.post(this.apiStorage,t).pipe(Object(c.a)((function(t){return t})))},t.\u0275fac=function(e){return new(e||t)(a.ic(r.b))},t.\u0275prov=a.Ub({token:t,factory:t.\u0275fac,providedIn:"root"}),t}()}}]);