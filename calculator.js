/* ELUCENIA standalone integration. Source package metadata and rights: README.md. */
(function(root){'use strict';
function freeze(value){if(value&&typeof value==='object'){for(const item of Object.values(value))freeze(item);Object.freeze(value);}return value;}
const TOOL=freeze({"id":"bed-e-eqd2","title":"BED e EQD2","fields":[["dose","Dose por fração (d)","num",{"min":0.5,"max":30,"step":0.01,"unit":"Gy","ph":"2"}],["n","Número de frações (n)","num",{"min":1,"max":60,"step":1,"unit":"frações","ph":"30"}],["ab","Razão α/β do tecido","sel",{"opts":{"2":"2 Gy · medula espinhal, SNC","3":"3 Gy · tecidos de reação tardia (valor usual)","10":"10 Gy · tumores em geral e tecidos de reação aguda","1.5":"1,5 Gy · câncer de próstata"}}]],"config":null,"reviewStatus":"restricted","clinicalValidation":"not-performed"});
function calculate(){return {error:'Cálculo suspenso: consulte a revisão e a fonte oficial.',code:'REVIEW_REQUIRED',id:TOOL.id};}
const api=Object.freeze({metadata:TOOL,calculate});if(typeof module!=='undefined'&&module.exports)module.exports=api;else root.EluceniaTool=api;
})(typeof globalThis!=='undefined'?globalThis:this);
